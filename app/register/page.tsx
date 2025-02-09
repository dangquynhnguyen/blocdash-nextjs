'use client'

import { Box, CircularProgress } from '@mui/material'
import { Form, Formik, FormikHelpers } from 'formik'
import { useRouter } from 'next/navigation'
import InputField from '../components/InputField'
import SubmitButton from '../components/styledMui/SubmitButton'
import Wrapper from '../components/Wrapper'
import { MeDocument, MeQuery, RegisterInput, useRegisterMutation } from '../generated/graphql'
import { mapFieldErrors } from '../helpers/mapFieldErrors'
import { useCheckAuth } from '../utils/useCheckAuth'

export default function Register() {
	const initialValues: RegisterInput = { username: '', email: '', password: '' }
	const router = useRouter()

	const { data: authData, loading: authLoading } = useCheckAuth()

	const [registerUser, { data, error }] = useRegisterMutation()

	const onRegisterSubmit = async (
		values: RegisterInput,
		{ setErrors }: FormikHelpers<RegisterInput>,
	) => {
		const response = await registerUser({
			variables: {
				registerInput: values,
			},
			update(cache, { data }) {
				if (data?.register?.success) {
					cache.writeQuery<MeQuery>({
						query: MeDocument,
						data: { me: data.register.user },
					})
				}
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
		<>
			{authLoading || (!authLoading && authData?.me) ? (
				<Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
					<CircularProgress />
				</Box>
			) : (
				<Wrapper>
					{error && <p>Failed to register. Internal server error.</p>}
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
									<InputField
										name="password"
										placeholder="Password"
										label="Password"
										type="password"
									/>
								</Box>
								<SubmitButton name={'Register'} loading={isSubmitting} sx={{ mt: 2 }} />
							</Form>
						)}
					</Formik>
				</Wrapper>
			)}
		</>
	)
}
