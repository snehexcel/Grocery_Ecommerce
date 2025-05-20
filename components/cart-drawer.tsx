"use client"

import { Minus, Plus, ShoppingCart, Trash, X } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { useStore } from "@/lib/store"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

export function CartDrawer() {
  const { cart, isCartOpen, toggleCart, removeFromCart, updateCartItemQuantity, getCartTotal, getCartItemsCount } =
    useStore()

  if (!isCartOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-all duration-300">
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white dark:bg-gray-900 shadow-lg flex flex-col animate-in slide-in-from-right">
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-800">
          <div className="flex items-center">
            <ShoppingCart className="h-5 w-5 mr-2 text-emerald-600 dark:text-emerald-400" />
            <h2 className="font-semibold text-lg">Your Cart ({getCartItemsCount()})</h2>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleCart}
            className="hover:bg-emerald-50 dark:hover:bg-emerald-950 transition-colors duration-200"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center flex-1 p-6 text-center">
            <ShoppingCart className="h-16 w-16 text-gray-300 mb-4" />
            <h3 className="font-medium text-lg mb-2">Your cart is empty</h3>
            <p className="text-gray-500 mb-6">Looks like you haven't added any products to your cart yet.</p>
            <Button
              onClick={toggleCart}
              className="bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 transform hover:-translate-y-1"
            >
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex gap-4 py-2 group hover:bg-emerald-50 dark:hover:bg-emerald-950/30 p-2 rounded-lg transition-colors duration-200"
                  >
                    <div className="w-20 h-20 rounded-md overflow-hidden">
                      <img
                        src={item.product.image || "/placeholder.svg"}
                        alt={item.product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200">
                        {item.product.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        ₹{item.product.price.toFixed(2)} / {item.product.unit}
                      </p>
                      <div className="flex items-center mt-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7 rounded-full hover:bg-red-50 hover:text-red-500 transition-colors duration-200"
                          onClick={() => {
                            if (item.quantity > 1) {
                              updateCartItemQuantity(item.product.id, item.quantity - 1)
                            } else {
                              removeFromCart(item.product.id)
                            }
                          }}
                        >
                          {item.quantity === 1 ? <Trash className="h-3 w-3" /> : <Minus className="h-3 w-3" />}
                        </Button>
                        <span className="mx-2 w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7 rounded-full hover:bg-emerald-50 hover:text-emerald-600 transition-colors duration-200"
                          onClick={() => updateCartItemQuantity(item.product.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <span className="font-medium">₹{(item.product.price * item.quantity).toFixed(2)}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-500 hover:text-red-500 transition-colors duration-200"
                        onClick={() => removeFromCart(item.product.id)}
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <div className="p-4 border-t dark:border-gray-800">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="font-medium">₹{getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Shipping</span>
                  <span className="font-medium">Free</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="font-semibold">Total</span>
                  <span className="font-bold text-lg">₹{getCartTotal().toFixed(2)}</span>
                </div>
                <div className="pt-2">
                  <Link href="/checkout" onClick={toggleCart}>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 transform hover:-translate-y-1">
                      Proceed to Checkout
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
