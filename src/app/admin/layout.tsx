"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart,
  Calendar,
  CreditCard,
  Settings,
  Users,
  MessageSquare,
  Shield,
  HelpCircle,
  User,
  ChevronDown,
  Menu,
  X,
  Layout
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface AdminLayoutProps {
  children: React.ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const pathname = usePathname()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const sidebarItems = [
    {
      title: "Dashboard",
      href: "/admin",
      icon: BarChart,
    },
    {
      title: "Users",
      href: "/admin/users",
      icon: Users,
    },
    {
      title: "Experts",
      href: "/admin/experts",
      icon: User,
    },
    {
      title: "Sessions",
      href: "/admin/sessions",
      icon: Calendar,
    },
    {
      title: "Messages",
      href: "/admin/messages",
      icon: MessageSquare,
    },
    {
      title: "Payments",
      href: "/admin/payments",
      icon: CreditCard,
    },
    {
      title: "Reports",
      href: "/admin/reports",
      icon: Layout,
    },
    {
      title: "Settings",
      href: "/admin/settings",
      icon: Settings,
    },
    {
      title: "Moderation",
      href: "/admin/moderation",
      icon: Shield,
    },
    {
      title: "Support",
      href: "/admin/support",
      icon: HelpCircle,
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
          <Link href="/admin" className="flex items-center">
            <span className="text-xl font-bold">Cunslt <span className="text-sm text-zinc-500 ml-2">Admin</span></span>
          </Link>
        </div>
        <div className="flex-1" />
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder-admin.jpg" alt="Admin" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
            <div className="flex items-center">
              <span className="text-sm font-medium md:mr-2">Admin User</span>
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
                Admin Panel
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
                Exit Admin Panel
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
