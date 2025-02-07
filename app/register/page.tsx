'use client'

import { Box, Button } from '@mui/material'
import { Form, Formik } from 'formik'
import InputField from '../../components/InputField'
import Wrapper from '../../components/Wrapper'

import { useMutation } from '@apollo/client'
import { registerMutation } from '../graphql_client/mutations'

export default function Register() {
	const initialValues: NewUserInput = { username: '', email: '', password: '' }

	interface UserMutationResponse {
		code: number
		success: boolean
		message: string
		user: string
		error: string
	}
	interface NewUserInput {
		username: string
		email: string
		password: string
	}

	const [registerUser, { data, error }] = useMutation<
		{ register: UserMutationResponse },
		{ registerInput: NewUserInput }
	>(registerMutation)

	const onRegisterSubmit = (values: NewUserInput) => {
		registerUser({
			variables: {
				registerInput: values,
			},
		})
	}

	return (
		<Wrapper>
			{error && <p>Failed to register</p>}
			{data && data.register.success && <p>Registered successfully{JSON.stringify(data)}</p>}
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
