import { MeQuery } from '@/app/generated/graphql'
import { LoginOutlined } from '@mui/icons-material'
import { Box } from '@mui/material'
import Link from 'next/link'
import AccountMenu from '../AccountMenu'
import { styles } from '../styles'

interface AuthButtonsProps {
	loading: boolean
	data?: MeQuery
}

export const AuthButtons = ({ loading, data }: AuthButtonsProps) => {
	if (loading) return null
	if (!data?.me) {
		return (
			<>
				<Link href="/login">
					<Box sx={styles.loginButton()}>
						<LoginOutlined />
						Login
					</Box>
				</Link>
			</>
		)
	}
	return <AccountMenu meQuery={data} />
}
