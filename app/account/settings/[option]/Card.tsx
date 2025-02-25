import { colors } from '@/theme'
import { Box, BoxProps, Typography } from '@mui/material'

export default function Card(props: BoxProps) {
	return (
		<Box
			{...props}
			sx={{
				border: `1px solid ${colors.primary[900]}`,
				borderRadius: 3,
				p: '1.5rem',
			}}
		>
			<Typography fontSize="1.2rem" fontWeight="bold" color={colors.logo[1000]} pb="0.5rem">
				Username
			</Typography>
			<Typography fontSize="0.85rem">Enter an username you are comfortable with.</Typography>
			<Typography fontSize="0.85rem">Please use 32 characters at maximum.</Typography>
		</Box>
	)
}
