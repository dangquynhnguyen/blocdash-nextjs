import { colors } from '@/theme'
import { Box } from '@mui/material'
import { alpha } from '@mui/material/styles'
import { TreeItem2Label } from '@mui/x-tree-view/TreeItem2'
import { TextIcon } from '../../../TextIcon'
import { getIndicatorCount } from '../../helpers/getIndicatorCount'
import { CountBadge } from './CountBadge'
import { StyledTreeItemLabelText } from './StyledTreeItemLabelText'
import { labelStyles } from './styles'
import { CustomLabelProps } from './types'

export function CustomLabel({
	icon: Icon,
	isAvailable,
	children,
	type,
	itemId,
	...other
}: CustomLabelProps) {
	const count = type === 'category' ? getIndicatorCount(itemId) : 0

	return (
		<TreeItem2Label {...other} sx={labelStyles.root}>
			<Box sx={labelStyles.contentWrapper}>
				{Icon && (
					<Box component={Icon} className="labelIcon" color="inherit" sx={labelStyles.icon} />
				)}
				<StyledTreeItemLabelText variant="body2">{children}</StyledTreeItemLabelText>
				{!isAvailable && <TextIcon color={alpha(colors.primary[0], 0.3)} text="Soon" />}
			</Box>
			<CountBadge count={count} />
		</TreeItem2Label>
	)
}
