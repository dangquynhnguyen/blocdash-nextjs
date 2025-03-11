export type Type = 'indicator' | 'category'

export type ExtendedTreeItemProps = {
	type?: Type
	isProPlan?: boolean
	isAvailable: boolean
	id: string
	label: string
}
