import { Category } from './types'

export const exchanges: Category = {
	id: 'exchanges',
	label: 'Exchanges',
	type: 'category',
	isAvailable: true,
	children: [
		{
			id: 'exchange-activity',
			label: 'Exchange Activity',
			type: 'group',
			isAvailable: true,
			children: [
				{
					id: 'exchange-netflow-volume',
					label: 'Exchange Netflow Volume',
					type: 'indicator',
					isAvailable: true,
				},
				{
					id: 'exchange-inflow-volume',
					label: 'Exchange Inflow Volume',
					type: 'indicator',
					isAvailable: true,
				},
				{
					id: 'exchange-outflow-volume',
					label: 'Exchange Outflow Volume',
					type: 'indicator',
					isAvailable: true,
				},
			],
		},
	],
}
