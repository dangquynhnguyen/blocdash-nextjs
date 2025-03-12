import { colors } from '@/theme'
import { alpha, Button, styled } from '@mui/material'

export const CoinButton = styled(Button)<{ selected: boolean }>(({ theme, selected }) => ({
	color: colors.primary[0],
	backgroundColor: 'transparent',
	borderRadius: 0,
	padding: theme.spacing(1, 2),
	marginRight: theme.spacing(1),
	textTransform: 'none',
	borderBottom: selected ? `3px solid ${colors.logo[700]}` : '3px solid transparent',
	'&:hover': {
		backgroundColor: alpha(colors.logo[200], 0.1),
	},
	'& img': {
		width: '20px',
		height: '20px',
		marginRight: theme.spacing(1),
	},
	display: 'flex',
	alignItems: 'center',
}))
