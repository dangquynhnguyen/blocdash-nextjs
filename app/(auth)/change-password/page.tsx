/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { colors } from '@/theme'
import { Alert, Box, CircularProgress, Link, Typography } from '@mui/material'
import { Form, Formik, FormikHelpers } from 'formik'
import NextLink from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense, useState } from 'react'
import InputField from '../../components/InputField'
import SubmitButton from '../../components/styledMui/SubmitButton'
import UnderlinedTypography from '../../components/styledMui/UnderlinedTypography'
import Wrapper from '../../components/Wrapper'
import {
	ChangePasswordInput,
	MeDocument,
	MeQuery,
	useChangePasswordMutation,
} from '../../generated/graphql'
import { mapFieldErrors } from '../../helpers/mapFieldErrors'
import { useCheckAuth } from '../../utils/useCheckAuth'

function ChangePasswordContent() {
	const router = useRouter()
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
				update(cache, { data }) {
					if (data?.changePassword.success) {
						cache.writeQuery<MeQuery>({
							query: MeDocument,
							data: { me: data.changePassword.user },
						})
					}
				},
			})

			if (response.data?.changePassword.errors) {
				const fieldErrors = mapFieldErrors(response.data.changePassword.errors)
				if ('token' in fieldErrors) {
					setTokenError(fieldErrors.token)
				}
				setErrors(fieldErrors)
			} else if (response.data?.changePassword.user) {
				router.push('/')
			}
		}
	}

	if (authLoading || (!authLoading && authData?.me)) {
		return (
			<Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
				<CircularProgress />
			</Box>
		)
	} else if (!token || !userId) {
		return (
			<Wrapper>
				<Alert severity="error">Invalid password change request</Alert>
				<NextLink href="/login">
					<UnderlinedTypography mt={2} ml={1.5} name={'Back to Login'} />
				</NextLink>
			</Wrapper>
		)
	} else
		return (
			<Wrapper>
				<Typography fontSize="1.25rem" fontWeight="bold" color={colors.logo[1000]} p="1rem 0">
					Reset your password
				</Typography>
				<Typography fontSize="0.8rem" color={colors.primary[300]}>
					Type in a new secure password and press save to update your password.
				</Typography>
				<Formik initialValues={initialValues} onSubmit={onChangePasswordSubmit}>
					{({ isSubmitting }) => (
						<Form>
							<Box mt={2}>
								<InputField
									name="newPassword"
									placeholder="••••••••••"
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
								name={'Save new password'}
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
					)}
				</Formik>
			</Wrapper>
		)
}

export default function ChangePassword() {
	return (
		<Suspense fallback={<CircularProgress />}>
			<ChangePasswordContent />
		</Suspense>
	)
}
