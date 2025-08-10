"use client"

import { useState } from "react"
import { MapPin, Search, Store, Coffee, ShoppingBag, Utensils, Briefcase, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const businesses = [
  {
    id: 1,
    name: "Main Street Cafe",
    category: "Cafe",
    distance: "0.5 mi",
    description: "Part-time barista roles. Great for after school.",
    icon: Coffee,
    rating: 4.5,
    hiring: true,
    positions: ["Barista", "Cashier"],
    payRange: "$12–15/hr",
  },
  {
    id: 2,
    name: "City Thrift",
    category: "Retail",
    distance: "0.8 mi",
    description: "Flexible shifts in retail.",
    icon: ShoppingBag,
    rating: 4.2,
    hiring: true,
    positions: ["Sales Associate", "Stock"],
    payRange: "$11–13/hr",
  },
  {
    id: 3,
    name: "Burger Joint",
    category: "Restaurant",
    distance: "1.2 mi",
    description: "Weekend shifts with tips.",
    icon: Utensils,
    rating: 4.7,
    hiring: true,
    positions: ["Server", "Kitchen"],
    payRange: "$12–14/hr",
  },
  {
    id: 4,
    name: "Community Center",
    category: "Community",
    distance: "0.3 mi",
    description: "Volunteer and paid summer roles.",
    icon: Store,
    rating: 4.6,
    hiring: true,
    positions: ["Camp Counselor", "Front Desk"],
    payRange: "$13–16/hr",
  },
]

export default function OpportunitiesPage() {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState("all")

  const filtered = businesses.filter((b) => {
    const q = query.toLowerCase()
    const matchesQ = !q || b.name.toLowerCase().includes(q) || b.category.toLowerCase().includes(q)
    const matchesC = category === "all" || b.category.toLowerCase() === category
    return matchesQ && matchesC
  })

  return (
    <div className="container mx-auto p-4 md:p-6">
      <h1 className="text-2xl font-bold mb-6">Opportunities Near You</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1 border-2 border-primary/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center">
              <Search className="mr-2 h-5 w-5 text-primary" />
              Filters
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Search</label>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  className="pl-8"
                  placeholder="Search ..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Category</label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="All categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="cafe">Cafe</SelectItem>
                  <SelectItem value="retail">Retail</SelectItem>
                  <SelectItem value="restaurant">Restaurant</SelectItem>
                  <SelectItem value="community">Community</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <div className="md:col-span-2 space-y-4">
          {filtered.map((b) => (
            <Card key={b.id} className="border-2 border-primary/20">
              <CardContent className="p-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex items-start gap-3">
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/80 to-accent/80 flex items-center justify-center">
                      <b.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{b.name}</h3>
                        <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                        <span className="text-xs">{b.rating}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">{b.category}</div>
                      <div className="flex items-center gap-2 mt-1">
                        <MapPin className="h-3 w-3" />
                        <span className="text-xs text-muted-foreground">{b.distance}</span>
                        {b.hiring && <Badge className="bg-green-600">Hiring</Badge>}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 md:mt-0">
                    <Button size="sm" className="bg-primary hover:bg-primary/90">
                      View details
                    </Button>
                  </div>
                </div>
                {b.hiring && (
                  <div className="mt-3 rounded-lg bg-green-50 border border-green-200 p-2 text-xs">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-1">
                        <Briefcase className="h-3 w-3 text-green-600" />
                        Positions: <span className="font-medium">{b.positions.join(", ")}</span>
                      </div>
                      <div className="font-bold text-green-700">{b.payRange}</div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
          {filtered.length === 0 && (
            <div className="rounded-lg border border-dashed p-10 text-center text-sm text-muted-foreground">
              No results. Try different filters.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
