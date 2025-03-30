/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box } from '@mui/material'
import { useEffect, useMemo, useRef, useState } from 'react'

import { useUniqueWalletsHourlyQuery } from '@/app/generated/graphql'
import { colors } from '@/theme'
import {
	BarPlot,
	ChartsGrid,
	ChartsXAxis,
	ChartsYAxis,
	LineHighlightPlot,
	LinePlot,
	ResponsiveChartContainer,
} from '@mui/x-charts'
import ValueHighlight from '../ValueHighlight'
import { chartContainerStyles, chartMargin, containerStyles } from './styles'
import { NetFlowProps } from './types'
import { createSeries, getData, getDefaultData, valueFormatter } from './utils'

export default function NetFlowChart(props: NetFlowProps) {
	const svgRef = useRef<SVGSVGElement>(null)
	const [data, setData] = useState(getDefaultData())

	// Lấy kết quả query và tách thành 2 biến riêng biệt
	const queryResult = useUniqueWalletsHourlyQuery()
	const uniqueWalletsHourly = useMemo(
		() => queryResult.data?.uniqueWalletsHourly?.slice(0, 1000) || [],
		[queryResult.data?.uniqueWalletsHourly],
	)

	// Thay thế state series và useEffect bằng useMemo
	const series = useMemo(() => createSeries(data), [data])

	useEffect(() => {
		if (uniqueWalletsHourly && uniqueWalletsHourly.length > 0) {
			setData(getData(uniqueWalletsHourly))
		}
	}, [uniqueWalletsHourly])

	return (
		// <Box>test</Box>

		<Box sx={containerStyles}>
			<ResponsiveChartContainer
				ref={svgRef}
				series={series}
				height={650}
				xAxis={[
					{
						id: 'dates',
						data: data.x_dates,
						scaleType: 'band',
						valueFormatter,
					},
				]}
				yAxis={[
					{
						id: 'flow',
						scaleType: 'linear',
					},
					{
						id: 'price',
						scaleType: 'log',
					},
				]}
				margin={chartMargin}
				sx={chartContainerStyles}
			>
				<ChartsXAxis label="" position="bottom" axisId="dates" />
				<ChartsYAxis label="" position="left" axisId="flow" />
				<ChartsYAxis label="" position="right" axisId="price" />
				<ChartsGrid horizontal={true} />
				<BarPlot skipAnimation={true} />
				<LinePlot skipAnimation={true} />
				<ValueHighlight
					svgRef={svgRef}
					leftAxisId="flow"
					rightAxisId="price"
					bottomAxisId="dates"
					// sliderRight_Miliseconds={props.dayRange[1]}
					tooltip={{
						price: { color: colors.primary[250], data: data.y_prices },
						flow: {
							inflow: {
								color: colors.logo[700],
								data: data.metric,
							},
						},
					}}
				/>
				<LineHighlightPlot />
			</ResponsiveChartContainer>
		</Box>
	)
}
