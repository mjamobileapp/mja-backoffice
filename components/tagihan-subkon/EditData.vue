<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { FieldArray, useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { Loader2, Pencil } from 'lucide-vue-next'
import { toast } from '@/components/ui/toast'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

const props = defineProps<{
  idProgress: number | string | null
  disabled: boolean
}>()

const emit = defineEmits(['dataUpdated'])

const config = useRuntimeConfig()
const baseUrl = config.public.apiBase
const currentUser = useCookie('currentUser')
const username = computed(() => currentUser.value?.username || 'no-user')
const accessToken = useCookie('accessToken')
const token = accessToken.value?.token

const isDialogOpen = ref(false)
const isSubmitting = ref(false)
const isLoadingData = ref(false)
const detailList = ref<any[]>([])
const dateMulai = ref<any>(null)

// 🔥 Schema Form (Identik dengan Add)
const progressSchema = toTypedSchema(
  z.object({
    idSubkon: z.number(),
    keterangan: z.string(),
    namaSubkon: z.string(),
    namaPekerjaan: z.string(),
    tglPenagihan: z.date({
      required_error: 'Please select a valid date.',
      invalid_type_error: 'Please select a valid date.',
    }),
    items: z.array(
      z.object({
        idDetail: z.number(),
        volumeProgress: z.union([z.number(), z.string()]).optional(),
        bobotProgress: z.union([z.number(), z.string()]).optional(),
      })
    ),
  })
)

const { handleSubmit, setFieldValue, values, resetForm, setFieldError } = useForm({
  validationSchema: progressSchema,
})

/* =========================
   FETCH DETAIL DATA
========================= */
const fetchProgressDetail = async () => {
  if (!props.idProgress) return
  isLoadingData.value = true
  try {
    const res: any = await $fetch(`${baseUrl}/progressSubkon/${props.idProgress}/detail`, {
      headers: { Authorization: `Bearer ${token}` },
    })

    const data = res.data

    // Inisialisasi Field Utama
    setFieldValue('idSubkon', data.idSubkon)
    setFieldValue('keterangan', data.keterangan)
    setFieldValue('namaSubkon', data.namaSubkon)
    setFieldValue('namaPekerjaan', data.namaPekerjaan)

    const tgl = new Date(data.tglPenagihan)
    dateMulai.value = tgl
    setFieldValue('tglPenagihan', tgl)

    // Simpan list detail untuk tabel display
    // volumeSisa dihitung ulang (sisa saat ini + volume yang sudah diinput di baris ini)
    detailList.value = data.items.map((item: any) => ({
      ...item,
      volumeSisaOriginal: Number(item.volumeSisa) || 0,
    }))

    // Inisialisasi Field Array
    setFieldValue(
      'items',
      data.items.map((item: any) => ({
        idDetail: item.idDetail,
        volumeProgress: item.volumeProgress,
        bobotProgress: item.bobotProgress,
      }))
    )
  } catch (error) {
    toast({ title: 'Error', description: 'Gagal memuat detail', variant: 'destructive' })
  } finally {
    isLoadingData.value = false
  }
}

/* =========================
   LOGIKA HITUNG (Identik dengan Add)
========================= */
function hitungBobotProgress(idx: number, val: any) {
  const volumeProgress = Number(val) || 0
  const detail = detailList.value[idx]
  if (!detail) return

  const volumeKontrak = Number(detail.volumeKontrak || 0)
  const volumeMax = Number(detail.volumeSisa || 0)
  const bobotItem = Number(detail.bobot || 0)

  if (volumeProgress > volumeMax) {
    setFieldError(
      `items[${idx}].volumeProgress`,
      `Maksimal sisa ${volumeMax.toLocaleString('id-ID')}`
    )
    setFieldValue(`items[${idx}].volumeProgress`, volumeMax)
    const bobotProgress = volumeKontrak > 0 ? (volumeMax / volumeKontrak) * bobotItem : 0
    setFieldValue(`items[${idx}].bobotProgress`, Number(bobotProgress.toFixed(4)))
    return
  }

  setFieldError(`items[${idx}].volumeProgress`, undefined)
  const bobotProgress = volumeKontrak > 0 ? (volumeProgress / volumeKontrak) * bobotItem : 0
  setFieldValue(`items[${idx}].bobotProgress`, Number(bobotProgress.toFixed(4)))
}

// ===================
// Perhitungan Total
// ===================
const totalKontrak = computed(() =>
  detailList.value.reduce((sum, row) => sum + Number(row.total || 0), 0)
)
const totalBobotProgress = computed(
  () =>
    values.items?.reduce((sum: number, item: any) => sum + Number(item.bobotProgress || 0), 0) || 0
)
const total = computed(() => (totalKontrak.value * totalBobotProgress.value) / 100)

const hasAnyProgress = computed(() => values.items?.some((i: any) => Number(i.volumeProgress) > 0))

const onSubmit = handleSubmit(async form => {
  isSubmitting.value = true
  try {
    const payload = {
      ...form,
      totalProgress: total.value,
      updatedBy: username.value,
    }

    // console.log(JSON.stringify(payload))
    const response = await fetch(`${baseUrl}/progressSubkon/${props.idProgress}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(payload),
    })

    if (response.ok) {
      toast({ title: 'Success', description: 'Progress berhasil diperbarui' })
      emit('dataUpdated')
      isDialogOpen.value = false
    }
  } finally {
    isSubmitting.value = false
  }
})

function formatRupiah(value: number) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(value || 0)
}

console.log(props.disabled)
watch(isDialogOpen, val => {
  if (val) fetchProgressDetail()
  else resetForm()
})
</script>

<template>
  <Dialog :open="isDialogOpen" @update:open="isDialogOpen = $event">
    <DialogTrigger as-child>
      <!-- <TooltipProvider>
        <Tooltip>
          <TooltipTrigger as-child>
            <Button size="sm"> <Pencil class="w-4 h-4" /> </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Edit</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider> -->
      <Button size="sm" :disabled="props.disabled"> <Pencil class="w-4 h-4" /> </Button>
    </DialogTrigger>

    <DialogContent class="sm:max-w-[1200px] [&>button]:hidden">
      <form class="space-y-8" @submit.prevent="onSubmit">
        <DialogHeader>
          <DialogTitle>Edit Progress Pekerjaan Subkon</DialogTitle>
        </DialogHeader>

        <div v-if="isLoadingData" class="flex justify-center p-20">
          <Loader2 class="w-10 h-10 animate-spin text-primary" />
        </div>

        <div v-else class="max-h-[65vh] overflow-y-auto pr-4 space-y-6">
          <FormField name="namaSubkon" v-slot="{ componentField }">
            <FormItem>
              <FormLabel>Kontrak Subkon</FormLabel>
              <FormControl>
                <Input v-bind="componentField" disabled />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ field, value }" name="tglPenagihan">
            <FormItem class="flex flex-col">
              <FormLabel>Tanggal</FormLabel>
              <Datepicker
                v-model="dateMulai"
                :enable-time-picker="false"
                :format="'dd-MM-yyyy'"
                @update:model-value="
                  val => {
                    dateMulai = val
                    field.onChange(val) // <--- ini penting
                  }
                "
              />
              <FormMessage />
            </FormItem>
            <input type="hidden" v-bind="field" />
          </FormField>

          <FormField v-slot="{ componentField }" name="keterangan">
            <FormItem>
              <FormLabel>Keterangan</FormLabel>
              <FormControl>
                <Textarea v-bind="componentField"></Textarea>
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <FieldArray name="items" v-slot="{ fields }">
            <div v-if="fields.length > 0" class="border rounded-xl overflow-hidden shadow-sm">
              <table class="w-full text-sm table-auto">
                <thead class="bg-gray-50 border-b">
                  <tr>
                    <th class="p-3 text-left font-semibold w-[5%]">No</th>
                    <th class="p-3 text-left font-semibold w-[25%]">Item Pekerjaan</th>
                    <th class="p-3 text-left font-semibold w-[10%]">Satuan</th>
                    <th class="p-3 text-left font-semibold w-[10%]">Vol. Kontrak</th>
                    <th class="p-3 text-left font-semibold w-[10%]">Vol. Sisa (Max)</th>
                    <th class="p-3 text-center font-semibold w-[8%]">Vol. Progress</th>
                    <th class="p-3 text-center font-semibold w-[7%]">Bobot Progress %</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(field, idx) in fields"
                    :key="field.key"
                    class="border-b hover:bg-gray-50 transition-colors"
                  >
                    <td class="p-3 text-center">{{ idx + 1 }}</td>
                    <td class="p-3 font-medium">{{ detailList[idx]?.item }}</td>
                    <td class="p-3">{{ detailList[idx]?.satuan }}</td>
                    <td class="p-3">
                      {{ detailList[idx]?.volumeKontrak?.toLocaleString('id-ID') }}
                    </td>
                    <td class="p-3 text-orange-600 font-medium">
                      {{ detailList[idx]?.volumeSisaOriginal?.toLocaleString('id-ID') }}
                    </td>
                    <td class="p-1">
                      <FormField :name="`items[${idx}].volumeProgress`" v-slot="{ componentField }">
                        <FormItem class="space-y-0">
                          <FormControl>
                            <Input
                              type="number"
                              v-bind="componentField"
                              @input="e => hitungBobotProgress(idx, e.target.value)"
                            />
                          </FormControl>
                          <FormMessage class="absolute -bottom-5 text-xs" />
                        </FormItem>
                      </FormField>
                    </td>
                    <td class="p-1">
                      <FormField :name="`items[${idx}].bobotProgress`" v-slot="{ componentField }">
                        <FormItem class="space-y-0">
                          <FormControl>
                            <Input
                              type="number"
                              disabled
                              v-bind="componentField"
                              class="text-right h-8 bg-gray-50"
                            />
                          </FormControl>
                        </FormItem>
                      </FormField>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="flex flex-col items-end p-4 bg-gray-50 border-t text-sm">
                <div class="flex justify-between w-64 border-t pt-2 mt-1">
                  <span>Total</span>
                  <span class="font-bold text-green-600">{{ formatRupiah(total) }}</span>
                </div>
              </div>
            </div>
          </FieldArray>
        </div>

        <DialogFooter>
          <DialogClose as-child>
            <Button type="button" variant="secondary" @click="isDialogOpen = false">Tutup</Button>
          </DialogClose>
          <span v-if="isSubmitting">
            <Button disabled> <Loader2 class="w-4 h-4 mr-2 animate-spin" /> Menyimpan... </Button>
          </span>
          <Button type="submit" v-else :disabled="!hasAnyProgress">Simpan Perubahan</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
</template>
