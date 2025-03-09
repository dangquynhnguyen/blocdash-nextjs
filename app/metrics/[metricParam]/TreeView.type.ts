export type Type = 'indicator' | 'category'

export type ExtendedTreeItemProps = {
	fileType?: Type
	isProPlan?: boolean
	isAvailable: boolean
	id: string
	label: string
}
