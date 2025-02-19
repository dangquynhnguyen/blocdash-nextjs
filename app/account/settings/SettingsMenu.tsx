import MenuItem from '@/app/components/navigation/navbar/MenuItem'
import { Box } from '@mui/material'

export default function SettingsMenu() {
	return (
		<Box>
			<MenuItem onClick={() => {}} name={'General'} />
			<MenuItem onClick={() => {}} name={'Authentication'} />
			<MenuItem onClick={() => {}} name={'Billing'} />
			<MenuItem onClick={() => {}} name={'Invoices'} />
		</Box>
	)
}
