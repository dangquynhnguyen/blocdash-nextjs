/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { Box, Typography } from '@mui/material'
import { use } from 'react'
import Sidebar from './Sidebar'

interface PageProps {
	params: Promise<{ metricParam: string }>
}

export default function Metrics({ params }: PageProps) {
	const { metricParam } = use(params)
	return (
		<Box m="0" p="0">
			<Sidebar />
			<Typography>Metrics : {metricParam}</Typography>
			<Typography>Selected Item : {metricParam}</Typography>
		</Box>
	)
}
