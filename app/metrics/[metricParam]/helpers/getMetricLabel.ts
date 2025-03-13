import { constants } from '../components/TreeView/constants'
import { BaseMetricItem } from '../components/TreeView/constants/types'

export const getMetricLabel = (metricId: string): string => {
	for (const category of constants) {
		for (const group of category.children!) {
			const indicator = group.children!.find((ind: BaseMetricItem) => ind.id === metricId)
			if (indicator) {
				return indicator.label
			}
		}
	}
	return metricId // Fallback to ID if label not found
}
