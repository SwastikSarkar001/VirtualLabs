"use client"

import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart as RechartsRadarChart,
  ResponsiveContainer,
  Tooltip,
  type TooltipProps,
} from "recharts"

import { ChartContainer } from "./ChartContainer"
import { ChartTooltip } from "./ChartTooltip"

interface RadarChartProps {
  data: any[]  // eslint-disable-line @typescript-eslint/no-explicit-any
  radars: {
    dataKey: string
    name: string
    color: string
    fillOpacity?: number
    strokeWidth?: number
  }[]
  angleKey: string
  title?: string
  description?: string
  className?: string
  showGrid?: boolean
  showLegend?: boolean
  height?: number
  unit?: string
}

export function RadarChart({
  data,
  radars,
  angleKey,
  title,
  description,
  className = "",
  showGrid = true,
  showLegend = true,
  height = 400,
  unit,
}: RadarChartProps) {
  return (
    <ChartContainer title={title} description={description} className={className}>
      <ResponsiveContainer width="100%" height={height}>
        <RechartsRadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          {showGrid && <PolarGrid stroke="#7777" />}
          <PolarAngleAxis 
            dataKey={angleKey} 
            tick={{ fill: "var(--foreground)", fontSize: 12 }}
          />
          <PolarRadiusAxis 
            tick={{ fill: "var(--foreground)", fontSize: 12 }}
            // unit={unit ? ` ${unit}` : undefined}
          />
          <Tooltip
            content={({ active, payload }: TooltipProps<any, any>) => (  // eslint-disable-line @typescript-eslint/no-explicit-any
              <ChartTooltip active={active} payload={payload} unit={unit} />
            )}
          />
          {showLegend && (
            <Legend verticalAlign="bottom" height={36} iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 12 }} />
          )}
          {radars.map((radar) => (
            <Radar
              key={radar.dataKey}
              name={radar.name}
              dataKey={radar.dataKey}
              stroke={radar.color}
              fill={radar.color}
              fillOpacity={radar.fillOpacity || 0.2}
              strokeWidth={radar.strokeWidth || 2}
            />
          ))}
        </RechartsRadarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
