import Link from "next/link"
import { Calendar, ChevronRight, Clock, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { mockUser } from "@/lib/data"
import { ScheduledDeliveries } from "@/components/scheduled-deliveries"

export default function SchedulePage() {
  const { scheduledDeliveries } = mockUser

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">Scheduled Deliveries</h1>
          <p className="text-gray-500">Set up recurring deliveries for your essentials</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Essentials</CardTitle>
              <CardDescription>Never run out of your weekly staples</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <Clock className="h-4 w-4" />
                <span>Delivers every week</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center">
                    <img src="/placeholder.svg?height=40&width=40" alt="Milk" className="w-6 h-6" />
                  </div>
                  <span>Milk</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center">
                    <img src="/placeholder.svg?height=40&width=40" alt="Eggs" className="w-6 h-6" />
                  </div>
                  <span>Eggs</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center">
                    <img src="/placeholder.svg?height=40&width=40" alt="Bread" className="w-6 h-6" />
                  </div>
                  <span>Bread</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-green-600 hover:bg-green-700">Add to Schedule</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Monthly Pantry</CardTitle>
              <CardDescription>Stock up on pantry essentials</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <Clock className="h-4 w-4" />
                <span>Delivers every month</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center">
                    <img src="/placeholder.svg?height=40&width=40" alt="Rice" className="w-6 h-6" />
                  </div>
                  <span>Rice</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center">
                    <img src="/placeholder.svg?height=40&width=40" alt="Pasta" className="w-6 h-6" />
                  </div>
                  <span>Pasta</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center">
                    <img src="/placeholder.svg?height=40&width=40" alt="Canned Goods" className="w-6 h-6" />
                  </div>
                  <span>Canned Goods</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-green-600 hover:bg-green-700">Add to Schedule</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Custom Schedule</CardTitle>
              <CardDescription>Create your own delivery schedule</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center h-[180px]">
              <div className="p-3 rounded-full bg-green-100 mb-4 dark:bg-green-900">
                <Plus className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <p className="text-center text-gray-500">
                Create a custom delivery schedule with your preferred products
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/schedule/new" className="w-full">
                <Button className="w-full">Create Custom</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-8">
          <ScheduledDeliveries scheduledDeliveries={scheduledDeliveries} />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>How Scheduled Deliveries Work</CardTitle>
            <CardDescription>Learn about our convenient delivery service</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-green-100 mb-4 dark:bg-green-900">
                  <Calendar className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-medium mb-2">Choose Your Schedule</h3>
                <p className="text-gray-500 text-sm">
                  Select from weekly, bi-weekly, or monthly delivery options to fit your needs.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-green-100 mb-4 dark:bg-green-900">
                  <ChevronRight className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-medium mb-2">Customize Your Items</h3>
                <p className="text-gray-500 text-sm">
                  Add your favorite products to your recurring delivery and adjust quantities as needed.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-green-100 mb-4 dark:bg-green-900">
                  <Clock className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-medium mb-2">Sit Back and Relax</h3>
                <p className="text-gray-500 text-sm">
                  We'll deliver your items on schedule, and you can modify or pause at any time.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
