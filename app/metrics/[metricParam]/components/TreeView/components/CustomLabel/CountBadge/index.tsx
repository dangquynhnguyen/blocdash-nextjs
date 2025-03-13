import { Box, Typography } from '@mui/material'
import { labelStyles } from '../styles'

interface CountBadgeProps {
	count: number
}

export const CountBadge = ({ count }: CountBadgeProps) => {
	if (count <= 0) return null

	return (
		<Box sx={labelStyles.countBadge}>
			<Typography variant="caption" sx={labelStyles.countText}>
				{count}
			</Typography>
		</Box>
	)
}

export default CountBadge
