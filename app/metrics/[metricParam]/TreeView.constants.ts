import { TreeViewBaseItem } from '@mui/x-tree-view'
import { ExtendedTreeItemProps } from './TreeView.type'

export const constants: TreeViewBaseItem<ExtendedTreeItemProps>[] = [
	{
		id: 'address-count',
		label: 'Address Count Distribution',
		type: 'category',
		isAvailable: false,
		children: [
			{
				id: 'plankton-count',
				label: 'Plankton address count : < 1 ICP',
				type: 'indicator',
				isAvailable: false,
			},
			{
				id: 'shrimp-count',
				label: 'Shrimp address count : 1 - 10 ICP',
				type: 'indicator',
				isAvailable: false,
			},
			{
				id: 'crab-count',
				label: 'Crab address count : 10 - 100 ICP',
				type: 'indicator',
				isAvailable: false,
			},
			{
				id: 'octopus-count',
				label: 'Octopus address count : 100 - 500 ICP',
				type: 'indicator',
				isAvailable: false,
			},
			{
				id: 'fish-count',
				label: 'Fish address count : 500 - 1,000 ICP',
				type: 'indicator',
				isAvailable: false,
			},
			{
				id: 'dolphin-count',
				label: 'Dolphin address count : 1,000 - 5,000 ICP',
				type: 'indicator',
				isAvailable: false,
			},
			{
				id: 'shark-count',
				label: 'Shark address count : 5,000 - 10,000 ICP',
				type: 'indicator',
				isAvailable: false,
			},
			{
				id: 'whale-count',
				label: 'Whale address count : 10,000 - 100,000 ICP',
				type: 'indicator',
				isAvailable: false,
			},
			{
				id: 'humpback-count',
				label: 'Humpback address count : > 100,000 ICP',
				type: 'indicator',
				isAvailable: false,
			},
		],
	},
	{
		id: 'exchange-activity',
		label: 'Exchange Activity',
		type: 'category',
		isAvailable: false,
		children: [
			{
				id: 'exchange-netflow-volume',
				label: 'Exchange Netflow Volume',
				type: 'indicator',
				isAvailable: false,
			},
			{
				id: 'exchange-inflow-volume',
				label: 'Exchange Inflow Volume',
				type: 'indicator',
				isAvailable: false,
			},
			{
				id: 'exchange-outflow-volume',
				label: 'Exchange Outflow Volume',
				type: 'indicator',
				isAvailable: false,
			},
		],
	},
	{
		id: 'hodlers',
		label: 'Hodlers',
		type: 'category',
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
		type: 'category',
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
