/* eslint-disable react/no-unescaped-entities */
import { Box, Skeleton, Typography } from '@mui/material'

export default function MobileNotSupported() {
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
			<Typography fontWeight="bold" mb="1rem" mt="1rem">
				Mobile not supported
			</Typography>
			<Typography>
				It's looks like your're trying to open Blocdash.com on a mobile device.
			</Typography>
			<Typography>For now, the website is only supported on desktops and tablets.</Typography>
		</Box>
	)
}
