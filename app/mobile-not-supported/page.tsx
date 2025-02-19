/* eslint-disable react/no-unescaped-entities */
import { Box, Typography } from '@mui/material'

export default function MobileNotSupported() {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Typography fontWeight="bold">Mobile not supported.</Typography>
			<Typography>
				It's looks like your're trying to open Blocdash.com on a mobile device.
			</Typography>
			<Typography>For now, the website is only supported on desktops and tablets.</Typography>
		</Box>
	)
}
