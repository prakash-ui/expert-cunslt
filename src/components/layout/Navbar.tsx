"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Globe, Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/ThemeToggle" // Add this import

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-6">
        <div className="flex items-center">
          <Link href="/" className="flex items-center mr-8 gap-2 hover:opacity-80 transition-opacity">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"/>
            </svg>
            <span className="text-2xl font-bold">Cunslt</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors duration-200">
              Home
            </Link>
            <Link href="/experts" className="text-sm font-medium hover:text-primary transition-colors duration-200">
              Find Experts
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm font-medium flex items-center hover:text-primary transition-colors duration-200 focus:outline-none">
                Resources
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-2 rounded-md shadow-lg bg-background border">
                <DropdownMenuItem className="hover:bg-accent px-4 py-2">
                  <Link href="/resources/guides" className="w-full">Guides</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-accent px-4 py-2">
                  <Link href="/resources/blog" className="w-full">Blog</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/pricing" className="text-sm font-medium hover:text-primary transition-colors duration-200">
              Pricing
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors duration-200">
              Contact
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-sm font-medium hover:text-primary transition-colors duration-200">
              Login
            </Link>
            <Button asChild size="sm">
              <Link href="/signup">Sign Up</Link>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="hover:bg-accent"
                >
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-2 rounded-md shadow-lg bg-background border" align="end">
                <DropdownMenuItem className="hover:bg-accent px-4 py-2">
                  English
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-accent px-4 py-2">
                  Spanish
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-accent px-4 py-2">
                  French
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <ThemeToggle /> {/* Add theme toggle here */}
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-accent"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container px-6 py-4 space-y-2">
            <Link 
              href="/" 
              className="block py-2 px-4 text-sm font-medium hover:text-primary hover:bg-accent transition-colors duration-200 rounded"
            >
              Home
            </Link>
            <Link 
              href="/experts" 
              className="block py-2 px-4 text-sm font-medium hover:text-primary hover:bg-accent transition-colors duration-200 rounded"
            >
              Find Experts
            </Link>
            <Link 
              href="/resources" 
              className="block py-2 px-4 text-sm font-medium hover:text-primary hover:bg-accent transition-colors duration-200 rounded"
            >
              Resources
            </Link>
            <Link 
              href="/pricing" 
              className="block py-2 px-4 text-sm font-medium hover:text-primary hover:bg-accent transition-colors duration-200 rounded"
            >
              Pricing
            </Link>
            <Link 
              href="/contact" 
              className="block py-2 px-4 text-sm font-medium hover:text-primary hover:bg-accent transition-colors duration-200 rounded"
            >
              Contact
            </Link>

            <div className="pt-4 border-t flex flex-col space-y-3">
              <Link 
                href="/login" 
                className="block py-2 px-4 text-sm font-medium hover:text-primary hover:bg-accent transition-colors duration-200 rounded"
              >
                Login
              </Link>
              <Button asChild>
                <Link href="/signup">Sign Up</Link>
              </Button>
              <ThemeToggle /> {/* Add theme toggle for mobile */}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}