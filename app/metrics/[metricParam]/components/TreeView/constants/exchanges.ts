import { Category } from '../types'

export const exchanges: Category = {
	id: 'exchanges',
	label: 'Exchanges',
	type: 'category',
	isAvailable: true,
	children: [
		{
			id: 'exchange-flows',
			label: 'Exchange Flows',
			type: 'group',
			isAvailable: true,
			children: [
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
				{
					id: 'exchange-netflow-volume',
					label: 'Exchange Netflow Volume',
					type: 'indicator',
					isAvailable: true,
				},
				{
					id: 'exchange-deposits-transfersCount',
					label: 'Exchange Deposits: Number of Transfers',
					type: 'indicator',
					isAvailable: true,
				},
				{
					id: 'exchange-withdrawals-transfersCount',
					label: 'Exchange Withdrawals: Number of Transfers',
					type: 'indicator',
					isAvailable: true,
				},
				{
					id: 'inHouse-exchange-volume',
					label: 'In-House Exchange Volume',
					type: 'indicator',
					isAvailable: true,
				},
				{
					id: 'interExchange-volume',
					label: 'Inter-Exchange Volume',
					type: 'indicator',
					isAvailable: true,
				},
				{
					id: 'interExchange-transfersCount',
					label: 'Inter-Exchange: Number of Transfers',
					type: 'indicator',
					isAvailable: true,
				},
				{
					id: 'exchange-totalVolume',
					label: 'Exchange Deposit and Withdrawal Volume (Total)',
					type: 'indicator',
					isAvailable: true,
				},
				{
					id: 'exchange-totalVolume-momentum',
					label: 'Exchange Volume Momentum',
					type: 'indicator',
					isAvailable: true,
				},
			],
		},
		{
			id: 'exchange-balances',
			label: 'Exchange Balances',
			type: 'group',
			isAvailable: true,
			children: [
				{
					id: 'exchange-balance-total',
					label: 'Exchange Balance (Total)',
					type: 'indicator',
					isAvailable: true,
				},
				{
					id: 'exchange-balance-percent',
					label: 'Exchange Balance (Percent)',
					type: 'indicator',
					isAvailable: true,
				},
				{
					id: 'exchange-net-positionChange',
					label: 'Exchange Net Position Change',
					type: 'indicator',
					isAvailable: true,
				},
			],
		},
		{
			id: 'exchange-dominance',
			label: 'Exchange Dominance',
			type: 'group',
			isAvailable: true,
			children: [
				{
					id: 'exchange-transaction-dominance',
					label: 'Exchange Transaction Dominance',
					type: 'indicator',
					isAvailable: true,
				},
				{
					id: 'exchange-volume-dominance',
					label: 'Exchange Volume Dominance',
					type: 'indicator',
					isAvailable: true,
				},
			],
		},
		{
			id: 'exchange-prices',
			label: 'Exchange Prices',
			type: 'group',
			isAvailable: true,
			children: [
				{
					id: 'exchange-withdrawal-price',
					label: 'Exchange Withdrawal Price',
					type: 'indicator',
					isAvailable: true,
				},
				{
					id: 'exchange-deposit-price',
					label: 'Exchange Deposit Price',
					type: 'indicator',
					isAvailable: true,
				},
			],
		},
	],
}
