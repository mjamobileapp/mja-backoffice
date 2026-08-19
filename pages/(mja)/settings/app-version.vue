<script setup lang="ts">
import { Apple, CloudUpload, Info, Loader2, RotateCcw, Smartphone, TriangleAlert } from 'lucide-vue-next'
import { toast } from '~/components/ui/toast'

interface PlatformVersion {
  latestVersion: string
  minRequiredVersion: string
  storeUrl: string
  releaseNotes: string
}

type Platform = 'android' | 'ios'

function emptyPlatform(): PlatformVersion {
  return {
    latestVersion: '',
    minRequiredVersion: '',
    storeUrl: '',
    releaseNotes: '',
  }
}

const versions = reactive<Record<Platform, PlatformVersion>>({
  android: emptyPlatform(),
  ios: emptyPlatform(),
})
const initialVersions = reactive<Record<Platform, PlatformVersion>>({
  android: emptyPlatform(),
  ios: emptyPlatform(),
})

const errors = reactive<Record<string, string>>({})
const isLoading = ref(true)
const isSaving = ref(false)

function isValidVersion(version: string) {
  return /^\d+\.\d+\.\d+$/.test(version.trim())
}

function compareVersions(left: string, right: string) {
  const leftParts = left.split('.').map(Number)
  const rightParts = right.split('.').map(Number)

  for (let index = 0; index < 3; index++) {
    if (leftParts[index] !== rightParts[index])
      return leftParts[index] - rightParts[index]
  }

  return 0
}

function clearError(key: string) {
  delete errors[key]
}

function copyVersions(target: Record<Platform, PlatformVersion>, source: Record<Platform, PlatformVersion>) {
  for (const platform of ['android', 'ios'] as Platform[]) {
    Object.assign(target[platform], source[platform])
  }
}

function resetForm() {
  copyVersions(versions, initialVersions)
  Object.keys(errors).forEach(key => delete errors[key])
}

function validate() {
  Object.keys(errors).forEach(key => delete errors[key])

  for (const platform of ['android', 'ios'] as Platform[]) {
    const data = versions[platform]
    const label = platform === 'android' ? 'Android' : 'iOS'

    if (!isValidVersion(data.latestVersion))
      errors[`${platform}.latestVersion`] = `${label}: gunakan format versi x.y.z`
    if (!isValidVersion(data.minRequiredVersion))
      errors[`${platform}.minRequiredVersion`] = `${label}: gunakan format versi x.y.z`
    if (isValidVersion(data.latestVersion) && isValidVersion(data.minRequiredVersion) && compareVersions(data.minRequiredVersion, data.latestVersion) > 0)
      errors[`${platform}.minRequiredVersion`] = `${label}: batas minimum tidak boleh lebih tinggi dari versi terbaru`
    if (!data.storeUrl.trim())
      errors[`${platform}.storeUrl`] = `${label}: URL store wajib diisi`
    else if (!/^https?:\/\//.test(data.storeUrl.trim()))
      errors[`${platform}.storeUrl`] = `${label}: URL store tidak valid`
    if (!data.releaseNotes.trim())
      errors[`${platform}.releaseNotes`] = `${label}: catatan rilis wajib diisi`
  }

  return Object.keys(errors).length === 0
}

async function fetchVersions() {
  isLoading.value = true

  try {
    // Endpoint GET memang tidak membutuhkan token.
    const response = await $fetch<{ success: boolean, data: Partial<Record<Platform, PlatformVersion>> }>(
      `${getApiBaseUrl()}/api/backoffice/appversion`,
    )

    if (!response.success)
      throw new Error('Gagal mengambil konfigurasi versi')

    for (const platform of ['android', 'ios'] as Platform[]) {
      Object.assign(versions[platform], emptyPlatform(), response.data?.[platform] || {})
    }
    copyVersions(initialVersions, versions)
  }
  catch (error) {
    console.error('Gagal mengambil versi aplikasi:', error)
    toast({ title: 'Gagal memuat data', description: 'Konfigurasi versi aplikasi tidak dapat diambil.', variant: 'destructive' })
  }
  finally {
    isLoading.value = false
  }
}

async function saveVersions() {
  if (!validate()) {
    toast({ title: 'Data belum valid', description: 'Periksa kembali isian versi aplikasi.', variant: 'destructive' })
    return
  }

  isSaving.value = true

  try {
    await apiFetch('/api/backoffice/appversion', {
      method: 'PUT',
      body: {
        versions: (['android', 'ios'] as Platform[]).map(platform => ({
          platform,
          ...versions[platform],
        })),
      },
    })
    copyVersions(initialVersions, versions)
    toast({ title: 'Konfigurasi disimpan', description: 'Versi aplikasi berhasil diperbarui.' })
  }
  catch (error) {
    console.error('Gagal menyimpan versi aplikasi:', error)
    toast({ title: 'Gagal menyimpan', description: 'Konfigurasi versi aplikasi tidak dapat disimpan.', variant: 'destructive' })
  }
  finally {
    isSaving.value = false
  }
}

onMounted(fetchVersions)
</script>

<template>
  <div class="mx-auto h-[calc(100svh-6.5rem)] max-w-6xl w-full overflow-hidden space-y-2">
    <div class="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
      <div>
        <h1 class="flex items-center gap-2 text-2xl text-slate-900 font-extrabold">
          <Smartphone class="h-6 w-6 text-blue-600" />
          Konfigurasi Versi Aplikasi Mobile
        </h1>
      </div>
      <div class="w-full flex flex-col gap-4 sm:w-auto sm:flex-row">
        <Button variant="outline" class="w-full gap-2 sm:w-auto" :disabled="isLoading || isSaving" @click="resetForm">
          <RotateCcw class="h-4 w-4" />
          Reset Form
        </Button>
        <Button class="w-full gap-2 bg-blue-600 shadow-blue-600/30 sm:w-auto hover:bg-blue-700" :disabled="isLoading || isSaving" @click="saveVersions">
          <Loader2 v-if="isSaving" class="h-4 w-4 animate-spin" />
          <CloudUpload v-else class="h-4 w-4" />
          {{ isSaving ? 'Menyimpan...' : 'Simpan Konfigurasi' }}
        </Button>
      </div>
    </div>

    <div class="flex items-start gap-4 border border-blue-200 rounded-xl bg-blue-50 p-2.5 text-xs text-blue-700 shadow-sm">
      <div class="h-7 w-7 flex shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
        <Info class="h-4 w-4" />
      </div>
      <div>
        <h2 class="mb-0.5 text-blue-800 font-bold">
          Mekanisme Update
        </h2>
        <ul class="space-y-0.5">
          <li><strong class="text-blue-900">Soft:</strong> Jika versi aplikasi mobile saat ini <strong class="text-blue-700">lebih rendah dari Versi Terbaru</strong>, namun masih <strong class="text-blue-700">di atas Batas Minimum</strong>.</li>
          <li><strong class="text-blue-900">Force:</strong> Jika versi aplikasi mobile saat ini <strong class="text-blue-700">lebih rendah dari Batas Minimum.</strong></li>
        </ul>
      </div>
    </div>

    <div v-if="isLoading" class="min-h-40 flex items-center justify-center border rounded-xl bg-white">
      <Loader2 class="h-6 w-6 animate-spin text-blue-600" />
    </div>

    <div v-else class="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <Card v-for="platform in (['android', 'ios'] as Platform[])" :key="platform" class="overflow-hidden border-slate-200 rounded-xl shadow-sm">
        <CardHeader class="flex flex-row items-center justify-between border-b border-slate-100 bg-slate-50 p-3">
          <CardTitle class="flex items-center gap-2 text-slate-800">
            <Smartphone v-if="platform === 'android'" class="h-5 w-5 text-emerald-500" />
            <Apple v-else class="h-5 w-5 text-slate-800" />
            {{ platform === 'android' ? 'Android (Google Play)' : 'iOS (App Store)' }}
          </CardTitle>
          <span class="rounded bg-emerald-100 px-2 py-1 text-xs text-emerald-700 font-bold">Live</span>
        </CardHeader>

        <CardContent class="p-4 space-y-2">
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div class="space-y-1.5">
              <Label class="h-5 flex items-center text-xs text-slate-700 font-bold tracking-wide uppercase">Versi Terbaru</Label>
              <Input v-model="versions[platform].latestVersion" class="bg-slate-50 font-mono focus:bg-white" :class="errors[`${platform}.latestVersion`] && 'border-red-500'" placeholder="1.5.0" @update:model-value="clearError(`${platform}.latestVersion`)" />
              <p v-if="errors[`${platform}.latestVersion`]" class="text-xs text-red-600">
                {{ errors[`${platform}.latestVersion`] }}
              </p>
            </div>
            <div class="space-y-1.5">
              <Label class="h-5 flex items-center gap-1 text-xs text-rose-600 font-bold tracking-wide uppercase">Batas Minimum <TriangleAlert class="h-3.5 w-3.5" /></Label>
              <Input v-model="versions[platform].minRequiredVersion" class="bg-slate-50 font-mono focus:bg-white" :class="errors[`${platform}.minRequiredVersion`] && 'border-red-500'" placeholder="1.4.2" @update:model-value="clearError(`${platform}.minRequiredVersion`)" />
              <p v-if="errors[`${platform}.minRequiredVersion`]" class="text-xs text-red-600">
                {{ errors[`${platform}.minRequiredVersion`] }}
              </p>
            </div>
          </div>

          <div class="space-y-1.5">
            <Label class="text-xs text-slate-700 font-bold tracking-wide uppercase">URL {{ platform === 'android' ? 'Play Store' : 'App Store' }}</Label>
            <Input v-model="versions[platform].storeUrl" type="url" class="bg-slate-50 text-slate-500 focus:bg-white" placeholder="https://..." :class="errors[`${platform}.storeUrl`] && 'border-red-500'" @update:model-value="clearError(`${platform}.storeUrl`)" />
            <p v-if="errors[`${platform}.storeUrl`]" class="text-xs text-red-600">
              {{ errors[`${platform}.storeUrl`] }}
            </p>
          </div>

          <div class="space-y-1.5">
            <Label class="text-xs text-slate-700 font-bold tracking-wide uppercase">Catatan Rilis (Release Notes)</Label>
            <Textarea v-model="versions[platform].releaseNotes" rows="3" class="min-h-24 resize-none bg-slate-50 text-slate-600 focus:bg-white" placeholder="Tulis catatan rilis..." :class="errors[`${platform}.releaseNotes`] && 'border-red-500'" @update:model-value="clearError(`${platform}.releaseNotes`)" />
            <p v-if="errors[`${platform}.releaseNotes`]" class="text-xs text-red-600">
              {{ errors[`${platform}.releaseNotes`] }}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>
