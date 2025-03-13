import { Dispatch, SetStateAction } from 'react'

export type TreeViewProps = {
	set_selectedMetric: Dispatch<SetStateAction<string>>
	selectedMetric: string
}
