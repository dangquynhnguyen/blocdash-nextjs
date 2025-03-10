/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { colors } from '@/theme'
import { Box, CircularProgress, Link, Typography } from '@mui/material'
import { Form, Formik, FormikHelpers } from 'formik'
import { useRouter } from 'next/navigation'
import InputField from '../../components/InputField'
import SubmitButton from '../../components/styledMui/SubmitButton'
import Wrapper from '../../components/Wrapper'
import { LoginInput, MeDocument, MeQuery, useLoginMutation } from '../../generated/graphql'
import { mapFieldErrors } from '../../helpers/mapFieldErrors'
import { useCheckAuth } from '../../utils/useCheckAuth'

export default function Login() {
	const router = useRouter()

	const { data: authData, loading: authLoading } = useCheckAuth()

	const initialValues: LoginInput = { usernameOrEmail: '', password: '' }

	const [loginUser, { data, error }] = useLoginMutation()

	const onLoginSubmit = async (values: LoginInput, { setErrors }: FormikHelpers<LoginInput>) => {
		const response = await loginUser({
			variables: {
				loginInput: values,
			},
			update(cache, { data }) {
				console.log('DATA LOGIN', data)

				// const meData = cache.readQuery({ query: MeDocument })
				// console.log('MEDATA', meData)

				if (data?.login.success) {
					cache.writeQuery<MeQuery>({
						query: MeDocument,
						data: { me: data.login.user },
					})
				}
			},
		})

		if (response.data?.login?.errors) {
			setErrors(mapFieldErrors(response.data.login.errors))
		} else if (response.data?.login?.user) {
			// Login successfully
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
						Log in to your account
					</Typography>
					<Typography fontSize="0.8rem" color={colors.primary[300]}>
						Don't have an account?{' '}
						<Link href={'/register'} fontWeight="bold">
							Sign Up
						</Link>
					</Typography>
					{error && <p>Failed to login. Internal server error.</p>}
					<Formik initialValues={initialValues} onSubmit={onLoginSubmit}>
						{({ isSubmitting }) => (
							<Form>
								<Box mt={2}>
									<InputField
										name="usernameOrEmail"
										placeholder="you@example.com"
										label="Username or Email"
										type="text"
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
								<Box ml={1.5} mt="1rem">
									<Link href="/forgot-password" fontSize="0.8rem" color={colors.primary[300]}>
										Forgot password ?
									</Link>
								</Box>
								<SubmitButton name={'Login'} loading={isSubmitting} sx={{ mt: 2, width: '100%' }} />
							</Form>
						)}
					</Formik>
				</Wrapper>
			)}
		</>
	)
}
