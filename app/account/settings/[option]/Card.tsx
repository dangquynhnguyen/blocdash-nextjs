import Input from '@/app/components/styledMui/Input'
import { colors } from '@/theme'
import { Box, BoxProps, Typography } from '@mui/material'

interface ICard extends BoxProps {
	label: string
	description: string
	error_message: string
}

export default function Card(props: ICard) {
	return (
		<Box
			{...props}
			sx={{
				border: `1px solid ${colors.primary[900]}`,
				borderRadius: '0.5rem',
			}}
		>
			<Box p="1.25rem">
				<Typography fontSize="1.2rem" fontWeight="bold" color={colors.logo[1000]} pb="0.5rem">
					{props.label}
				</Typography>
				<Typography fontSize="0.85rem">{props.description}</Typography>
			</Box>
			<Box p="1.25rem" pt="0" width="20rem" maxWidth="100%">
				<Input />
			</Box>
			<Box
				bgcolor={`rgb(from ${colors.primary[950]} r g b / 50%)`}
				borderRadius="0 0 0.5rem 0.5rem"
				borderTop={`1px solid ${colors.primary[900]}`}
				color={colors.primary[450]}
				p="1.25rem"
				m="0"
			>
				<Typography fontSize="0.85rem">{props.error_message}</Typography>
			</Box>
		</Box>
	)
}
