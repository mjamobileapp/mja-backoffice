import { computed, ref, type Ref, watch } from 'vue'

export interface UsePaginationOptions<T> {
  data: Ref<T[]>
  searchQuery?: Ref<string>
  itemsPerPage?: number
  searchFields?: string[]
}

export function usePagination<T extends Record<string, any>>(options: UsePaginationOptions<T>) {
  const { data, itemsPerPage = 10, searchFields = [] } = options
  const searchQuery = options.searchQuery || ref('')
  const currentPage = ref(1)

  const filteredData = computed(() => {
    const query = searchQuery.value.trim().toLowerCase()
    if (!query)
      return data.value || []

    return (data.value || []).filter((item) => {
      if (searchFields.length > 0) {
        return searchFields.some((field) => {
          const val = item[field]
          return val !== null && val !== undefined && String(val).toLowerCase().includes(query)
        })
      }
      return Object.values(item).some(
        val => val !== null && val !== undefined && String(val).toLowerCase().includes(query),
      )
    })
  })

  const totalPages = computed(() => {
    return Math.max(1, Math.ceil(filteredData.value.length / itemsPerPage))
  })

  const paginatedData = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage
    return filteredData.value.slice(start, start + itemsPerPage)
  })

  const nextPage = () => {
    if (currentPage.value < totalPages.value) {
      currentPage.value++
    }
  }

  const prevPage = () => {
    if (currentPage.value > 1) {
      currentPage.value--
    }
  }

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages.value) {
      currentPage.value = page
    }
  }

  watch([searchQuery, data], () => {
    currentPage.value = 1
  })

  return {
    searchQuery,
    currentPage,
    itemsPerPage: ref(itemsPerPage),
    filteredData,
    paginatedData,
    totalPages,
    nextPage,
    prevPage,
    goToPage,
  }
}
