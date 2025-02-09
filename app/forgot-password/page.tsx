'use client'

import { Box, CircularProgress } from '@mui/material'
import { Form, Formik } from 'formik'
import NextLink from 'next/link'
import InputField from '../components/InputField'
import SubmitButton from '../components/styledMui/SubmitButton'
import UnderlinedTypography from '../components/styledMui/UnderlinedTypography'
import Wrapper from '../components/Wrapper'
import { ForgotPasswordInput, useForgotPasswordMutation } from '../generated/graphql'
import { useCheckAuth } from '../utils/useCheckAuth'

export default function ForgotPassword() {
	const { data: authData, loading: authLoading } = useCheckAuth()

	const initialValues = { email: '' }

	const [forgotPassword, { data, loading }] = useForgotPasswordMutation()

	async function onForgotPasswordSubmit(values: ForgotPasswordInput) {
		await forgotPassword({
			variables: { forgotPasswordInput: values },
		})
	}

	if (authLoading || (!authLoading && authData?.me)) {
		return (
			<Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
				<CircularProgress />
			</Box>
		)
	} else
		return (
			<Wrapper>
				<Formik initialValues={initialValues} onSubmit={onForgotPasswordSubmit}>
					{({ isSubmitting }) =>
						!loading && data ? (
							<Box>Please check your inbox</Box>
						) : (
							<Form>
								<Box mt={2}>
									<InputField name="email" placeholder="Email" label="Email" type="email" />
								</Box>
								<NextLink href="/login">
									<UnderlinedTypography mt={2} ml={1.5} name={'Back to Login'} />
								</NextLink>
								<SubmitButton
									name={'Send Reset Password Email'}
									loading={isSubmitting}
									sx={{ mt: 2, width: '100%' }}
								/>
							</Form>
						)
					}
				</Formik>
			</Wrapper>
		)
}
