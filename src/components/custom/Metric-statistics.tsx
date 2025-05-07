"use client";

import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  Label,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Quote } from "lucide-react";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { country: "USA", assets: 49 },
  { country: "UK", assets: 18 },
  { country: "CA", assets: 1.8 },
  { country: "AUS", assets: 4 },
];

const chartConfig = {
  desktop: {
    label: "Assets Lost",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export default function MetricsStatistics() {
  // Data for unclaimed assets chart
  // const unclaimedAssetsData = [
  //   { name: "Unclaimed Assets in the US", value: 58 },
  //   { name: "Unclaimed Assets in the japan", value: 70 },
  //   // { name: "Unclaimed Assets in the South Africa", value: 200 },
  // ];

  // Data for will/succession plan chart
  const willData = [
    { name: "No Will/Plan", value: 33 },
    { name: "Has Will/Plan", value: 67 },
  ];

  // Data for crypto owners chart
  const cryptoData = [
    { name: "Haven't Shared Access", value: 23 },
    { name: "Have Shared Access", value: 77 },
  ];

  // Colors
  const COLORS = ["#ef4444", "#f97316", "#10b981", "#3b82f6"];
  const SECONDARY_COLORS = ["#fecaca", "#fed7aa", "#d1fae5", "#bfdbfe"];

  return (
    <section id="stats" className="py-16 bg-background">
      <div className=" px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
            The Hidden Cost of Poor Estate Planning
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The numbers reveal a troubling reality about our digital assets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Unclaimed Assets Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Unclaimed Assets Lost (in Billion Dollars) </CardTitle>
              <CardDescription>Over the years (up till 2024)</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig}>
                <BarChart accessibilityLayer data={chartData}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="country"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Bar
                    dataKey="assets"
                    name={"Unclaimed Assets "}
                    fill="var(--color-chart-1)"
                    radius={8}
                  />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Will/Digital Succession Plan Chart */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl text-center">
                1 in 3 people
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={willData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      <Cell key={`cell-0`} fill={COLORS[1]} />
                      <Cell key={`cell-1`} fill={SECONDARY_COLORS[1]} />
                      <Label
                        value="33%"
                        position="center"
                        fill="var(--foreground)"
                        style={{ fontSize: "1.5rem", fontWeight: "bold" }}
                      />
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <p className="text-center text-muted-foreground mt-4">
                only approximately 26% to 34% of Americans have an estate plan
              </p>
            </CardContent>
          </Card>

          {/* Crypto Owners Chart */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl text-center">
                23% of crypto owners
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={cryptoData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      startAngle={90}
                      endAngle={-270}
                      paddingAngle={0}
                      dataKey="value"
                    >
                      <Cell key={`cell-0`} fill={COLORS[2]} />
                      <Cell key={`cell-1`} fill={SECONDARY_COLORS[2]} />
                      <Label
                        value="23%"
                        position="center"
                        fill="var(--foreground)"
                        style={{ fontSize: "1.5rem", fontWeight: "bold" }}
                      />
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <p className="text-center text-muted-foreground mt-4">
                {
                  "Only 23% of cryptocurrency holders have a documented estate plan for their digital assets. "
                }
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quote */}
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <div className="relative">
            <Quote className="h-10 w-10 text-primary/20 absolute -top-6 -left-4" />
            <blockquote className="text-2xl font-medium text-foreground italic">
              {`"Your digital life is valuable—don't let it disappear."`}
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
