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
import { Trash2Icon, TrashIcon } from 'lucide-vue-next'
import { toast } from '~/components/ui/toast'

const props = defineProps(['item'])
const emit = defineEmits(['dataDeleted'])

const config = useRuntimeConfig()
const baseUrl = config.public.apiBase

// get token====================
const accessToken = useCookie('accessToken')
const token = accessToken.value.token

const deleteItem = async () => {
  try {
    const response = await fetch(`${baseUrl}/sirkulerRups/${props.item.id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (response.ok) {
      emit('dataDeleted', props.item.id)
      toast({
        title: 'Success',
        description: 'Data berhasil dihapus.',
      })
    } else {
      console.error('Gagal menghapus data')
    }
  } catch (error) {
    console.error('Error:', error)
  }
}
</script>

<template>
  <AlertDialog>
    <AlertDialogTrigger>
      <Button>
        <TrashIcon class="w-4 h-4 mr-2" />
        Delete Data
      </Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Apakah anda yakin menghapus data ini?</AlertDialogTitle>
        <AlertDialogDescription>
          data yg dihapus tidak bisa dikembalikan kembali, jadi pastikan anda yakin untuk menghapus
          data ini.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction @click="deleteItem">Delete</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>
