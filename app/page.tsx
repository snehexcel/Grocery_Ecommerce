import Link from "next/link"
import { ArrowRight, Clock, CreditCard, Gift, ShoppingBag, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CategoryCard } from "@/components/category-card"
import { FeaturedSection } from "@/components/featured-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4 animate-in slide-in-from-left duration-700">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-emerald-800 dark:text-emerald-200">
                  Fresh Groceries Delivered to Your Door
                </h1>
                <p className="max-w-[600px] text-gray-600 md:text-xl dark:text-gray-400">
                  Schedule monthly deliveries, earn rewards, and pay later with FastCart - your one-stop 
                  grocery solution.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/products">
                  <Button
                    size="lg"
                    className="bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Shop Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/schedule">
                  <Button
                    size="lg"
                    variant="outline"
                    className="hover:bg-emerald-50 dark:hover:bg-emerald-950 transition-colors duration-200"
                  >
                    Schedule Delivery
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center animate-in slide-in-from-right duration-700">
              <div className="relative w-full max-w-[500px] aspect-square overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 opacity-20 rounded-xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=500&auto=format&fit=crop"
                  alt="Fresh vegetarian groceries"
                  className="object-cover w-full h-full rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-emerald-800 dark:text-emerald-200">
                Why Choose FastCart?
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We offer a seamless shopping experience with features designed to make your life easier.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg hover:border-emerald-600 hover:shadow-lg transition-all duration-300 dark:border-gray-800 dark:hover:border-emerald-500 group">
              <div className="p-3 rounded-full bg-emerald-100 dark:bg-emerald-900 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800 transition-colors duration-300">
                <Clock className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                Monthly Scheduling
              </h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Set up recurring deliveries for your essentials and never run out.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg hover:border-emerald-600 hover:shadow-lg transition-all duration-300 dark:border-gray-800 dark:hover:border-emerald-500 group">
              <div className="p-3 rounded-full bg-emerald-100 dark:bg-emerald-900 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800 transition-colors duration-300">
                <ShoppingBag className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                Smart Recommendations
              </h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Get personalized product suggestions based on your purchase history.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg hover:border-emerald-600 hover:shadow-lg transition-all duration-300 dark:border-gray-800 dark:hover:border-emerald-500 group">
              <div className="p-3 rounded-full bg-emerald-100 dark:bg-emerald-900 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800 transition-colors duration-300">
                <CreditCard className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                Digital Wallet
              </h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Manage your balance, transactions, and payment methods in one place.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg hover:border-emerald-600 hover:shadow-lg transition-all duration-300 dark:border-gray-800 dark:hover:border-emerald-500 group">
              <div className="p-3 rounded-full bg-emerald-100 dark:bg-emerald-900 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800 transition-colors duration-300">
                <Gift className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                Rewards Program
              </h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Earn points with every purchase and redeem them for discounts.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg hover:border-emerald-600 hover:shadow-lg transition-all duration-300 dark:border-gray-800 dark:hover:border-emerald-500 group">
              <div className="p-3 rounded-full bg-emerald-100 dark:bg-emerald-900 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800 transition-colors duration-300">
                <Truck className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                Fast Delivery
              </h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Get your groceries delivered within hours of placing your order.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg hover:border-emerald-600 hover:shadow-lg transition-all duration-300 dark:border-gray-800 dark:hover:border-emerald-500 group">
              <div className="p-3 rounded-full bg-emerald-100 dark:bg-emerald-900 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800 transition-colors duration-300">
                <CreditCard className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                Pay Later Options
              </h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Flexible payment plans to help you manage your budget better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-emerald-50 to-white dark:from-emerald-950 dark:to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-emerald-800 dark:text-emerald-200">
                Shop by Category
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Browse our wide selection of vegetarian products across various categories.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
            <CategoryCard
              name="Fruits & Vegetables"
              image="https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=200&auto=format&fit=crop"
              href="/products/fruits-vegetables"
            />
            <CategoryCard
              name="Dairy & Paneer"
              image="https://images.unsplash.com/photo-1628088062854-d1870b4553da?q=80&w=200&auto=format&fit=crop"
              href="/products/dairy-paneer"
            />
            <CategoryCard
              name="Pulses & Grains"
              image="https://images.unsplash.com/photo-1515543904379-3d757afe72e4?q=80&w=200&auto=format&fit=crop"
              href="/products/pulses-grains"
            />
            <CategoryCard
              name="Bakery"
              image="https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=200&auto=format&fit=crop"
              href="/products/bakery"
            />
            <CategoryCard
              name="Beverages"
              image="https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?q=80&w=200&auto=format&fit=crop"
              href="/products/beverages"
            />
            <CategoryCard
              name="Snacks"
              image="https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=200&auto=format&fit=crop"
              href="/products/snacks"
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <FeaturedSection />

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-800 dark:to-teal-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
            <div className="space-y-2 animate-in fade-in duration-700">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Simplify Your Grocery Shopping?
              </h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed opacity-90">
                Join thousands of satisfied customers who have made FastCart their go-to vegetarian grocery platform.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row animate-in fade-in duration-1000">
              <Link href="/register">
                <Button
                  size="lg"
                  className="bg-white text-emerald-600 hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Sign Up Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-emerald-700 transition-colors duration-200"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
