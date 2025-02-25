/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box } from '@mui/material'
import { useEffect, useState } from 'react'

export type SettingsOptionProps = {
	params: {
		option: string
	}
}

export default function SettingsOption({ params }: SettingsOptionProps) {
	const [option, setOption] = useState<string>('')
	useEffect(() => {
		const resolveParams = async () => {
			const resolvedParams = await params
			setOption(resolvedParams.option)
		}
		resolveParams()
	}, [params])

	return <Box>{option}</Box>
}
