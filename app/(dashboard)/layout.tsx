import type React from "react"
import { GameSidebar } from "@/components/game-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <GameSidebar />
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </SidebarProvider>
  )
}
