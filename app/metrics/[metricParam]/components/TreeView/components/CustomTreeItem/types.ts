import { UseTreeItem2Parameters } from '@mui/x-tree-view/useTreeItem2'

export interface CustomTreeItemProps
	extends Omit<UseTreeItem2Parameters, 'rootRef'>,
		Omit<React.HTMLAttributes<HTMLLIElement>, 'onFocus'> {}
