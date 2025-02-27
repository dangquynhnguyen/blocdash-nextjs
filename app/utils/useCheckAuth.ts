import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useMeQuery } from '../generated/graphql'

export function useCheckAuth() {
	const router = useRouter()
	const pathname = usePathname()

	const { data, loading } = useMeQuery()

	useEffect(() => {
		if (
			pathname === '/login' ||
			pathname === '/register' ||
			pathname === '/forgot-password' ||
			pathname === '/change-password'
		) {
			if (!loading && data?.me) {
				router.replace('/')
			}
		} else {
			if (!loading && !data?.me) {
				router.replace('/')
			}
		}
	}, [data, loading, router, pathname])

	return { data, loading }
}
