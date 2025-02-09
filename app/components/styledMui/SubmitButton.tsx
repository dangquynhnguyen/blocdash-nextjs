import { colors } from '@/theme'
import { Button, ButtonProps } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'

interface ISubmitButtonProps extends ButtonProps {
	name: string
}

const theme = createTheme({
	palette: {
		primary: colors.logo,
	},
})

export default function SubmitButton(props: ISubmitButtonProps) {
	return (
		<ThemeProvider theme={theme}>
			<Button
				{...props}
				type="submit"
				loadingPosition="end"
				variant="contained"
				size="small"
				color="primary"
			>
				{props.name}
			</Button>
		</ThemeProvider>
	)
}
