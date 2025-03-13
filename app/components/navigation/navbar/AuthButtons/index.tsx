import { MeQuery } from '@/app/generated/graphql'
import { Box } from '@mui/material'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import AccountMenu from '../AccountMenu'
import { styles } from '../styles'

interface AuthButtonsProps {
	loading: boolean
	data?: MeQuery
}

export const AuthButtons = ({ loading, data }: AuthButtonsProps) => {
	const pathname = usePathname()

	if (loading) return null
	if (!data?.me) {
		return (
			<>
				<Link href="/login">
					<Box sx={styles.navLink(pathname.startsWith('/login'))}>Login</Box>
				</Link>
				<Link href="/register">
					<Box sx={styles.navLink(pathname.startsWith('/register'))}>Register</Box>
				</Link>
			</>
		)
	}
	return <AccountMenu meQuery={data} />
}
