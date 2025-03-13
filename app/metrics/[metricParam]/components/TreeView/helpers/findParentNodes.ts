import { constants } from '../constants'

export const findParentNodes = (metricId: string) => {
	for (const category of constants) {
		for (const group of category.children!) {
			const hasIndicator = group.children!.some((ind) => ind.id === metricId)
			if (hasIndicator) {
				return {
					categoryId: category.id,
					groupId: group.id,
				}
			}
		}
	}
	return null
}
