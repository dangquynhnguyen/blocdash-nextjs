import { colors } from '@/theme'
import background_light from '../../../../assets/background_light.png'

export const containerStyles = {
	width: '100%',
	borderRadius: '1rem',
	border: 'none',
	background: colors.primary[1000],
}

export const chartContainerStyles = {
	zIndex: 1,
	backgroundImage: `url(${background_light})`,
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
	backgroundPositionY: '15.5rem',
	backgroundSize: '30%',
	'& .MuiChartsAxis-tickLabel ': {
		fill: colors.primary[400] + ' !important',
	},
	'& .MuiChartsAxis-line': {
		stroke: colors.primary[700] + ' !important',
	},
	'& .MuiChartsAxis-tick': {
		stroke: 'none !important',
	},
	'& .MuiHighlightElement-root': {
		r: 2.5,
		stroke: colors.primary[700],
		strokeOpacity: 0.5,
		strokeLinejoin: 'round',
		paintOrder: 'stroke',
		strokeWidth: '1.2rem',
	},
}

export const chartMargin = {
	left: 120,
	right: 70,
	top: 10,
	bottom: 45,
}
