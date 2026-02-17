import type { Product, ProductResponse } from '~/types/product'

export function useCatalogProducts() {
  const config = useRuntimeConfig()
  const apiBase = config.public.apiBase as string

  const limit = Number(config.public.pageLimit ?? 12)

  const items = useState<Product[]>('catalog:items', () => [])
  const page = useState<number>('catalog:page', () => 1)
  const hasNext = useState<boolean>('catalog:hasNext', () => true)

  const isLoadingMore = useState<boolean>('catalog:isLoadingMore', () => false)
  const isError = useState<boolean>('catalog:isError', () => false)
  const errorMessage = useState<string>('catalog:errorMessage', () => '')

  async function fetchPage(p: number) {
    const url = `${apiBase}/products?page=${p}&limit=${limit}`
    const payload = await $fetch<ProductResponse>(url)

    return {
      items: payload.products,
      hasNext: payload.currentPage < payload.totalPages,
      currentPage: payload.currentPage,
    }
  }

  async function initSSR() {
    isError.value = false
    errorMessage.value = ''

    try {
      const res = await fetchPage(1)
      items.value = res.items
      page.value = 1
      hasNext.value = res.hasNext
    } catch {
      isError.value = true
      errorMessage.value = 'Произошла ошибка, попробуйте позже'
      items.value = []
      page.value = 1
      hasNext.value = false
    }
  }

  async function loadMore() {
    if (!hasNext.value || isLoadingMore.value) return

    isError.value = false
    errorMessage.value = ''
    isLoadingMore.value = true

    const nextPage = page.value + 1

    try {
      const res = await fetchPage(nextPage)
      items.value = [...items.value, ...res.items]
      page.value = nextPage
      hasNext.value = res.hasNext
    } catch {
      isError.value = true
      errorMessage.value = 'Произошла ошибка, попробуйте позже'
    } finally {
      isLoadingMore.value = false
    }
  }

  async function retry() {
    if (items.value.length === 0) return initSSR()
    return loadMore()
  }

  return {
    items,
    hasNext,
    isLoadingMore,
    isError,
    errorMessage,
    initSSR,
    loadMore,
    retry,
  }
}
