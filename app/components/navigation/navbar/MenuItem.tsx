import { colors } from '@/theme'
import {
	Box,
	ListItemIcon,
	MenuItem as MUI_MenuItem,
	MenuItemProps as MUI_MenuItemProps,
} from '@mui/material'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'

interface MenuItemProp extends MUI_MenuItemProps {
	name: string
	route?: string
	icon?: ReactNode
}

export default function MenuItems(props: MenuItemProp) {
	const router = useRouter()
	return (
		<MUI_MenuItem
			{...props}
			onClick={() => {
				router.push(props.route || '#')
			}}
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
