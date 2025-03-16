"use client"

import { InstituteProp } from "@/data/data"
import { useState } from "react"
import { LuSearch } from "react-icons/lu"

interface AnalyticsSidebarProps {
  institutes: Omit<InstituteProp, 'src'>[]
  selectedInstitute: string | null
  onSelectInstitute: (instituteId: string) => void
}

export default function AnalyticsSidebar({ institutes, selectedInstitute, onSelectInstitute }: AnalyticsSidebarProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const filteredInstitutes = institutes.filter((institute) =>
    institute.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <>
      {/* Mobile toggle */}
      <div className="md:hidden mb-4">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="w-full flex items-center justify-between p-3 bg-violet-950/50 rounded-lg border border-violet-500/30 text-left"
        >
          <span>
            {selectedInstitute
              ? institutes.find((i) => i.id.toString() === selectedInstitute)?.name || "Select Institute"
              : "Select Institute"}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 transition-transform ${isMobileOpen ? "transform rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      <div
        className={`
        md:w-80 shrink-0 bg-violet-950/30 rounded-xl border border-violet-500/30 overflow-hidden h-max
        ${isMobileOpen ? "block" : "hidden md:block"}
      `}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4 text-violet-300">Institutes</h2>

          <div className="relative mb-4">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <LuSearch className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search institutes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-violet-950/50 border border-violet-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-sm"
            />
          </div>

          <div className="space-y-1 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
            {filteredInstitutes.length === 0 ? (
              <div className="text-gray-400 text-center py-4">No institutes found</div>
            ) : (
              filteredInstitutes.map((institute) => (
                <button
                  key={institute.id}
                  onClick={() => {
                    onSelectInstitute(institute.id.toString())
                    setIsMobileOpen(false)
                  }}
                  className={`
                    w-full text-left px-3 py-2.5 rounded-lg transition-colors
                    ${
                      selectedInstitute === institute.id.toString()
                        ? "bg-violet-600/50 text-white border-l-4 border-violet-400"
                        : "hover:bg-violet-900/50 text-gray-300"
                    }
                  `}
                >
                  {institute.name}
                </button>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  )
}

