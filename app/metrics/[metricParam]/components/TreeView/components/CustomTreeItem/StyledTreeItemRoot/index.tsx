import { styled } from '@mui/material/styles'
import { TreeItem2Root } from '@mui/x-tree-view/TreeItem2'

import { colors } from '@/theme'

export const StyledTreeItemRoot = styled(TreeItem2Root)(({ theme }) => ({
	color: theme.palette.mode === 'light' ? theme.palette.grey[800] : theme.palette.grey[400],
	position: 'relative',
	'& .Mui-focused': {
		background: colors.logo[700] + '!important',
		color: colors.logo[100] + '!important',
	},
	'& .Mui-selected': {
		background: colors.logo[700] + '!important',
		color: colors.logo[100] + '!important',
	},
	['& .MuiCollapse-root']: {
		paddingLeft: theme.spacing(3.5) + '!important',
	},

	// Prevent text selection in the entire TreeView
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	msUserSelect: 'none',
	userSelect: 'none',
	// Style category and indicator items differently.
	'& .content[type="category"]': {
		cursor: 'default',
		'&.Mui-selected': {
			backgroundColor: 'transparent !important',
			color: 'inherit !important',
		},
		'&.Mui-focused': {
			backgroundColor: 'transparent !important',
			color: 'inherit !important',
		},
	},
	'& .content[type="indicator"]': {
		cursor: 'pointer',
	},
})) as unknown as typeof TreeItem2Root
