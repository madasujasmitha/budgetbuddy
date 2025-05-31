"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

interface BackButtonProps {
  className?: string
  variant?: "default" | "outline" | "ghost"
}

export function BackButton({ className = "", variant = "outline" }: BackButtonProps) {
  const router = useRouter()

  return (
    <Button
      variant={variant}
      onClick={() => router.back()}
      className={`mb-4 border-primary text-primary hover:bg-primary hover:text-white ${className}`}
    >
      <ArrowLeft className="mr-2 h-4 w-4" />
      Back
    </Button>
  )
}
