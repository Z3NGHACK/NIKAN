import Image from "next/image"
import logo from 'images/nikan_logo.png'
// import { Button } from "@/components/ui/button"
// import { ChevronDown } from "lucide-react"

export default function HeaderPage() {
  return (
    <div className= "bg-slate-900">
      {/* Header */}
      <header className="bg-white backdrop-blur-sm border-b border-slate-700 h-24 flex items-center">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center justify-center min-w-14 max-w-24 min-h-14 max-h-24">
                <img src="images/nikan_logo.png" alt="" />
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-1 text-black hover:text-blue-300 transition-colors cursor-pointer">
                <span>Home</span>
                {/* <ChevronDown className="w-4 h-4" /> */}
              </div>
              <div className="flex items-center space-x-1 text-black hover:text-blue-300 transition-colors cursor-pointer">
                <span>Business</span>
                {/* <ChevronDown className="w-4 h-4" /> */}
              </div>
              <div className="flex items-center space-x-1 text-black hover:text-blue-300 transition-colors cursor-pointer">
                <span>About Us</span>
                {/* <ChevronDown className="w-4 h-4" /> */}
              </div>
              <div className="flex items-center space-x-1 text-black hover:text-blue-300 transition-colors cursor-pointer">
                <span>Company</span>
                {/* <ChevronDown className="w-4 h-4" /> */}
              </div>
              <div className="flex items-center space-x-1 text-black hover:text-blue-300 transition-colors cursor-pointer">
                <span>Seafood</span>
                {/* <ChevronDown className="w-4 h-4" /> */}
              </div>
              <div className="flex items-center space-x-1 text-black hover:text-blue-300 transition-colors cursor-pointer">
                <span>Contact Us</span>
                {/* <ChevronDown className="w-4 h-4" /> */}
              </div>
             
              <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 h-10">Get in touch</button>
            </nav>

            {/* Mobile menu button */}
            {/* <button className="md:hidden text-black h-20">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button> */}
          </div>
        </div>
      </header>

    </div>
  )
}
