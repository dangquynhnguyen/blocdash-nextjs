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
import { Dispatch, SetStateAction } from 'react'
import { TextIcon } from './TextIcon'
import { constants } from './TreeView.constants'
import { Type } from './TreeView.type'

declare module 'react' {
	interface CSSProperties {
		'--tree-view-color'?: string
		'--tree-view-bg-color'?: string
	}
}

const CustomTreeItemContent = styled(TreeItem2Content)(({ theme }) => ({
	flexDirection: 'row-reverse',
	borderRadius: theme.spacing(0.7),
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
			color: colors.logo[700],
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
	[`&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused`]: {
		backgroundColor: colors.logo[700],
		color: theme.palette.primary.contrastText,
	},
}))

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
}) as unknown as typeof Typography

interface CustomLabelProps {
	children: React.ReactNode
	icon?: React.ElementType
	isAvailable: boolean
}

function getIconFromFileType(fileType: Type) {
	switch (fileType) {
		case 'indicator':
			return undefined
		case 'category':
			return FolderOpenIcon
		default:
			return undefined
	}
}

interface CustomTreeItemProps
	extends Omit<UseTreeItem2Parameters, 'rootRef'>,
		Omit<React.HTMLAttributes<HTMLLIElement>, 'onFocus'> {}

type Props = {
	set_selectedMetric: Dispatch<SetStateAction<string | undefined>>
	selectedMetric: string | undefined
}

export default function TreeView(props: Props) {
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
	})) as unknown as typeof TreeItem2Root
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
		const icon = getIconFromFileType(item.fileType)
		return (
			<TreeItem2Provider itemId={itemId}>
				<StyledTreeItemRoot {...getRootProps(other)}>
					<CustomTreeItemContent
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
			defaultExpandedItems={constants.map((item) => item.id)}
			defaultSelectedItems={constants[1]?.children?.[0]?.id}
			sx={{
				flexGrow: 1,
				overflowY: 'auto',
			}}
			slots={{ item: CustomTreeItem }}
			selectedItems={props.selectedMetric}
			onSelectedItemsChange={(event, itemId) => props.set_selectedMetric(itemId!)}
		/>
	)
}
