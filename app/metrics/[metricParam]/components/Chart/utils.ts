/* eslint-disable @typescript-eslint/no-explicit-any */
import { UniqueWalletsHourly } from '@/app/generated/graphql'
import { colors } from '@/theme'
import { AllSeriesType } from '@mui/x-charts/models'
import { ChartData } from './types'

export const valueFormatter = (date: Date): string => `${date?.toLocaleDateString()}`

export const getDefaultData = (): ChartData => ({
	metric: [10, 20],
	y_prices: [6, 7],
	x_dates: [new Date(2024, 12, 1), new Date(2024, 12, 2)],
})
export const getData = (uniqueWalletsHourly: UniqueWalletsHourly[]): ChartData => ({
	metric: uniqueWalletsHourly.map((x) => x.total_wallets),
	y_prices: uniqueWalletsHourly.map(() => 10),
	x_dates: uniqueWalletsHourly.map((x) => {
		// Check if x.hour is a string or number
		const timestamp = typeof x.hour === 'string' ? parseInt(x.hour, 10) : x.hour
		return new Date(timestamp)
	}),
})

export const createSeries = (data: ChartData): AllSeriesType[] =>
	[
		{
			type: 'line',
			stack: '',
			yAxisKey: 'flow',
			label: 'Inflow Volume',
			color: colors.logo[700],
			data: data.metric,
		},
		{
			type: 'line',
			curve: 'linear',
			yAxisKey: 'price',
			label: 'Price [USDT]',
			color: colors.primary[250],
			data: data.y_prices,
		},
	] as AllSeriesType[]
