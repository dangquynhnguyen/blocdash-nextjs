/* eslint-disable @typescript-eslint/no-unused-vars */
import { colors } from '@/theme'
import { Box } from '@mui/material'
import { ChartsGrid, ResponsiveChartContainer } from '@mui/x-charts'
import { BarPlot } from '@mui/x-charts/BarChart'
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis'
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis'
import { LineHighlightPlot, LinePlot } from '@mui/x-charts/LineChart'
import { useRef, useState } from 'react'

import ValueHighlight from '../ValueHighlight'
import { chartContainerStyles, chartMargin, containerStyles } from './styles'
import { NetFlowProps } from './types'
import { createSeries, getDefaultData, valueFormatter } from './utils'

export default function NetFlowChart(props: NetFlowProps) {
	const svgRef = useRef<SVGSVGElement>(null)
	const [data, setData] = useState(getDefaultData())
	const series = createSeries(data)

	return (
		<Box sx={containerStyles}>
			<Box display="inline-flex" width="100%" height="100%"></Box>
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
					sliderRight_Miliseconds={props.dayRange[1]}
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
