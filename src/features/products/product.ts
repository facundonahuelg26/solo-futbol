export interface Breadcrumb {
  id: number
  name: string
  href: string
}

export interface Product {
  name: string
  price: string
  href: string
  breadcrumbs: Breadcrumb[]
  images: {
    src: string
    alt: string
  }[]
  colors: {
    name: string
    class: string
    selectedClass: string
  }[]
  sizes: {
    name: string
    inStock: boolean
  }[]
  description: string
  highlights: string[]
  details: string
}

export interface Review {
  href: string
  average: number
  totalCount: number
}
