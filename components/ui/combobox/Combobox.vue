<script setup lang="ts">
import { computed, ref, toRef, watch } from 'vue'
import {
  ComboboxRoot,
  ComboboxInput,
  ComboboxTrigger,
  ComboboxContent,
  ComboboxGroup,
  ComboboxEmpty,
  ComboboxItem,
} from 'radix-vue'

import { Check, ChevronDown } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

const props = withDefaults(
  defineProps<{
    modelValue?: string
    defaultValue?: string
    options?: { label: string; value: string }[]
    placeholder?: string
    disabled?: boolean
  }>(),
  {
    modelValue: '',
    options: () => [],
    placeholder: 'Select...',
  }
)

const emit = defineEmits(['update:modelValue'])

const selectedValue = ref(props.modelValue || props.defaultValue)
const open = ref(false)

watch(
  () => props.modelValue,
  value => {
    selectedValue.value = value
  }
)

const filteredOptions = computed(() =>
  props.options.filter(option =>
    option.label.toLowerCase().includes(selectedValue.value?.toLowerCase() || '')
  )
)

function handleSelect(option: { label: string; value: string }) {
  emit('update:modelValue', option.value)
  open.value = false
}
</script>

<template>
  <ComboboxRoot
    v-model="selectedValue"
    :disabled="disabled"
    :open="open"
    @update:open="open = $event"
    @update:model-value="val => $emit('update:modelValue', val)"
    :class="cn('w-[200px] rounded-md border border-input bg-background', $attrs.class ?? '')"
  >
    <div class="relative flex items-center">
      <ComboboxInput
        :placeholder="placeholder"
        class="w-full h-10 px-3 py-2 text-sm bg-transparent rounded-md placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
      />
      <ComboboxTrigger
        class="absolute inset-y-0 right-0 flex items-center pr-2"
        :class="cn('h-full w-8', 'opacity-50 hover:opacity-100')"
      >
        <ChevronDown class="w-4 h-4" />
      </ComboboxTrigger>
    </div>

    <ComboboxContent
      class="max-h-[300px] overflow-auto z-50 rounded-md border bg-popover text-popover-foreground shadow-md transition-all duration-100"
    >
      <ComboboxGroup>
        <ComboboxEmpty class="py-2 text-sm text-center"> No item found. </ComboboxEmpty>

        <ComboboxItem
          v-for="option in options"
          :key="option.value"
          :value="option.value"
          class="relative flex items-center px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50 cursor-default select-none"
        >
          <span
            :class="cn('h-4 w-4', option.value === selectedValue ? 'opacity-100' : 'opacity-0')"
          >
            <Check />
          </span>
          {{ option.label }}
        </ComboboxItem>
      </ComboboxGroup>
    </ComboboxContent>
  </ComboboxRoot>
</template>
