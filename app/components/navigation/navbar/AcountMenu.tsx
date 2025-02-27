/* eslint-disable @typescript-eslint/no-unused-vars */
import { accountSetting, plan } from '@/app/account/settings/[option]/constants'
import { MeDocument, MeQuery, useLogoutMutation } from '@/app/generated/graphql'
import { colors } from '@/theme'
import Logout from '@mui/icons-material/Logout'
import Settings from '@mui/icons-material/Settings'
import { Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import Tooltip from '@mui/material/Tooltip'
import { useRouter } from 'next/navigation'
import * as React from 'react'
import SubmitButton from '../../styledMui/SubmitButton'
import MenuItem from './MenuItem'

interface AccountMenuProps {
	meQuery: MeQuery | undefined
}

export default function AccountMenu(props: AccountMenuProps) {
	const router = useRouter()
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl)
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}

	const [logout, { loading: useLogoutMutationLoading }] = useLogoutMutation()

	async function logoutUser() {
		await logout({
			update(cache, { data }) {
				if (data?.logout) {
					cache.writeQuery<MeQuery>({
						query: MeDocument,
						data: { me: null },
					})
				}
			},
		})
	}

	return (
		<React.Fragment>
			<Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
				<Tooltip title="Account settings">
					<IconButton
						onClick={handleClick}
						size="small"
						sx={{ ml: 0 }}
						aria-controls={open ? 'account-menu' : undefined}
						aria-haspopup="true"
						aria-expanded={open ? 'true' : undefined}
					>
						<Avatar
							sx={{
								width: 40,
								height: 40,
								fontSize: '1rem',
								fontWeight: 500,
								color: colors.primary[200],
								backgroundColor: colors.primary[900],
								border: `2px solid ${colors.logo[800]}`,
							}}
						>
							{props.meQuery?.me?.username.substring(0, 2).toUpperCase()}
						</Avatar>
					</IconButton>
				</Tooltip>
			</Box>
			<Menu
				anchorEl={anchorEl}
				id="account-menu"
				open={open}
				onClose={handleClose}
				onClick={handleClose}
				slotProps={{
					paper: {
						elevation: 0,
						sx: {
							overflow: 'visible',
							filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
							mt: 1.5,
							'& .MuiAvatar-root': {
								width: 32,
								height: 32,
								ml: -0.5,
								mr: 1,
							},
							'&::before': {
								content: '""',
								display: 'block',
								position: 'absolute',
								top: 0,
								right: 14,
								width: 10,
								height: 10,
								bgcolor: 'background.paper',
								transform: 'translateY(-50%) rotate(45deg)',
								zIndex: 0,
							},
						},
					},
				}}
				transformOrigin={{ horizontal: 'right', vertical: 'top' }}
				anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
			>
				<Box mb="0.25rem">
					<Typography p="0.5rem 0 0 1rem" m="0" fontSize="0.85rem" fontWeight="bold">
						{props.meQuery?.me?.username}
					</Typography>
					<Typography p="0.5rem 1rem" m="0" fontSize="0.85rem">
						{props.meQuery?.me?.email}
					</Typography>
				</Box>
				<MenuItem optionpage={accountSetting} icon={<Settings />} />
				<MenuItem onClick={logoutUser} optionpage={{ name: 'Log out' }} icon={<Logout />} />
				<Divider />
				<Box m="1rem 1rem 0.5rem 1rem">
					<SubmitButton name={'Upgrade to Pro'} href={'/account/settings' + plan.route} fullWidth />
				</Box>
			</Menu>
		</React.Fragment>
	)
}
