"use client"

import { useState, useEffect } from "react"
import {
  BarChart3,
  Home,
  Target,
  Briefcase,
  MessageSquare,
  BookText,
  LogOut,
  Settings,
  PlusCircle,
  TrendingUp,
  Shield,
  Leaf,
  WifiOff,
  Globe,
  User,
  Trophy,
  Coins,
} from "lucide-react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { useRouter } from "next/navigation"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface UserData {
  id: string
  username: string
  email: string
  level: number
  xp: number
  coins: number
  totalSaved: number
  goalsCompleted: number
  currentStreak: number
  achievements: string[]
}

export function GameSidebar() {
  const pathname = usePathname()
  const router = useRouter()
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

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("budgetbuddy_logged_in")
      localStorage.removeItem("budgetbuddy_user")
      localStorage.removeItem("budgetbuddy_session")
    }
    router.push("/")
  }

  const menuItems = [
    {
      title: "Dashboard",
      icon: Home,
      href: "/dashboard",
    },
    {
      title: "Transactions",
      icon: BarChart3,
      href: "/transactions",
    },
    {
      title: "Goals",
      icon: Target,
      href: "/goals",
    },
    {
      title: "Jobs",
      icon: Briefcase,
      href: "/jobs",
    },
    {
      title: "AI Coach",
      icon: MessageSquare,
      href: "/coach",
    },
    {
      title: "Skills",
      icon: BookText,
      href: "/skills",
    },
    {
      title: "Achievements",
      icon: Trophy,
      href: "/achievements",
    },
    {
      title: "Journal",
      icon: BookText,
      href: "/journal",
    },
    {
      title: "Future",
      icon: TrendingUp,
      href: "/future",
    },
    {
      title: "Oppurtunities",
      icon: LightBulb,
      href: "/local",
    },
    {
      title: "Eco Tracker",
      icon: Leaf,
      href: "/eco-tracker",
    },
    {
      title: "Economics Explorer",
      icon: Globe,
      href: "/economics",
    },
  ]

  // Calculate XP progress
  const xpForNextLevel = userData ? (userData.level + 1) * 1000 : 1000
  const xpProgress = userData ? ((userData.xp % 1000) / 1000) * 100 : 0

  const getInitials = () => {
    if (!userData) return "BB"
    return userData.username.slice(0, 2).toUpperCase()
  }

  return (
    <Sidebar className="border-r-2 border-primary/20 bg-gradient-to-b from-primary/10 to-accent/10">
      <SidebarHeader className="border-b border-primary/20 p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="rounded-full bg-gradient-to-r from-primary to-accent p-2">
            <Coins className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              BudgetBuddy
            </h1>
            <p className="text-xs text-muted-foreground">Level Up Your Money Game!</p>
          </div>
        </div>

        {/* User Stats Card */}
        {userData && (
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-primary/20">
            <div className="flex items-center space-x-3 mb-3">
              <Avatar className="h-10 w-10 border-2 border-primary/20">
                <AvatarImage src="/placeholder.svg?height=40&width=40" />
                <AvatarFallback className="bg-gradient-to-r from-primary to-accent text-white font-bold">
                  {getInitials()}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-semibold text-sm">{userData.username}</p>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-gradient-to-r from-primary to-accent text-white text-xs">
                    Level {userData.level}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{userData.xp} XP</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span>Progress to Level {userData.level + 1}</span>
                <span>{userData.xp % 1000}/1000 XP</span>
              </div>
              <Progress value={xpProgress} className="h-2" />
            </div>

            <div className="grid grid-cols-2 gap-2 mt-3 text-xs">
              <div className="text-center">
                <div className="font-bold text-yellow-600">{userData.coins}</div>
                <div className="text-muted-foreground">Coins</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-green-600">${userData.totalSaved}</div>
                <div className="text-muted-foreground">Saved</div>
              </div>
            </div>
          </div>
        )}

        <Button className="w-full mt-4 bg-gradient-to-r from-secondary to-primary hover:from-secondary/90 hover:to-primary/90 text-white">
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Transaction
        </Button>
      </SidebarHeader>

      <SidebarContent className="px-4">
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.href}
                className="hover:bg-primary/10 data-[active=true]:bg-gradient-to-r data-[active=true]:from-primary/20 data-[active=true]:to-accent/20 data-[active=true]:text-primary"
              >
                <Link href={item.href}>
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="border-t border-primary/20 p-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-full justify-start p-2">
              <div className="flex items-center space-x-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback className="bg-gradient-to-r from-primary to-accent text-white">
                    {getInitials()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 text-left">
                  <p className="text-sm font-medium">{userData?.username || "Player"}</p>
                  <p className="text-xs text-muted-foreground">{userData?.currentStreak || 0} day streak</p>
                </div>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout} className="text-red-600">
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
