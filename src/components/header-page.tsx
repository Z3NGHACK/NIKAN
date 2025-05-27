"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function HeaderPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Business", href: "/business" },
    { name: "Service", href: "/service" },
    { name: "Contact Us", href: "/contact" },
  ]

  return (
    <header className="bg-white backdrop-blur-sm border-b border-slate-200 h-24 flex items-center sticky top-0 z-50 animate-in slide-in-from-top-6 duration-1000">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center justify-center min-w-14 max-w-24 min-h-14 max-h-24 transform hover:scale-110 transition-transform duration-300"
          >
            <Image
              src="/images/nikan_logo.png"
              alt="Nikan Trading Logo"
              width={96}
              height={96}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-all duration-300 cursor-pointer font-medium transform hover:scale-110 hover:-translate-y-1 animate-in fade-in-0 slide-in-from-top-6 ${
                  pathname === item.href ? "text-blue-600" : "text-black hover:text-blue-600"
                }`}
                style={{ animationDelay: `${300 + index * 100}ms`, animationDuration: "1000ms" }}
              >
                {item.name}
              </Link>
            ))}
            <div className="animate-in fade-in-0 slide-in-from-top-6 duration-1000" style={{ animationDelay: "800ms" }}>
              <Link href="/contact">
                <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-2 font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  Get in touch
                </button>
              </Link>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-black p-2 transform hover:scale-110 transition-transform duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <div className="w-6 h-6 flex items-center justify-center text-xl transform rotate-180 transition-transform duration-300">
                ✕
              </div>
            ) : (
              <div className="w-6 h-6 flex items-center justify-center text-xl">☰</div>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-24 left-0 right-0 bg-white border-b border-slate-200 shadow-lg animate-in slide-in-from-top-6 duration-300">
            <nav className="flex flex-col space-y-4 p-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-all duration-300 cursor-pointer font-medium py-2 transform hover:translate-x-2 animate-in fade-in-0 slide-in-from-left-6 ${
                    pathname === item.href ? "text-blue-600" : "text-black hover:text-blue-600"
                  }`}
                  style={{ animationDelay: `${index * 100}ms`, animationDuration: "500ms" }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/contact">
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-2 font-medium transition-all duration-300 mt-4 w-full transform hover:scale-105 animate-in fade-in-0 slide-in-from-bottom-6 duration-500"
                  style={{ animationDelay: "500ms" }}
                >
                  Get in touch
                </button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
