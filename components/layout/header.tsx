"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, ChevronDown, Menu, X, Globe } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CustomDropdown, CustomDropdownItem } from "@/components/ui/custom-dropdown"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`bg-black sticky w-full top-0 z-[1000] transition-all duration-300 ${
        scrolled ? "shadow-lg shadow-black/30" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <div className="flex items-center">
          {/* Logo */}
          <Link href="/" className="mr-6">
            <img src="/usacarslogo.PNG" alt="USA Cars Logo" className="h-10 object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-yellow-400 font-medium text-sm uppercase tracking-wide hover:text-yellow-300 transition-colors"
            >
              Home
            </Link>

            <CustomDropdown
              trigger={
                <span className="text-white font-medium text-sm uppercase tracking-wide hover:text-yellow-400 flex items-center gap-1 transition-colors">
                  Shipping & Logistics <ChevronDown className="h-4 w-4 opacity-70" />
                </span>
              }
            >
              <CustomDropdownItem>
                <Link href="/shipping/calculator" className="block w-full">
                  Shipping Calculator
                </Link>
              </CustomDropdownItem>
              <CustomDropdownItem>
                <Link href="/shipping/services" className="block w-full">
                  Shipping Services
                </Link>
              </CustomDropdownItem>
              <CustomDropdownItem>
                <Link href="/shipping/receiving-your-car" className="block w-full">
                  Receive your car at destination port
                </Link>
              </CustomDropdownItem>
            </CustomDropdown>

            <CustomDropdown
              trigger={
                <span className="text-white font-medium text-sm uppercase tracking-wide hover:text-yellow-400 flex items-center gap-1 transition-colors">
                  How to buy <ChevronDown className="h-4 w-4 opacity-70" />
                </span>
              }
            >
              <CustomDropdownItem>
                <Link href="/how-to-buy/general" className="block w-full">
                  General Registration
                </Link>
              </CustomDropdownItem>
              <CustomDropdownItem>
                <Link href="/how-to-buy/deposit" className="block w-full">
                  Deposit
                </Link>
              </CustomDropdownItem>
              <CustomDropdownItem>
                <Link href="/how-to-buy/buying-process" className="block w-full">
                  Vehicle purchase
                </Link>
              </CustomDropdownItem>
              <CustomDropdownItem>
                <Link href="/how-to-buy/payment" className="block w-full">
                  Payment
                </Link>
              </CustomDropdownItem>
              <CustomDropdownItem>
                <Link href="#" className="block w-full">
                  Fees
                </Link>
              </CustomDropdownItem>
              <CustomDropdownItem>
                <Link href="/shipping/general" className="block w-full">
                  Shipping
                </Link>
              </CustomDropdownItem>
              <CustomDropdownItem>
                <Link href="/how-to-buy/safety-advise" className="block w-full">
                  Safety advice
                </Link>
              </CustomDropdownItem>
              <CustomDropdownItem>
                <Link href="/how-to-buy/membership" className="block w-full">
                  Membership levels
                </Link>
              </CustomDropdownItem>
            </CustomDropdown>

            <CustomDropdown
              trigger={
                <span className="text-white font-medium text-sm uppercase tracking-wide hover:text-yellow-400 flex items-center gap-1 transition-colors">
                  About us <ChevronDown className="h-4 w-4 opacity-70" />
                </span>
              }
            >
              <CustomDropdownItem>
                <Link href="/about-us/company" className="block w-full">
                  Company
                </Link>
              </CustomDropdownItem>
              <CustomDropdownItem>
                <Link href="#" className="block w-full">
                  Contacts
                </Link>
              </CustomDropdownItem>
              <CustomDropdownItem>
                <Link href="#" className="block w-full">
                  Customer reviews
                </Link>
              </CustomDropdownItem>
            </CustomDropdown>

            <CustomDropdown
              trigger={
                <span className="text-white font-medium text-sm uppercase tracking-wide hover:text-yellow-400 flex items-center gap-1 transition-colors">
                  Help <ChevronDown className="h-4 w-4 opacity-70" />
                </span>
              }
            >
              <CustomDropdownItem>
                <Link href="/help/video-guides" className="block w-full">
                  Video Guides
                </Link>
              </CustomDropdownItem>
              <CustomDropdownItem>
                <Link href="#" className="block w-full">
                  Webinars
                </Link>
              </CustomDropdownItem>
              <CustomDropdownItem>
                <Link href="#" className="block w-full">
                  Rules & policies
                </Link>
              </CustomDropdownItem>
              <CustomDropdownItem>
                <Link href="/help/faq" className="block w-full">
                  FAQ
                </Link>
              </CustomDropdownItem>
            </CustomDropdown>

            <Link
              href="/search"
              className="text-white font-medium text-sm uppercase tracking-wide hover:text-yellow-400 transition-colors"
            >
              Search
            </Link>
          </nav>
        </div>

        {/* Right side controls */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Language selector - hidden on smallest screens */}
          <div className="hidden xs:block">
            <Select defaultValue="en">
              <SelectTrigger className="w-16 sm:w-24 border-gray-700 bg-transparent hover:bg-gray-900 transition-colors">
                <SelectValue>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-yellow-400" />
                    <span className="hidden sm:inline text-white">EN</span>
                  </div>
                </SelectValue>
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-gray-700">
                <SelectItem value="en">
                  <div className="flex items-center gap-2">
                    <img src="https://flagcdn.com/w20/us.png" alt="US Flag" className="h-3 w-5 object-cover" />
                    <span className="text-white">English</span>
                  </div>
                </SelectItem>
                <SelectItem value="es">
                  <div className="flex items-center gap-2">
                    <img src="https://flagcdn.com/w20/es.png" alt="Spanish Flag" className="h-3 w-5 object-cover" />
                    <span className="text-white">Español</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Search button - hidden on mobile */}
          <Button variant="ghost" size="icon" className="hidden sm:flex text-white hover:bg-gray-800 transition-colors">
            <Search className="h-5 w-5" />
          </Button>

          {/* Login link - hidden on mobile */}
          <Link
           href="/login"
            className="text-white font-medium text-sm uppercase tracking-wide hover:text-yellow-400 hidden sm:block transition-colors"
          >
            Log in
          </Link>

          {/* Register button - always visible but smaller on mobile */}
          <Link href="/register">
  <Button className="bg-yellow-400 text-black hover:bg-yellow-500 px-3 sm:px-5 py-2 text-sm font-medium uppercase tracking-wide transition-colors">
    Register
  </Button>
</Link>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-gray-800 ml-1 transition-colors"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="max-w-7xl mx-auto py-4 px-4 space-y-4">
            <Link href="/" className="block text-yellow-400 font-medium text-sm uppercase tracking-wide py-2">
              Home
            </Link>

            <MobileDropdown title="Shipping & Logistics">
              <Link href="/shipping/calculator" className="block py-2 pl-4 text-gray-300 hover:text-yellow-400 transition-colors">
                Shipping Calculator
              </Link>
              <Link href="/shipping/services" className="block py-2 pl-4 text-gray-300 hover:text-yellow-400 transition-colors">
                Shipping Services
              </Link>
              <Link href="/shipping/receiving-your-car" className="block py-2 pl-4 text-gray-300 hover:text-yellow-400 transition-colors">
                Receive your car at destination port
              </Link>
            </MobileDropdown>

            <MobileDropdown title="How to buy">
              <Link href="/how-to-buy/general" className="block py-2 pl-4 text-gray-300 hover:text-yellow-400 transition-colors">
                General Registration
              </Link>
              <Link href="/how-to-buy/deposit" className="block py-2 pl-4 text-gray-300 hover:text-yellow-400 transition-colors">
                Deposit
              </Link>
              <Link href="/how-to-buy/buying-process" className="block py-2 pl-4 text-gray-300 hover:text-yellow-400 transition-colors">
                Vehicle purchase
              </Link>
              <Link href="/how-to-buy/payment" className="block py-2 pl-4 text-gray-300 hover:text-yellow-400 transition-colors">
                Payment
              </Link>
              <Link href="#" className="block py-2 pl-4 text-gray-300 hover:text-yellow-400 transition-colors">
                Fees
              </Link>
              <Link href="/shipping/general" className="block py-2 pl-4 text-gray-300 hover:text-yellow-400 transition-colors">
                Shipping
              </Link>
              <Link href="/how-to-buy/safety-advise" className="block py-2 pl-4 text-gray-300 hover:text-yellow-400 transition-colors">
                Safety advice
              </Link>
              <Link href="/how-to-buy/membership" className="block py-2 pl-4 text-gray-300 hover:text-yellow-400 transition-colors">
                Membership levels
              </Link>
            </MobileDropdown>

            <MobileDropdown title="About us">
              <Link href="/about-us/company" className="block py-2 pl-4 text-gray-300 hover:text-yellow-400 transition-colors">
                Company
              </Link>
              <Link href="#" className="block py-2 pl-4 text-gray-300 hover:text-yellow-400 transition-colors">
                Contacts
              </Link>
              <Link href="#" className="block py-2 pl-4 text-gray-300 hover:text-yellow-400 transition-colors">
                Customer reviews
              </Link>
            </MobileDropdown>

            <MobileDropdown title="Help">
              <Link href="/help/video-guides" className="block py-2 pl-4 text-gray-300 hover:text-yellow-400 transition-colors">
                Video Guides
              </Link>
              <Link href="#" className="block py-2 pl-4 text-gray-300 hover:text-yellow-400 transition-colors">
                Webinars
              </Link>
              <Link href="#" className="block py-2 pl-4 text-gray-300 hover:text-yellow-400 transition-colors">
                Rules & policies
              </Link>
              <Link href="/help/faq" className="block py-2 pl-4 text-gray-300 hover:text-yellow-400 transition-colors">
                FAQ
              </Link>
            </MobileDropdown>

            <Link
              href="/search"
              className="block text-white font-medium text-sm uppercase tracking-wide py-2 hover:text-yellow-400 transition-colors"
            >
              Search
            </Link>

            {/* Mobile-only language selector */}
            <div className="xs:hidden py-2">
  <p className="text-gray-400 mb-2 text-sm uppercase tracking-wide">Language</p>
  <div className="flex gap-4">
    <button className="flex items-center gap-2 text-yellow-400 transition-colors">
      <img src="https://flagcdn.com/w20/us.png" alt="US Flag" className="h-3 w-5 object-cover" />
      <span className="text-sm">English</span>
    </button>
    <button className="flex items-center gap-2 text-white hover:text-yellow-400 transition-colors">
      <img src="https://flagcdn.com/w20/es.png" alt="Spanish Flag" className="h-3 w-5 object-cover" />
      <span className="text-sm">Español</span>
    </button>
    <button className="flex items-center gap-2 text-white hover:text-yellow-400 transition-colors">
      <img src="https://flagcdn.com/w20/bg.png" alt="Bulgarian Flag" className="h-3 w-5 object-cover" />
      <span className="text-sm">Български</span>
    </button>
  </div>
</div>


            {/* Mobile-only login link */}
            <div className="sm:hidden pt-2 border-t border-gray-800">
              <Link
                href="/login"
                className="block text-white font-medium text-sm uppercase tracking-wide py-2 hover:text-yellow-400 transition-colors"
              >
                Log in
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

// Mobile dropdown component
function MobileDropdown({ title, children }: { title: string; children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
        className="flex items-center justify-between w-full text-white font-medium text-sm uppercase tracking-wide py-2 hover:text-yellow-400 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && <div className="mt-1 mb-2">{children}</div>}
    </div>
  )
}