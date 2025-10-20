"use client"

import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeftIcon, ClockIcon } from "lucide-react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

const articles = [
	{
		id: "1",
		title: "5 Formas de Construir un Fondo de Emergencia",
		category: "Ahorros",
		readTime: "7 min",
		date: "2025-01-15",
		content: `Un fondo de emergencia es la base de una vida financiera estable. Te protege frente a imprevistos —como una pérdida de empleo, un gasto médico o una reparación del hogar— y evita que recurras a deudas costosas. A continuación, te presentamos estrategias detalladas para construirlo paso a paso.

## 💡 ¿Por qué es tan importante?
Tener un fondo de emergencia no es solo una recomendación financiera: es una **red de seguridad emocional y económica**. Saber que contás con un respaldo te permite tomar decisiones sin miedo, afrontar imprevistos sin endeudarte y planificar tu futuro con tranquilidad.

---

### 1. **Automatiza tus ahorros**
La automatización es tu mejor aliada para construir disciplina sin esfuerzo. Configurá una transferencia automática desde tu cuenta principal hacia una cuenta exclusiva para emergencias cada vez que recibas tu salario.

> Por ejemplo, si destinás $75 por mes, al cabo de un año habrás acumulado $900 sin darte cuenta.

📌 Consejo: tratá ese ahorro como un gasto fijo, igual que el alquiler o los servicios. Cuanto más previsible sea, más rápido crecerá.

---

### 2. **Aplica la regla del 50/30/20**
Dividí tus ingresos en tres grandes categorías:
- **50%** para necesidades básicas (vivienda, comida, transporte)
- **30%** para deseos y ocio
- **20%** para ahorro e inversión

Dentro de ese 20%, **priorizá tu fondo de emergencia** hasta alcanzar entre **3 y 6 meses de tus gastos esenciales**. Si tus gastos mensuales son $200.000, tu objetivo sería entre $600.000 y $1.200.000.

---

### 3. **Aprovechá los ingresos extra**
Bonos, aguinaldos o devoluciones de impuestos son oportunidades ideales para avanzar. En lugar de gastarlos, destiná al menos una parte a tu fondo.

💬 Pensalo así: ese dinero no estaba en tu presupuesto mensual, por lo tanto, no lo vas a extrañar.

---

### 4. **Reducí gastos innecesarios**
Hacé una auditoría de tus gastos recurrentes: suscripciones, membresías, servicios duplicados o compras impulsivas. Cancelá lo que no uses y **redirigí ese dinero al fondo**.

> Un simple ajuste de $2.000 por mes equivale a $24.000 al año, suficiente para cubrir un mes de gastos básicos.

---

### 5. **Establecé metas incrementales**
No intentes construir el fondo completo de una sola vez. Empezá con metas pequeñas y alcanzables:
- Meta 1: $50.000 (para emergencias menores)
- Meta 2: $200.000 (1 mes de gastos)
- Meta 3: $600.000 (3 meses de gastos)

Cada logro refuerza tu motivación y crea un hábito duradero.

---

### 🔐 Dónde guardar tu fondo
Mantené el dinero en una cuenta de **fácil acceso pero separada de tu cuenta corriente**, preferiblemente en una cuenta remunerada o fondo de inversión conservador. Lo importante es que puedas disponer de él rápidamente sin arriesgarlo.

---

### ✨ Reflexión final
Un fondo de emergencia no se trata solo de dinero: es **tranquilidad, libertad y control**. Empezá hoy, aunque sea con poco, y mirá cómo tu seguridad financiera crece mes a mes.`,
	},
	{
		id: "2",
		title: "Entendiendo el Interés Compuesto",
		category: "Inversiones",
		readTime: "9 min",
		date: "2025-01-12",
		content: `El **interés compuesto** es considerado por muchos como la fuerza más poderosa de las finanzas. Albert Einstein lo describió como “la octava maravilla del mundo”. Comprenderlo y aplicarlo correctamente puede transformar completamente tu futuro financiero.

---

## 🧠 ¿Qué es el interés compuesto?
El interés compuesto es el proceso por el cual **los intereses generados también comienzan a generar intereses**. En lugar de recibir ganancias solo sobre tu inversión inicial, también ganás sobre los intereses acumulados.

> Es decir: **tu dinero trabaja para vos**, y cuanto más tiempo lo dejes trabajar, más crece.

---

### 📊 Ejemplo práctico
Si invertís $10.000 a una tasa del 8% anual:

- Año 1 → $10.800 (ganancia: $800)  
- Año 2 → $11.664 (ganancia: $864)  
- Año 10 → $21.589 (duplicaste tu inversión)  
- Año 30 → $100.627 (multiplicaste tu dinero por 10)

🔎 Observá que no aportaste más capital: el crecimiento proviene únicamente del tiempo y el poder del interés sobre interés.

---

### ⏳ La importancia del tiempo
Cuanto antes empieces, más impresionante será el crecimiento. Por ejemplo:

- Persona A invierte **$200 mensuales desde los 25 años**.  
- Persona B invierte **$400 mensuales desde los 35 años**.  

A los 65, la persona A tendrá más dinero, aunque aportó menos, simplemente por haber comenzado antes. **El tiempo es tu mayor aliado.**

---

### 🔁 Frecuencia de composición
El interés puede **componerse** con diferentes frecuencias:
- Anualmente  
- Trimestralmente  
- Mensualmente  
- Diariamente  

Cuanto más frecuente sea la composición, **mayor será el crecimiento total**. Por eso, las inversiones que reinvierten automáticamente los intereses suelen rendir más a largo plazo.

---

### 🧩 Cómo aplicarlo en tu vida
- **Comenzá cuanto antes:** incluso $1.000 invertidos hoy valen más que $2.000 invertidos en cinco años.  
- **Reinvertí tus dividendos e intereses:** no los retires, dejalos crecer.  
- **Pensá a largo plazo:** el interés compuesto necesita tiempo para desplegar todo su poder.  
- **Evitá deudas con interés compuesto:** funciona en tu contra con tarjetas de crédito o préstamos personales.

---

### 📈 Fórmula del interés compuesto
\\( A = P (1 + r/n)^{nt} \\)

Donde:  
- **A**: monto final  
- **P**: capital inicial  
- **r**: tasa de interés anual  
- **n**: número de veces que se capitaliza por año  
- **t**: cantidad de años  

Esta fórmula te permite proyectar tus ganancias y tomar decisiones informadas sobre dónde invertir.

---

### ✨ Conclusión
El interés compuesto no se trata solo de matemáticas, sino de **paciencia, constancia y visión a largo plazo**. Cuanto antes lo apliques, antes vas a dejar de trabajar solo por dinero… y tu dinero empezará a trabajar por vos.`,
	},
	{
		id: "3",
		title: "Cómo Crear un Presupuesto Mensual",
		category: "Presupuesto",
		readTime: "8 min",
		date: "2025-01-10",
		content: `Un **presupuesto mensual** es la herramienta más efectiva para tomar control de tus finanzas. No se trata de restringirte, sino de **darle un propósito a cada peso** que ganás y gastás. A continuación, aprenderás a crear un presupuesto práctico y realista.

---

## 💰 Paso 1: Calculá tus ingresos netos
Anotá todos tus ingresos después de impuestos: salario, comisiones, trabajos freelance, rentas o cualquier fuente extra.  
Usá solo el dinero que efectivamente llega a tu cuenta bancaria; esto te permitirá tener una visión real.

> Tip: si tus ingresos son variables, promediá los últimos tres meses para tener una base más precisa.

---

## 🧾 Paso 2: Listá tus gastos
Dividilos en tres categorías:

- **Fijos:** alquiler, servicios, deudas, seguros, transporte.
- **Variables:** comida, ocio, salidas, compras eventuales.
- **Periódicos:** mantenimiento del auto, matrícula escolar, regalos, vacaciones.

Una lista completa es el punto de partida para identificar en qué se te va realmente el dinero.

---

## ⚖️ Paso 3: Aplicá una metodología
Probá el método **50/30/20**:
- 50% para necesidades básicas
- 30% para deseos
- 20% para ahorro o inversión

Si tus ingresos no permiten cumplir esta proporción, adaptá los porcentajes hasta encontrar equilibrio. Lo importante es **que tu dinero tenga dirección**.

---

## 📲 Paso 4: Rastrea tus gastos
Usá aplicaciones como **Mint**, **YNAB** o una simple hoja de cálculo. Durante un mes, registrá cada gasto, por pequeño que parezca.  
Esto te permitirá detectar patrones y corregir a tiempo los excesos.

> Sorpresa habitual: los “gastos hormiga” (cafés, delivery, transporte extra) pueden representar hasta el 15% de tu presupuesto.

---

## 🔍 Paso 5: Ajustá y optimizá
Revisá tu presupuesto cada mes. Analizá:
- ¿Cumplí mis metas de ahorro?
- ¿Hubo gastos imprevistos?
- ¿Dónde puedo recortar sin perder calidad de vida?

Pequeños ajustes mensuales te acercarán a tus objetivos sin sentir sacrificio.

---

## 💡 Consejos prácticos
- Sé **realista**: no subestimes tus gastos ni sobreestimes tus ingresos.  
- Incluí un **colchón para imprevistos** (5% del total).  
- Automatizá tus ahorros e inversiones.  
- Revisá y actualizá tu presupuesto cada tres meses.  
- Celebrá los avances: mantener disciplina también merece recompensa.

---

## ✨ Conclusión
Presupuestar no es privarse, es **diseñar la vida que querés con el dinero que tenés**. Con práctica, te dará claridad, control y la confianza de saber hacia dónde va cada peso que ganás.`,
	},
	{
		id: "4",
		title: "Cuentas de Inversión con Ventajas Fiscales",
		category: "Impuestos",
		readTime: "10 min",
		date: "2025-01-08",
		content: `Las **cuentas de inversión con ventajas fiscales** son una de las herramientas más potentes para construir riqueza a largo plazo. Te permiten **reducir impuestos, aumentar tus rendimientos y proteger tus ahorros**. Veamos cuáles existen y cómo aprovecharlas.

---

## 💼 1. Cuentas de Jubilación (401k, IRA)
Son el pilar del ahorro para el retiro. Ofrecen incentivos impositivos según el tipo de cuenta:

- **401(k) Tradicional** → las contribuciones reducen tu ingreso imponible hoy; pagarás impuestos al retirar en la jubilación.
- **Roth IRA** → aportás dinero después de impuestos, pero los retiros futuros son libres de impuestos.
- **Límites 2025:** $23.000 para 401(k) y $7.000 para IRA.

📈 Consejo: si tu empleador ofrece un **matching** (aporte complementario), aprovechalo al máximo. Es dinero gratis.

---

## 🏥 2. Cuentas de Ahorro para la Salud (HSA)
Ofrecen un **triple beneficio fiscal**:
1. Contribuciones deducibles de impuestos.  
2. Crecimiento libre de impuestos.  
3. Retiros sin impuestos para gastos médicos calificados.

**Límites 2025:** $4.150 individual / $8.300 familiar.  
Ideal si contás con un plan médico de deducible alto.

> Tip: si no necesitás usar la HSA inmediatamente, dejá que crezca como inversión a largo plazo.

---

## 🎓 3. Plan 529 (Educación)
Diseñado para financiar estudios:
- El dinero crece sin impuestos.  
- Los retiros para educación están exentos de impuestos.  
- Algunos estados ofrecen deducciones adicionales.

Incluso podés usarlo para estudios técnicos o formación continua, no solo universidades.

---

## ⚙️ Estrategia de optimización
1. Contribuí lo necesario para obtener el matching del 401(k).  
2. Si calificás, **maximizá tu HSA**.  
3. Aportá al **Roth IRA** hasta el límite anual.  
4. Incrementá tu 401(k) progresivamente.  
5. Considerá **cuentas imponibles** una vez agotadas las opciones fiscales.

---

## ⚠️ Consideraciones importantes
- Las cuentas de jubilación aplican **penalidades por retiros anticipados**.  
- Las HSA requieren planes de salud específicos.  
- Los planes 529 solo mantienen ventajas fiscales si se usan para educación.  
- Siempre consultá con un asesor impositivo antes de hacer aportes grandes.

---

## 💰 Ejemplo de ahorro fiscal
Si ganás $100.000 al año y aportás $20.000 a un 401(k), tu ingreso imponible baja a $80.000. Si tu tasa de impuestos es del 24%, **ahorrás $4.800 en impuestos** ese año, además del crecimiento compuesto de esos fondos invertidos.

---

## ✨ Conclusión
Las cuentas con ventajas fiscales son una forma inteligente de **pagar menos impuestos mientras hacés crecer tu dinero**. Planificar tus aportes estratégicamente puede marcar la diferencia entre una jubilación ajustada y una financieramente libre.`,
	},
]

export default function ArticlePage() {
	const params = useParams()
	const router = useRouter()
	const article = articles.find((a) => a.id === params.id)

	if (!article) {
		return (
			<div className="space-y-6">
				<div className="flex items-center gap-4">
					<Button
						variant="ghost"
						size="icon"
						onClick={() => router.push("/dashboard/education?tab=articles")}
					>
						<ArrowLeftIcon className="size-4" />
					</Button>
					<h1 className="text-3xl font-bold">Artículo no encontrado</h1>
				</div>
			</div>
		)
	}

	return (
		<div className="space-y-6">
			{/* Header with Back Button */}
			<div className="flex items-center gap-4">
				<Button
					variant="ghost"
					size="icon"
					onClick={() => router.push("/dashboard/education?tab=articles")}
				>
					<ArrowLeftIcon className="size-4" />
				</Button>
				<div className="flex-1">
					<h1 className="text-3xl font-bold">{article.title}</h1>
					<div className="flex items-center gap-3 mt-2 text-sm text-muted-foreground">
						<Badge variant="outline">{article.category}</Badge>
						<span className="flex items-center gap-1">
							<ClockIcon className="size-3" />
							{article.readTime}
						</span>
						<span>
							{new Date(article.date).toLocaleDateString("es-ES", {
								month: "long",
								day: "numeric",
								year: "numeric",
							})}
						</span>
					</div>
				</div>
			</div>

			{/* Article Content */}
			<Card>
				<CardContent className="pt-6">
					<article className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:text-base prose-p:leading-7 prose-li:text-base prose-strong:text-foreground prose-strong:font-semibold">
						<ReactMarkdown remarkPlugins={[remarkGfm]}>
							{article.content}
						</ReactMarkdown>
					</article>
				</CardContent>
			</Card>

			{/* Back Button at Bottom */}
			<div className="flex justify-start">
				<Button
					variant="outline"
					onClick={() => router.push("/dashboard/education?tab=articles")}
				>
					<ArrowLeftIcon className="size-4" />
					Volver a Educación
				</Button>
			</div>
		</div>
	)
}
