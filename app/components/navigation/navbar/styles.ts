import { colors } from '@/theme'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import { styled, SxProps, Theme } from '@mui/material/styles'
import { CSSProperties } from 'react'

export const StyledAppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})<MuiAppBarProps & { drawerwidth: number; open?: boolean }>(({ theme, drawerwidth, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: drawerwidth,
		width: `calc(100% - ${drawerwidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}))

export const styles = {
	nav: {
		display: 'block',
		backgroundColor: colors.primary[1000],
		alignContent: 'center',
		padding: '0 0.6rem',
		margin: '0',
		height: '5rem',
		boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
	} as CSSProperties,

	logo: {
		height: '2.8rem',
		width: 'fit-content',
		padding: '0 1.5rem 0 0.5rem',
	} as CSSProperties,

	searchBar: {
		display: 'flex',
		margin: '0 1.5rem',
		borderRadius: '20px',
		backgroundColor: colors.primary[900],
	} as CSSProperties,

	navLink: (isActive: boolean): SxProps<Theme> => ({
		fontSize: '0.95rem',
		fontWeight: 'bold',
		padding: '2rem 1rem',
		color: isActive ? colors.primary[0] : colors.primary[800],
		'&:hover': {
			color: colors.primary[300],
		},
	}),

	authButton: (isLogin: boolean): SxProps<Theme> => ({
		fontSize: '0.9rem',
		fontWeight: 600,
		padding: '0.6rem 1rem',
		borderRadius: '8px',
		margin: '0 0.25rem',
		...(isLogin
			? {
					backgroundColor: colors.logo[700],
					color: colors.primary[1000],
					'&:hover': {
						backgroundColor: colors.logo[800],
					},
				}
			: {
					backgroundColor: 'transparent',
					color: colors.logo[700],
					border: `2px solid ${colors.logo[700]}`,
					'&:hover': {
						borderColor: colors.logo[800],
						color: colors.logo[800],
					},
				}),
	}),

	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
		margin: '0',
	},

	linksContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		margin: '0',
		'&:first-of-type, &:last-child': {
			marginRight: 0,
			width: 'fit-content',
		},
		'&:not(:first-of-type):not(:last-child)': {
			flex: 1,
		},
	} as SxProps<Theme>,
}
