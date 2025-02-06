'use client'

import Input from '@/components/form/Input'
import { FormControl, FormLabel } from '@mui/material'
import { Form, Formik } from 'formik'

export default function Register() {
	return (
		<Formik
			initialValues={{ username: '', password: '' }}
			onSubmit={(values) => console.log(values)}
		>
			{({ values, handleChange }) => (
				<Form>
					<FormControl defaultValue="" required>
						<FormLabel htmlFor="username">Username</FormLabel>
						<Input
							id="username"
							placeholder="Username"
							value={values.username}
							onChange={handleChange}
						/>
					</FormControl>
				</Form>
			)}
		</Formik>
	)
}
