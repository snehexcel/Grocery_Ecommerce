import { AlertCircle, Calendar, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface PayLaterOverviewProps {
  payLater: {
    limit: number
    used: number
    dueDate: string
  }
}

export function PayLaterOverview({ payLater }: PayLaterOverviewProps) {
  const available = payLater.limit - payLater.used
  const usedPercentage = (payLater.used / payLater.limit) * 100
  const daysUntilDue = Math.ceil((new Date(payLater.dueDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Pay Later Balance</CardTitle>
            <CardDescription>Your current balance and available credit</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">₹{payLater.used.toFixed(2)}</div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Credit Used</span>
                <span>
                  ₹{payLater.used.toFixed(2)} / ₹{payLater.limit.toFixed(2)}
                </span>
              </div>
              <Progress value={usedPercentage} />
              <div className="flex justify-between text-sm">
                <span>Available Credit</span>
                <span className="font-medium">₹{available.toFixed(2)}</span>
              </div>
            </div>
            <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">Make a Payment</Button>
          </CardContent>
        </Card>
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Payment Schedule</CardTitle>
            <CardDescription>Your upcoming payment details</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-full dark:bg-blue-900">
                    <Calendar className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="font-medium">Next Payment Due</div>
                    <div className="text-sm text-gray-500">{new Date(payLater.dueDate).toLocaleDateString()}</div>
                  </div>
                </div>
                <div className="font-medium">₹{payLater.used.toFixed(2)}</div>
              </div>

              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Payment Due Soon</AlertTitle>
                <AlertDescription>
                  Your payment is due in {daysUntilDue} days. Make sure to pay on time to avoid late fees.
                </AlertDescription>
              </Alert>

              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-full dark:bg-green-900">
                    <CreditCard className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <div className="font-medium">Auto-Pay</div>
                    <div className="text-sm text-gray-500">Not enabled</div>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  Enable
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Pay Later Benefits</CardTitle>
          <CardDescription>Enjoy these benefits with your Pay Later account</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <div className="font-medium mb-2">No Interest</div>
              <p className="text-sm text-gray-500">Pay your balance in full by the due date and never pay interest.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="font-medium mb-2">Flexible Payments</div>
              <p className="text-sm text-gray-500">Split your payments into installments that work for your budget.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="font-medium mb-2">Instant Approval</div>
              <p className="text-sm text-gray-500">Get approved instantly and start shopping right away.</p>
            </div>
          </div>
          <div className="mt-4">
            <Button variant="outline" className="w-full">
              Learn More About Pay Later
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
