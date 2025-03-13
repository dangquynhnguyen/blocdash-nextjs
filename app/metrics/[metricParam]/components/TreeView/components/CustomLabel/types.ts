import { MetricType } from '../../constants/types'

export interface CustomLabelProps {
	children: React.ReactNode
	icon?: React.ElementType
	isAvailable: boolean
	type: MetricType
	itemId: string
}
