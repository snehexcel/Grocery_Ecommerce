"use client"

import type React from "react"
import { Inter } from "next/font/google"
import Link from "next/link"
import { Heart, Menu, Search, ShoppingCart, User } from "lucide-react"
import { Suspense, useEffect } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { CartDrawer } from "@/components/cart-drawer"
import { WishlistDrawer } from "@/components/wishlist-drawer"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"
import { useStore } from "@/lib/store"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Force dark mode to be applied immediately on client side
  useEffect(() => {
    // Check if dark mode is stored in localStorage
    const isDarkMode =
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)

    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="flex min-h-screen flex-col bg-gradient-to-br from-emerald-50 to-white dark:from-gray-950 dark:to-gray-900">
            <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur-md dark:bg-gray-950/80 dark:border-gray-800">
              <div className="container flex h-16 items-center px-4 md:px-6">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                  <span className="text-xl font-bold text-emerald-600 dark:text-emerald-400 transition-all duration-300 hover:scale-105">
                    FastCart
                  </span>
                </Link>
                <div className="hidden md:flex md:flex-1">
                  <div className="relative w-full max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search products..."
                      className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-full"
                    />
                  </div>
                  <nav className="ml-auto flex items-center space-x-1">
                    <Link href="/products">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="hover:bg-emerald-50 dark:hover:bg-emerald-950 transition-colors duration-200"
                      >
                        Products
                      </Button>
                    </Link>
                    <Link href="/schedule">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="hover:bg-emerald-50 dark:hover:bg-emerald-950 transition-colors duration-200"
                      >
                        Schedule
                      </Button>
                    </Link>
                    <Link href="/dashboard">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="hover:bg-emerald-50 dark:hover:bg-emerald-950 transition-colors duration-200"
                      >
                        Dashboard
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="hover:bg-emerald-50 dark:hover:bg-emerald-950 transition-colors duration-200"
                      >
                        Contact
                      </Button>
                    </Link>
                  </nav>
                </div>
                <div className="flex items-center md:ml-auto">
                  <ThemeToggle />
                  <WishlistButton />
                  <CartButton />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="mr-1 hover:bg-emerald-50 dark:hover:bg-emerald-950 transition-colors duration-200"
                  >
                    <User className="h-5 w-5" />
                    <span className="sr-only">Account</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden hover:bg-emerald-50 dark:hover:bg-emerald-950 transition-colors duration-200"
                  >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Menu</span>
                  </Button>
                </div>
              </div>
            </header>
            <main className="flex-1">
              <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
            </main>
            <footer className="border-t bg-white dark:bg-gray-950 dark:border-gray-800">
              <div className="container flex flex-col gap-6 py-8 md:px-6 md:py-12">
                <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-medium">Shop</h3>
                    <Link
                      href="/products"
                      className="text-sm text-gray-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
                    >
                      All Products
                    </Link>
                    <Link
                      href="/products/fruits-vegetables"
                      className="text-sm text-gray-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
                    >
                      Fruits & Vegetables
                    </Link>
                    <Link
                      href="/products/dairy-paneer"
                      className="text-sm text-gray-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
                    >
                      Dairy & Paneer
                    </Link>
                    <Link
                      href="/products/pulses-grains"
                      className="text-sm text-gray-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
                    >
                      Pulses & Grains
                    </Link>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-medium">Account</h3>
                    <Link
                      href="/dashboard"
                      className="text-sm text-gray-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
                    >
                      Dashboard
                    </Link>
                    <Link
                      href="/dashboard?tab=orders"
                      className="text-sm text-gray-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
                    >
                      Orders
                    </Link>
                    <Link
                      href="/dashboard?tab=wallet"
                      className="text-sm text-gray-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
                    >
                      Wallet
                    </Link>
                    <Link
                      href="/dashboard?tab=rewards"
                      className="text-sm text-gray-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
                    >
                      Rewards
                    </Link>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-medium">Company</h3>
                    <Link
                      href="/about"
                      className="text-sm text-gray-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
                    >
                      About Us
                    </Link>
                    <Link
                      href="/careers"
                      className="text-sm text-gray-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
                    >
                      Careers
                    </Link>
                    <Link
                      href="/blog"
                      className="text-sm text-gray-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
                    >
                      Blog
                    </Link>
                    <Link
                      href="/contact"
                      className="text-sm text-gray-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
                    >
                      Contact
                    </Link>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-medium">Legal</h3>
                    <Link
                      href="/terms"
                      className="text-sm text-gray-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
                    >
                      Terms of Service
                    </Link>
                    <Link
                      href="/privacy"
                      className="text-sm text-gray-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      href="/shipping"
                      className="text-sm text-gray-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
                    >
                      Shipping Policy
                    </Link>
                    <Link
                      href="/refund"
                      className="text-sm text-gray-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
                    >
                      Refund Policy
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-gray-500">
                    © 2025 FastCart. All rights reserved. Made with{" "}
                    <span className="text-red-500 animate-pulse">❤️</span> by Sneha
                  </p>
                  <div className="flex gap-4">
                    <Link
                      href="#"
                      className="text-gray-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                    <Link
                      href="#"
                      className="text-gray-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                    <Link
                      href="#"
                      className="text-gray-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </footer>
          </div>
          <CartDrawer />
          <WishlistDrawer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

function CartButton() {
  return <ClientCart />
}

function WishlistButton() {
  return <ClientWishlist />
}

function ClientCart() {
  const { toggleCart, getCartItemsCount } = useStore()
  const itemCount = getCartItemsCount()

  return (
    <Button
      variant="ghost"
      size="icon"
      className="mr-1 relative hover:bg-emerald-50 dark:hover:bg-emerald-950 transition-colors duration-200"
      onClick={toggleCart}
    >
      <ShoppingCart className="h-5 w-5" />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
          {itemCount}
        </span>
      )}
      <span className="sr-only">Cart</span>
    </Button>
  )
}

function ClientWishlist() {
  const { toggleWishlist, getWishlistItemsCount } = useStore()
  const itemCount = getWishlistItemsCount()

  return (
    <Button
      variant="ghost"
      size="icon"
      className="mr-1 relative hover:bg-emerald-50 dark:hover:bg-emerald-950 transition-colors duration-200"
      onClick={toggleWishlist}
    >
      <Heart className="h-5 w-5" />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
          {itemCount}
        </span>
      )}
      <span className="sr-only">Wishlist</span>
    </Button>
  )
}
