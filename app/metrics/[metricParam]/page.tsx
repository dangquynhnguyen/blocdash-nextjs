'use client'

import { Grid2, Typography } from '@mui/material'
import { use, useState } from 'react'
import CoinSelector from './components/CoinSelector'
import Sidebar from './components/Sidebar'

interface PageProps {
	params: Promise<{ metricParam: string }>
}

export default function Metrics({ params }: PageProps) {
	const { metricParam } = use(params)
	const [selectedMetric, set_selectedMetric] = useState(metricParam)
	return (
		<>
			<CoinSelector />
			<Grid2 container spacing={2}>
				<Grid2 size={2.25}>
					<Sidebar set_selectedMetric={set_selectedMetric} selectedMetric={selectedMetric} />
				</Grid2>
				<Grid2 size={9.75} sx={{ mt: '1rem' }}>
					<Typography>Metrics : {metricParam}</Typography>
					<Typography>Selected Item : {selectedMetric}</Typography>
				</Grid2>
			</Grid2>
		</>
	)
}
