import { Box } from '@mui/material'
import Card from '../../Card'

export default function General() {
	return (
		<Box>
			<Card
				mb="2rem"
				label="Username"
				description="Enter an username you are comfortable with."
				error_message="Please use 32 characters at maximum."
			/>
			<Card
				mb="2rem"
				label="Email"
				description="Enter the email addresses you want to use to log in with Vercel.
				Your primary email will be used for account-related notifications."
				error_message="Emails must be verified to be able to login with them or be used as primary email."
			/>
			<Card label="Password" description="" error_message="" />
		</Box>
	)
}
