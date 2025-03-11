/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import FolderOpenIcon from '@mui/icons-material/FolderOpen'
import { Box, Collapse, Typography } from '@mui/material'
import { alpha, styled } from '@mui/material/styles'
import { TransitionProps } from '@mui/material/transitions'
import { RichTreeView } from '@mui/x-tree-view/RichTreeView'
import { treeItemClasses } from '@mui/x-tree-view/TreeItem'
import {
	TreeItem2Content,
	TreeItem2IconContainer,
	TreeItem2Label,
	TreeItem2Root,
} from '@mui/x-tree-view/TreeItem2'
import { TreeItem2Icon } from '@mui/x-tree-view/TreeItem2Icon'
import { TreeItem2Provider } from '@mui/x-tree-view/TreeItem2Provider'
import {
	UseTreeItem2Parameters,
	unstable_useTreeItem2 as useTreeItem2,
} from '@mui/x-tree-view/useTreeItem2'
import { animated, useSpring } from '@react-spring/web'
import clsx from 'clsx'
import * as React from 'react'

import { colors } from '@/theme'
import { useRouter } from 'next/navigation'
import { Dispatch, SetStateAction } from 'react'
import { TextIcon } from './TextIcon'
import { constants } from './TreeView.constants'
import { MetricType } from './TreeView.type'

declare module 'react' {
	interface CSSProperties {
		'--tree-view-color'?: string
		'--tree-view-bg-color'?: string
	}
}

const CustomTreeItemContent = styled(TreeItem2Content)<{ type?: MetricType }>(
	({ theme, type: type }) => ({
		flexDirection: 'row-reverse',
		borderRadius: theme.spacing(0),
		borderLeft: type === 'indicator' ? `1px solid ${colors.primary[800]}` : 'none',
		marginBottom: theme.spacing(0),
		marginTop: theme.spacing(0),
		paddingTop: theme.spacing(1),
		paddingBottom: theme.spacing(1),
		paddingRight: theme.spacing(2),
		paddingLeft: theme.spacing(2),
		[`& .${treeItemClasses.iconContainer}`]: {
			marginRight: theme.spacing(2),
		},
		[`&.Mui-expanded `]: {
			'&:not(.Mui-focused, .Mui-selected, .Mui-selected.Mui-focused) .labelIcon': {
				color: 'inherit !important',
			},
			'&::before': {
				content: '""',
				display: 'block',
				position: 'absolute',
				left: '1.1rem',
				top: '2.8rem',
				height: 'auto',
				width: '0.075rem',
				backgroundColor: theme.palette.grey[300],
			},
		},
		'&:hover': {
			backgroundColor: alpha(colors.logo[200], 0.2),
		},
		[`&.Mui-selected`]: {
			backgroundColor: type === 'indicator' ? colors.logo[700] : 'transparent',
			color: type === 'indicator' ? theme.palette.primary.contrastText : 'inherit',
		},
		'&.Mui-focused': {
			backgroundColor: 'transparent !important',
			color: 'inherit !important',
		},
		'&': {
			cursor: type === 'indicator' ? 'pointer' : 'default',
		},
	}),
)

const AnimatedCollapse = animated(Collapse)

function TransitionComponent(props: TransitionProps) {
	const style = useSpring({
		to: {
			opacity: props.in ? 1 : 0,
			transform: `translate3d(0,${props.in ? 0 : 20}px,0)`,
		},
	})

	return <AnimatedCollapse style={style} {...props} />
}

const StyledTreeItemLabelText = styled(Typography)({
	color: 'inherit',
	fontWeight: 400,
	fontSize: '0.85rem',
	whiteSpace: 'normal', // Allow text to wrap
	wordBreak: 'break-word', // Break words if needed
	overflowWrap: 'break-word', // Ensure long words wrap
}) as unknown as typeof Typography

interface CustomLabelProps {
	children: React.ReactNode
	icon?: React.ElementType
	isAvailable: boolean
}

function getIconFromFileType(type: MetricType) {
	switch (type) {
		case 'category':
			return FolderOpenIcon
		case 'group':
			return FolderOpenIcon
		case 'indicator':
			return undefined
		default:
			return undefined
	}
}

interface CustomTreeItemProps
	extends Omit<UseTreeItem2Parameters, 'rootRef'>,
		Omit<React.HTMLAttributes<HTMLLIElement>, 'onFocus'> {}

type Props = {
	set_selectedMetric: Dispatch<SetStateAction<string>>
	selectedMetric: string
}

export default function TreeView(props: Props) {
	const router = useRouter()
	// Find parent category and group for the selected metric
	const findParentNodes = (metricId: string) => {
		for (const category of constants) {
			for (const group of category.children!) {
				const hasIndicator = group.children!.some((ind) => ind.id === metricId)
				if (hasIndicator) {
					return {
						categoryId: category.id,
						groupId: group.id,
					}
				}
			}
		}
		return null
	}

	// Initialize expanded items with both category and group of selected metric
	const [expandedItems, setExpandedItems] = React.useState<string[]>(() => {
		const parents = findParentNodes(props.selectedMetric)
		return parents ? [parents.categoryId, parents.groupId] : []
	})

	const StyledTreeItemRoot = styled(TreeItem2Root)(({ theme }) => ({
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

	// Modify the onSelectedItemsChange handler in the RichTreeView component
	const handleSelectedItemsChange = (event: React.SyntheticEvent, itemIds: string | null) => {
		if (!itemIds) return

		// Find the selected item and its parents
		for (const category of constants) {
			for (const group of category.children!) {
				const indicator = group.children!.find((ind) => ind.id === itemIds)
				if (indicator) {
					setExpandedItems([category.id, group.id])
					props.set_selectedMetric(itemIds)
					props.set_selectedMetric(itemIds)

					return
				}
			}
		}
	}

	function CustomLabel({ icon: Icon, isAvailable, children, ...other }: CustomLabelProps) {
		return (
			<TreeItem2Label
				{...other}
				sx={{
					display: 'flex',
					alignItems: 'center',
				}}
			>
				{Icon && (
					<Box
						component={Icon}
						className="labelIcon"
						color="inherit"
						sx={{ mr: 1, fontSize: '1.2rem' }}
					/>
				)}
				<StyledTreeItemLabelText variant="body2">{children}</StyledTreeItemLabelText>
				{!isAvailable && <TextIcon color={alpha(colors.primary[0], 0.3)} text="Soon" />}
			</TreeItem2Label>
		)
	}

	const CustomTreeItem = React.forwardRef(function CustomTreeItem(
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
							})}
						/>
					</CustomTreeItemContent>
					{children && <TransitionComponent {...getGroupTransitionProps()} />}
				</StyledTreeItemRoot>
			</TreeItem2Provider>
		)
	})
	return (
		<RichTreeView
			items={constants}
			aria-label="tree-view"
			defaultExpandedItems={(() => {
				// Find the parent category and group
				for (const category of constants) {
					for (const group of category.children!) {
						if (group.children!.some((indicator) => indicator.id === props.selectedMetric)) {
							return [category.id, group.id]
						}
					}
				}
				return []
			})()}
			defaultSelectedItems={props.selectedMetric}
			sx={{
				flexGrow: 1,
				overflowY: 'auto',
			}}
			slots={{ item: CustomTreeItem }}
			selectedItems={props.selectedMetric}
			onSelectedItemsChange={handleSelectedItemsChange}
		/>
	)
}
