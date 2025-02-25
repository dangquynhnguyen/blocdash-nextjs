import MenuItem from '@/app/components/navigation/navbar/MenuItem'
import { Box } from '@mui/material'

export default function Sidebar() {
	return (
		<Box>
			<MenuItem name="General" route="/account/settings/general" />
			<MenuItem name="Authentication" route="/account/settings/authentication" />
			<MenuItem name="Billing" route="/account/settings/billing" />
			<MenuItem name="Plans" route="/account/settings/plans" />
		</Box>
	)
}
