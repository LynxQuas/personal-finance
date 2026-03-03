import * as React from "react"
import { Label, Pie, PieChart } from "recharts"
import type { ChartConfig } from "@/components/ui/chart"
import type { Budget } from "@/types"
import { Card, CardContent } from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartConfig = {
  spent: {
    label: "Spent",
  },
} satisfies ChartConfig

type BudgetPieChartProps = {
  budgetData: Array<Budget>
}

export function BudgetPieChart({ budgetData }: BudgetPieChartProps) {
  const chartData = budgetData.map((data) => ({
    budget: data.category,
    spent: 10,
    limit: data.maximum,
    fill: data.theme,
  }))

  const total_limit = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.limit, 0)
  }, [])

  const total_spent = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.spent, 0)
  }, [])

  return (
    <Card className="flex flex-row border-none shadow-none">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto self-center aspect-square"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />

            <Pie
              data={chartData}
              dataKey="spent"
              nameKey="budget"
              innerRadius={70}
              stroke="none"
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          ${total_spent}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          of ${total_limit} limit
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
