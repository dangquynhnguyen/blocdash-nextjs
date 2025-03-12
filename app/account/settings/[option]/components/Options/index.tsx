/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react'
import { authentication, billing, general, plan } from '../../constants'
import Authentication from './Auth'
import Billing from './Billing'
import General from './General'
import Plan from './Plan'

interface SettingsOptionProps {
	params: {
		option: string
	}
}

export default function Options({ params }: SettingsOptionProps) {
	const [option, setOption] = useState<string>('')
	useEffect(() => {
		const resolveParams = async () => {
			const resolvedParams = await params
			setOption(resolvedParams.option)
		}
		resolveParams()
	}, [params])

	switch ('/' + option) {
		case general.route:
			return <General />
		case authentication.route:
			return <Authentication />
		case billing.route:
			return <Billing />
		case plan.route:
			return <Plan />
		default:
	}
}
