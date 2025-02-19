/* eslint-disable react/no-unescaped-entities */
import { Box, Skeleton, Typography } from '@mui/material'

export default async function MobileNotSupported() {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				p: '1rem',
			}}
		>
			<Skeleton variant="rounded" animation="wave" width="50vw" height="25vh" />
			<Skeleton
				variant="rounded"
				animation="wave"
				width="50vw"
				height="3vh"
				sx={{ mt: '0.5rem' }}
			/>
			<Skeleton
				variant="rounded"
				animation="wave"
				width="50vw"
				height="3vh"
				sx={{ mt: '0.5rem' }}
			/>
			<Typography fontSize="1.2rem" fontWeight="bold" mb="0.5rem" mt="1.5rem">
				Mobile not supported
			</Typography>
			<Typography fontSize="0.9rem">
				It looks like you're trying to open Blocdash.com on a mobile device.
			</Typography>
			<Typography fontSize="0.9rem">
				For now, the website is only supported on desktops and tablets.
			</Typography>
		</Box>
	)
}
