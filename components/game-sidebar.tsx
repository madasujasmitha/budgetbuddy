"use client"

import {
  Home,
  Target,
  Briefcase,
  MessageSquare,
  BookText,
  Award,
  Settings,
  LogOut,
  PlusCircle,
  Heart,
  Lightbulb,
  Rocket,
  Map,
  Smile,
  BotIcon as Robot,
} from "lucide-react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { useState } from "react"

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
import { Progress } from "@/components/ui/progress"

export function GameSidebar() {
  const pathname = usePathname()
  const [xp, setXp] = useState(750)
  const [level, setLevel] = useState(5)
  const maxXp = 1000

  const menuItems = [
    {
      title: "Home Base",
      icon: Home,
      href: "/dashboard",
    },
    {
      title: "Money Log",
      icon: BookText,
      href: "/transactions",
    },
    {
      title: "Quests & Goals",
      icon: Target,
      href: "/goals",
    },
    {
      title: "Job Board",
      icon: Briefcase,
      href: "/jobs",
    },
    {
      title: "AI Money Mentor",
      icon: MessageSquare,
      href: "/coach",
    },
    {
      title: "Skill Tree",
      icon: Rocket,
      href: "/skills",
    },
    {
      title: "Money Journal",
      icon: Heart,
      href: "/journal",
    },
    {
      title: "Future Impact",
      icon: Lightbulb,
      href: "/future",
    },
    {
      title: "Local Economy",
      icon: Map,
      href: "/local",
    },
    {
      title: "Achievements",
      icon: Award,
      href: "/achievements",
    },
    {
      title: "Emotional Intelligence",
      icon: Smile,
      href: "/emotional-intelligence",
    },
  ]

  const handleLogout = () => {
    // In a real app, you would implement logout logic here
    window.location.href = "/"
  }

  return (
    <Sidebar>
      <SidebarHeader className="flex flex-col items-center justify-center p-4">
        <div className="flex items-center space-x-2">
          <div className="rounded-full bg-primary p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-white animate-pulse-slow"
            >
              <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
            </svg>
          </div>
          <h1 className="text-xl font-bold">BudgetBuddy</h1>
        </div>
        <div className="mt-6 w-full space-y-2">
          <Button className="w-full bg-secondary hover:bg-secondary/90 animate-sparkle">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Adventure
          </Button>
          <Button className="w-full bg-accent hover:bg-accent/90">
            <Briefcase className="mr-2 h-4 w-4" />
            Find Jobs
          </Button>
          <Button className="w-full bg-primary hover:bg-primary/90">
            <Robot className="mr-2 h-4 w-4" />
            AI Money Mentor
          </Button>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.title}>
                <Link href={item.href}>
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Avatar className="h-10 w-10 border-2 border-secondary">
                <AvatarImage src="/placeholder.svg?height=40&width=40" />
                <AvatarFallback className="bg-primary text-white">JD</AvatarFallback>
              </Avatar>
              <div className="ml-2">
                <div className="flex items-center">
                  <p className="text-sm font-medium">Jamie Doe</p>
                  <div className="ml-2 rounded-full bg-primary/20 px-2 py-0.5 text-xs font-bold text-primary">
                    Lvl {level}
                  </div>
                </div>
                <div className="mt-1 w-full">
                  <div className="flex items-center justify-between text-xs">
                    <span>XP</span>
                    <span>
                      {xp}/{maxXp}
                    </span>
                  </div>
                  <Progress value={(xp / maxXp) * 100} className="h-2 progress-xp" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end space-x-1">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Settings className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleLogout}>
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
