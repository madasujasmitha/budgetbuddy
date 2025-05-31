import type * as React from "react"

const Chart = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

interface ChartTooltipContentProps {
  payload?: any[]
  label?: string
}

const ChartTooltipContent: React.FC<ChartTooltipContentProps> = ({ payload, label }) => {
  if (!payload || payload.length === 0) {
    return null
  }

  return (
    <div className="rounded-md border bg-popover p-4 text-popover-foreground shadow-md">
      {label && <div className="mb-2 text-sm font-medium">{label}</div>}
      {payload.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <div className="h-2 w-2 rounded-full" style={{ backgroundColor: item.color }} />
          <div className="text-xs">
            {item.name}: {item.value}
          </div>
        </div>
      ))}
    </div>
  )
}

const ChartContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-full">{children}</div>
}

const ChartLegend = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex items-center">{children}</div>
}

const ChartLegendItem = ({
  color,
  label,
}: {
  color: string
  label: string
}) => {
  return (
    <div className="flex items-center space-x-2">
      <div className={`h-3 w-3 rounded-full`} style={{ backgroundColor: color }} />
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  )
}

const ChartTooltip = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

export { Chart, ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendItem }
