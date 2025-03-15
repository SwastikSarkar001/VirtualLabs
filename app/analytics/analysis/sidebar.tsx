"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LuChevronLeft, LuChevronRight, LuLayoutDashboard, LuMenu, LuSettings, LuUsers } from "react-icons/lu"
import { FaChartBar } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";





export default function Sidebar({ className }: React.HTMLAttributes<HTMLDivElement>) {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = React.useState(false)
  const [isMobileOpen, setIsMobileOpen] = React.useState(false)

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }

  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen)
  }

  const navItems = [
    {
      title: "Home",
      href: "/",
      icon: IoHomeOutline,
    },
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: LuLayoutDashboard,
    },
    {
      title: "Analytics",
      href: "/analytics",
      icon: FaChartBar,
    },
    {
      title: "Users",
      href: "/users",
      icon: LuUsers,
    },
    {
      title: "Settings",
      href: "/settings",
      icon: LuSettings,
    },
  ]

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileSidebar}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-800 text-gray-200"
        aria-label="Toggle Menu"
      >
        <LuMenu className="h-5 w-5" />
      </button>

      {/* Mobile Sidebar Overlay */}
      {isMobileOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMobileSidebar} />
      )}

      {/* Mobile Sidebar */}
      <div
        className={
          `fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 text-gray-100 transform transition-transform duration-200 ease-in-out md:hidden" ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"}`
        }
      >
        <div className=" h-full py-6 flex flex-col">
          <div className="px-4 flex items-center justify-between mb-8">
            <span className="font-bold text-xl text-gray-100">MyApp</span>
            <button onClick={toggleMobileSidebar} className="p-1 rounded-md hover:bg-gray-800" aria-label="Close Menu">
              <LuChevronLeft className="h-5 w-5" />
            </button>
          </div>
          <div className="space-y-1 px-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  `flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? "bg-gray-800 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"}`
                }
                onClick={() => setIsMobileOpen(false)}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div
        className={
          `hidden md:flex flex-col h-max bg-gray-900 text-gray-100 border-r border-gray-800 transition-all duration-300" ${
          isCollapsed ? "w-[70px]" : "w-[240px]"} ${className}`
        }
      >
        <div className="p-4 flex items-center justify-between">
          {!isCollapsed && <span className="font-bold text-xl text-gray-100">MyApp</span>}
          <button
            onClick={toggleSidebar}
            className={`p-1 rounded-md hover:bg-gray-800 text-gray-300 ${isCollapsed ? "mx-auto" : ""}`}
            aria-label={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          >
            {isCollapsed ? <LuChevronRight className="h-5 w-5" /> : <LuChevronLeft className="h-5 w-5" />}
          </button>
        </div>

        <div className="flex-1 py-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                `flex items-center gap-3 mx-2 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                pathname === item.href ? "bg-gray-800 text-white" : "text-gray-300 hover:bg-gray-800 hover:text-white"}` 
              }
            >
              <item.icon className="h-5 w-5 shrink-0" />
              {!isCollapsed && <span>{item.title}</span>}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

