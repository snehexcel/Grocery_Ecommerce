"use client"

import { useState } from "react"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { categories } from "@/lib/data"

export function ProductsFilter() {
  const [priceRange, setPriceRange] = useState([0, 50])

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium mb-4">Filter Products</h3>
        <Accordion type="multiple" defaultValue={["categories", "price"]}>
          <AccordionItem value="categories">
            <AccordionTrigger>Categories</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 pt-2">
                {categories.map((category) => (
                  <div key={category.id} className="flex items-center space-x-2">
                    <Checkbox id={`category-${category.id}`} />
                    <Label htmlFor={`category-${category.id}`}>{category.name}</Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="price">
            <AccordionTrigger>Price Range</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-2">
                <Slider defaultValue={[0, 500]} max={500} step={1} value={priceRange} onValueChange={setPriceRange} />
                <div className="flex items-center justify-between">
                  <span>₹{priceRange[0]}</span>
                  <span>₹{priceRange[1]}</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="availability">
            <AccordionTrigger>Availability</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 pt-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="in-stock" />
                  <Label htmlFor="in-stock">In Stock</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="out-of-stock" />
                  <Label htmlFor="out-of-stock">Out of Stock</Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="discount">
            <AccordionTrigger>Discount</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 pt-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="discount-10" />
                  <Label htmlFor="discount-10">10% or more</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="discount-20" />
                  <Label htmlFor="discount-20">20% or more</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="discount-30" />
                  <Label htmlFor="discount-30">30% or more</Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <Button className="w-full bg-green-600 hover:bg-green-700">Apply Filters</Button>
    </div>
  )
}
