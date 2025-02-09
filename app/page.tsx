'use client'

import Box from '@mui/material/Box'
import { useHelloQuery } from './generated/graphql'

export default function Home() {
	const { data } = useHelloQuery()
	return (
		<Box>
			<p>Home</p>
			{data?.hello}
		</Box>
	)
}
