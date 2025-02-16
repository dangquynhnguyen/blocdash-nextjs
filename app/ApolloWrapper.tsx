/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { __prod__ } from '@/constants'
import { HttpLink } from '@apollo/client'
import {
	ApolloClient,
	ApolloNextAppProvider,
	InMemoryCache,
} from '@apollo/experimental-nextjs-app-support'

function makeClient() {
	const httpLink = new HttpLink({
		uri: __prod__ ? 'https://api.blocdash.com/graphql' : 'http://localhost:4000/graphql',
		credentials: 'include',
		fetchOptions: {
			cache: 'force-cache',
		},
	})

	return new ApolloClient({
		link: httpLink,
		cache: new InMemoryCache(),
	})
}

// you need to create a component to wrap your app in
export function ApolloWrapper({ children }: React.PropsWithChildren) {
	return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>
}
