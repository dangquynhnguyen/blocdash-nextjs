import { colors } from '@/theme'
import { SxProps, Theme } from '@mui/material'

export const styles = {
	container: {
		spacing: 2,
	},
	sidebar: (): SxProps<Theme> => ({
		// width: open ? 'auto' : '4rem',
		transition: 'width 0.3s ease-in-out',
	}),
	content: (): SxProps<Theme> => ({
		// width: open ? 'auto' : 'calc(100vh - 4rem)',
		transition: 'width 0.3s ease-in-out',
	}),
	typography: {
		title: {
			fontSize: '1.25rem',
			fontWeight: 'bold',
			color: colors.logo[1000],
			p: '1rem 0',
		},
		content: {
			// Add any styles for the content Typography if needed
		},
	},
} as const
