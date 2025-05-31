"use client"

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
  Newspaper,
} from "lucide-react"
import { usePathname } from "next/navigation"
import Link from "next/link"

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

export function AppSidebar() {
  const pathname = usePathname()

  const menuItems = [
    {
      title: "Dashboard",
      icon: Home,
      href: "/",
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
      title: "Education",
      icon: BookText,
      href: "/education",
    },
    {
      title: "Progress",
      icon: TrendingUp,
      href: "/progress",
    },
    {
      title: "News Feed",
      icon: Newspaper,
      href: "/news",
    },
    {
      title: "Money Journal",
      icon: BookText,
      href: "/journal",
    },
  ]

  return (
    <Sidebar>
      <SidebarHeader className="flex flex-col items-center justify-center p-4">
        <div className="flex items-center space-x-2">
          <div className="rounded-full bg-teal-500 p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-white"
            >
              <path d="M12 6v12" />
              <path d="M6 12h12" />
            </svg>
          </div>
          <h1 className="text-xl font-bold">BudgetBuddy</h1>
        </div>
        <div className="mt-6 w-full">
          <Button className="w-full bg-teal-500 hover:bg-teal-600">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Transaction
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
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="ml-2">
              <p className="text-sm font-medium">Jamie Doe</p>
              <p className="text-xs text-muted-foreground">Age 16</p>
            </div>
          </div>
          <div className="flex space-x-1">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Settings className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
