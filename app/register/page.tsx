/* eslint-disable react/no-unescaped-entities */
'use client'

import { colors } from '@/theme'
import { Box, CircularProgress, Link, Typography } from '@mui/material'
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
					<Typography fontSize="1.25rem" fontWeight="bold" color={colors.logo[1000]} p="1rem 0">
						Create your account
					</Typography>
					<Typography fontSize="0.8rem" color={colors.primary[300]}>
						Have an account?{' '}
						<Link href={'/login'} fontWeight="bold">
							Log in now
						</Link>
					</Typography>
					{error && <p>Failed to register. Internal server error.</p>}
					{data && data.register?.success && <p>Registered successfully{JSON.stringify(data)}</p>}
					<Formik initialValues={initialValues} onSubmit={onRegisterSubmit}>
						{({ isSubmitting }) => (
							<Form>
								<Box mt={2}>
									<InputField name="username" placeholder="username" label="Username" type="text" />
								</Box>
								<Box mt={2}>
									<InputField
										name="email"
										placeholder="you@example.com"
										label="Email"
										type="email"
									/>
								</Box>
								<Box mt={2}>
									<InputField
										name="password"
										placeholder="••••••••••"
										label="Password"
										type="password"
									/>
								</Box>
								<SubmitButton
									name={'Register'}
									loading={isSubmitting}
									sx={{ mt: 2, width: '100%' }}
								/>
							</Form>
						)}
					</Formik>
				</Wrapper>
			)}
		</>
	)
}
