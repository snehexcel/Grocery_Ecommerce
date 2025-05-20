"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { featuredProducts } from "@/lib/data"

export function FeaturedSection() {
  const [activeTab, setActiveTab] = useState("trending")

  const filteredProducts = featuredProducts
    .filter((product) => {
      if (activeTab === "trending") return product.trending
      if (activeTab === "bestsellers") return product.bestseller
      if (activeTab === "new") return product.new
      return false
    })
    .slice(0, 4)

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Products</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Discover our handpicked selection of top-quality products.
            </p>
          </div>
          <div className="flex space-x-4 border-b w-full max-w-md justify-center">
            <button
              onClick={() => setActiveTab("trending")}
              className={`pb-2 px-4 ${
                activeTab === "trending" ? "border-b-2 border-green-600 font-medium text-green-600" : "text-gray-500"
              }`}
            >
              Trending
            </button>
            <button
              onClick={() => setActiveTab("bestsellers")}
              className={`pb-2 px-4 ${
                activeTab === "bestsellers" ? "border-b-2 border-green-600 font-medium text-green-600" : "text-gray-500"
              }`}
            >
              Best Sellers
            </button>
            <button
              onClick={() => setActiveTab("new")}
              className={`pb-2 px-4 ${
                activeTab === "new" ? "border-b-2 border-green-600 font-medium text-green-600" : "text-gray-500"
              }`}
            >
              New Arrivals
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link href="/products">
            <Button variant="outline" className="gap-1">
              View All Products
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
