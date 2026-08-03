<script setup lang="ts">
import { Check, ChevronDown } from 'lucide-vue-next'
import {
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxRoot,
  ComboboxTrigger,
} from 'radix-vue'

import { computed, ref, toRef, watch } from 'vue'
import { cn } from '@/lib/utils'

const props = withDefaults(
  defineProps<{
    modelValue?: string
    defaultValue?: string
    options?: { label: string, value: string }[]
    placeholder?: string
    disabled?: boolean
  }>(),
  {
    modelValue: '',
    options: () => [],
    placeholder: 'Select...',
  },
)

const emit = defineEmits(['update:modelValue'])

const selectedValue = ref(props.modelValue || props.defaultValue)
const open = ref(false)

watch(
  () => props.modelValue,
  (value) => {
    selectedValue.value = value
  },
)

const filteredOptions = computed(() =>
  props.options.filter(option =>
    option.label.toLowerCase().includes(selectedValue.value?.toLowerCase() || ''),
  ),
)

function handleSelect(option: { label: string, value: string }) {
  emit('update:modelValue', option.value)
  open.value = false
}
</script>

<template>
  <ComboboxRoot
    v-model="selectedValue"
    :disabled="disabled"
    :open="open"
    :class="cn('w-[200px] rounded-md border border-input bg-background', $attrs.class ?? '')"
    @update:open="open = $event"
    @update:model-value="val => $emit('update:modelValue', val)"
  >
    <div class="relative flex items-center">
      <ComboboxInput
        :placeholder="placeholder"
        class="h-10 w-full rounded-md bg-transparent px-3 py-2 text-sm disabled:cursor-not-allowed placeholder:text-muted-foreground disabled:opacity-50 focus:outline-none"
      />
      <ComboboxTrigger
        class="absolute inset-y-0 right-0 flex items-center pr-2"
        :class="cn('h-full w-8', 'opacity-50 hover:opacity-100')"
      >
        <ChevronDown class="h-4 w-4" />
      </ComboboxTrigger>
    </div>

    <ComboboxContent
      class="z-50 max-h-[300px] overflow-auto border rounded-md bg-popover text-popover-foreground shadow-md transition-all duration-100"
    >
      <ComboboxGroup>
        <ComboboxEmpty class="py-2 text-center text-sm">
          No item found.
        </ComboboxEmpty>

        <ComboboxItem
          v-for="option in options"
          :key="option.value"
          :value="option.value"
          class="relative flex cursor-default select-none items-center px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50"
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
