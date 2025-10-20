"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import {
  UsersIcon,
  TrendingUpIcon,
  DollarSignIcon,
  AlertCircleIcon,
  CheckCircleIcon,
  GraduationCapIcon,
  BuildingIcon,
} from "lucide-react"
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table"

const employeeEngagement = [
  { month: "Ene", active: 145, enrolled: 180 },
  { month: "Feb", active: 152, enrolled: 185 },
  { month: "Mar", active: 158, enrolled: 190 },
  { month: "Abr", active: 165, enrolled: 195 },
  { month: "May", active: 172, enrolled: 200 },
  { month: "Jun", active: 178, enrolled: 205 },
]

const financialHealthScore = [
  { month: "Ene", score: 62 },
  { month: "Feb", score: 64 },
  { month: "Mar", score: 66 },
  { month: "Abr", score: 68 },
  { month: "May", score: 71 },
  { month: "Jun", score: 73 },
]

const departmentData = [
  { department: "Ingeniería", employees: 85, avgScore: 75, participation: 88 },
  { department: "Ventas", employees: 45, avgScore: 68, participation: 82 },
  { department: "Marketing", employees: 32, avgScore: 72, participation: 85 },
  { department: "Operaciones", employees: 28, avgScore: 70, participation: 79 },
  { department: "RRHH", employees: 15, avgScore: 78, participation: 93 },
]

const topConcerns = [
  { concern: "Ahorros de Emergencia", employees: 78, percentage: 38 },
  { concern: "Planificación de Jubilación", employees: 65, percentage: 32 },
  { concern: "Gestión de Deudas", employees: 52, percentage: 25 },
  { concern: "Conocimiento de Inversiones", employees: 48, percentage: 23 },
]

const chartConfig = {
  active: {
    label: "Usuarios Activos",
    color: "#8b5cf6",
  },
  enrolled: {
    label: "Inscritos",
    color: "#a78bfa",
  },
  score: {
    label: "Puntaje de Salud",
    color: "#8b5cf6",
  },
}

export default function CompanyDashboardPage() {
  const totalEmployees = 205
  const activeUsers = 178
  const avgHealthScore = 73
  const completedCourses = 342

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex size-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <BuildingIcon className="size-6" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-balance">Panel Empresarial</h1>
          <p className="text-muted-foreground mt-1">Resumen de bienestar financiero de empleados</p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total de Empleados</CardDescription>
            <CardTitle className="text-2xl">{totalEmployees}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <UsersIcon className="size-4" />
              <span>{activeUsers} usuarios activos</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Tasa de Participación</CardDescription>
            <CardTitle className="text-2xl">{((activeUsers / totalEmployees) * 100).toFixed(1)}%</CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={(activeUsers / totalEmployees) * 100} className="h-2" />
            <p className="text-sm text-muted-foreground mt-2">Objetivo: 85%</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Salud Financiera Promedio</CardDescription>
            <CardTitle className="text-2xl text-success">{avgHealthScore}/100</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-1 text-sm text-success">
              <TrendingUpIcon className="size-4" />
              <span>+11 puntos este trimestre</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Cursos Completados</CardDescription>
            <CardTitle className="text-2xl">{completedCourses}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <GraduationCapIcon className="size-4" />
              <span>Entre todos los empleados</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Participación de Empleados</CardTitle>
            <CardDescription>Usuarios activos vs empleados inscritos en el tiempo</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <LineChart data={employeeEngagement}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} cursor={{ stroke: "rgba(0, 0, 0, 0.2)" }} />
                <Line
                    type="monotone"
                    dataKey="active"
                    stroke={chartConfig.active.color}
                    strokeWidth={2}
                />
                <Line
                    type="monotone"
                    dataKey="enrolled"
                    stroke={chartConfig.enrolled.color}
                    strokeWidth={2}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tendencia de Salud Financiera</CardTitle>
            <CardDescription>Puntaje promedio de salud financiera de empleados</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <LineChart data={financialHealthScore}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[0, 100]} />
                <ChartTooltip content={<ChartTooltipContent />} cursor={{ stroke: "rgba(0, 0, 0, 0.2)" }} />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke={chartConfig.score.color}
                  strokeWidth={2}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Tabs for detailed views */}
      <Tabs defaultValue="departments" className="space-y-4">
        <TabsList>
          <TabsTrigger value="departments">Por Departamento</TabsTrigger>
          <TabsTrigger value="concerns">Principales Preocupaciones</TabsTrigger>
          <TabsTrigger value="insights">Análisis</TabsTrigger>
        </TabsList>

        {/* Departments Tab */}
        <TabsContent value="departments">
          <Card>
            <CardHeader>
              <CardTitle>Desglose por Departamento</CardTitle>
              <CardDescription>Métricas de bienestar financiero por departamento</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Departamento</TableHead>
                    <TableHead>Empleados</TableHead>
                    <TableHead>Puntaje Promedio</TableHead>
                    <TableHead>Participación</TableHead>
                    <TableHead>Estado</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {departmentData.map((dept) => (
                    <TableRow key={dept.department}>
                      <TableCell className="font-medium">{dept.department}</TableCell>
                      <TableCell>{dept.employees}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">{dept.avgScore}/100</span>
                          <Progress value={dept.avgScore} className="h-2 w-20" />
                        </div>
                      </TableCell>
                      <TableCell>{dept.participation}%</TableCell>
                      <TableCell>
                        {dept.avgScore >= 75 ? (
                          <Badge className="">
                            <CheckCircleIcon className="size-3 mr-1" />
                            Excelente
                          </Badge>
                        ) : dept.avgScore >= 65 ? (
                          <Badge variant="outline">Bueno</Badge>
                        ) : (
                          <Badge variant="secondary">
                            <AlertCircleIcon className="size-3 mr-1" />
                            Necesita Atención
                          </Badge>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Top Concerns Tab */}
        <TabsContent value="concerns">
          <Card>
            <CardHeader>
              <CardTitle>Principales Preocupaciones Financieras</CardTitle>
              <CardDescription>Desafíos financieros más comunes entre empleados</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topConcerns.map((concern, index) => (
                  <div key={concern.concern} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold text-sm">
                          {index + 1}
                        </div>
                        <span className="font-medium">{concern.concern}</span>
                      </div>
                      <div className="text-right">
                        <span className="font-semibold">{concern.employees} empleados</span>
                        <span className="text-sm text-muted-foreground ml-2">({concern.percentage}%)</span>
                      </div>
                    </div>
                    <Progress value={concern.percentage * 2.5} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Insights Tab */}
        <TabsContent value="insights">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Tendencias Positivas</CardTitle>
                <CardDescription>Áreas que muestran mejora</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-success/10 border border-success/20">
                    <CheckCircleIcon className="size-5 text-success mt-0.5" />
                    <div>
                      <p className="font-medium">Mayor Participación</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        La participación de empleados ha crecido un 23% en los últimos 6 meses
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-success/10 border border-success/20">
                    <TrendingUpIcon className="size-5 text-success mt-0.5" />
                    <div>
                      <p className="font-medium">Mejor Salud Financiera</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        El puntaje promedio de salud financiera aumentó de 62 a 73
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-success/10 border border-success/20">
                    <GraduationCapIcon className="size-5 text-success mt-0.5" />
                    <div>
                      <p className="font-medium">Alta Finalización de Cursos</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        342 cursos completados con 87% de satisfacción
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recomendaciones</CardTitle>
                <CardDescription>Acciones para mejorar el bienestar de empleados</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
                    <AlertCircleIcon className="size-5 text-blue-600 dark:text-blue-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-blue-900 dark:text-blue-100">Enfocarse en Ahorros de Emergencia</p>
                      <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                        38% de empleados necesitan ayuda para construir fondos de emergencia. Considerar talleres
                        específicos.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800">
                    <DollarSignIcon className="size-5 text-amber-600 dark:text-amber-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-amber-900 dark:text-amber-100">
                        Apoyo en Planificación de Jubilación
                      </p>
                      <p className="text-sm text-amber-700 dark:text-amber-300 mt-1">
                        Ofrecer sesiones informativas sobre planes de jubilación para mejorar la preparación.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
                    <UsersIcon className="size-5 text-purple-600 dark:text-purple-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-purple-900 dark:text-purple-100">
                        Aumentar Participación en Operaciones
                      </p>
                      <p className="text-sm text-purple-700 dark:text-purple-300 mt-1">
                        El departamento de Operaciones tiene la menor participación. Programar presentaciones de equipo.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
