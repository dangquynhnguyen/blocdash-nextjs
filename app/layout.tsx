import { Box } from '@mui/material'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ApolloWrapper } from './ApolloWrapper'
import Navigation from './components/navigation'
import './globals.css'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Blocdash',
	description: 'Blocdash - On-chain Metrics and Analytics',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<ApolloWrapper>
					<Navigation />
					<Box sx={{ marginTop: '5.5rem' }}>{children}</Box>
				</ApolloWrapper>
			</body>
		</html>
	)
}
