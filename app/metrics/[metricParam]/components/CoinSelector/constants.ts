export interface Coin {
	id: string
	label: string
	icon?: string
}

export const coins: Coin[] = [
	{ id: 'ICP', label: 'Internet Computer' },
	{ id: 'ckBTC', label: 'Chain-key Bitcoin' },
	{ id: 'ckETH', label: 'Chain-key Ethereum' },
	{ id: 'ckUSDT', label: 'Chain-key USDT' },
]

export const getDefaultCoin = () => coins[0]
