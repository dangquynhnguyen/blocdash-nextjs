/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { colors } from '@/theme'
import { Box, CircularProgress, Typography } from '@mui/material'
import { Form, Formik, FormikHelpers } from 'formik'
import NextLink from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import InputField from '../components/InputField'
import SubmitButton from '../components/styledMui/SubmitButton'
import UnderlinedTypography from '../components/styledMui/UnderlinedTypography'
import Wrapper from '../components/Wrapper'
import { ChangePasswordInput, useChangePasswordMutation } from '../generated/graphql'
import { mapFieldErrors } from '../helpers/mapFieldErrors'
import { useCheckAuth } from '../utils/useCheckAuth'

export default function ChangePassword() {
	const { data: authData, loading: authLoading } = useCheckAuth()

	const searchParams = useSearchParams()
	const userId = searchParams.get('userId')
	const token = searchParams.get('token')

	const initialValues = { newPassword: '' }

	const [changePassword, { loading }] = useChangePasswordMutation()

	const [tokenError, setTokenError] = useState('')

	async function onChangePasswordSubmit(
		values: ChangePasswordInput,
		{ setErrors }: FormikHelpers<ChangePasswordInput>,
	) {
		if (userId && token) {
			const response = await changePassword({
				variables: {
					userId: parseInt(userId as string),
					token: token as string,
					changePasswordInput: values,
				},
			})

			if (response.data?.changePassword.errors) {
				const fieldErrors = mapFieldErrors(response.data.changePassword.errors)
				if ('token' in fieldErrors) {
					setTokenError(fieldErrors.token)
				}
				setErrors(fieldErrors)
			}
		}
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
				<Formik initialValues={initialValues} onSubmit={onChangePasswordSubmit}>
					{({ isSubmitting }) => (
						<Form>
							<Box mt={2}>
								<InputField
									name="newPassword"
									placeholder="New Password"
									label="New Password"
									type="password"
								/>
							</Box>
							{tokenError && (
								<Box>
									<Typography mt={0.5} ml={1.5} fontSize="0.9rem" color={colors.red[500]}>
										{tokenError}
									</Typography>
									<NextLink href="/forgot-password">
										<UnderlinedTypography mt="10px" ml="12px" name={'Go back to Forgot Password'} />
									</NextLink>
								</Box>
							)}
							<SubmitButton
								name={'Change Password'}
								loading={isSubmitting}
								sx={{ mt: 2, width: '100%' }}
							/>
						</Form>
					)}
				</Formik>
			</Wrapper>
		)
}
