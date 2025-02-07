'use client'

import { Box, Button } from '@mui/material'
import { Form, Formik, FormikHelpers } from 'formik'
import { useRouter } from 'next/navigation'
import InputField from '../components/InputField'
import Wrapper from '../components/Wrapper'
import { RegisterInput, useRegisterMutation } from '../generated/graphql'
import { mapFieldErrors } from '../helpers/mapFieldErrors'

export default function Register() {
	const initialValues: RegisterInput = { username: '', email: '', password: '' }
	const router = useRouter()

	const [registerUser, { data, error }] = useRegisterMutation()

	const onRegisterSubmit = async (
		values: RegisterInput,
		{ setErrors }: FormikHelpers<RegisterInput>,
	) => {
		const response = await registerUser({
			variables: {
				registerInput: values,
			},
		})

		if (response.data?.register?.errors) {
			setErrors(mapFieldErrors(response.data.register.errors))
		} else if (response.data?.register?.user) {
			// Register successfully
			router.push('/')
		}
	}

	return (
		<Wrapper>
			{error && <p>Failed to register</p>}
			{data && data.register?.success && <p>Registered successfully{JSON.stringify(data)}</p>}
			<Formik initialValues={initialValues} onSubmit={onRegisterSubmit}>
				{({ isSubmitting }) => (
					<Form>
						<Box mt={2}>
							<InputField name="username" placeholder="Username" label="Username" type="text" />
						</Box>
						<Box mt={2}>
							<InputField name="email" placeholder="Email" label="Email" type="text" />
						</Box>
						<Box mt={2}>
							<InputField name="password" placeholder="Password" label="Password" type="password" />
						</Box>
						<Button type="submit" sx={{ mt: 2 }} loading={isSubmitting} loadingPosition="end">
							Register
						</Button>
					</Form>
				)}
			</Formik>
		</Wrapper>
	)
}
