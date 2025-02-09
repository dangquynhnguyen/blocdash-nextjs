'use client'

import { useCheckAuth } from '@/app/utils/useCheckAuth'
import { Box } from '@mui/material'
import Toast from '../styledMui/Toast'
import Navbar from './navbar'
import Sidebar from './sidebar'

export default function Navigation() {
	const { data: authData } = useCheckAuth()
	return (
		<Box>
			<Toast
				open={authData?.me != null}
				message={`Welcome ${authData?.me?.username}`}
				severity={'success'}
			/>
			<Sidebar />
			<Navbar />
		</Box>
	)
}
