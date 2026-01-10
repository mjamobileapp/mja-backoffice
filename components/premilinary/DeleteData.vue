<script setup lang="ts">
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { TrashIcon } from 'lucide-vue-next'
import { toast } from '~/components/ui/toast'

/* ===============================
   PROPS & EMIT
================================ */
const props = defineProps<{
  item: {
    id: number
    namaPekerjaan?: string
  }
}>()

const emit = defineEmits(['dataDeleted'])

/* ===============================
   CONFIG
================================ */
const config = useRuntimeConfig()
const baseUrl = config.public.apiBase

/* ===============================
   AUTH
================================ */
const accessToken = useCookie('accessToken')
const token = accessToken.value?.token

/* ===============================
   DELETE HANDLER
================================ */
async function deleteItem() {
  try {
    const response = await fetch(`${baseUrl}/premilinary/${props.item.id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData?.message || 'Gagal menghapus data')
    }

    emit('dataDeleted', props.item.id)
    toast({
      title: 'Success',
      description: 'Data premilinary berhasil dihapus.',
    })
  } catch (error: any) {
    toast({
      title: 'Gagal',
      description: error.message || 'Terjadi kesalahan saat menghapus data.',
      variant: 'destructive',
    })
    console.error('Delete premilinary error:', error)
  }
}
</script>

<template>
  <AlertDialog>
    <AlertDialogTrigger as-child>
      <Button size="sm" variant="destructive">
        <TrashIcon class="w-4 h-4" />
      </Button>
    </AlertDialogTrigger>

    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>
          Apakah Anda yakin ingin menghapus data premilinary ini?
        </AlertDialogTitle>
        <AlertDialogDescription>
          <span v-if="props.item.namaPekerjaan">
            Proyek: <b>{{ props.item.namaPekerjaan }}</b>
          </span>
          <br />
          Data yang dihapus tidak dapat dikembalikan.
        </AlertDialogDescription>
      </AlertDialogHeader>

      <AlertDialogFooter>
        <AlertDialogCancel>Batal</AlertDialogCancel>
        <AlertDialogAction @click="deleteItem"> Hapus </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>
