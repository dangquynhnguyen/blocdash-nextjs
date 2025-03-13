import { SxProps, Theme } from '@mui/material'

export const styles = {
	container: {
		spacing: 2,
	},
	sidebar: (open: boolean): SxProps<Theme> => ({
		width: open ? 'auto' : '4rem',
		transition: 'width 0.3s ease-in-out',
	}),
	content: (open: boolean): SxProps<Theme> => ({
		width: open ? 'auto' : 'calc(100vh - 4rem)',
		mt: '1rem',
		transition: 'width 0.3s ease-in-out',
	}),
}
