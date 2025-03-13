import { Plan } from '@/app/enums'
import { MetricType } from './enums'

export interface BaseMetricItem {
	id: string
	label: string
	type: MetricType
	isAvailable: boolean
}

export interface Indicator extends BaseMetricItem {
	type: MetricType.INDICATOR
	plan: Plan
	description?: string
}

export interface Group extends BaseMetricItem {
	type: MetricType.GROUP
	children: Indicator[]
}

export interface Category extends BaseMetricItem {
	type: MetricType.CATEGORY
	children: Group[]
}
