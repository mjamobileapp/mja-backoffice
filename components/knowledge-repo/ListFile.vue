<script setup lang="ts">
import { Button } from '@/components/ui/button'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { toTypedSchema } from '@vee-validate/zod'
import { DownloadCloud } from 'lucide-vue-next'
import { FieldArray, useForm } from 'vee-validate'
import { h, ref } from 'vue'
import * as z from 'zod'
import { toast } from '~/components/ui/toast'
const props = defineProps(['item'])

const data = ref<
  {
    id: string
    judulDokumen: string
    createdBy: string
  }[]
>([])

const searchQuery = ref('')
const currentPage = ref(1)
const itemsPerPage = ref(10)

const currentUser = useCookie('currentUser') // diasumsikan cookie bernilai object stringified
const email = computed(() => currentUser.value?.email || 'no-email@example.com')

const filteredData = computed(() => {
  return data.value.filter(item =>
    item.judulDokumen.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const config = useRuntimeConfig()
const baseUrl = config.public.apiBase

// get token=====
const accessToken = useCookie('accessToken')
const token = accessToken.value.token

async function fetchData() {
  try {
    // console.log(props.item.id)
    const response = await fetch(
      `${baseUrl}/uploadFileRepo/${props.item.id}?username=${email.value}&t=${Date.now()}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )

    if (response.ok) {
      const fetchedData = await response.json()
      // data.value = fetchedData

      data.value.splice(0, data.value.length, ...fetchedData)
    } else {
      console.error('Gagal mengambil data')
    }
  } catch (error) {
    console.error('Error:', error)
  }
}

const totalPages = computed(() => {
  return Math.ceil(filteredData.value.length / itemsPerPage.value)
})

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  return filteredData.value.slice(start, start + itemsPerPage.value)
})

function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

const isDialogOpen = ref(false)

async function openDialog() {
  isDialogOpen.value = true
  await fetchData()
}

function closeDialog() {
  isDialogOpen.value = false
}

const isDownloadingId = ref<string | null>(null)

async function handleDownload(item: any) {
  isDownloadingId.value = item.id
  try {
    const response: any = await $fetch(`${baseUrl}/downloadFileRepo/${item.id}`, {
      responseType: 'blob',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    const url = window.URL.createObjectURL(response)
    const link = document.createElement('a')
    link.href = url
    link.download = item.judulDokumen
    link.click()
    window.URL.revokeObjectURL(url)
  } catch (error) {
    console.error('Unduhan gagal:', error)
  } finally {
    isDownloadingId.value = null
  }
}

async function deleteFile(fileId: string, fileName: string) {
  if (confirm(`Apakah Anda yakin ingin menghapus file "${fileName}"?`)) {
    try {
      const response = await $fetch(`${baseUrl}/deleteFileRepo/${fileId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      toast({
        title: 'Success',
        description: `File "${fileName}" berhasil dihapus.`,
      })

      await fetchData() // Refresh data
      currentPage.value = 1
    } catch (error: any) {
      console.error('Error menghapus file:', error)
      toast({
        title: 'Error',
        description: error?.data?.message || 'Terjadi kesalahan saat mencoba menghapus file.',
        variant: 'destructive',
      })
    }
  }
}
</script>

<template>
  <Dialog :open="isDialogOpen" @openChange="isDialogOpen = $event">
    <DialogTrigger as-child>
      <Button @click="openDialog"><DownloadCloud class="w-4 h-4 mr-2" /> Download File</Button>
    </DialogTrigger>
    <DialogContent :key="data.length" class="sm:max-w-[800px] [&>button]:hidden">
      <div class="max-h-[60vh] overflow-y-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead class="w-[100px]"> No </TableHead>
              <TableHead>Nama File</TableHead>
              <TableHead>Created By</TableHead>

              <TableHead class="text-center w-[300px]"> Action </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="(item, index) in paginatedData" :key="item.id">
              <TableCell>
                {{ (currentPage - 1) * itemsPerPage + index + 1 }}
              </TableCell>
              <TableCell class="font-medium">
                {{ item.judulDokumen }}
              </TableCell>
              <TableCell class="font-medium">
                {{ item.createdBy }}
              </TableCell>

              <TableCell class="text-center flex gap-2">
                <Button @click="handleDownload(item)" :disabled="isDownloadingId === item.id">
                  <DownloadCloud v-if="isDownloadingId !== item.id" class="w-4 h-4 mr-2" />
                  <Loader2 v-else class="w-4 h-4 mr-2 animate-spin" />
                  {{ isDownloadingId === item.id ? 'Downloading..' : 'Download File' }}
                </Button>

                <Button
                  v-if="item.createdBy?.toLowerCase() === email?.toLowerCase()"
                  @click="deleteFile(item.id, item.judulDokumen)"
                  >Hapus</Button
                >
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div class="mt-4 flex float-right">
        <Button class="mr-2" @click="prevPage" :disabled="currentPage === 1">Previous </Button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <Button class="ml-2" @click="nextPage" :disabled="currentPage === totalPages">Next</Button>
      </div>
      <DialogFooter>
        <DialogClose as-child>
          <Button type="button" variant="secondary" @click="closeDialog"> Close </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
