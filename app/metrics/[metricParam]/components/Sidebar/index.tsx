'use client'
import MenuIcon from '@mui/icons-material/Menu'
import Divider from '@mui/material/Divider'
import MuiDrawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import { CSSObject, Theme, styled } from '@mui/material/styles'
import { Dispatch, SetStateAction } from 'react'

import { colors } from '@/theme'
import TreeView from '../TreeView'

type Props = {
	set_selectedMetric: Dispatch<SetStateAction<string>>
	selectedMetric: string
	open: boolean
	setOpen: Dispatch<SetStateAction<boolean>>
}

export default function Sidebar(props: Props) {
	const drawerMixin = (theme: Theme, isOpen: boolean): CSSObject => ({
		position: 'relative',
		height: 'calc(100vh - 9.3rem)',
		width: isOpen ? '100%' : `calc(${theme.spacing(6)} + 1px)`,
		backgroundColor: colors.primary[1000],
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: isOpen
				? theme.transitions.duration.enteringScreen
				: theme.transitions.duration.leavingScreen,
		}),
		overflowX: 'hidden',
		[theme.breakpoints.up('sm')]: {
			width: isOpen ? 'auto' : `calc(${theme.spacing(7)} + 1px)`,
		},
		'& ::-webkit-scrollbar-thumb': {
			backgroundColor: colors.primary[750],
		},
		'& ::-webkit-scrollbar': {
			width: '0.4rem',
		},
	})
	const DrawerHeader = styled('div')(({ theme }) => ({
		display: 'flex',
		height: '3rem',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		// ...theme.mixins.toolbar,
	}))
	const Drawer = styled(MuiDrawer, {
		shouldForwardProp: (prop) => prop !== 'open',
	})(({ theme, open }) => ({
		flexShrink: 0,
		whiteSpace: 'nowrap',
		boxSizing: 'border-box',
		...{
			...drawerMixin(theme, open!),
			'& .MuiDrawer-paper': drawerMixin(theme, open!),
		},
	}))
	function handleDrawer() {
		props.setOpen((prevOpen) => !prevOpen)
	}
	return (
		<Drawer variant="permanent" open={props.open}>
			<DrawerHeader>
				<IconButton onClick={handleDrawer}>{<MenuIcon />}</IconButton>
			</DrawerHeader>
			<Divider />
			{props.open && (
				<TreeView
					set_selectedMetric={props.set_selectedMetric}
					selectedMetric={props.selectedMetric}
				/>
			)}
		</Drawer>
	)
}
