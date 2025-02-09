'use client'
import { colors } from '@/theme'
import { Alert, FormControl, FormLabel, InputProps } from '@mui/material'
import { useField } from 'formik'
import Input from './styledMui/Input'

interface IInputFieldProps extends InputProps {
	label: string
}

export default function InputField(props: IInputFieldProps) {
	const [field, { error }] = useField(props)

	return (
		<FormControl
			sx={{
				width: '100%',
				'& .MuiFormLabel-root.Mui-focused': {
					color: colors.primary[0],
					fontWeight: 500,
				},
			}}
		>
			<FormLabel
				htmlFor={field.name}
				sx={{
					marginLeft: '12px',
					marginBottom: '5px',
					fontSize: '0.9rem',
				}}
			>
				{props.label}
			</FormLabel>
			<Input {...field} {...props} id={field.name} fullWidth={false} />
			{error && <Alert severity="error">{error}</Alert>}
		</FormControl>
	)
}
