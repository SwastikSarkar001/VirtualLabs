"use client"

import {
  Area,
  AreaChart as RechartsAreaChart,
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

interface AreaChartProps {
  data: any[]  // eslint-disable-line @typescript-eslint/no-explicit-any
  areas: {
    dataKey: string
    name: string
    color: string
    fillOpacity?: number
    strokeWidth?: number
  }[]
  xAxisKey: string
  xAxisFormatter?: (value: any) => string  // eslint-disable-line @typescript-eslint/no-explicit-any
  yAxisUnit?: string
  title?: string
  description?: string
  className?: string
  showGrid?: boolean
  showLegend?: boolean
  height?: number
  stacked?: boolean
}

export function AreaChart({
  data,
  areas,
  xAxisKey,
  xAxisFormatter,
  yAxisUnit,
  title,
  description,
  className = "",
  showGrid = true,
  showLegend = true,
  height = 300,
  stacked = false,
}: AreaChartProps) {
  return (
    <ChartContainer title={title} description={description} className={className}>
      <ResponsiveContainer width="100%" height={height}>
        <RechartsAreaChart
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
          <YAxis 
            tickLine={false} 
            axisLine={false} 
            tick={{ fill: "var(--foreground)", fontSize: 12 }} 
            dx={-10}
            unit={yAxisUnit ? `${yAxisUnit}` : undefined}
          />
          <Tooltip
            content={({ active, payload, label }: TooltipProps<any, any>) => (  // eslint-disable-line @typescript-eslint/no-explicit-any
              <ChartTooltip active={active} payload={payload} label={label} unit={yAxisUnit} />
            )}
          />
          {showLegend && (
            <Legend verticalAlign="top" height={36} iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 12 }} />
          )}
          {areas.map((area) => (
            <Area
              key={area.dataKey}
              type="monotone"
              dataKey={area.dataKey}
              name={area.name}
              stroke={area.color}
              fill={area.color}
              fillOpacity={area.fillOpacity || 0.2}
              strokeWidth={area.strokeWidth || 2}
              stackId={stacked ? "stack" : undefined}
            />
          ))}
        </RechartsAreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
