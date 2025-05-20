"use client"

import Link from "next/link"
import { Heart, ShoppingCart } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { useStore } from "@/lib/store"
import type { Product } from "@/lib/types"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useStore()
  const { toast } = useToast()
  const [isWishlisted, setIsWishlisted] = useState(isInWishlist(product.id))

  const handleAddToCart = () => {
    addToCart(product)
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  const toggleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id)
      setIsWishlisted(false)
      toast({
        title: "Removed from wishlist",
        description: `${product.name} has been removed from your wishlist.`,
      })
    } else {
      addToWishlist(product)
      setIsWishlisted(true)
      toast({
        title: "Added to wishlist",
        description: `${product.name} has been added to your wishlist.`,
      })
    }
  }

  return (
    <div className="group relative overflow-hidden rounded-lg border bg-white transition-all duration-300 hover:border-emerald-600 hover:shadow-lg dark:bg-gray-900 dark:hover:border-emerald-500">
      <Link href={`/products/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {product.discount > 0 && (
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded animate-pulse">
              {product.discount}% OFF
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-medium truncate group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200">
            {product.name}
          </h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="font-bold text-emerald-600 dark:text-emerald-400">₹{product.price.toFixed(2)}</span>
            {product.originalPrice > product.price && (
              <span className="text-sm text-gray-500 line-through">₹{product.originalPrice.toFixed(2)}</span>
            )}
          </div>
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">{product.description}</p>
        </div>
      </Link>
      <div className="p-4 pt-0 flex gap-2">
        <Button
          className="flex-1 bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 transform hover:-translate-y-1"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
        <Button
          variant="outline"
          size="icon"
          className={`${isWishlisted ? "text-red-500 border-red-200" : ""} transition-all duration-300 hover:scale-110`}
          onClick={toggleWishlist}
        >
          <Heart className={`h-4 w-4 ${isWishlisted ? "fill-red-500" : ""}`} />
        </Button>
      </div>
    </div>
  )
}
