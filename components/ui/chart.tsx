"use client"

import * as React from "react"
import { ResponsiveContainer } from "recharts"
import { cn } from "@/lib/utils"

const THEMES = { light: "", dark: ".dark" } as const

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode
    icon?: React.ComponentType
  } & ({ color?: string; theme?: never } | { color?: never; theme: Record<keyof typeof THEMES, string> })
}

type ChartContextProps = {
  config: ChartConfig
}

const ChartContext = React.createContext<ChartContextProps | null>(null)

function useChart() {
  const context = React.useContext(ChartContext)

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />")
  }

  return context
}

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig
    children: React.ComponentProps<typeof ResponsiveContainer>["children"]
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId()
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        ref={ref}
        className={cn(
          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
          className,
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <ResponsiveContainer>{children}</ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
})
ChartContainer.displayName = "Chart"

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(([_, config]) => config.theme || config.color)

  if (!colorConfig.length) {
    return null
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) =>
              `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color = itemConfig.theme?.[theme as keyof typeof itemConfig.theme] || itemConfig.color
    return color ? `  --color-${key}: ${color};` : null
  })
  .join("\n")}
}
`,
          )
          .join(""),
      }}
    />
  )
}

const ChartTooltip = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    active?: boolean
    payload?: Array<any>
    label?: string
  }
>(({ active, payload, label, className, ...props }, ref) => {
  const { config } = useChart()

  if (!active || !payload?.length) {
    return null
  }

  return (
    <div
      ref={ref}
      className={cn(
        "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
        className,
      )}
      {...props}
    >
      {label && <div className="font-medium text-foreground">{label}</div>}
      <div className="grid gap-1.5">
        {payload.map((item, index) => {
          const key = `${label}-${index}`
          const itemConfig = config[item.dataKey as keyof typeof config] || {}

          return (
            <div
              key={key}
              className="flex w-full items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground"
            >
              <div
                className="shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]"
                style={
                  {
                    "--color-bg": `var(--color-${item.dataKey})`,
                    "--color-border": `var(--color-${item.dataKey})`,
                  } as React.CSSProperties
                }
              />
              <div className="flex flex-1 justify-between leading-none">
                <div className="grid gap-1.5">
                  <span className="text-muted-foreground">{itemConfig.label || item.dataKey}</span>
                </div>
                <span className="font-mono font-medium tabular-nums text-foreground">{item.value}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
})
ChartTooltip.displayName = "ChartTooltip"

const ChartTooltipContent = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof ChartTooltip>>(
  ({ active, payload, label, indicator = "dot", nameKey, labelKey, ...props }, ref) => {
    return <ChartTooltip ref={ref} active={active} payload={payload} label={label} {...props} />
  },
)
ChartTooltipContent.displayName = "ChartTooltipContent"

const ChartLegend = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    payload?: Array<any>
  }
>(({ className, payload, ...props }, ref) => {
  const { config } = useChart()

  if (!payload?.length) {
    return null
  }

  return (
    <div ref={ref} className={cn("flex items-center justify-center gap-4", className)} {...props}>
      {payload.map((item) => {
        const key = `${item.dataKey}`
        const itemConfig = config[item.dataKey as keyof typeof config] || {}

        return (
          <div
            key={key}
            className={cn("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground")}
          >
            <div
              className="h-2 w-2 shrink-0 rounded-[2px]"
              style={{
                backgroundColor: `var(--color-${item.dataKey})`,
              }}
            />
            {itemConfig.icon && <itemConfig.icon />}
            <span className="text-muted-foreground">{itemConfig.label}</span>
          </div>
        )
      })}
    </div>
  )
})
ChartLegend.displayName = "ChartLegend"

// Export the Chart as an alias to ChartContainer for compatibility
export const Chart = ChartContainer
export { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartStyle }
