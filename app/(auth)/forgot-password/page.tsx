/* eslint-disable react/no-unescaped-entities */
'use client'

import { colors } from '@/theme'
import CheckIcon from '@mui/icons-material/Check'
import { Alert, Box, CircularProgress, Link, Typography } from '@mui/material'
import { Form, Formik } from 'formik'
import InputField from '../../components/InputField'
import SubmitButton from '../../components/styledMui/SubmitButton'
import Wrapper from '../../components/Wrapper'
import { ForgotPasswordInput, useForgotPasswordMutation } from '../../generated/graphql'
import { useCheckAuth } from '../../utils/useCheckAuth'

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
				<Typography fontSize="1.25rem" fontWeight="bold" color={colors.logo[1000]} p="1rem 0">
					Reset your password
				</Typography>
				<Typography fontSize="0.8rem" color={colors.primary[300]}>
					To reset your password, enter your email below and submit. An email will be sent to you
					with instructions about how to complete the process.
				</Typography>
				<Formik initialValues={initialValues} onSubmit={onForgotPasswordSubmit}>
					{({ isSubmitting }) =>
						!loading && data ? (
							<Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
								Please check your email inbox for a link to complete the reset.
							</Alert>
						) : (
							<Form>
								<Box mt={2}>
									<InputField
										name="email"
										placeholder="you@example.com"
										label="Email"
										type="email"
									/>
								</Box>
								<SubmitButton
									name={'Send Reset Email'}
									loading={isSubmitting}
									sx={{ mt: 2, width: '100%' }}
								/>
								<Typography fontSize="0.8rem" color={colors.primary[300]} mt="1rem">
									Already have an account?{' '}
									<Link href={'/login'} fontWeight="bold">
										Login
									</Link>
								</Typography>
							</Form>
						)
					}
				</Formik>
			</Wrapper>
		)
}
