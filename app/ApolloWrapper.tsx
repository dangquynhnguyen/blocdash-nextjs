/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { __prod__ } from '@/constants'
import {
	ApolloClient,
	ApolloNextAppProvider,
	InMemoryCache,
} from '@apollo/experimental-nextjs-app-support'

function makeClient() {
	return new ApolloClient({
		uri: __prod__ ? 'https://api.blocdash.com/graphql' : 'http://localhost:4000/graphql',
		cache: new InMemoryCache(),
		credentials: 'include',
	})
}

// you need to create a component to wrap your app in
export function ApolloWrapper({ children }: React.PropsWithChildren) {
	return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>
}
