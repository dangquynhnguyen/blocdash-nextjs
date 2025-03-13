import { Plan } from '@/app/enums'
import { MetricType } from '../enums'
import { Category } from '../types'

export const exchanges: Category = {
	id: 'exchanges',
	label: 'Exchanges',
	type: MetricType.CATEGORY,
	isAvailable: true,
	children: [
		{
			id: 'exchange-flows',
			label: 'Exchange Flows',
			type: MetricType.GROUP,
			isAvailable: true,
			children: [
				{
					id: 'exchange-inflow-volume',
					label: 'Exchange Inflow Volume',
					type: MetricType.INDICATOR,
					isAvailable: true,
					plan: Plan.FREE,
				},
				{
					id: 'exchange-outflow-volume',
					label: 'Exchange Outflow Volume',
					type: MetricType.INDICATOR,
					isAvailable: true,
					plan: Plan.FREE,
				},
				{
					id: 'exchange-netflow-volume',
					label: 'Exchange Netflow Volume',
					type: MetricType.INDICATOR,
					isAvailable: true,
					plan: Plan.FREE,
				},
				{
					id: 'exchange-deposits-transfersCount',
					label: 'Exchange Deposits: Number of Transfers',
					type: MetricType.INDICATOR,
					isAvailable: true,
					plan: Plan.FREE,
				},
				{
					id: 'exchange-withdrawals-transfersCount',
					label: 'Exchange Withdrawals: Number of Transfers',
					type: MetricType.INDICATOR,
					isAvailable: true,
					plan: Plan.FREE,
				},
				{
					id: 'inHouse-exchange-volume',
					label: 'In-House Exchange Volume',
					type: MetricType.INDICATOR,
					isAvailable: true,
					plan: Plan.FREE,
				},
				{
					id: 'interExchange-volume',
					label: 'Inter-Exchange Volume',
					type: MetricType.INDICATOR,
					isAvailable: true,
					plan: Plan.FREE,
				},
				{
					id: 'interExchange-transfersCount',
					label: 'Inter-Exchange: Number of Transfers',
					type: MetricType.INDICATOR,
					isAvailable: true,
					plan: Plan.FREE,
				},
				{
					id: 'exchange-totalVolume',
					label: 'Exchange Deposit and Withdrawal Volume (Total)',
					type: MetricType.INDICATOR,
					isAvailable: true,
					plan: Plan.FREE,
				},
				{
					id: 'exchange-totalVolume-momentum',
					label: 'Exchange Volume Momentum',
					type: MetricType.INDICATOR,
					isAvailable: true,
					plan: Plan.FREE,
				},
			],
		},
		{
			id: 'exchange-balances',
			label: 'Exchange Balances',
			type: MetricType.GROUP,
			isAvailable: true,
			children: [
				{
					id: 'exchange-balance-total',
					label: 'Exchange Balance (Total)',
					type: MetricType.INDICATOR,
					isAvailable: true,
					plan: Plan.FREE,
				},
				{
					id: 'exchange-balance-percent',
					label: 'Exchange Balance (Percent)',
					type: MetricType.INDICATOR,
					isAvailable: true,
					plan: Plan.FREE,
				},
				{
					id: 'exchange-net-positionChange',
					label: 'Exchange Net Position Change',
					type: MetricType.INDICATOR,
					isAvailable: true,
					plan: Plan.FREE,
				},
			],
		},
		{
			id: 'exchange-dominance',
			label: 'Exchange Dominance',
			type: MetricType.GROUP,
			isAvailable: true,
			children: [
				{
					id: 'exchange-transaction-dominance',
					label: 'Exchange Transaction Dominance',
					type: MetricType.INDICATOR,
					isAvailable: true,
					plan: Plan.FREE,
				},
				{
					id: 'exchange-volume-dominance',
					label: 'Exchange Volume Dominance',
					type: MetricType.INDICATOR,
					isAvailable: true,
					plan: Plan.FREE,
				},
			],
		},
		{
			id: 'exchange-prices',
			label: 'Exchange Prices',
			type: MetricType.GROUP,
			isAvailable: true,
			children: [
				{
					id: 'exchange-withdrawal-price',
					label: 'Exchange Withdrawal Price',
					type: MetricType.INDICATOR,
					isAvailable: true,
					plan: Plan.FREE,
				},
				{
					id: 'exchange-deposit-price',
					label: 'Exchange Deposit Price',
					type: MetricType.INDICATOR,
					isAvailable: true,
					plan: Plan.FREE,
				},
			],
		},
	],
}
