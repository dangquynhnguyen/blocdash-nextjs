import { Box } from '@mui/material'

type TextIconProps = {
	color: string
	backgroundColor?: string
	text: string
}

export function TextIcon(props: TextIconProps) {
	return (
		<Box
			sx={{
				width: 'auto',
				padding: '0 0.3rem 0 0.3rem',
				height: '1rem',
				borderRadius: 2,
				border: '0.1rem solid',
				borderColor: props.color,
				bgcolor: props.backgroundColor,
				display: 'inline-block',
				verticalAlign: 'middle',
				zIndex: 1,
				mx: '0.6rem',

				fontSize: '0.65rem',
				color: props.color,
			}}
		>
			{props.text}
		</Box>
	)
}
