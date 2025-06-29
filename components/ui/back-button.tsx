"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface BackButtonProps {
  className?: string
  fallbackPath?: string
}

export function BackButton({ className, fallbackPath = "/" }: BackButtonProps) {
  const router = useRouter()

  const handleBack = () => {
    try {
      // Check if there's history to go back to
      if (typeof window !== "undefined" && window.history.length > 1) {
        router.back()
      } else {
        // Fallback to home page if no history
        router.push(fallbackPath)
      }
    } catch (error) {
      console.error("Navigation error:", error)
      // Ultimate fallback
      router.push(fallbackPath)
    }
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleBack}
      className={cn("flex items-center space-x-2 text-muted-foreground hover:text-foreground", className)}
    >
      <ArrowLeft className="h-4 w-4" />
      <span>Back</span>
    </Button>
  )
}
