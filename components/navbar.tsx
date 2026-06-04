"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/90 backdrop-blur-md border border-gray-700/50"
          : "bg-gray-900/70 backdrop-blur-sm border border-gray-800/30"
      } rounded-full px-6 py-3`}
    >
      <div className="flex items-center justify-between min-w-[400px]">
        <Link href="/#home" className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
          Fede Garcia
        </Link>

        <div className="flex items-center space-x-6">
          <Link href="/#home" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            home
          </Link>
          <Link href="/#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            about me
          </Link>
          <Link href="/#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            contact
          </Link>
          <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            blog
          </Link>
        </div>
      </div>
    </nav>
  )
}
