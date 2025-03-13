import { constants } from '../constants'

export const getIndicatorCount = (itemId: string): number => {
	const category = constants.find((c) => c.id === itemId)
	if (category) {
		return category.children!.reduce((total, group) => total + group.children!.length, 0)
	}

	// For groups, find their parent category and then count indicators in this group
	for (const category of constants) {
		const group = category.children!.find((g) => g.id === itemId)
		if (group) {
			return group.children!.length
		}
	}
	return 0
}
