import { colors } from '@/theme'
import {
	Box,
	ListItemIcon,
	MenuItem as MUI_MenuItem,
	MenuItemProps as MUI_MenuItemProps,
} from '@mui/material'
import { ReactNode } from 'react'

interface MenuItemProp extends MUI_MenuItemProps {
	name: string
	icon?: ReactNode
}

export default function MenuItems(props: MenuItemProp) {
	return (
		<MUI_MenuItem
			{...props}
			onClick={props.onClick}
			sx={{
				fontSize: '0.85rem',
				color: colors.primary[400],
				mt: '0.25rem',
				'&:hover': {
					color: colors.primary[50],
				},
			}}
		>
			{props.icon !== undefined ? <ListItemIcon>{props.icon}</ListItemIcon> : <Box />}
			{props.name}
		</MUI_MenuItem>
	)
}
