'use client'
import { Box } from '@mui/material'
import React, { ReactNode } from 'react'

interface IWrapperProps {
	children: ReactNode
}

export default function Wrapper({ children }: IWrapperProps) {
	return (
		<Box maxWidth="300px" width="100%" mt={8} mx="auto">
			{children}
		</Box>
	)
}
