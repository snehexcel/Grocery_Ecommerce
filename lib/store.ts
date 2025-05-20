"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { Product } from "./types"

interface CartItem {
  product: Product
  quantity: number
}

interface WishlistItem {
  product: Product
}

interface StoreState {
  cart: CartItem[]
  wishlist: WishlistItem[]
  isCartOpen: boolean
  isWishlistOpen: boolean

  // Cart actions
  addToCart: (product: Product, quantity?: number) => void
  removeFromCart: (productId: string) => void
  updateCartItemQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  getCartTotal: () => number
  getCartItemsCount: () => number
  toggleCart: () => void

  // Wishlist actions
  addToWishlist: (product: Product) => void
  removeFromWishlist: (productId: string) => void
  isInWishlist: (productId: string) => boolean
  getWishlistItemsCount: () => number
  toggleWishlist: () => void
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      cart: [],
      wishlist: [],
      isCartOpen: false,
      isWishlistOpen: false,

      // Cart actions
      addToCart: (product, quantity = 1) => {
        const { cart } = get()
        const existingItem = cart.find((item) => item.product.id === product.id)

        if (existingItem) {
          const updatedCart = cart.map((item) =>
            item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item,
          )
          set({ cart: updatedCart })
        } else {
          set({ cart: [...cart, { product, quantity }] })
        }
      },

      removeFromCart: (productId) => {
        const { cart } = get()
        set({ cart: cart.filter((item) => item.product.id !== productId) })
      },

      updateCartItemQuantity: (productId, quantity) => {
        const { cart } = get()
        const updatedCart = cart.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
        set({ cart: updatedCart })
      },

      clearCart: () => set({ cart: [] }),

      getCartTotal: () => {
        const { cart } = get()
        return cart.reduce((total, item) => total + item.product.price * item.quantity, 0)
      },

      getCartItemsCount: () => {
        const { cart } = get()
        return cart.reduce((count, item) => count + item.quantity, 0)
      },

      toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen, isWishlistOpen: false })),

      // Wishlist actions
      addToWishlist: (product) => {
        const { wishlist } = get()
        const existingItem = wishlist.find((item) => item.product.id === product.id)

        if (!existingItem) {
          set({ wishlist: [...wishlist, { product }] })
        }
      },

      removeFromWishlist: (productId) => {
        const { wishlist } = get()
        set({ wishlist: wishlist.filter((item) => item.product.id !== productId) })
      },

      isInWishlist: (productId) => {
        const { wishlist } = get()
        return wishlist.some((item) => item.product.id === productId)
      },

      getWishlistItemsCount: () => {
        const { wishlist } = get()
        return wishlist.length
      },

      toggleWishlist: () => set((state) => ({ isWishlistOpen: !state.isWishlistOpen, isCartOpen: false })),
    }),
    {
      name: "fastcart-storage",
    },
  ),
)
