"use client"

import type { TooltipProps } from "recharts"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface ChartTooltipProps extends Partial<TooltipProps<any, any>> {
  active?: boolean
  payload?: any[]  // eslint-disable-line @typescript-eslint/no-explicit-any
  label?: string
}

export function ChartTooltip({ active, payload, label }: ChartTooltipProps) {
  if (!active || !payload || !payload.length) return null

  return (
    <div className="rounded-lg border bg-background p-2 shadow-md">
      {label && <p className="mb-1 text-xs font-medium">{label}</p>}
      <div className="space-y-1">
        {payload.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full" style={{ backgroundColor: item.color }} />
            <span className="text-xs font-medium">{item.name}:</span>
            <span className="text-xs">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

