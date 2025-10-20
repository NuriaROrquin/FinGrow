"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts"
import { DownloadIcon, TrendingUpIcon, TrendingDownIcon, CalendarIcon, DollarSignIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

const monthlyIncomeExpense = [
	{ month: "Ene", income: 5000, expense: 2400, savings: 2600 },
	{ month: "Feb", income: 5000, expense: 1398, savings: 3602 },
	{ month: "Mar", income: 5200, expense: 3800, savings: 1400 },
	{ month: "Abr", income: 5200, expense: 3908, savings: 1292 },
	{ month: "May", income: 5500, expense: 4800, savings: 700 },
	{ month: "Jun", income: 5500, expense: 3800, savings: 1700 },
]

const categoryBreakdown = [
	{ category: "Comida", amount: 1200, percentage: 24 },
	{ category: "Servicios", amount: 1400, percentage: 28 },
	{ category: "Transporte", amount: 800, percentage: 16 },
	{ category: "Entretenimiento", amount: 600, percentage: 12 },
	{ category: "Compras", amount: 500, percentage: 10 },
	{ category: "Otros", amount: 500, percentage: 10 },
]

const savingsProgress = [
	{ month: "Ene", target: 2000, actual: 2600 },
	{ month: "Feb", target: 2000, actual: 3602 },
	{ month: "Mar", target: 2000, actual: 1400 },
	{ month: "Abr", target: 2000, actual: 1292 },
	{ month: "May", target: 2000, actual: 700 },
	{ month: "Jun", target: 2000, actual: 1700 },
]

const chartConfig = {
	income: {
		label: "Ingresos",
		color: "hsl(var(--chart-2))",
	},
	expense: {
		label: "Gastos",
		color: "hsl(var(--chart-1))",
	},
	savings: {
		label: "Ahorros",
		color: "hsl(var(--chart-3))",
	},
	amount: {
		label: "Monto",
		color: "hsl(var(--chart-1))",
	},
	target: {
		label: "Objetivo",
		color: "hsl(var(--chart-3))",
	},
	actual: {
		label: "Real",
		color: "hsl(var(--chart-2))",
	},
}

export default function ReportsPage() {
	const totalIncome = monthlyIncomeExpense.reduce((sum, m) => sum + m.income, 0)
	const totalExpense = monthlyIncomeExpense.reduce((sum, m) => sum + m.expense, 0)
	const totalSavings = monthlyIncomeExpense.reduce((sum, m) => sum + m.savings, 0)
	const avgMonthlySavings = totalSavings / monthlyIncomeExpense.length

	const [isExporting, setIsExporting] = useState(false)

	const handleExportPDF = () => {
		setIsExporting(true)

		// Crear estilos específicos para la impresión
		const printStyles = document.createElement("style")
		printStyles.innerHTML = `
      @media print {
        body * {
          visibility: hidden;
        }
        #report-content, #report-content * {
          visibility: visible;
        }
        #report-content {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
        }
        .no-print {
          display: none !important;
        }
        @page {
          size: A4;
          margin: 1cm;
        }
      }
    `
		document.head.appendChild(printStyles)

		// Pequeño delay para asegurar que los estilos se apliquen
		setTimeout(() => {
			window.print()
			document.head.removeChild(printStyles)
			setIsExporting(false)
		}, 250)
	}

	return (
		<div className="space-y-6">
			{/* Header */}
			<div className="flex items-center justify-between">
				<div>
					<h1 className="text-3xl font-bold text-balance">Reportes Financieros</h1>
					<p className="text-muted-foreground mt-1">Análisis completo de tus datos financieros</p>
				</div>
				<div className="flex items-center gap-2 no-print">
					<Select defaultValue="6months">
						<SelectTrigger className="w-[180px]">
							<CalendarIcon className="size-4 mr-2" />
							<SelectValue />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="1month">Último Mes</SelectItem>
							<SelectItem value="3months">Últimos 3 Meses</SelectItem>
							<SelectItem value="6months">Últimos 6 Meses</SelectItem>
							<SelectItem value="1year">Último Año</SelectItem>
							<SelectItem value="all">Todo el Tiempo</SelectItem>
						</SelectContent>
					</Select>
					<Button onClick={handleExportPDF} disabled={isExporting}>
						<DownloadIcon className="size-4" />
						{isExporting ? "Preparando..." : "Exportar PDF"}
					</Button>
				</div>
			</div>

			{/* Contenedor para exportar */}
			<div id="report-content">
				{/* Summary Cards */}
				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
					<Card>
						<CardHeader className="pb-2">
							<CardDescription>Ingresos Totales</CardDescription>
							<CardTitle className="text-2xl text-success">
								${totalIncome.toLocaleString()}
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-sm text-muted-foreground">Últimos 6 meses</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader className="pb-2">
							<CardDescription>Gastos Totales</CardDescription>
							<CardTitle className="text-2xl">
								${totalExpense.toLocaleString()}
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-sm text-muted-foreground">Últimos 6 meses</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader className="pb-2">
							<CardDescription>Ahorros Totales</CardDescription>
							<CardTitle className="text-2xl text-success">
								${totalSavings.toLocaleString()}
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-sm text-muted-foreground">Últimos 6 meses</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader className="pb-2">
							<CardDescription>Ahorro Mensual Promedio</CardDescription>
							<CardTitle className="text-2xl">
								${avgMonthlySavings.toFixed(0)}
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-sm text-muted-foreground">Por mes</p>
						</CardContent>
					</Card>
				</div>

				{/* Report Tabs */}
				<Tabs defaultValue="overview" className="space-y-4">
					<TabsList>
						<TabsTrigger value="overview">Resumen</TabsTrigger>
						<TabsTrigger value="spending">Análisis de Gastos</TabsTrigger>
						<TabsTrigger value="savings">Reporte de Ahorros</TabsTrigger>
					</TabsList>

					{/* Overview Tab */}
					<TabsContent value="overview" className="space-y-4">
						<Card>
							<CardHeader>
								<CardTitle>Ingresos vs Gastos</CardTitle>
								<CardDescription>Comparación mensual de ingresos y gastos</CardDescription>
							</CardHeader>
							<CardContent>
								<ChartContainer config={chartConfig} className="h-[400px] w-full">
									<BarChart
										data={monthlyIncomeExpense}
										margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
									>
										<CartesianGrid
											strokeDasharray="3 3"
											stroke="#e5e7eb"
											opacity={0.5}
										/>
										<XAxis
											dataKey="month"
											tick={{ fill: "#6b7280", fontSize: 12 }}
											axisLine={{ stroke: "#e5e7eb" }}
										/>
										<YAxis
											tick={{ fill: "#6b7280", fontSize: 12 }}
											axisLine={{ stroke: "#e5e7eb" }}
										/>
										<ChartTooltip
											content={<ChartTooltipContent />}
											cursor={{ fill: "rgba(139, 92, 246, 0.1)" }}
										/>
										<Bar
											dataKey="income"
											fill="#a78bfa"
											radius={[8, 8, 0, 0]}
											animationDuration={800}
											animationBegin={0}
										/>
										<Bar
											dataKey="expense"
											fill="#8b5cf6"
											radius={[8, 8, 0, 0]}
											animationDuration={800}
											animationBegin={100}
										/>
									</BarChart>
								</ChartContainer>
							</CardContent>
						</Card>

						<div className="grid gap-4 md:grid-cols-2">
							<Card>
								<CardHeader>
									<CardTitle>Resumen Financiero</CardTitle>
									<CardDescription>Métricas clave del período</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="space-y-4">
										<div className="flex items-center justify-between p-3 rounded-lg bg-success/10 border border-success/20">
											<div className="flex items-center gap-3">
												<TrendingUpIcon className="size-5 text-success" />
												<div>
													<p className="font-medium">Mes con Mayor Ingreso</p>
													<p className="text-sm text-muted-foreground">
														Mayo y Junio
													</p>
												</div>
											</div>
											<span className="font-semibold text-success">$5,500</span>
										</div>

										<div className="flex items-center justify-between p-3 rounded-lg bg-destructive/10 border border-destructive/20">
											<div className="flex items-center gap-3">
												<TrendingDownIcon className="size-5 text-destructive" />
												<div>
													<p className="font-medium">Mes con Mayor Gasto</p>
													<p className="text-sm text-muted-foreground">Mayo</p>
												</div>
											</div>
											<span className="font-semibold text-destructive">$4,800</span>
										</div>

										<div className="flex items-center justify-between p-3 rounded-lg bg-primary/10 border border-primary/20">
											<div className="flex items-center gap-3">
												<DollarSignIcon className="size-5 text-primary" />
												<div>
													<p className="font-medium">Mejor Mes de Ahorro</p>
													<p className="text-sm text-muted-foreground">Febrero</p>
												</div>
											</div>
											<span className="font-semibold text-primary">$3,602</span>
										</div>
									</div>
								</CardContent>
							</Card>

							<Card>
								<CardHeader>
									<CardTitle>Análisis y Recomendaciones</CardTitle>
									<CardDescription>Basado en tus datos financieros</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="space-y-3">
										<div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
											<p className="text-sm font-medium text-blue-900 dark:text-blue-100">
												Tu tasa de ahorro es del 32% - por encima del 20% recomendado
											</p>
										</div>

										<div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800">
											<p className="text-sm font-medium text-amber-900 dark:text-amber-100">
												Mayo tuvo gastos inusualmente altos. Revisa los gastos discrecionales.
											</p>
										</div>

										<div className="p-3 rounded-lg bg-success/10 border border-success/20">
											<p className="text-sm font-medium">
												Se detectó crecimiento constante de ingresos. Considera aumentar
												contribuciones de jubilación.
											</p>
										</div>
									</div>
								</CardContent>
							</Card>
						</div>
					</TabsContent>

					{/* Spending Analysis Tab */}
					<TabsContent value="spending" className="space-y-4">
						<Card>
							<CardHeader>
								<CardTitle>Gastos por Categoría</CardTitle>
								<CardDescription>Dónde va tu dinero cada mes</CardDescription>
							</CardHeader>
							<CardContent>
								<ChartContainer config={chartConfig} className="h-[350px] w-full">
									<BarChart
										data={categoryBreakdown}
										layout="vertical"
										margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
									>
										<CartesianGrid
											strokeDasharray="3 3"
											stroke="#e5e7eb"
											opacity={0.5}
										/>
										<XAxis
											type="number"
											tick={{ fill: "#6b7280", fontSize: 12 }}
											axisLine={{ stroke: "#e5e7eb" }}
										/>
										<YAxis
											dataKey="category"
											type="category"
											width={100}
											tick={{ fill: "#6b7280", fontSize: 12 }}
											axisLine={{ stroke: "#e5e7eb" }}
										/>
										<ChartTooltip
											content={<ChartTooltipContent />}
											cursor={{ fill: "rgba(139, 92, 246, 0.1)" }}
										/>
										<Bar
											dataKey="amount"
											fill="#8b5cf6"
											radius={[0, 8, 8, 0]}
											animationDuration={800}
											animationBegin={0}
										/>
									</BarChart>
								</ChartContainer>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Detalles por Categoría</CardTitle>
								<CardDescription>Desglose detallado de categorías de gasto</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="space-y-3">
									{categoryBreakdown.map((category) => (
										<div
											key={category.category}
											className="flex items-center justify-between p-3 rounded-lg border"
										>
											<div className="flex-1">
												<div className="flex items-center justify-between mb-2">
													<span className="font-medium">{category.category}</span>
													<div className="flex items-center gap-2">
														<Badge variant="outline">{category.percentage}%</Badge>
														<span className="font-semibold">
															${category.amount.toLocaleString()}
														</span>
													</div>
												</div>
												<div className="h-2 bg-muted rounded-full overflow-hidden">
													<div
														className="h-full bg-primary transition-all"
														style={{ width: `${category.percentage * 2.5}%` }}
													/>
												</div>
											</div>
										</div>
									))}
								</div>
							</CardContent>
						</Card>
					</TabsContent>

					{/* Savings Report Tab */}
					<TabsContent value="savings" className="space-y-4">
						<Card>
							<CardHeader>
								<CardTitle>Rendimiento de Ahorros</CardTitle>
								<CardDescription>Objetivo vs ahorros reales en el tiempo</CardDescription>
							</CardHeader>
							<CardContent>
								<ChartContainer config={chartConfig} className="h-[400px] w-full">
									<LineChart data={savingsProgress}>
										<CartesianGrid strokeDasharray="3 3" />
										<XAxis dataKey="month" />
										<YAxis />
										<ChartTooltip
											content={<ChartTooltipContent />}
											cursor={{ stroke: "rgba(0, 0, 0, 0.2)" }}
										/>
										<Line
											type="monotone"
											dataKey="target"
											stroke="#c084fc"
											strokeWidth={2}
											strokeDasharray="5 5"
										/>
										<Line type="monotone" dataKey="actual" stroke="#a78bfa" strokeWidth={2} />
									</LineChart>
								</ChartContainer>
							</CardContent>
						</Card>

						<div className="grid gap-4 md:grid-cols-3">
							<Card>
								<CardHeader className="pb-2">
									<CardDescription>Meses Sobre el Objetivo</CardDescription>
									<CardTitle className="text-2xl text-success">3/6</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-sm text-muted-foreground">50% de éxito</p>
								</CardContent>
							</Card>

							<Card>
								<CardHeader className="pb-2">
									<CardDescription>Total Ahorrado vs Objetivo</CardDescription>
									<CardTitle className="text-2xl">
										${totalSavings.toLocaleString()}
									</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-sm text-muted-foreground">Objetivo: $12,000</p>
								</CardContent>
							</Card>

							<Card>
								<CardHeader className="pb-2">
									<CardDescription>Tasa de Ahorro</CardDescription>
									<CardTitle className="text-2xl text-success">32%</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-sm text-muted-foreground">Del ingreso total</p>
								</CardContent>
							</Card>
						</div>
					</TabsContent>
				</Tabs>
			</div>
		</div>
	)
}
