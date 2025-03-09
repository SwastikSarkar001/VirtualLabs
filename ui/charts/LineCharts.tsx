"use client"

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart as RechartsLineChart,
  ResponsiveContainer,
  Tooltip,
  type TooltipProps,
  XAxis,
  YAxis,
} from "recharts"

import { ChartContainer } from "./ChartContainer"
import { ChartTooltip } from "./ChartTooltip"

interface LineChartProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[]
  lines: {
    dataKey: string
    name: string
    color: string
    strokeWidth?: number
  }[]
  xAxisKey: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  xAxisFormatter?: (value: any) => string
  title?: string
  description?: string
  className?: string
  showGrid?: boolean
  showLegend?: boolean
  height?: number
}

export function LineChart({
  data,
  lines,
  xAxisKey,
  xAxisFormatter,
  title,
  description,
  className = "",
  showGrid = true,
  showLegend = true,
  height = 300,
}: LineChartProps) {
  return (
    <ChartContainer title={title} description={description} className={className}>
      <ResponsiveContainer width="100%" height={height}>
        <RechartsLineChart
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
          />
          {showLegend && (
            <Legend verticalAlign="top" height={36} iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 12 }} />
          )}
          {lines.map((line) => (
            <Line
              key={line.dataKey}
              type="monotone"
              dataKey={line.dataKey}
              name={line.name}
              stroke={line.color}
              strokeWidth={line.strokeWidth || 2}
              dot={{ r: 3, fill: line.color, strokeWidth: 0 }}
              activeDot={{ r: 6, fill: line.color, strokeWidth: 0 }}
            />
          ))}
        </RechartsLineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

