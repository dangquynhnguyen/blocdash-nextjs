import { TreeViewBaseItem } from '@mui/x-tree-view'
import { ExtendedTreeItemProps } from './TreeView.type'

export const constants: TreeViewBaseItem<ExtendedTreeItemProps>[] = [
	{
		id: 'address-balances',
		label: 'Address Balances (ICP)',
		fileType: 'category',
		isAvailable: false,
		children: [
			// {
			//   id: '1.1',
			//   label: 'Addresses with Balance ≥ 1',
			//   fileType: 'indicator',
			//   isAvailable: false,
			// },
			// {
			//   id: '1.2',
			//   label: 'Addresses with Balance ≥ 10',
			//   fileType: 'indicator',
			//   isAvailable: false,
			// },
			// {
			//   id: '1.3',
			//   label: 'Addresses with Balance ≥ 100',
			//   fileType: 'indicator',
			//   isAvailable: false,
			// },
			// {
			//   id: '1.4',
			//   label: 'Addresses with Balance ≥ 1k',
			//   fileType: 'indicator',
			//   isAvailable: false,
			// },
			// {
			//   id: '1.5',
			//   label: 'Addresses with Balance ≥ 10k',
			//   fileType: 'indicator',
			//   isAvailable: false,
			// },
			// {
			//   id: '1.6',
			//   label: 'Addresses with Balance ≥ 100k',
			//   fileType: 'indicator',
			//   isAvailable: false,
			// },
			// {
			//   id: '1.7',
			//   label: 'Addresses with Balance ≥ 1M',
			//   fileType: 'indicator',
			//   isAvailable: false,
			// },
		],
	},
	{
		id: 'exchange-activity',
		label: 'Exchange Activity',
		fileType: 'category',
		isAvailable: true,
		children: [
			{
				id: 'exchange-netflow-volume',
				label: 'Exchange Netflow Volume',
				fileType: 'indicator',
				isAvailable: true,
			},
			{
				id: 'exchange-inflow-volume',
				label: 'Exchange Inflow Volume',
				fileType: 'indicator',
				isAvailable: false,
			},
			{
				id: 'exchange-outflow-volume',
				label: 'Exchange Outflow Volume',
				fileType: 'indicator',
				isAvailable: false,
			},
		],
	},
	{
		id: 'hodlers',
		label: 'Hodlers',
		fileType: 'category',
		isAvailable: false,
		children: [
			// {
			//   id: '3.1',
			//   label: '...',
			//   fileType: 'indicator',
			//   isAvailable: false,
			// },
			// {
			//   id: '3.2',
			//   label: '...',
			//   fileType: 'indicator',
			//   isAvailable: false,
			// },
			// {
			//   id: '3.3',
			//   label: '...',
			//   fileType: 'indicator',
			//   isAvailable: false,
			// },
			// {
			//   id: '3.4',
			//   label: '...',
			//   fileType: 'indicator',
			//   isAvailable: false,
			// },
			// {
			//   id: '3.5',
			//   label: '...',
			//   fileType: 'indicator',
			//   isAvailable: false,
			// },
			// {
			//   id: '3.6',
			//   label: '...',
			//   fileType: 'indicator',
			//   isAvailable: false,
			// },
			// {
			//   id: '3.7',
			//   label: '...',
			//   fileType: 'indicator',
			//   isAvailable: false,
			// },
			// {
			//   id: '3.8',
			//   label: '...',
			//   fileType: 'indicator',
			//   isAvailable: false,
			// },
			// {
			//   id: '3.9',
			//   label: '...',
			//   fileType: 'indicator',
			//   isAvailable: false,
			// },
			// {
			//   id: '3.10',
			//   label: '...',
			//   fileType: 'indicator',
			//   isAvailable: false,
			// },
		],
	},
	{
		id: 'profit-loss',
		label: 'Profit/Loss',
		fileType: 'category',
		isAvailable: false,
		children: [
			// {
			//   id: '4.1',
			//   label: '...',
			//   fileType: 'indicator',
			//   isAvailable: false,
			// },
			// {
			//   id: '4.2',
			//   label: '...',
			//   fileType: 'indicator',
			//   isAvailable: false,
			// },
			// {
			//   id: '4.3',
			//   label: '...',
			//   fileType: 'indicator',
			//   isAvailable: false,
			// },
			// {
			//   id: '4.4',
			//   label: '...',
			//   fileType: 'indicator',
			//   isAvailable: false,
			// },
			// {
			//   id: '4.5',
			//   label: '...',
			//   fileType: 'indicator',
			//   isAvailable: false,
			// },
		],
	},
]
