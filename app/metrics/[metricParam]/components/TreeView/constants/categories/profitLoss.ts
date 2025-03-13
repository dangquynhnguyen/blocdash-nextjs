import { Plan } from '@/app/enums'
import { MetricType } from '../enums'
import { Category } from '../types'

export const profitLoss: Category = {
	id: 'profit-loss',
	label: 'Profit/Loss',
	type: MetricType.CATEGORY,
	isAvailable: true,
	children: [
		{
			id: 'group-sopr',
			label: 'SOPR - Spent Output Profit Ratio',
			type: MetricType.GROUP,
			isAvailable: true,
			children: [
				{
					id: 'sopr',
					label: 'SOPR',
					type: MetricType.INDICATOR,
					isAvailable: true,
					plan: Plan.FREE,
				},
			],
		},
		{
			id: 'supply-profitLoss',
			label: 'Supply in Profit/Loss',
			type: MetricType.GROUP,
			isAvailable: true,
			children: [
				{
					id: 'supply-profit-percent',
					label: 'Percent of Supply in Profit',
					type: MetricType.INDICATOR,
					isAvailable: true,
					plan: Plan.FREE,
				},
				{
					id: 'supply-profit',
					label: 'Supply in Profit',
					type: MetricType.INDICATOR,
					isAvailable: true,
					plan: Plan.FREE,
				},
				{
					id: 'supply-loss',
					label: 'Supply in Loss',
					type: MetricType.INDICATOR,
					isAvailable: true,
					plan: Plan.FREE,
				},
			],
		},
		{
			id: 'unrealized-profitLoss',
			label: 'Unrealized Profit/Loss',
			type: MetricType.GROUP,
			isAvailable: true,
			children: [
				{
					id: 'nupl',
					label: 'NUPL - Net Unrealized Profit/Loss',
					type: MetricType.INDICATOR,
					isAvailable: true,
					plan: Plan.FREE,
				},
				{
					id: 'relative-unrealized-profit',
					label: 'Relative Unrealized Profit',
					type: MetricType.INDICATOR,
					isAvailable: true,
					plan: Plan.FREE,
				},
				{
					id: 'relative-unrealized-loss',
					label: 'Relative Unrealized Loss',
					type: MetricType.INDICATOR,
					isAvailable: true,
					plan: Plan.FREE,
				},
			],
		},
		{
			id: 'realized-profitLoss',
			label: 'Realized Profit/Loss',
			type: MetricType.GROUP,
			isAvailable: true,
			children: [
				{
					id: 'net-realized-profitLoss',
					label: 'Net Realized Profit/Loss',
					type: MetricType.INDICATOR,
					isAvailable: true,
					plan: Plan.FREE,
				},
				{
					id: 'realized-profit',
					label: 'Realized Profit',
					type: MetricType.INDICATOR,
					isAvailable: true,
					plan: Plan.FREE,
				},
				{
					id: 'realized-loss',
					label: 'Realized Loss',
					type: MetricType.INDICATOR,
					isAvailable: true,
					plan: Plan.FREE,
				},
			],
		},
	],
}
