"use client"

import type React from "react"

import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
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
      variant="outline"
      onClick={handleBack}
      className={cn("border-primary text-primary hover:bg-primary hover:text-white", className)}
    >
      <ArrowLeft className="mr-2 h-4 w-4" />
      {children || "Back"}
    </Button>
  )
}
