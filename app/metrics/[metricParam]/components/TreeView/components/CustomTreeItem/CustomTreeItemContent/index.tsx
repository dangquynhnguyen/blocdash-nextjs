import { CSSObject } from '@mui/material'
import { styled } from '@mui/material/styles'
import { TreeItem2Content } from '@mui/x-tree-view/TreeItem2'
import { getBaseStyles, getExpandedStyles, getIconStyles, getInteractionStyles } from './styles'
import { CustomTreeItemContentProps } from './types'

export const CustomTreeItemContent = styled(TreeItem2Content, {
	shouldForwardProp: (prop) => prop !== 'type',
})<CustomTreeItemContentProps>(({ theme, type }) => ({
	...(getBaseStyles(theme, type) as CSSObject),
	...(getIconStyles(theme) as CSSObject),
	'&.Mui-expanded': getExpandedStyles(theme) as CSSObject,
	...(getInteractionStyles(theme, type) as CSSObject),
}))

export default CustomTreeItemContent
