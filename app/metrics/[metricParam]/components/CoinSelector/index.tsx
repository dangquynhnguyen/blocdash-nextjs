import { colors } from '@/theme'
import { Box } from '@mui/material'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import { CoinButton } from '../CoinButton'
import { coins, getDefaultCoin } from './constants'

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
				pt: 1,
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
					<Image src={coin.icon} alt={coin.label} width={20} height={20} />
					{coin.id}
				</CoinButton>
			))}
		</Box>
	)
}
