'use client'

import logo from '@/app/assets/logo.png'
import { useMeQuery } from '@/app/generated/graphql'
import { constants } from '@/app/metrics/[metricParam]/components/TreeView/constants'
import { Box, Toolbar } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { AuthButtons } from './AuthButtons'
import { SearchBar } from './SearchBar'
import { StyledAppBar, styles } from './styles'

export default function Navbar() {
	const pathname = usePathname()
	const [drawerWidth, setDrawerWidth] = useState(0)
	const { data, loading } = useMeQuery()

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setDrawerWidth(window.screen.width / 5.5)
		}
	}, [])

	const firstMetricId = constants
		.map((category) => category.children?.[0]?.children?.[0]?.id)
		.filter(Boolean)[0]

	return (
		<StyledAppBar
			className="main-nav"
			position="fixed"
			style={styles.nav}
			color="transparent"
			drawerwidth={drawerWidth}
		>
			<Toolbar style={{ padding: 0, margin: 0 }}>
				<Box sx={styles.container}>
					<Link href="/">
						<Image className="avatar" alt="logo" src={logo} style={styles.logo} />
					</Link>
					<SearchBar />
					<Box sx={styles.linksContainer}>
						<Link href={`/metrics/${firstMetricId}`}>
							<Box sx={styles.navLink(pathname.startsWith('/metrics'))}>Metrics</Box>
						</Link>
						<Link href="/tokens">
							<Box sx={styles.navLink(pathname.startsWith('/tokens'))}>Tokens</Box>
						</Link>
					</Box>
					<Box mr="2rem" sx={styles.linksContainer}>
						<AuthButtons loading={loading} data={data} />
					</Box>
				</Box>
			</Toolbar>
		</StyledAppBar>
	)
}
