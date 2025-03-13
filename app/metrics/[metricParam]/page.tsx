'use client'

import { Grid2, Typography } from '@mui/material'
import { use, useState } from 'react'
import CoinSelector from './components/CoinSelector'
import Sidebar from './components/Sidebar'
import { styles } from './styles'
import { MetricsProps } from './types'

export default function Metrics({ params }: MetricsProps) {
	const { metricParam } = use(params)
	const [selectedMetric, set_selectedMetric] = useState(metricParam)
	const [open, set_Open] = useState(true)

	return (
		<>
			<CoinSelector />
			<Grid2 container spacing={2}>
				<Grid2 size={open ? 2.25 : 'auto'} sx={styles.sidebar(open)}>
					<Sidebar
						open={open}
						set_Open={set_Open}
						set_selectedMetric={set_selectedMetric}
						selectedMetric={selectedMetric}
					/>
				</Grid2>
				<Grid2 size={open ? 9.75 : 'auto'} sx={styles.content(open)}>
					<Typography>Metrics : {metricParam}</Typography>
					<Typography>Selected Item : {selectedMetric}</Typography>
				</Grid2>
			</Grid2>
		</>
	)
}
