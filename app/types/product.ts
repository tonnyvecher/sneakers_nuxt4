export type Product = {
  id: string | number
  name: string
  price: number
  image?: string
}

export type ProductResponse = {
  total: number
  totalPages: number
  currentPage: number
  limit: number
  products: Product[]
}
