"use client"

import { useState } from "react"
import { Map, Search, MapPin, Store, Coffee, ShoppingBag, Utensils, Briefcase, Star, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BackButton } from "@/components/ui/back-button"

// Sample local businesses data
const localBusinesses = [
  {
    id: 1,
    name: "Main Street Cafe",
    category: "Cafe",
    distance: "0.5 miles",
    teenFriendly: true,
    jobOpportunities: true,
    description: "Local coffee shop with study spaces and part-time job opportunities for teens.",
    address: "123 Main St",
    icon: Coffee,
    rating: 4.5,
    discounts: "10% student discount",
    hiring: true,
    positions: ["Barista", "Cashier"],
    payRange: "$12-15/hr",
  },
  {
    id: 2,
    name: "City Thrift",
    category: "Retail",
    distance: "0.8 miles",
    teenFriendly: true,
    jobOpportunities: true,
    description: "Secondhand clothing store with affordable prices and flexible part-time positions.",
    address: "456 Oak Ave",
    icon: ShoppingBag,
    rating: 4.2,
    discounts: "Buy one get one 50% off on Tuesdays",
    hiring: true,
    positions: ["Sales Associate", "Stock Clerk"],
    payRange: "$11-13/hr",
  },
  {
    id: 3,
    name: "Burger Joint",
    category: "Restaurant",
    distance: "1.2 miles",
    teenFriendly: true,
    jobOpportunities: true,
    description: "Popular burger restaurant that regularly hires teens for after-school and weekend shifts.",
    address: "789 Elm St",
    icon: Utensils,
    rating: 4.7,
    discounts: "15% off with student ID",
    hiring: true,
    positions: ["Server", "Kitchen Staff"],
    payRange: "$12-14/hr",
  },
  {
    id: 4,
    name: "Tech Repair Shop",
    category: "Services",
    distance: "1.5 miles",
    teenFriendly: true,
    jobOpportunities: false,
    description: "Local tech repair shop that offers internships for teens interested in technology.",
    address: "101 Pine St",
    icon: Briefcase,
    rating: 4.8,
    discounts: "Free diagnostics for students",
    hiring: false,
    positions: [],
    payRange: "",
  },
  {
    id: 5,
    name: "Community Center",
    category: "Community",
    distance: "0.3 miles",
    teenFriendly: true,
    jobOpportunities: true,
    description: "Local community center with volunteer opportunities and paid summer positions.",
    address: "202 Cedar Rd",
    icon: Store,
    rating: 4.6,
    discounts: "Free membership for local students",
    hiring: true,
    positions: ["Summer Camp Counselor", "Front Desk"],
    payRange: "$13-16/hr",
  },
]

export default function LocalPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [activeTab, setActiveTab] = useState("all")
  const [selectedBusiness, setSelectedBusiness] = useState<(typeof localBusinesses)[0] | null>(null)

  // Filter businesses based on selected filters
  const filteredBusinesses = localBusinesses.filter((business) => {
    // Search query
    if (
      searchQuery &&
      !business.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !business.category.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false
    }

    // Category filter
    if (categoryFilter !== "all" && business.category.toLowerCase() !== categoryFilter.toLowerCase()) return false

    // Tab filter
    if (activeTab === "hiring" && !business.hiring) return false
    if (activeTab === "discounts" && !business.discounts) return false

    return true
  })

  return (
    <div className="container mx-auto p-4 md:p-6">
      <BackButton />
      <h1 className="text-2xl font-bold mb-6">Local Economy Explorer</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 space-y-6">
          <Card className="border-2 border-primary/20 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 pb-2">
              <CardTitle className="text-base flex items-center">
                <Search className="mr-2 h-5 w-5 text-primary" />
                Find Local Opportunities
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Search</label>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search businesses..."
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Category</label>
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All categories</SelectItem>
                    <SelectItem value="cafe">Cafes</SelectItem>
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="restaurant">Restaurants</SelectItem>
                    <SelectItem value="services">Services</SelectItem>
                    <SelectItem value="community">Community</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="pt-2">
                <Button className="w-full bg-primary hover:bg-primary/90">Apply Filters</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 pb-2">
              <CardTitle className="text-base flex items-center">
                <Map className="mr-2 h-5 w-5 text-primary" />
                Local Map
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                <MapPin className="h-8 w-8 text-primary" />
                <p className="text-sm text-muted-foreground ml-2">Map view coming soon</p>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                Interactive map of teen-friendly businesses in your area
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2 space-y-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="all">All Places</TabsTrigger>
              <TabsTrigger value="hiring">Now Hiring</TabsTrigger>
              <TabsTrigger value="discounts">Student Discounts</TabsTrigger>
            </TabsList>
          </Tabs>

          {filteredBusinesses.length === 0 ? (
            <div className="text-center py-12 bg-muted/20 rounded-lg border-2 border-dashed border-muted">
              <Store className="h-12 w-12 mx-auto text-muted-foreground" />
              <h3 className="mt-4 text-lg font-medium">No businesses found</h3>
              <p className="mt-1 text-muted-foreground">Try adjusting your filters or search query</p>
              <Button
                className="mt-4"
                onClick={() => {
                  setSearchQuery("")
                  setCategoryFilter("all")
                  setActiveTab("all")
                }}
              >
                Reset Filters
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredBusinesses.map((business) => (
                <Card
                  key={business.id}
                  className="border-2 border-primary/20 overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => setSelectedBusiness(business)}
                >
                  <CardContent className="p-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="flex items-start space-x-3">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/80 to-accent/80">
                          <business.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center">
                            <h3 className="font-bold">{business.name}</h3>
                            <div className="flex items-center ml-2">
                              <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                              <span className="text-xs ml-1">{business.rating}</span>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">{business.category}</p>
                          <div className="flex flex-wrap gap-2 mt-1">
                            <div className="flex items-center text-xs text-muted-foreground">
                              <MapPin className="mr-1 h-3 w-3" />
                              {business.distance}
                            </div>
                            {business.hiring && <Badge className="bg-green-500">Hiring</Badge>}
                            {business.discounts && (
                              <Badge variant="outline" className="border-primary/20 bg-primary/10 text-primary">
                                Student Discount
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm mt-3 line-clamp-2">{business.description}</p>

                    {business.hiring && (
                      <div className="mt-3 bg-green-50 border border-green-200 rounded-lg p-2">
                        <div className="flex justify-between items-center text-xs">
                          <div className="flex items-center">
                            <Briefcase className="h-3 w-3 mr-1 text-green-600" />
                            <span className="font-medium text-green-700">
                              Now Hiring: {business.positions.join(", ")}
                            </span>
                          </div>
                          <span className="font-bold text-green-700">{business.payRange}</span>
                        </div>
                      </div>
                    )}

                    <div className="mt-3 flex justify-end">
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        View Details
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {selectedBusiness && (
            <Card className="border-2 border-primary/20 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <selectedBusiness.icon className="mr-2 h-5 w-5 text-primary" />
                    {selectedBusiness.name}
                  </CardTitle>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="ml-1">{selectedBusiness.rating}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-4">
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span>
                      {selectedBusiness.address} ({selectedBusiness.distance})
                    </span>
                  </div>

                  <p>{selectedBusiness.description}</p>

                  {selectedBusiness.discounts && (
                    <div className="rounded-lg bg-primary/10 p-3">
                      <h3 className="font-medium flex items-center">
                        <Badge className="mr-2 bg-primary">Discount</Badge>
                        {selectedBusiness.discounts}
                      </h3>
                    </div>
                  )}

                  {selectedBusiness.hiring && (
                    <div className="rounded-lg bg-green-50 border border-green-200 p-3">
                      <h3 className="font-medium flex items-center">
                        <Briefcase className="mr-2 h-4 w-4 text-green-600" />
                        Job Opportunities
                      </h3>
                      <div className="mt-2 space-y-2">
                        <div className="flex justify-between">
                          <span>Positions:</span>
                          <span className="font-medium">{selectedBusiness.positions.join(", ")}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Pay Range:</span>
                          <span className="font-medium">{selectedBusiness.payRange}</span>
                        </div>
                      </div>
                      <Button className="w-full mt-2 bg-green-600 hover:bg-green-700">Apply Now</Button>
                    </div>
                  )}

                  <div className="flex space-x-3 pt-2">
                    <Button className="flex-1 bg-primary hover:bg-primary/90">Get Directions</Button>
                    <Button variant="outline" className="flex-1">
                      Save to Favorites
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
