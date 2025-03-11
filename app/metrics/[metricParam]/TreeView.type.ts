export type MetricType = 'category' | 'group' | 'indicator'

export interface BaseMetricItem {
	id: string
	label: string
	type: MetricType
	isAvailable: boolean
}

export interface MetricIndicator extends BaseMetricItem {
	type: 'indicator'
	description?: string
	unit?: string
}

export interface MetricGroup extends BaseMetricItem {
	type: 'group'
	children: MetricIndicator[]
}

export interface MetricCategory extends BaseMetricItem {
	type: 'category'
	children: MetricGroup[]
}

export type TreeItemProps = {
	type: MetricType
	isAvailable: boolean
	id: string
	label: string
}
