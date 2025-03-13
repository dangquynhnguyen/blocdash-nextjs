import { colors } from '@/theme'
import { SxProps } from '@mui/material'

export const labelStyles = {
	root: {
		display: 'flex',
		alignItems: 'center',
		width: '100%',
		position: 'relative',
	},
	contentWrapper: {
		display: 'flex',
		alignItems: 'center',
		width: '100%',
		pr: '3rem',
	},
	icon: {
		mr: 1,
		fontSize: '1.2rem',
	},
	countBadge: {
		position: 'absolute',
		right: '0',
		display: 'flex',
		alignItems: 'center',
		bgcolor: colors.primary[900],
		px: 0.5,
		borderRadius: 1,
	},
	countText: {
		color: colors.primary[0],
		fontSize: '0.7rem',
	},
} as Record<string, SxProps>
