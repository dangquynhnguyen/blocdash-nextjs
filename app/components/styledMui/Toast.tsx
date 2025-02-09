import Alert, { AlertColor } from '@mui/material/Alert'
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar'
import * as React from 'react'
import { useEffect } from 'react'

interface IToastProps {
	open: boolean
	message: string
	severity: AlertColor
}

export default function Toast(props: IToastProps) {
	const [open, setOpen] = React.useState(false)

	const handleClose = (event?: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
		if (reason === 'clickaway') {
			return
		}
		setOpen(false)
	}
	useEffect(() => {
		setOpen(props.open)
	}, [props.open])

	return (
		<div>
			<Snackbar
				open={open}
				autoHideDuration={10000}
				onClose={handleClose}
				anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
			>
				<Alert
					onClose={handleClose}
					severity={props.severity}
					variant="filled"
					sx={{ width: '100%' }}
				>
					{props.message}
				</Alert>
			</Snackbar>
		</div>
	)
}
