/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { Box, Typography } from '@mui/material'
import { use, useState } from 'react'
import Sidebar from './Sidebar'
import { constants } from './TreeView.constants'

interface PageProps {
	params: Promise<{ metricParam: string }>
}

export default function Metrics({ params }: PageProps) {
	const { metricParam } = use(params)
	const [selectedMetric, set_selectedMetric] = useState(constants[1]?.children?.[0]?.id)
	return (
		<Box m="0" p="0">
			<Sidebar set_selectedMetric={set_selectedMetric} selectedMetric={selectedMetric} />
			<Typography>Metrics : {metricParam}</Typography>
			<Typography>Selected Item : {selectedMetric}</Typography>
		</Box>
	)
}
