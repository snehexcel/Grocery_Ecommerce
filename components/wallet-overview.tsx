import { ArrowDown, ArrowUp, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Transaction } from "@/lib/types"

interface WalletOverviewProps {
  wallet: {
    balance: number
    transactions: Transaction[]
  }
}

export function WalletOverview({ wallet }: WalletOverviewProps) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Wallet Balance</CardTitle>
            <CardDescription>Your current balance and recent activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">₹{wallet.balance.toFixed(2)}</div>
            <div className="flex gap-2 mt-4">
              <Button className="flex-1 bg-green-600 hover:bg-green-700">
                <Plus className="mr-2 h-4 w-4" />
                Add Funds
              </Button>
              <Button variant="outline" className="flex-1">
                Transfer
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Payment Methods</CardTitle>
            <CardDescription>Manage your payment options</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-6 bg-blue-600 rounded"></div>
                  <div>
                    <div className="font-medium">Visa ending in 4242</div>
                    <div className="text-sm text-gray-500">Expires 12/25</div>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  Edit
                </Button>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-6 bg-red-600 rounded"></div>
                  <div>
                    <div className="font-medium">Mastercard ending in 5555</div>
                    <div className="text-sm text-gray-500">Expires 10/24</div>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  Edit
                </Button>
              </div>
              <Button variant="outline" className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Add Payment Method
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
          <CardDescription>Your recent wallet activity</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {wallet.transactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-full ₹{
                      transaction.type === "credit"
                        ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400"
                        : "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400"
                    }`}
                  >
                    {transaction.type === "credit" ? (
                      <ArrowDown className="h-4 w-4" />
                    ) : (
                      <ArrowUp className="h-4 w-4" />
                    )}
                  </div>
                  <div>
                    <div className="font-medium">{transaction.description}</div>
                    <div className="text-sm text-gray-500">
                      {new Date(transaction.date).toLocaleDateString()} at{" "}
                      {new Date(transaction.date).toLocaleTimeString()}
                    </div>
                  </div>
                </div>
                <div className={`font-medium ₹{transaction.type === "credit" ? "text-green-600" : "text-red-600"}`}>
                  {transaction.type === "credit" ? "+" : "-"}₹{transaction.amount.toFixed(2)}
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-4">
            View All Transactions
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
