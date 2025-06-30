"use client"

import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "./button"

interface BackButtonProps {
  className?: string
}

export function BackButton({ className }: BackButtonProps) {
  const router = useRouter()

  return (
    <Button variant="ghost" size="sm" onClick={() => router.back()} className={`flex items-center gap-2 ${className}`}>
      <ArrowLeft className="h-4 w-4" />
      Back
    </Button>
  )
}
