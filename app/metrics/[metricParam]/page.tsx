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
	const [open, setOpen] = useState(true)

	return (
		<>
			<CoinSelector />
			<Grid2 container spacing={2}>
				<Grid2 size={open ? 2.25 : 0.5}>
					<Sidebar
						open={open}
						setOpen={setOpen}
						set_selectedMetric={set_selectedMetric}
						selectedMetric={selectedMetric}
					/>
				</Grid2>
				<Grid2 size={open ? 9.75 : 11.25} sx={{ mt: '1rem' }}>
					<Typography>Metrics : {metricParam}</Typography>
					<Typography>Selected Item : {selectedMetric}</Typography>
				</Grid2>
			</Grid2>
		</>
	)
}
