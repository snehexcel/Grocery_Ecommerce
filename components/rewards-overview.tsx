import { Gift, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import type { RewardHistory } from "@/lib/types"

interface RewardsOverviewProps {
  rewards: {
    points: number
    history: RewardHistory[]
  }
}

export function RewardsOverview({ rewards }: RewardsOverviewProps) {
  const nextRewardThreshold = Math.ceil(rewards.points / 100) * 100
  const progress = (rewards.points / nextRewardThreshold) * 100

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Rewards Points</CardTitle>
            <CardDescription>Your current points and progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{rewards.points} points</div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress to next reward</span>
                <span>
                  {rewards.points} / {nextRewardThreshold}
                </span>
              </div>
              <Progress value={progress} />
              <p className="text-sm text-gray-500">
                {nextRewardThreshold - rewards.points} more points for a ₹{(nextRewardThreshold / 100).toFixed(2)}{" "}
                discount
              </p>
            </div>
            <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">Redeem Points</Button>
          </CardContent>
        </Card>
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Available Rewards</CardTitle>
            <CardDescription>Rewards you can redeem with your points</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-full dark:bg-green-900">
                    <Gift className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <div className="font-medium">₹5 Discount</div>
                    <div className="text-sm text-gray-500">500 points</div>
                  </div>
                </div>
                <Button size="sm" variant="outline" disabled={rewards.points < 500}>
                  Redeem
                </Button>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-full dark:bg-green-900">
                    <Gift className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <div className="font-medium">₹10 Discount</div>
                    <div className="text-sm text-gray-500">1000 points</div>
                  </div>
                </div>
                <Button size="sm" variant="outline" disabled={rewards.points < 1000}>
                  Redeem
                </Button>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-full dark:bg-green-900">
                    <Gift className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <div className="font-medium">Free Delivery</div>
                    <div className="text-sm text-gray-500">300 points</div>
                  </div>
                </div>
                <Button size="sm" variant="outline" disabled={rewards.points < 300}>
                  Redeem
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Points History</CardTitle>
          <CardDescription>Your recent rewards activity</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {rewards.history.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-full ₹{
                      item.type === "earned"
                        ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400"
                        : "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400"
                    }`}
                  >
                    <Star className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-medium">{item.description}</div>
                    <div className="text-sm text-gray-500">{new Date(item.date).toLocaleDateString()}</div>
                  </div>
                </div>
                <div className={`font-medium ₹{item.type === "earned" ? "text-green-600" : "text-blue-600"}`}>
                  {item.type === "earned" ? "+" : "-"}
                  {item.points} points
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-4">
            View All History
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
