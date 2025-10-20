"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PlusIcon, TrendingUpIcon, AlertCircleIcon, CheckCircleIcon, PiggyBankIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

const mockBudgets = [
  {
    id: 1,
    category: "Comida y Restaurantes",
    limit: 500,
    spent: 385.5,
    period: "mensual",
    icon: "🍔",
  },
  {
    id: 2,
    category: "Transporte",
    limit: 300,
    spent: 260,
    period: "mensual",
    icon: "🚗",
  },
  {
    id: 3,
    category: "Entretenimiento",
    limit: 200,
    spent: 230,
    period: "mensual",
    icon: "🎬",
  },
  {
    id: 4,
    category: "Servicios y Facturas",
    limit: 400,
    spent: 320,
    period: "mensual",
    icon: "💡",
  },
  {
    id: 5,
    category: "Compras",
    limit: 350,
    spent: 180,
    period: "mensual",
    icon: "🛍️",
  },
]

const mockSavingsGoals = [
  {
    id: 1,
    name: "Fondo de Emergencia",
    target: 10000,
    current: 6500,
    deadline: "2025-12-31",
    icon: "🏥",
  },
  {
    id: 2,
    name: "Vacaciones en Europa",
    target: 5000,
    current: 2800,
    deadline: "2025-08-15",
    icon: "✈️",
  },
  {
    id: 3,
    name: "Laptop Nueva",
    target: 2000,
    current: 1650,
    deadline: "2025-06-30",
    icon: "💻",
  },
  {
    id: 4,
    name: "Entrada para Casa",
    target: 50000,
    current: 18500,
    deadline: "2027-01-01",
    icon: "🏠",
  },
]

export default function BudgetsPage() {
  const [isBudgetDialogOpen, setIsBudgetDialogOpen] = useState(false)
  const [isSavingsDialogOpen, setIsSavingsDialogOpen] = useState(false)

  const getBudgetStatus = (spent: number, limit: number) => {
    const percentage = (spent / limit) * 100
    if (percentage >= 100) return { status: "exceeded", color: "text-destructive", icon: AlertCircleIcon }
    if (percentage >= 80) return { status: "warning", color: "text-amber-500", icon: AlertCircleIcon }
    return { status: "good", color: "text-success", icon: CheckCircleIcon }
  }

  const totalBudget = mockBudgets.reduce((sum, b) => sum + b.limit, 0)
  const totalSpent = mockBudgets.reduce((sum, b) => sum + b.spent, 0)
  const totalSavingsTarget = mockSavingsGoals.reduce((sum, g) => sum + g.target, 0)
  const totalSavingsCurrent = mockSavingsGoals.reduce((sum, g) => sum + g.current, 0)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-balance">Presupuestos y Ahorros</h1>
          <p className="text-muted-foreground mt-1">Gestiona tus límites de gasto y metas de ahorro</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Presupuesto Total</CardDescription>
            <CardTitle className="text-2xl">${totalBudget.toLocaleString()}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Asignación mensual</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Gastado</CardDescription>
            <CardTitle className="text-2xl">${totalSpent.toLocaleString()}</CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={(totalSpent / totalBudget) * 100} className="h-2" />
            <p className="text-sm text-muted-foreground mt-2">
              {((totalSpent / totalBudget) * 100).toFixed(1)}% del presupuesto usado
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Metas de Ahorro</CardDescription>
            <CardTitle className="text-2xl">{mockSavingsGoals.length}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Metas activas</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Ahorrado</CardDescription>
            <CardTitle className="text-2xl text-success">${totalSavingsCurrent.toLocaleString()}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              {((totalSavingsCurrent / totalSavingsTarget) * 100).toFixed(1)}% del objetivo
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="budgets" className="space-y-4">
        <TabsList>
          <TabsTrigger value="budgets">Presupuestos</TabsTrigger>
          <TabsTrigger value="savings">Metas de Ahorro</TabsTrigger>
        </TabsList>

        <TabsContent value="budgets" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Presupuestos Mensuales</h2>
            <Dialog open={isBudgetDialogOpen} onOpenChange={setIsBudgetDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <PlusIcon className="size-4" />
                  Agregar Presupuesto
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Crear Nuevo Presupuesto</DialogTitle>
                  <DialogDescription>Establece un límite de gasto para una categoría</DialogDescription>
                </DialogHeader>
                <AddBudgetForm onClose={() => setIsBudgetDialogOpen(false)} />
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {mockBudgets.map((budget) => {
              const percentage = (budget.spent / budget.limit) * 100
              const status = getBudgetStatus(budget.spent, budget.limit)
              const StatusIcon = status.icon

              return (
                <Card key={budget.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-3xl">{budget.icon}</div>
                        <div>
                          <CardTitle className="text-lg">{budget.category}</CardTitle>
                          <CardDescription className="capitalize">{budget.period}</CardDescription>
                        </div>
                      </div>
                      <StatusIcon className={`size-5 ${status.color}`} />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-baseline justify-between">
                      <span className="text-2xl font-bold">${budget.spent.toFixed(2)}</span>
                      <span className="text-sm text-muted-foreground">de ${budget.limit.toFixed(2)}</span>
                    </div>
                    <Progress value={percentage} className="h-2" />
                    <div className="flex items-center justify-between text-sm">
                      <span className={status.color}>{percentage.toFixed(1)}% usado</span>
                      <span className="text-muted-foreground">
                        ${(budget.limit - budget.spent).toFixed(2)} restante
                      </span>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>

        <TabsContent value="savings" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Metas de Ahorro</h2>
            <Dialog open={isSavingsDialogOpen} onOpenChange={setIsSavingsDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <PlusIcon className="size-4" />
                  Agregar Meta
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Crear Meta de Ahorro</DialogTitle>
                  <DialogDescription>Establece un monto objetivo y fecha límite para tu ahorro</DialogDescription>
                </DialogHeader>
                <AddSavingsGoalForm onClose={() => setIsSavingsDialogOpen(false)} />
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {mockSavingsGoals.map((goal) => {
              const percentage = (goal.current / goal.target) * 100
              const daysLeft = Math.ceil(
                (new Date(goal.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24),
              )

              return (
                <Card key={goal.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-3xl">{goal.icon}</div>
                        <div>
                          <CardTitle className="text-lg">{goal.name}</CardTitle>
                          <CardDescription>
                            {daysLeft > 0 ? `${daysLeft} días restantes` : "Fecha límite pasada"}
                          </CardDescription>
                        </div>
                      </div>
                      {percentage >= 100 ? (
                        <Badge className="bg-success text-white">Completado</Badge>
                      ) : (
                        <Badge variant="outline">{percentage.toFixed(0)}%</Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-baseline justify-between">
                      <span className="text-2xl font-bold text-success">${goal.current.toLocaleString()}</span>
                      <span className="text-sm text-muted-foreground">de ${goal.target.toLocaleString()}</span>
                    </div>
                    <Progress value={percentage} className="h-2" />
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        ${(goal.target - goal.current).toLocaleString()} por alcanzar
                      </span>
                      <span className="text-muted-foreground">
                        {new Date(goal.deadline).toLocaleDateString("es-ES", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Análisis de Presupuesto</CardTitle>
          <CardDescription>Consejos para mejorar tu salud financiera</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800">
              <AlertCircleIcon className="size-5 text-amber-600 dark:text-amber-500 mt-0.5" />
              <div>
                <p className="font-medium text-amber-900 dark:text-amber-100">
                  Presupuesto de entretenimiento excedido
                </p>
                <p className="text-sm text-amber-700 dark:text-amber-300 mt-1">
                  Has gastado $230 de tu presupuesto de $200 en entretenimiento. Considera reducir gastos
                  discrecionales.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg bg-success/10 border border-success/20">
              <TrendingUpIcon className="size-5 text-success mt-0.5" />
              <div>
                <p className="font-medium text-success-foreground">¡Gran progreso en ahorros!</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Estás al 82.5% de tu meta de Laptop Nueva. ¡Sigue así!
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <PiggyBankIcon className="size-5 text-blue-600 dark:text-blue-500 mt-0.5" />
              <div>
                <p className="font-medium text-blue-900 dark:text-blue-100">Oportunidad de ahorro</p>
                <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                  Tienes $320 restantes en tu presupuesto. Considera asignar algo a tus metas de ahorro.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function AddBudgetForm({ onClose }: { onClose: () => void }) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onClose()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="budget-category">Categoría</Label>
        <Select>
          <SelectTrigger id="budget-category">
            <SelectValue placeholder="Selecciona categoría" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="food">Comida y Restaurantes</SelectItem>
            <SelectItem value="transport">Transporte</SelectItem>
            <SelectItem value="entertainment">Entretenimiento</SelectItem>
            <SelectItem value="bills">Servicios y Facturas</SelectItem>
            <SelectItem value="shopping">Compras</SelectItem>
            <SelectItem value="health">Salud</SelectItem>
            <SelectItem value="education">Educación</SelectItem>
            <SelectItem value="other">Otros</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="budget-limit">Límite de Presupuesto</Label>
        <Input id="budget-limit" type="number" placeholder="0.00" step="0.01" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="budget-period">Período</Label>
        <Select defaultValue="monthly">
          <SelectTrigger id="budget-period">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="weekly">Semanal</SelectItem>
            <SelectItem value="monthly">Mensual</SelectItem>
            <SelectItem value="yearly">Anual</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex gap-2 justify-end pt-4">
        <Button type="button" variant="outline" onClick={onClose}>
          Cancelar
        </Button>
        <Button type="submit">Crear Presupuesto</Button>
      </div>
    </form>
  )
}

function AddSavingsGoalForm({ onClose }: { onClose: () => void }) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onClose()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="goal-name">Nombre de la Meta</Label>
        <Input id="goal-name" placeholder="ej., Fondo de Emergencia" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="goal-target">Monto Objetivo</Label>
        <Input id="goal-target" type="number" placeholder="0.00" step="0.01" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="goal-current">Monto Actual</Label>
        <Input id="goal-current" type="number" placeholder="0.00" step="0.01" defaultValue="0" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="goal-deadline">Fecha Objetivo</Label>
        <Input id="goal-deadline" type="date" required />
      </div>

      <div className="flex gap-2 justify-end pt-4">
        <Button type="button" variant="outline" onClick={onClose}>
          Cancelar
        </Button>
        <Button type="submit">Crear Meta</Button>
      </div>
    </form>
  )
}
