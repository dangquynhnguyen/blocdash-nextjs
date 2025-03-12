/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { colors } from '@/theme'
import { Container, Grid2, Typography } from '@mui/material'
import Options from './components/Options'
import Sidebar from './components/Sidebar'

export default function AccountSettings({ params }: any) {
	return (
		<Container maxWidth="lg">
			<Grid2 container spacing={2}>
				<Grid2 size={12}>
					<Typography fontSize="1.8rem" fontWeight={550} color={colors.logo[1000]} p="1rem 1rem">
						Account Settings
					</Typography>
				</Grid2>
				<Grid2 size={3}>
					<Sidebar />
				</Grid2>
				<Grid2
					size={9}
					// sx={{ border: `1px solid ${colors.primary[900]}`, borderRadius: 3, height: '50vh' }}
				>
					<Options params={params} />
				</Grid2>
			</Grid2>
		</Container>
	)
}
