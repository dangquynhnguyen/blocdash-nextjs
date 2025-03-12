import MenuItem from '@/app/components/navigation/navbar/MenuItem'
import { Box } from '@mui/material'
import { authentication, billing, general, plan } from '../../constants'

export default function Sidebar() {
	return (
		<Box>
			<MenuItem optionpage={general} />
			<MenuItem optionpage={authentication} />
			<MenuItem optionpage={billing} />
			<MenuItem optionpage={plan} />
		</Box>
	)
}
