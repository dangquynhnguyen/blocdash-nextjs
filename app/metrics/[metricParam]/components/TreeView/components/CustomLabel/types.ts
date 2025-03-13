import { MetricType } from '../../constants/enums'

export interface CustomLabelProps {
	children: React.ReactNode
	icon?: React.ElementType
	isAvailable: boolean
	type: MetricType
	itemId: string
}
