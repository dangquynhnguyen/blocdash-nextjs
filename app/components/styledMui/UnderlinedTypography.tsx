import { Typography, TypographyProps } from '@mui/material'

interface IUnderlinedTypography extends TypographyProps {
	name: string
}

export default function UnderlinedTypography(props: IUnderlinedTypography) {
	return (
		<Typography
			{...props}
			sx={{
				fontSize: '0.9rem',
				textDecoration: 'underline',
			}}
		>
			{props.name}
		</Typography>
	)
}
