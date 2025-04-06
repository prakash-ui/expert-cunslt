"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart,
  Calendar,
  Clock,
  CreditCard,
  MessageSquare,
  Settings,
  User,
  FileText,
  BookOpen,
  Star,
  ChevronDown,
  Menu,
  X
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ExpertLayoutProps {
  children: React.ReactNode
}

export default function ExpertLayout({ children }: ExpertLayoutProps) {
  const pathname = usePathname()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const sidebarItems = [
    {
      title: "Dashboard",
      href: "/expert",
      icon: BarChart,
    },
    {
      title: "My Profile",
      href: "/expert/profile",
      icon: User,
    },
    {
      title: "Sessions",
      href: "/expert/sessions",
      icon: Calendar,
    },
    {
      title: "Availability",
      href: "/expert/availability",
      icon: Clock,
    },
    {
      title: "Messages",
      href: "/expert/messages",
      icon: MessageSquare,
    },
    {
      title: "Reviews",
      href: "/expert/reviews",
      icon: Star,
    },
    {
      title: "Resources",
      href: "/expert/resources",
      icon: BookOpen,
    },
    {
      title: "Earnings",
      href: "/expert/earnings",
      icon: CreditCard,
    },
    {
      title: "Documents",
      href: "/expert/documents",
      icon: FileText,
    },
    {
      title: "Settings",
      href: "/expert/settings",
      icon: Settings,
    },
  ]

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Top navigation */}
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-white px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <X /> : <Menu />}
          </Button>
          <Link href="/expert" className="flex items-center">
            <span className="text-xl font-bold">Cunslt <span className="text-sm text-zinc-500 ml-2">Expert</span></span>
          </Link>
        </div>
        <div className="flex-1" />
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder-expert.jpg" alt="Expert" />
              <AvatarFallback>DR</AvatarFallback>
            </Avatar>
            <div className="flex items-center">
              <span className="text-sm font-medium md:mr-2">Dr. Sarah Johnson</span>
              <ChevronDown className="h-4 w-4 text-zinc-400" />
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar - Mobile overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/50 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside
          className={cn(
            "fixed inset-y-0 z-50 mt-16 flex w-64 flex-col border-r bg-white transition-transform md:static md:translate-x-0",
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <nav className="flex-1 overflow-auto py-4">
            <div className="px-3 py-2">
              <div className="mb-2 px-4 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Expert Panel
              </div>
              <ul className="space-y-1 px-2">
                {sidebarItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                        pathname === item.href
                          ? "bg-zinc-100 text-zinc-900"
                          : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900"
                      )}
                    >
                      <item.icon className="h-5 w-5" />
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <div className="border-t p-4">
            <Button asChild variant="outline" className="w-full">
              <Link href="/">
                Switch to Client View
              </Link>
            </Button>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
