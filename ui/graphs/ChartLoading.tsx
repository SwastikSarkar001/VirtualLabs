"use client"

import { LuLoader } from 'react-icons/lu'

interface ChartLoadingProps {
  height?: number
  message?: string
}

export function ChartLoading({ height = 300, message = "Loading chart data..." }: ChartLoadingProps) {
  return (
    <div 
      className="flex flex-col items-center justify-center rounded-lg border p-4 bg-background"
      style={{ height: `${height}px` }}
    >
      <LuLoader className="h-8 w-8 animate-spin text-gray-400 mb-2" />
      <p className="text-sm text-gray-400">{message}</p>
    </div>
  )
}