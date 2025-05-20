import Link from "next/link"
import { Calendar, Edit, Pause, Play, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import type { ScheduledDelivery } from "@/lib/types"

interface ScheduledDeliveriesProps {
  scheduledDeliveries: ScheduledDelivery[]
}

export function ScheduledDeliveries({ scheduledDeliveries }: ScheduledDeliveriesProps) {
  const getFrequencyLabel = (frequency: string) => {
    switch (frequency) {
      case "weekly":
        return "Every week"
      case "biweekly":
        return "Every 2 weeks"
      case "monthly":
        return "Every month"
      default:
        return frequency
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Scheduled Deliveries</h2>
        <Link href="/schedule/new">
          <Button size="sm" className="bg-green-600 hover:bg-green-700">
            Create New
          </Button>
        </Link>
      </div>
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Schedule</TableHead>
              <TableHead>Frequency</TableHead>
              <TableHead>Next Delivery</TableHead>
              <TableHead>Items</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {scheduledDeliveries.map((schedule) => (
              <TableRow key={schedule.id}>
                <TableCell className="font-medium">{schedule.id}</TableCell>
                <TableCell>{getFrequencyLabel(schedule.frequency)}</TableCell>
                <TableCell>{new Date(schedule.nextDelivery).toLocaleDateString()}</TableCell>
                <TableCell>{schedule.items.length} items</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={
                      schedule.status === "active"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                        : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
                    }
                  >
                    {schedule.status.charAt(0).toUpperCase() + schedule.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-1">
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                    {schedule.status === "active" ? (
                      <Button variant="ghost" size="icon">
                        <Pause className="h-4 w-4" />
                      </Button>
                    ) : (
                      <Button variant="ghost" size="icon">
                        <Play className="h-4 w-4" />
                      </Button>
                    )}
                    <Button variant="ghost" size="icon">
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {scheduledDeliveries.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <Calendar className="h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-medium">No scheduled deliveries</h3>
          <p className="text-gray-500 mt-1">Set up recurring deliveries for your essentials</p>
          <Link href="/schedule/new">
            <Button className="mt-4 bg-green-600 hover:bg-green-700">Create Schedule</Button>
          </Link>
        </div>
      )}
    </div>
  )
}
