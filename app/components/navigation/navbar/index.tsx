/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import logo from '@/app/assets/logo.png'
import { useMeQuery } from '@/app/generated/graphql'
import { constants } from '@/app/metrics/[metricParam]/components/TreeView/constants'
import { colors } from '@/theme'
import SearchIcon from '@mui/icons-material/Search'
import { Box, IconButton, InputBase } from '@mui/material'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import { styled, SxProps, Theme } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CSSProperties, ReactNode, useEffect, useState } from 'react'
import AccountMenu from './AcountMenu'

export default function Navbar() {
	const pathname = usePathname()
	const navStyle: CSSProperties = {
		display: 'block',
		backgroundColor: colors.primary[1000],
		alignContent: 'center',
		padding: '0 0.6rem 0 0.6rem',
		margin: '0',
		height: '5rem',
		boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
	}
	const imgStyle: CSSProperties = {
		height: '2.8rem',
		width: 'fit-content',
		padding: '0 1.5rem 0 0.5rem',
	}
	const blocLinksStyle: SxProps<Theme> | undefined = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center', // Add this
		flex: 1, // Add this to take remaining space
		margin: '0',
		'&:hover': {
			color: colors.primary[800],
		},
	}
	const linkStyle = (href: string): SxProps<Theme> => ({
		fontSize: '0.95rem',
		fontWeight: 'bold',
		padding: '2rem 1rem',
		color: pathname.startsWith(href) ? colors.primary[0] : colors.primary[800],
		'&:hover': {
			color: colors.primary[300],
		},
	})
	const searchBarStyle: CSSProperties = {
		display: 'flex',
		marginLeft: '1.5rem',
		marginRight: '1.5rem',
		borderRadius: '20px',
		backgroundColor: colors.primary[900],
	}
	const loginStyle: SxProps<Theme> = {
		fontSize: '0.95rem',
		fontWeight: 'bold',
		padding: '2rem 1rem',
		'&:hover': {
			color: colors.primary[0],
		},
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

	const { data, loading: useMeQueryLoading } = useMeQuery()

	let user: ReactNode
	if (useMeQueryLoading) {
		user = null
	} else if (!data?.me) {
		user = (
			<>
				<Link href={'/login'}>
					<Box sx={loginStyle}>Login</Box>
				</Link>
				<Link href={'/register'}>
					<Box sx={loginStyle}>Register</Box>
				</Link>
			</>
		)
	} else {
		user = <AccountMenu meQuery={data} />
	}

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setDrawerWidth(window.screen.width / 5.5)
		}
	}, [])

	return (
		<AppBar className="main-nav" position="fixed" style={navStyle} color="transparent">
			<Toolbar style={{ padding: 0, margin: 0 }}>
				{/* NAV LINKS */}
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						width: '100%',
						margin: '0',
					}}
				>
					<Link href={'/'}>
						<Image className="avatar" alt={'logo'} src={logo} style={imgStyle} />
					</Link>
					{/* SEARCH BAR */}
					<Box style={searchBarStyle}>
						<InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
						<IconButton type="button" sx={{ p: 1 }}>
							<SearchIcon />
						</IconButton>
					</Box>
					<Box sx={blocLinksStyle}>
						<Link
							href={
								'/metrics/' +
								constants
									.map((category) => category.children?.[0]?.children?.[0]?.id)
									.filter(Boolean)[0]
							}
						>
							<Box sx={linkStyle('/metrics')}>Metrics</Box>
						</Link>
						<Link href={'/tokens'}>
							<Box sx={linkStyle('/tokens')}>Tokens</Box>
						</Link>
					</Box>
				</Box>
				{/* LOGIN/REGISTER/LOGOUT */}
				<Box mr="2rem" sx={blocLinksStyle}>
					{user}
				</Box>
			</Toolbar>
		</AppBar>
	)
}
