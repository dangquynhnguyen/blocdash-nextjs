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
				<Grid2
					size={open ? 2.25 : 'auto'}
					sx={{
						width: open ? 'auto' : '4rem',
						transition: 'width 0.2s ease-in-out',
					}}
				>
					<Sidebar
						open={open}
						setOpen={setOpen}
						set_selectedMetric={set_selectedMetric}
						selectedMetric={selectedMetric}
					/>
				</Grid2>
				<Grid2
					size={open ? 9.75 : 'auto'}
					sx={{
						width: open ? 'auto' : 'calc(100vh - 4rem)',
						mt: '1rem',
						transition: 'width 0.2s ease-in-out',
					}}
				>
					<Typography>Metrics : {metricParam}</Typography>
					<Typography>Selected Item : {selectedMetric}</Typography>
				</Grid2>
			</Grid2>
		</>
	)
}
