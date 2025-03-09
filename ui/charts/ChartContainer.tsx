"use client"

interface ChartContainerProps {
  children: React.ReactNode
  className?: string
  title?: string
  description?: string
}

export function ChartContainer({ children, className = "", title, description }: ChartContainerProps) {
  return (
    <div className={`w-full rounded-lg border p-4 ${className}`}>
      {title && <h3 className="mb-2 text-lg font-medium">{title}</h3>}
      {description && <p className="mb-4 text-sm text-gray-400">{description}</p>}
      <div className="chart-wrapper">
        {children}
      </div>
    </div>
  )
}

