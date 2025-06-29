"use client"

import type React from "react"

import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface BackButtonProps {
  className?: string
  href?: string
  children?: React.ReactNode
}

export function BackButton({ className, href, children }: BackButtonProps) {
  const router = useRouter()

  const handleBack = () => {
    if (href) {
      router.push(href)
    } else {
      router.back()
    }
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleBack}
      className={cn("flex items-center text-muted-foreground hover:text-foreground", className)}
    >
      <ArrowLeft className="mr-2 h-4 w-4" />
      {children || "Back"}
    </Button>
  )
}
