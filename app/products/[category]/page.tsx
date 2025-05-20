import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Filter, SlidersHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ProductCard } from "@/components/product-card"
import { ProductsFilter } from "@/components/products-filter"
import { categories, featuredProducts } from "@/lib/data"

interface CategoryPageProps {
  params: {
    category: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  // Find the category by slug
  const category = categories.find((cat) => cat.slug === params.category)

  // If category doesn't exist, return 404
  if (!category) {
    notFound()
  }

  // Filter products by category
  const filteredProducts = featuredProducts.filter((product) => product.category === params.category)

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <Link
            href="/products"
            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Products
          </Link>
          <h1 className="text-3xl font-bold">{category.name}</h1>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="relative w-full sm:w-auto sm:flex-1 max-w-md">
              <Input placeholder={`Search in ${category.name.toLowerCase()}...`} className="pl-10" />
              <div className="absolute left-3 top-3 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <Button variant="outline" size="sm" className="sm:hidden">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Sort
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
          <div className="hidden md:block">
            <ProductsFilter />
          </div>
          <div>
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <h3 className="text-lg font-medium">No products found</h3>
                <p className="text-gray-500 mt-1">Try adjusting your filters or search terms</p>
                <Link href="/products">
                  <Button className="mt-4 bg-green-600 hover:bg-green-700">View All Products</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
