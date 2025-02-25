export type OptionPage = {
	name: string
	route?: string
}

export const accountSetting: OptionPage = {
	name: 'Account settings',
	route: '/general',
}
export const general: OptionPage = {
	name: 'General',
	route: '/general',
}
export const authentication: OptionPage = {
	name: 'Authentication',
	route: '/authentication',
}
export const billing: OptionPage = {
	name: 'Billing',
	route: '/billing',
}
export const plan: OptionPage = {
	name: 'Plan',
	route: '/plan',
}
