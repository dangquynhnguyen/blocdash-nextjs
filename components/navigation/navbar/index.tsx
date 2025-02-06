'use client'

import logo from '@/assets/logo.png'
import SearchIcon from '@mui/icons-material/Search'
import { Box, IconButton, InputBase } from '@mui/material'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import { styled, SxProps, Theme } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'
import Image from 'next/image'
import Link from 'next/link'
import { CSSProperties, useEffect, useState } from 'react'
import { colors } from '../../../theme'

export default function Navbar() {
	const navStyle: CSSProperties = {
		display: 'block',
		backgroundColor: colors.primary[1000],
		alignContent: 'center',
		padding: '0 0.6rem 0 0.6rem',
		margin: '0',
		height: '4.8rem',
		boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
	}
	const imgStyle: CSSProperties = {
		height: '2.8rem',
		width: 'fit-content',
		padding: '0 1.5rem 0 0.5rem',
	}
	const linkStyle: SxProps<Theme> | undefined = {
		fontSize: '0.95rem',
		fontWeight: 'bold',
		// display: 'inline',
		padding: '0 1rem',
		'&:hover': {
			color: colors.primary[0],
		},
	}
	const searchBarStyle: CSSProperties = {
		display: 'flex',
		marginLeft: '1.5rem',
		marginRight: '1.5rem',
		borderRadius: '20px',
		backgroundColor: colors.primary[900],
	}
	const iconBarStyle: CSSProperties = {
		display: 'flex',
		marginRight: '0.5rem',
	}
	const [drawerWidth, setDrawerWidth] = useState(0)
	interface AppBarProps extends MuiAppBarProps {
		open?: boolean
	}
	const AppBar = styled(MuiAppBar, {
		shouldForwardProp: (prop) => prop !== 'open',
	})<AppBarProps>(({ theme, open }) => ({
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		...(open && {
			marginLeft: drawerWidth,
			width: `calc(100% - ${drawerWidth}px)`,
			transition: theme.transitions.create(['width', 'margin'], {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.enteringScreen,
			}),
		}),
	}))

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setDrawerWidth(window.screen.width / 5.5)
		}
	}, [])

	return (
		<AppBar className="main-nav" position="fixed" style={navStyle} color="transparent">
			<Toolbar style={{ padding: 0, margin: 0 }}>
				<Image className="avatar" alt={'logo'} src={logo} style={imgStyle} />
				{/* NAV LINKS */}
				<Box
					sx={{
						display: 'flex',
						margin: '0',
						'&:hover': {
							color: colors.primary[800],
						},
					}}
				>
					<Link href={'/'}>
						<Box sx={linkStyle}>Home</Box>
					</Link>
					<Link href={'/metrics'}>
						<Box sx={linkStyle}>Metrics</Box>
					</Link>
					<Link href={'/tokens'}>
						<Box sx={linkStyle}>Tokens</Box>
					</Link>
				</Box>
				{/* SEARCH BAR */}
				<Box style={searchBarStyle}>
					<InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
					<IconButton type="button" sx={{ p: 1 }}>
						<SearchIcon />
					</IconButton>
				</Box>
				{/* ICONS */}
				<Box style={iconBarStyle}></Box>
			</Toolbar>
		</AppBar>
	)
}
