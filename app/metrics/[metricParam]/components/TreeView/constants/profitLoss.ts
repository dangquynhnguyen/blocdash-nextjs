import { Category } from './types'

export const profitLoss: Category = {
	id: 'profit-loss',
	label: 'Profit/Loss',
	type: 'category',
	isAvailable: true,
	children: [
		{
			id: 'group-sopr',
			label: 'SOPR - Spent Output Profit Ratio',
			type: 'group',
			isAvailable: true,
			children: [
				{
					id: 'sopr',
					label: 'SOPR',
					type: 'indicator',
					isAvailable: true,
				},
			],
		},
		{
			id: 'supply-profitLoss',
			label: 'Supply in Profit/Loss',
			type: 'group',
			isAvailable: true,
			children: [
				{
					id: 'supply-profit-percent',
					label: 'Percent of Supply in Profit',
					type: 'indicator',
					isAvailable: true,
				},
				{
					id: 'supply-profit',
					label: 'Supply in Profit',
					type: 'indicator',
					isAvailable: true,
				},
				{
					id: 'supply-loss',
					label: 'Supply in Loss',
					type: 'indicator',
					isAvailable: true,
				},
			],
		},
		{
			id: 'unrealized-profitLoss',
			label: 'Unrealized Profit/Loss',
			type: 'group',
			isAvailable: true,
			children: [
				{
					id: 'nupl',
					label: 'NUPL - Net Unrealized Profit/Loss',
					type: 'indicator',
					isAvailable: true,
				},
				{
					id: 'relative-unrealized-profit',
					label: 'Relative Unrealized Profit',
					type: 'indicator',
					isAvailable: true,
				},
				{
					id: 'relative-unrealized-loss',
					label: 'Relative Unrealized Loss',
					type: 'indicator',
					isAvailable: true,
				},
			],
		},
		{
			id: 'realized-profitLoss',
			label: 'Realized Profit/Loss',
			type: 'group',
			isAvailable: true,
			children: [
				{
					id: 'net-realized-profitLoss',
					label: 'Net Realized Profit/Loss',
					type: 'indicator',
					isAvailable: true,
				},
				{
					id: 'realized-profit',
					label: 'Realized Profit',
					type: 'indicator',
					isAvailable: true,
				},
				{
					id: 'realized-loss',
					label: 'Realized Loss',
					type: 'indicator',
					isAvailable: true,
				},
			],
		},
	],
}
