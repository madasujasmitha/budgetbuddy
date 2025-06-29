"use client"

import type React from "react"

import { GameSidebar } from "@/components/game-sidebar"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check authentication status
    const checkAuth = () => {
      try {
        if (typeof window !== "undefined") {
          const isLoggedIn = localStorage.getItem("budgetbuddy_logged_in")
          const userData = localStorage.getItem("budgetbuddy_user")

          if (isLoggedIn === "true" && userData) {
            const user = JSON.parse(userData)
            if (user && user.id) {
              setIsAuthenticated(true)
            } else {
              // Invalid user data, redirect to login
              router.push("/")
            }
          } else {
            // Not logged in, redirect to landing page
            router.push("/")
          }
        }
      } catch (error) {
        console.error("Auth check error:", error)
        router.push("/")
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [router])

  if (isLoading) {
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
    <div className="flex h-screen bg-background">
      <GameSidebar />
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  )
}
