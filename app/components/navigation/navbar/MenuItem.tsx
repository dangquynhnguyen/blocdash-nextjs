import { colors } from '@/theme'
import {
	ListItemIcon,
	MenuItem as MUI_MenuItem,
	MenuItemProps as MUI_MenuItemProps,
} from '@mui/material'
import { ReactNode } from 'react'

interface MenuItemProp extends MUI_MenuItemProps {
	name: string
	icon: ReactNode
}

export default function MenuItems(props: MenuItemProp) {
	return (
		<MUI_MenuItem
			onClick={props.onClick}
			sx={{
				fontSize: '0.85rem',
				color: colors.primary[400],
				'&:hover': {
					color: colors.primary[50],
				},
			}}
		>
			<ListItemIcon>{props.icon}</ListItemIcon>
			{props.name}
		</MUI_MenuItem>
	)
}
