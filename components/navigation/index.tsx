'use client'

import { Box } from '@mui/material'
import Navbar from './navbar'
import Sidebar from './sidebar'

export default function Navigation() {
	return (
		<Box>
			<Sidebar />
			<Navbar />
		</Box>
	)
}
