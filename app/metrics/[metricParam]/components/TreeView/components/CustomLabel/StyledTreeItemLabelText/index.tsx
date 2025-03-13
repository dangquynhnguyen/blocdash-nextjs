import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { labelTextStyles } from './styles'

export const StyledTreeItemLabelText = styled(Typography)(
	labelTextStyles,
) as unknown as typeof Typography
