export type MetricType = 'category' | 'group' | 'indicator'

export interface BaseMetricItem {
	id: string
	label: string
	type: MetricType
	isAvailable: boolean
}

export interface Indicator extends BaseMetricItem {
	type: 'indicator'
	description?: string
	unit?: string
}

export interface Group extends BaseMetricItem {
	type: 'group'
	children: Indicator[]
}

export interface Category extends BaseMetricItem {
	type: 'category'
	children: Group[]
}
