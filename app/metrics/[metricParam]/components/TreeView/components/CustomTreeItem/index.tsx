import { TreeItem2IconContainer } from '@mui/x-tree-view/TreeItem2'
import { TreeItem2Icon } from '@mui/x-tree-view/TreeItem2Icon'
import { TreeItem2Provider } from '@mui/x-tree-view/TreeItem2Provider'
import { unstable_useTreeItem2 as useTreeItem2 } from '@mui/x-tree-view/useTreeItem2'
import clsx from 'clsx'
import * as React from 'react'

import { CustomLabel } from '../../components/CustomLabel'
import CustomTreeItemContent from '../../components/CustomTreeItem/CustomTreeItemContent'
import { StyledTreeItemRoot } from '../../components/CustomTreeItem/StyledTreeItemRoot'
import TransitionComponent from '../../components/CustomTreeItem/TransitionComponent'
import { getIconFromFileType } from '../../helpers/getIconFromFileType'
import { CustomTreeItemProps } from './types'

export const CustomTreeItem = React.forwardRef(function CustomTreeItem(
	props: CustomTreeItemProps,
	ref: React.Ref<HTMLLIElement>,
) {
	const { id, itemId, label, disabled, children, ...other } = props
	const {
		getRootProps,
		getContentProps,
		getIconContainerProps,
		getLabelProps,
		getGroupTransitionProps,
		status,
		publicAPI,
	} = useTreeItem2({ id, itemId, children, label, disabled, rootRef: ref })
	const item = publicAPI.getItem(itemId)
	const icon = getIconFromFileType(item.type)
	return (
		<TreeItem2Provider itemId={itemId}>
			<StyledTreeItemRoot {...getRootProps(other)}>
				<CustomTreeItemContent
					type={item.type}
					{...getContentProps({
						className: clsx('content', {
							'Mui-expanded': status.expanded,
							'Mui-selected': status.selected,
							'Mui-focused': status.focused,
							'Mui-disabled': status.disabled,
						}),
					})}
				>
					<TreeItem2IconContainer {...getIconContainerProps()}>
						<TreeItem2Icon status={status} />
					</TreeItem2IconContainer>
					<CustomLabel
						{...getLabelProps({
							icon,
							isAvailable: item.isAvailable,
							type: item.type,
							itemId: itemId,
						})}
					/>
				</CustomTreeItemContent>
				{children && <TransitionComponent {...getGroupTransitionProps()} />}
			</StyledTreeItemRoot>
		</TreeItem2Provider>
	)
})
