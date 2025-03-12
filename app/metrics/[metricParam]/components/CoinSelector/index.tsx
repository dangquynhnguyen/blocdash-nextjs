import { colors } from '@/theme'
import { alpha, Box, Button, styled } from '@mui/material'
import { useRouter, useSearchParams } from 'next/navigation'
import { coins, getDefaultCoin } from './constants'

const CoinButton = styled(Button)<{ selected: boolean }>(({ theme, selected }) => ({
	color: selected ? colors.logo[100] : colors.primary[0],
	backgroundColor: selected ? colors.logo[700] : 'transparent',
	borderRadius: theme.spacing(1),
	padding: theme.spacing(1, 2),
	marginRight: theme.spacing(1),
	textTransform: 'none',
	'&:hover': {
		backgroundColor: selected ? colors.logo[700] : alpha(colors.logo[200], 0.1),
	},
}))

export default function CoinSelector() {
	const router = useRouter()
	const searchParams = useSearchParams()
	const activeCoin = searchParams.get('crypto') || getDefaultCoin().id

	const handleCoinChange = (coinId: string) => {
		const params = new URLSearchParams(searchParams.toString())
		params.set('crypto', coinId)
		router.replace(`?${params.toString()}`, { scroll: false })
	}

	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				py: 1,
				px: 2,
				borderBottom: `1px solid ${colors.primary[900]}`,
			}}
		>
			{coins.map((coin) => (
				<CoinButton
					key={coin.id}
					selected={coin.id === activeCoin}
					onClick={() => handleCoinChange(coin.id)}
				>
					{coin.id}
				</CoinButton>
			))}
		</Box>
	)
}
