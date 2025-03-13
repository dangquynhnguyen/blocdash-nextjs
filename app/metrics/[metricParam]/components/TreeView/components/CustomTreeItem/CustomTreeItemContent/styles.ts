import { colors } from '@/theme'
import { Theme } from '@mui/material'
import { alpha } from '@mui/material/styles'
import { treeItemClasses } from '@mui/x-tree-view/TreeItem'
import { MetricType } from '../../../constants/types'

export const getBaseStyles = (theme: Theme, type?: MetricType) => ({
	flexDirection: 'row-reverse',
	borderRadius: theme.spacing(0),
	borderLeft: type === 'indicator' ? `1px solid ${colors.primary[800]}` : 'none',
	margin: theme.spacing(0),
	padding: theme.spacing(1, 2),
})

export const getIconStyles = (theme: Theme) => ({
	[`& .${treeItemClasses.iconContainer}`]: {
		marginRight: theme.spacing(2),
	},
})

export const getExpandedStyles = (theme: Theme) => ({
	'&:not(.Mui-focused, .Mui-selected, .Mui-selected.Mui-focused) .labelIcon': {
		color: 'inherit !important',
	},
	'&::before': {
		content: '""',
		display: 'block',
		position: 'absolute',
		left: '1.1rem',
		top: '2.8rem',
		height: 'auto',
		width: '0.075rem',
		backgroundColor: theme.palette.grey[300],
	},
})

export const getInteractionStyles = (theme: Theme, type?: MetricType) => ({
	'&:hover': {
		backgroundColor: alpha(colors.logo[200], 0.2),
	},
	[`&.Mui-selected`]: {
		backgroundColor: type === 'indicator' ? colors.logo[700] : 'transparent',
		color: type === 'indicator' ? theme.palette.primary.contrastText : 'inherit',
	},
	'&.Mui-focused': {
		backgroundColor: 'transparent !important',
		color: 'inherit !important',
	},
	'&': {
		cursor: type === 'indicator' ? 'pointer' : 'default',
	},
})
