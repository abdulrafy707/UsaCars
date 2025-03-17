"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface DropdownProps {
  trigger: React.ReactNode
  children: React.ReactNode
  className?: string
}

export function CustomDropdown({ trigger, children, className }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleDropdown = () => setIsOpen(!isOpen)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <div onClick={toggleDropdown} className="cursor-pointer">
        {trigger}
      </div>
      {isOpen && (
        <div
          className={cn(
            "absolute z-[9999] mt-2 min-w-[220px] rounded-sm border border-gray-700 bg-gray-900 p-1 shadow-lg shadow-black/30 animate-in fade-in-50 duration-100",
            className,
          )}
        >
          {children}
        </div>
      )}
    </div>
  )
}

interface DropdownItemProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export function CustomDropdownItem({ children, className, onClick }: DropdownItemProps) {
  return (
    <div
      className={cn(
        "cursor-pointer px-3 py-2 text-sm text-gray-200 hover:bg-gray-800 hover:text-yellow-400 transition-colors",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

