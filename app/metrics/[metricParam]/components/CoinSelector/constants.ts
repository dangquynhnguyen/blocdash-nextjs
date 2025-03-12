import ICPIcon from './assets/ICP.svg'
import ckBTCIcon from './assets/ckBTC.svg'
import ckETHIcon from './assets/ckETH.svg'
import ckUSDCIcon from './assets/ckUSDC.svg'
import ckUSDTIcon from './assets/ckUSDT.svg'

export interface Coin {
	id: string
	label: string
	icon: string
}

export const coins: Coin[] = [
	{ id: 'ICP', label: 'Internet Computer', icon: ICPIcon },
	{ id: 'ckBTC', label: 'Chain-key Bitcoin', icon: ckBTCIcon },
	{ id: 'ckETH', label: 'Chain-key Ethereum', icon: ckETHIcon },
	{ id: 'ckUSDT', label: 'Chain-key USDT', icon: ckUSDTIcon },
	{ id: 'ckUSDC', label: 'Chain-key USDC', icon: ckUSDCIcon },
]

export const getDefaultCoin = () => coins[0]
