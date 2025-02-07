'use client'
import { Alert, FormControl, FormLabel, InputProps } from '@mui/material'
import { useField } from 'formik'
import Input from './styledMUI/Input'

interface IInputFieldProps extends InputProps {
	label: string
}

export default function InputField(props: IInputFieldProps) {
	const [field, { error }] = useField(props)

	return (
		<FormControl>
			<FormLabel htmlFor={field.name} sx={{ marginBottom: '5px' }}>
				{props.label}
			</FormLabel>
			<Input {...field} {...props} id={field.name} />
			{error && <Alert severity="error">{error}</Alert>}
		</FormControl>
	)
}
