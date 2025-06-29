"use client"

import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface BackButtonProps {
  className?: string
  href?: string
}

export function BackButton({ className, href }: BackButtonProps) {
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
      onClick={handleBack}
      className={cn("flex items-center space-x-2 text-muted-foreground hover:text-foreground", className)}
    >
      <ArrowLeft className="h-4 w-4" />
      <span>Back</span>
    </Button>
  )
}
