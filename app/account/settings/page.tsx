'use client'
import { colors } from '@/theme'
import { Box, Container, Grid2, Typography } from '@mui/material'
import SettingsMenu from './SettingsMenu'

export default function AccountSettings() {
	return (
		<Container maxWidth="lg">
			<Grid2 container spacing={2}>
				<Grid2 size={12}>
					<Typography fontSize="1.25rem" fontWeight="bold" color={colors.logo[1000]} p="1rem 1rem">
						Account settings
					</Typography>
				</Grid2>
				<Grid2 size={3}>
					<SettingsMenu />
				</Grid2>
				<Grid2
					size={9}
					sx={{ border: `1px solid ${colors.primary[900]}`, borderRadius: 3, height: '50vh' }}
				>
					<Box></Box>
				</Grid2>
			</Grid2>
		</Container>
	)
}
