import { colors } from '@/theme'
import { alpha, Button, styled } from '@mui/material'

export const CoinButton = styled(Button)<{ selected: boolean }>(({ theme, selected }) => ({
	color: colors.primary[0],
	backgroundColor: 'transparent',
	borderRadius: 0,
	padding: theme.spacing(1, 1.5),
	marginRight: theme.spacing(1),
	textTransform: 'none',
	borderBottom: selected ? `3px solid ${colors.logo[700]}` : '3px solid transparent',
	'&:hover': {
		backgroundColor: alpha(colors.logo[200], 0.1),
		borderBottom: selected ? `3px solid ${colors.logo[700]}` : `3px solid ${colors.logo[200]}`,
	},
	'& img': {
		width: '1.2rem',
		height: '1.2rem',
		marginRight: theme.spacing(1),
	},
	display: 'flex',
	alignItems: 'center',
}))
