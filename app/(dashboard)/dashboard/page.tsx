import { BudgetLimitAlert } from "@/components/education/budget-limit-alert"
import { EducationalTooltip } from "@/components/education/educational-tooltip"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardHeader } from "@/components/header"
import { Overview } from "@/components/overview"
import { RecentSales } from "@/components/recent-sales"
import { Search } from "@/components/search"

const transactions = [
  {
    id: "728ed52f",
    date: "2024-06-15T10:30:00.000Z",
    name: "Car Maintenance",
    type: "Transportation",
    amount: "$156.75",
  },
  {
    id: "923iku49",
    date: "2024-06-14T19:45:00.000Z",
    name: "Concert Tickets",
    type: "Entertainment",
    amount: "$89.99",
  },
  {
    id: "092jks45",
    date: "2024-06-14T12:22:00.000Z",
    name: "Grocery Shopping",
    type: "Food",
    amount: "$67.50",
  },
  {
    id: "128usj91",
    date: "2024-06-13T16:15:00.000Z",
    name: "Netflix Subscription",
    type: "Entertainment",
    amount: "$24.99",
  },
  {
    id: "aus74h12",
    date: "2024-06-12T14:30:00.000Z",
    name: "Impulse Purchase - Headphones",
    type: "Shopping",
    amount: "$89.99",
  },
]

const stats = [
  {
    title: "Transportation",
    value: "$226.75",
    change: "+13%",
    changeType: "decrease",
    status: "over",
    limit: "$200.00",
  },
  {
    title: "Entertainment",
    value: "$198.73",
    change: "+32%",
    changeType: "decrease",
    status: "over",
    limit: "$150.00",
  },
  {
    title: "Food Budget",
    value: "$396.83",
    change: "-12%",
    changeType: "increase",
    status: "good",
    limit: "$450.00",
  },
]

interface Stat {
  title: string
  value: string
  change: string
  changeType: "increase" | "decrease"
  status: "good" | "over"
  limit: string
}

interface Transaction {
  id: string
  date: string
  name: string
  type: string
  amount: string
}

async function getData() {
  // Fetch data from your API here.
  return {
    transactions,
    stats,
  }
}

export default async function DashboardPage() {
  const data = await getData()

  return (
    <>
      <DashboardHeader />
      <BudgetLimitAlert category="transportation" spent={226.75} limit={200} percentage={113} />
      <BudgetLimitAlert category="entertainment" spent={198.73} limit={150} percentage={132} />
      <BudgetLimitAlert category="shopping" spent={348.52} limit={300} percentage={116} />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M12 2v20M17 5H9.5a.5.5 0 0 0 0 1h5a.5.5 0 0 1 0 1H9.5a.5.5 0 0 0 0 1h5a.5.5 0 0 1 0 1H9.5a.5.5 0 0 0 0 1h5a.5.5 0 0 1 0 1H9.5a.5.5 0 0 0 0 1h5M7 17l-5 5 5 5" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="8.5" cy="7" r="4"></circle>
              <line x1="20" x2="20" y1="8" y2="14"></line>
              <line x1="23" x2="23" y1="11" y2="11"></line>
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2350</div>
            <p className="text-xs text-muted-foreground">+180.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sales</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <path d="M2 10h20" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12,234</div>
            <p className="text-xs text-muted-foreground">+19% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Now</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">728</div>
            <p className="text-xs text-muted-foreground">+5% from last month</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-1 md:col-span-2 lg:col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <Overview />
          </CardContent>
        </Card>
        <Card className="col-span-1 md:col-span-2 lg:col-span-3">
          <CardHeader>
            <CardTitle>Player Stats</CardTitle>
            <CardDescription>Your stats this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-4">
              {data.stats.map((stat: Stat) => (
                <div key={stat.title} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span>{stat.title}</span>
                    <EducationalTooltip concept="emergency-fund" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-right text-sm font-medium">{stat.value}</span>
                    <span className={`text-xs ${stat.changeType === "increase" ? "text-green-500" : "text-red-500"}`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-1 md:col-span-2 lg:col-span-4">
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
            <CardDescription>You made 265 sales this month.</CardDescription>
          </CardHeader>
          <CardContent>
            <RecentSales transactions={data.transactions} />
          </CardContent>
        </Card>
        <Card className="col-span-1 md:col-span-2 lg:col-span-3">
          <CardHeader>
            <CardTitle>Search</CardTitle>
            <CardDescription>Search all transactions.</CardDescription>
          </CardHeader>
          <CardContent>
            <Search transactions={data.transactions} />
          </CardContent>
        </Card>
      </div>
    </>
  )
}
