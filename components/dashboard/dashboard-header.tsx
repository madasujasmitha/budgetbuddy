"use client"

import { useState, useEffect } from "react"
import { Bell, Settings, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"

interface UserData {
  id: string
  username: string
  email: string
  firstName?: string
  lastName?: string
  level: number
  xp: number
  coins: number
  totalSaved: number
  goalsCompleted: number
  joinDate: string
  avatar?: string
  achievements: string[]
  currentStreak: number
  isPrototype?: boolean
}

export function DashboardHeader() {
  const router = useRouter()
  const [userData, setUserData] = useState<UserData | null>(null)
  const [notifications] = useState(3) // Mock notification count

  useEffect(() => {
    // Get user data from localStorage
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

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("budgetbuddy_logged_in")
      localStorage.removeItem("budgetbuddy_user")
      localStorage.removeItem("budgetbuddy_session")
    }
    router.push("/")
  }

  if (!userData) {
    return (
      <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-gray-200 h-10 w-10"></div>
          <div className="flex-1 space-y-2 py-1">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    )
  }

  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return "Good morning"
    if (hour < 18) return "Good afternoon"
    return "Good evening"
  }

  const getInitials = () => {
    if (userData.firstName && userData.lastName) {
      return `${userData.firstName[0]}${userData.lastName[0]}`
    }
    return userData.username.slice(0, 2).toUpperCase()
  }

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border">
      <div className="flex items-center space-x-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={`/placeholder.svg?height=48&width=48`} alt={userData.username} />
          <AvatarFallback className="bg-primary text-white font-semibold">{getInitials()}</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-xl font-bold text-gray-900">
            {getGreeting()}, {userData.username}!
          </h1>
          <p className="text-sm text-gray-600">
            Level {userData.level} • {userData.xp} XP • {userData.coins} coins
          </p>
        </div>
        {userData.isPrototype && (
          <Badge variant="secondary" className="ml-2">
            Demo Mode
          </Badge>
        )}
      </div>

      <div className="flex items-center space-x-2">
        {/* Notifications */}
        <Button variant="ghost" size="sm" className="relative">
          <Bell className="h-5 w-5" />
          {notifications > 0 && (
            <Badge
              variant="destructive"
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
            >
              {notifications}
            </Badge>
          )}
        </Button>

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm">
              <Settings className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile Settings</DropdownMenuItem>
            <DropdownMenuItem>Preferences</DropdownMenuItem>
            <DropdownMenuItem>Help & Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout} className="text-red-600">
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
