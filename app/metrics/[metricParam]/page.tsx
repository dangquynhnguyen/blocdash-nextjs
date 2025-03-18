'use client'

import { Grid2, Typography } from '@mui/material'
import { useRouter, useSearchParams } from 'next/navigation'
import { use, useEffect, useState } from 'react'
import CoinSelector from './components/CoinSelector'
import { coins } from './components/CoinSelector/constants'
import Sidebar from './components/Sidebar'
import { getMetricLabel } from './helpers/getMetricLabel'
import { styles } from './styles'
import { MetricsProps } from './types'

export default function Metrics({ params }: MetricsProps) {
	const { metricParam } = use(params)
	const searchParams = useSearchParams()
	const router = useRouter()
	const cryptoParam = searchParams.get('crypto')
	const [selectedMetric, set_selectedMetric] = useState(metricParam)
	const [open, set_Open] = useState(true)

	useEffect(() => {
		const params = new URLSearchParams(searchParams.toString())
		params.set('crypto', coins[0].id)
		router.replace(`?${params.toString()}`, { scroll: false })
	}, [])

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
					<Typography
						sx={styles.typography.title}
					>{`${cryptoParam} - ${getMetricLabel(selectedMetric)}`}</Typography>
					<Typography sx={styles.typography.content}>.............test</Typography>
				</Grid2>
			</Grid2>
		</>
	)
}
