/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { Box, CircularProgress } from '@mui/material'
import { Form, Formik, FormikHelpers } from 'formik'
import NextLink from 'next/link'
import { useRouter } from 'next/navigation'
import InputField from '../components/InputField'
import SubmitButton from '../components/styledMui/SubmitButton'
import UnderlinedTypography from '../components/styledMui/UnderlinedTypography'
import Wrapper from '../components/Wrapper'
import { LoginInput, MeDocument, MeQuery, useLoginMutation } from '../generated/graphql'
import { mapFieldErrors } from '../helpers/mapFieldErrors'
import { useCheckAuth } from '../utils/useCheckAuth'

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
					{error && <p>Failed to login. Internal server error.</p>}
					<Formik initialValues={initialValues} onSubmit={onLoginSubmit}>
						{({ isSubmitting }) => (
							<Form>
								<Box mt={2}>
									<InputField
										name="usernameOrEmail"
										placeholder="Username or Email"
										label="Username or Email"
										type="text"
									/>
								</Box>
								<Box mt={2}>
									<InputField
										name="password"
										placeholder="Password"
										label="Password"
										type="password"
									/>
								</Box>
								<Box>
									<NextLink href="/forgot-password">
										<UnderlinedTypography mt={2} ml={1.5} name={'Forgot password ?'} />
									</NextLink>
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
