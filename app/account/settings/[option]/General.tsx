import { Box } from '@mui/material'
import Card from './Card'

export default function General() {
	return (
		<Box>
			<Card
				mb="2rem"
				label="Username"
				description="Enter an username you are comfortable with."
				error_message="Please use 32 characters at maximum."
			/>
			<Card mb="2rem" label="" description="" error_message="" />
			<Card label="" description="" error_message="" />
		</Box>
	)
}
