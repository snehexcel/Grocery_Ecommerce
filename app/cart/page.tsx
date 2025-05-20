"use client"

import Link from "next/link"
import { Minus, Plus, ShoppingCart, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useStore } from "@/lib/store"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function CartPage() {
  const { cart, removeFromCart, updateCartItemQuantity, getCartTotal, getCartItemsCount } = useStore()

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">Shopping Cart</h1>
          <p className="text-gray-500">Review your items and proceed to checkout</p>
        </div>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <ShoppingCart className="h-16 w-16 text-gray-300 mb-4" />
            <h3 className="text-lg font-medium">Your cart is empty</h3>
            <p className="text-gray-500 mt-1 mb-6">Looks like you haven't added any products to your cart yet.</p>
            <Link href="/products">
              <Button className="bg-emerald-600 hover:bg-emerald-700">Browse Products</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-950 rounded-lg border overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Cart Items ({getCartItemsCount()})</h2>
                  <div className="space-y-6">
                    {cart.map((item) => (
                      <div key={item.product.id} className="flex gap-4 py-4 border-b last:border-0">
                        <div className="w-24 h-24 rounded-md overflow-hidden">
                          <img
                            src={item.product.image || "/placeholder.svg"}
                            alt={item.product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <Link href={`/products/${item.product.id}`}>
                            <h4 className="font-medium hover:text-emerald-600">{item.product.name}</h4>
                          </Link>
                          <p className="text-sm text-gray-500">
                            ${item.product.price.toFixed(2)} / {item.product.unit}
                          </p>
                          <div className="flex items-center mt-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 rounded-full"
                              onClick={() => {
                                if (item.quantity > 1) {
                                  updateCartItemQuantity(item.product.id, item.quantity - 1)
                                } else {
                                  removeFromCart(item.product.id)
                                }
                              }}
                            >
                              {item.quantity === 1 ? <Trash className="h-4 w-4" /> : <Minus className="h-4 w-4" />}
                            </Button>
                            <span className="mx-3 w-8 text-center">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 rounded-full"
                              onClick={() => updateCartItemQuantity(item.product.id, item.quantity + 1)}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-col items-end justify-between">
                          <span className="font-medium">${(item.product.price * item.quantity).toFixed(2)}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-gray-500"
                            onClick={() => removeFromCart(item.product.id)}
                          >
                            <Trash className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                  <CardDescription>Review your order details</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Subtotal</span>
                      <span className="font-medium">${getCartTotal().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Shipping</span>
                      <span className="font-medium">Free</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Tax</span>
                      <span className="font-medium">${(getCartTotal() * 0.08).toFixed(2)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span className="font-semibold">Total</span>
                      <span className="font-bold text-lg">${(getCartTotal() * 1.08).toFixed(2)}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="w-full space-y-2">
                    <Link href="/checkout">
                      <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Proceed to Checkout</Button>
                    </Link>
                    <Link href="/products">
                      <Button variant="outline" className="w-full">
                        Continue Shopping
                      </Button>
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
