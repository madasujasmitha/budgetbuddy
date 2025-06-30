"use client"

import type React from "react"

import { GameSidebar } from "@/components/game-sidebar"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { SidebarProvider } from "@/components/ui/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    // Check authentication status
    const checkAuth = () => {
      try {
        if (typeof window !== "undefined") {
          const isLoggedIn = localStorage.getItem("budgetbuddy_logged_in")
          const userData = localStorage.getItem("budgetbuddy_user")

          if (isLoggedIn === "true" && userData) {
            try {
              const user = JSON.parse(userData)
              if (user && (user.id || user.username)) {
                setIsAuthenticated(true)
                setIsLoading(false)
                return
              }
            } catch (parseError) {
              console.error("Error parsing user data:", parseError)
            }
          }

          // If we get here, authentication failed
          console.log("Authentication failed, redirecting to landing page")
          localStorage.removeItem("budgetbuddy_logged_in")
          localStorage.removeItem("budgetbuddy_user")
          localStorage.removeItem("budgetbuddy_session")
          router.push("/")
        }
      } catch (error) {
        console.error("Auth check error:", error)
        router.push("/")
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [router, isClient])

  if (!isClient || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading your adventure...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null // Will redirect in useEffect
  }

  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <GameSidebar />
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </SidebarProvider>
  )
}
