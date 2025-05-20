export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice: number
  discount: number
  image: string
  category: string
  trending?: boolean
  bestseller?: boolean
  new?: boolean
  stock: number
  unit: string
}

export interface User {
  id: string
  name: string
  email: string
  wallet: {
    balance: number
    transactions: Transaction[]
  }
  rewards: {
    points: number
    history: RewardHistory[]
  }
  payLater: {
    limit: number
    used: number
    dueDate: string
  }
  orders: Order[]
  scheduledDeliveries: ScheduledDelivery[]
}

export interface Transaction {
  id: string
  amount: number
  type: "credit" | "debit"
  description: string
  date: string
}

export interface RewardHistory {
  id: string
  points: number
  type: "earned" | "redeemed"
  description: string
  date: string
}

export interface Order {
  id: string
  items: OrderItem[]
  total: number
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled"
  date: string
  paymentMethod: string
  address: Address
}

export interface OrderItem {
  productId: string
  name: string
  price: number
  quantity: number
  image: string
}

export interface ScheduledDelivery {
  id: string
  items: OrderItem[]
  frequency: "weekly" | "biweekly" | "monthly"
  nextDelivery: string
  status: "active" | "paused" | "cancelled"
}

export interface Address {
  street: string
  city: string
  state: string
  zipCode: string
  country: string
}

export interface Category {
  id: string
  name: string
  image: string
  slug: string
}
