import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useMeQuery } from '../generated/graphql'

export function useCheckAuth() {
	const router = useRouter()
	const pathname = usePathname()

	const { data, loading } = useMeQuery()

	useEffect(() => {
		if (!loading && data?.me && (pathname === '/login' || pathname === '/register')) {
			router.replace('/')
		}
	}, [data, loading, router])

	return { data, loading }
}
