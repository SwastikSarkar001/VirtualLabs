"use client"

import {
  Bar,
  BarChart as RechartsBarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  type TooltipProps,
  XAxis,
  YAxis,
} from "recharts"

import { ChartContainer } from "./ChartContainer"
import { ChartTooltip } from "./ChartTooltip"

interface BarChartProps {
  data: any[]  // eslint-disable-line @typescript-eslint/no-explicit-any
  bars: {
    dataKey: string
    name: string
    color: string
    radius?: number
  }[]
  xAxisKey: string
  xAxisFormatter?: (value: any) => string  // eslint-disable-line @typescript-eslint/no-explicit-any
  title?: string
  description?: string
  className?: string
  showGrid?: boolean
  showLegend?: boolean
  height?: number
  stacked?: boolean
}

export function BarChart({
  data,
  bars,
  xAxisKey,
  xAxisFormatter,
  title,
  description,
  className = "",
  showGrid = true,
  showLegend = true,
  height = 300,
  stacked = false,
}: BarChartProps) {
  return (
    <ChartContainer title={title} description={description} className={className}>
      <ResponsiveContainer width="100%" height={height}>
        <RechartsBarChart
          data={data}
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
        >
          {showGrid && <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#7777" />}
          <XAxis
            dataKey={xAxisKey}
            tickLine={false}
            axisLine={false}
            tickFormatter={xAxisFormatter}
            tick={{ fill: "var(--foreground)", fontSize: 12 }}
            dy={10}
          />
          <YAxis tickLine={false} axisLine={false} tick={{ fill: "var(--foreground)", fontSize: 12 }} dx={-10} />
          <Tooltip
            content={({ active, payload, label }: TooltipProps<any, any>) => (  // eslint-disable-line @typescript-eslint/no-explicit-any
              <ChartTooltip active={active} payload={payload} label={label} />
            )}
            cursor={{ fill: "#777", opacity: 0.1 }}
          />
          {showLegend && (
            <Legend verticalAlign="top" height={36} iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 12 }} />
          )}
          {bars.map((bar) => (
            <Bar
              key={bar.dataKey}
              dataKey={bar.dataKey}
              name={bar.name}
              fill={bar.color}
              radius={bar.radius || 4}
              stackId={stacked ? "stack" : undefined}
            />
          ))}
        </RechartsBarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

