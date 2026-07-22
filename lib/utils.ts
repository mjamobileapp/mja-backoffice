import type { Updater } from '@tanstack/vue-table'
import type { ClassValue } from 'clsx'
import type { Ref } from 'vue'
import { clsx } from 'clsx'
import { format, isValid } from 'date-fns'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function valueUpdater<T extends Updater<any>>(updaterOrValue: T, ref: Ref) {
  ref.value = typeof updaterOrValue === 'function'
    ? updaterOrValue(ref.value)
    : updaterOrValue
}

export function formatDate(dateString: any, pattern: string = 'dd-MM-yyyy'): string {
  if (!dateString)
    return '-'
  try {
    const date = new Date(dateString)
    return isValid(date) ? format(date, pattern) : '-'
  }
  catch {
    return '-'
  }
}
