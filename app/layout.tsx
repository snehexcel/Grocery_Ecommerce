import type React from "react"
import { Inter } from "next/font/google"

import ClientLayout from "./client-layout"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "FastCart - Grocery Delivery Platform",
  description:
    "Schedule monthly deliveries, earn rewards, and pay later with FastCart - your one-stop grocery solution.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}


import './globals.css'