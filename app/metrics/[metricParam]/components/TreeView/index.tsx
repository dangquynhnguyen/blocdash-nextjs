'use client'
import { RichTreeView } from '@mui/x-tree-view/RichTreeView'
import * as React from 'react'

import { useRouter, useSearchParams } from 'next/navigation'
import { CustomTreeItem } from './components/CustomTreeItem'
import { constants } from './constants'
import { TreeViewProps } from './types'

export default function TreeView(props: TreeViewProps) {
	const router = useRouter()
	const searchParams = useSearchParams()

	// Modify the onSelectedItemsChange handler in the RichTreeView component
	const handleSelectedItemsChange = (event: React.SyntheticEvent, itemIds: string | null) => {
		if (!itemIds) return

		// Find the selected item and its parents
		for (const category of constants) {
			for (const group of category.children!) {
				const indicator = group.children!.find((ind: { id: string }) => ind.id === itemIds)
				if (indicator) {
					// Create new URLSearchParams to preserve existing parameters
					const params = new URLSearchParams(searchParams.toString())

					// Update the URL while preserving the crypto parameter
					props.set_selectedMetric(itemIds)
					router.replace(`/metrics/${indicator.id}?${params.toString()}`)
					return
				}
			}
		}
	}

	return (
		<RichTreeView
			items={constants}
			aria-label="tree-view"
			defaultExpandedItems={(() => {
				// Find the parent category and group
				for (const category of constants) {
					for (const group of category.children!) {
						if (
							group.children!.some(
								(indicator: { id: string }) => indicator.id === props.selectedMetric,
							)
						) {
							return [category.id, group.id]
						}
					}
				}
				return []
			})()}
			defaultSelectedItems={props.selectedMetric}
			sx={{
				flexGrow: 1,
				overflowY: 'auto',
			}}
			slots={{ item: CustomTreeItem }}
			selectedItems={props.selectedMetric}
			onSelectedItemsChange={handleSelectedItemsChange}
		/>
	)
}
