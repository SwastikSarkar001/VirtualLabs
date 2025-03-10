"use client"

import {
  Cell,
  Legend,
  Pie,
  PieChart as RechartsPieChart,
  ResponsiveContainer,
  Tooltip,
  type TooltipProps,
} from "recharts"

import { ChartContainer } from "./ChartContainer"
import { ChartTooltip } from "./ChartTooltip"

interface PieChartProps {
  data: {
    name: string
    value: number
    color: string
  }[]
  dataKey?: string
  nameKey?: string
  title?: string
  description?: string
  className?: string
  showLegend?: boolean
  height?: number
  innerRadius?: number
  outerRadius?: number
  paddingAngle?: number
}

export function PieChart({
  data,
  dataKey = "value",
  nameKey = "name",
  title,
  description,
  className = "",
  showLegend = true,
  height = 300,
  innerRadius = 0,
  outerRadius = 80,
  paddingAngle = 2,
}: PieChartProps) {
  return (
    <ChartContainer title={title} description={description} className={className}>
      <ResponsiveContainer width="100%" height={height}>
        <RechartsPieChart margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
            <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            paddingAngle={paddingAngle}
            dataKey={dataKey}
            nameKey={nameKey}
            label={({ value }) => {
              const total = data.reduce((sum, entry) => sum + entry.value, 0)
              const percentage = ((value / total) * 100).toFixed(2)
              return `${percentage}%`
            }}
            >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} stroke="#7777" radius={20} style={{fontSize: 12}} />
            ))}
            </Pie>
          <Tooltip
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            content={({ active, payload }: TooltipProps<any, any>) => (
              <ChartTooltip active={active} payload={payload} />
            )}
          />
          {showLegend && (
            <Legend
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
              iconType="circle"
              iconSize={8}
              wrapperStyle={{ fontSize: 12, paddingTop: 24 }}
            />
          )}
        </RechartsPieChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

