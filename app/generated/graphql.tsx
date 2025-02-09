/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Apollo from '@apollo/client'
import { gql } from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
	[_ in K]?: never
}
export type Incremental<T> =
	| T
	| { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string }
	String: { input: string; output: string }
	Boolean: { input: boolean; output: boolean }
	Int: { input: number; output: number }
	Float: { input: number; output: number }
	DateTimeISO: { input: any; output: any }
}

export type ChangePasswordInput = {
	newPassword: Scalars['String']['input']
}

export type FieldError = {
	__typename?: 'FieldError'
	field: Scalars['String']['output']
	message: Scalars['String']['output']
}

export type ForgotPasswordInput = {
	email: Scalars['String']['input']
}

export type IMutationResponse = {
	code: Scalars['Float']['output']
	message?: Maybe<Scalars['String']['output']>
	success: Scalars['Boolean']['output']
}

export type LoginInput = {
	password: Scalars['String']['input']
	usernameOrEmail: Scalars['String']['input']
}

export type Mutation = {
	__typename?: 'Mutation'
	changePassword: UserMutationResponse
	forgotPassword: Scalars['Boolean']['output']
	login: UserMutationResponse
	logout: Scalars['Boolean']['output']
	register?: Maybe<UserMutationResponse>
}

export type MutationChangePasswordArgs = {
	changePasswordInput: ChangePasswordInput
	token: Scalars['String']['input']
	userId: Scalars['Float']['input']
}

export type MutationForgotPasswordArgs = {
	forgotPasswordInput: ForgotPasswordInput
}

export type MutationLoginArgs = {
	loginInput: LoginInput
}

export type MutationRegisterArgs = {
	registerInput: RegisterInput
}

export type Query = {
	__typename?: 'Query'
	hello: Scalars['String']['output']
	me?: Maybe<User>
}

export type RegisterInput = {
	email: Scalars['String']['input']
	password: Scalars['String']['input']
	username: Scalars['String']['input']
}

export type User = {
	__typename?: 'User'
	createdAt: Scalars['DateTimeISO']['output']
	email: Scalars['String']['output']
	id: Scalars['ID']['output']
	updatedAt: Scalars['DateTimeISO']['output']
	username: Scalars['String']['output']
}

export type UserMutationResponse = IMutationResponse & {
	__typename?: 'UserMutationResponse'
	code: Scalars['Float']['output']
	errors?: Maybe<Array<FieldError>>
	message?: Maybe<Scalars['String']['output']>
	success: Scalars['Boolean']['output']
	user?: Maybe<User>
}

export type FieldErrorFragment = { __typename?: 'FieldError'; field: string; message: string }

export type MutationStatusesFragment = {
	__typename?: 'UserMutationResponse'
	code: number
	success: boolean
	message?: string | null
}

export type UserInfoFragment = { __typename?: 'User'; id: string; username: string; email: string }

export type UserMutationResponseFragment = {
	__typename?: 'UserMutationResponse'
	code: number
	success: boolean
	message?: string | null
	user?: { __typename?: 'User'; id: string; username: string; email: string } | null
	errors?: Array<{ __typename?: 'FieldError'; field: string; message: string }> | null
}

export type ChangePasswordMutationVariables = Exact<{
	changePasswordInput: ChangePasswordInput
	userId: Scalars['Float']['input']
	token: Scalars['String']['input']
}>

export type ChangePasswordMutation = {
	__typename?: 'Mutation'
	changePassword: {
		__typename?: 'UserMutationResponse'
		code: number
		success: boolean
		message?: string | null
		user?: { __typename?: 'User'; id: string; username: string; email: string } | null
		errors?: Array<{ __typename?: 'FieldError'; field: string; message: string }> | null
	}
}

export type ForgotPasswordMutationVariables = Exact<{
	forgotPasswordInput: ForgotPasswordInput
}>

export type ForgotPasswordMutation = { __typename?: 'Mutation'; forgotPassword: boolean }

export type LoginMutationVariables = Exact<{
	loginInput: LoginInput
}>

export type LoginMutation = {
	__typename?: 'Mutation'
	login: {
		__typename?: 'UserMutationResponse'
		code: number
		success: boolean
		message?: string | null
		user?: { __typename?: 'User'; id: string; username: string; email: string } | null
		errors?: Array<{ __typename?: 'FieldError'; field: string; message: string }> | null
	}
}

export type LogoutMutationVariables = Exact<{ [key: string]: never }>

export type LogoutMutation = { __typename?: 'Mutation'; logout: boolean }

export type RegisterMutationVariables = Exact<{
	registerInput: RegisterInput
}>

export type RegisterMutation = {
	__typename?: 'Mutation'
	register?: {
		__typename?: 'UserMutationResponse'
		code: number
		success: boolean
		message?: string | null
		user?: { __typename?: 'User'; id: string; username: string; email: string } | null
		errors?: Array<{ __typename?: 'FieldError'; field: string; message: string }> | null
	} | null
}

export type HelloQueryVariables = Exact<{ [key: string]: never }>

export type HelloQuery = { __typename?: 'Query'; hello: string }

export type MeQueryVariables = Exact<{ [key: string]: never }>

export type MeQuery = {
	__typename?: 'Query'
	me?: { __typename?: 'User'; id: string; username: string; email: string } | null
}

export const MutationStatusesFragmentDoc = gql`
	fragment mutationStatuses on UserMutationResponse {
		code
		success
		message
	}
`
export const UserInfoFragmentDoc = gql`
	fragment userInfo on User {
		id
		username
		email
	}
`
export const FieldErrorFragmentDoc = gql`
	fragment fieldError on FieldError {
		field
		message
	}
`
export const UserMutationResponseFragmentDoc = gql`
	fragment userMutationResponse on UserMutationResponse {
		...mutationStatuses
		user {
			...userInfo
		}
		errors {
			...fieldError
		}
	}
	${MutationStatusesFragmentDoc}
	${UserInfoFragmentDoc}
	${FieldErrorFragmentDoc}
`
export const ChangePasswordDocument = gql`
	mutation ChangePassword(
		$changePasswordInput: ChangePasswordInput!
		$userId: Float!
		$token: String!
	) {
		changePassword(userId: $userId, token: $token, changePasswordInput: $changePasswordInput) {
			...userMutationResponse
		}
	}
	${UserMutationResponseFragmentDoc}
`
export type ChangePasswordMutationFn = Apollo.MutationFunction<
	ChangePasswordMutation,
	ChangePasswordMutationVariables
>

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      changePasswordInput: // value for 'changePasswordInput'
 *      userId: // value for 'userId'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useChangePasswordMutation(
	baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(
		ChangePasswordDocument,
		options,
	)
}
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<
	ChangePasswordMutation,
	ChangePasswordMutationVariables
>
export const ForgotPasswordDocument = gql`
	mutation ForgotPassword($forgotPasswordInput: ForgotPasswordInput!) {
		forgotPassword(forgotPasswordInput: $forgotPasswordInput)
	}
`
export type ForgotPasswordMutationFn = Apollo.MutationFunction<
	ForgotPasswordMutation,
	ForgotPasswordMutationVariables
>

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      forgotPasswordInput: // value for 'forgotPasswordInput'
 *   },
 * });
 */
export function useForgotPasswordMutation(
	baseOptions?: Apollo.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(
		ForgotPasswordDocument,
		options,
	)
}
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<
	ForgotPasswordMutation,
	ForgotPasswordMutationVariables
>
export const LoginDocument = gql`
	mutation Login($loginInput: LoginInput!) {
		login(loginInput: $loginInput) {
			...userMutationResponse
		}
	}
	${UserMutationResponseFragmentDoc}
`
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      loginInput: // value for 'loginInput'
 *   },
 * });
 */
export function useLoginMutation(
	baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options)
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>
export const LogoutDocument = gql`
	mutation Logout {
		logout
	}
`
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(
	baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options)
}
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>
export type LogoutMutationOptions = Apollo.BaseMutationOptions<
	LogoutMutation,
	LogoutMutationVariables
>
export const RegisterDocument = gql`
	mutation Register($registerInput: RegisterInput!) {
		register(registerInput: $registerInput) {
			...userMutationResponse
		}
	}
	${UserMutationResponseFragmentDoc}
`
export type RegisterMutationFn = Apollo.MutationFunction<
	RegisterMutation,
	RegisterMutationVariables
>

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      registerInput: // value for 'registerInput'
 *   },
 * });
 */
export function useRegisterMutation(
	baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options)
}
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>
export type RegisterMutationOptions = Apollo.BaseMutationOptions<
	RegisterMutation,
	RegisterMutationVariables
>
export const HelloDocument = gql`
	query Hello {
		hello
	}
`

/**
 * __useHelloQuery__
 *
 * To run a query within a React component, call `useHelloQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloQuery({
 *   variables: {
 *   },
 * });
 */
export function useHelloQuery(
	baseOptions?: Apollo.QueryHookOptions<HelloQuery, HelloQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<HelloQuery, HelloQueryVariables>(HelloDocument, options)
}
export function useHelloLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<HelloQuery, HelloQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<HelloQuery, HelloQueryVariables>(HelloDocument, options)
}
export function useHelloSuspenseQuery(
	baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<HelloQuery, HelloQueryVariables>,
) {
	const options =
		baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
	return Apollo.useSuspenseQuery<HelloQuery, HelloQueryVariables>(HelloDocument, options)
}
export type HelloQueryHookResult = ReturnType<typeof useHelloQuery>
export type HelloLazyQueryHookResult = ReturnType<typeof useHelloLazyQuery>
export type HelloSuspenseQueryHookResult = ReturnType<typeof useHelloSuspenseQuery>
export type HelloQueryResult = Apollo.QueryResult<HelloQuery, HelloQueryVariables>
export const MeDocument = gql`
	query Me {
		me {
			...userInfo
		}
	}
	${UserInfoFragmentDoc}
`

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options)
}
export function useMeLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options)
}
export function useMeSuspenseQuery(
	baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<MeQuery, MeQueryVariables>,
) {
	const options =
		baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
	return Apollo.useSuspenseQuery<MeQuery, MeQueryVariables>(MeDocument, options)
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>
export type MeSuspenseQueryHookResult = ReturnType<typeof useMeSuspenseQuery>
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>
