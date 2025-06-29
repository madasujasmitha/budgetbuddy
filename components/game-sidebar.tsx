"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  Home,
  Target,
  Briefcase,
  BookOpen,
  Trophy,
  TrendingUp,
  MessageSquare,
  Sparkles,
  Users,
  Leaf,
  Wifi,
  Globe,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

interface UserData {
  username: string
  level: number
  xp: number
  coins: number
  avatar?: string
}

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Goals", href: "/goals", icon: Target },
  { name: "Jobs", href: "/jobs", icon: Briefcase },
  { name: "Skills", href: "/skills", icon: BookOpen },
  { name: "Achievements", href: "/achievements", icon: Trophy },
  { name: "Transactions", href: "/transactions", icon: TrendingUp },
  { name: "Journal", href: "/journal", icon: MessageSquare },
  { name: "Future Impact", href: "/future", icon: Sparkles },
  { name: "AI Coach", href: "/coach", icon: MessageSquare },
  { name: "Local Opportunities", href: "/local", icon: Users },
  { name: "Parent Dashboard", href: "/parent-dashboard", icon: Users },
  { name: "Eco Tracker", href: "/eco-tracker", icon: Leaf },
  { name: "Offline Mode", href: "/offline", icon: Wifi },
  { name: "Global Economics", href: "/economics", icon: Globe },
]

export function GameSidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [userData, setUserData] = useState<UserData | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const storedUser = localStorage.getItem("budgetbuddy_user")
        if (storedUser) {
          const user = JSON.parse(storedUser)
          setUserData(user)
        }
      } catch (error) {
        console.error("Error loading user data:", error)
      }
    }
  }, [])

  const getInitials = () => {
    if (!userData) return "BB"
    return userData.username.slice(0, 2).toUpperCase()
  }

  const xpProgress = userData ? (userData.xp % 1000) / 10 : 0

  return (
    <div
      className={cn(
        "flex flex-col h-full bg-gradient-to-b from-primary/10 to-accent/10 border-r transition-all duration-300",
        isCollapsed ? "w-16" : "w-64",
      )}
    >
      {/* Header */}
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">BB</span>
              </div>
              <span className="font-bold text-lg">BudgetBuddy</span>
            </div>
          )}
          <Button variant="ghost" size="sm" onClick={() => setIsCollapsed(!isCollapsed)} className="h-8 w-8 p-0">
            {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* User Profile */}
      {userData && (
        <div className="p-4 border-b">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt={userData.username} />
              <AvatarFallback className="bg-primary text-white text-sm font-semibold">{getInitials()}</AvatarFallback>
            </Avatar>
            {!isCollapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{userData.username}</p>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary" className="text-xs">
                    Level {userData.level}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{userData.coins} coins</span>
                </div>
                <div className="mt-2">
                  <Progress value={xpProgress} className="h-1" />
                  <p className="text-xs text-muted-foreground mt-1">{userData.xp % 1000}/1000 XP</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-2">
        <ul className="space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent",
                    isCollapsed ? "justify-center" : "justify-start",
                  )}
                  title={isCollapsed ? item.name : undefined}
                >
                  <item.icon className={cn("h-5 w-5", !isCollapsed && "mr-3")} />
                  {!isCollapsed && <span>{item.name}</span>}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Footer */}
      {!isCollapsed && (
        <div className="p-4 border-t">
          <div className="text-center">
            <p className="text-xs text-muted-foreground">BudgetBuddy v1.0</p>
            <p className="text-xs text-muted-foreground">Making money fun!</p>
          </div>
        </div>
      )}
    </div>
  )
}
