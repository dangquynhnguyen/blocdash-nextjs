import { TreeViewBaseItem } from '@mui/x-tree-view'
import { addresses } from './addresses'
import { exchanges } from './exchanges'
import { profitLoss } from './profitLoss'
import { BaseMetricItem } from './types'

export const constants: TreeViewBaseItem<BaseMetricItem>[] = [addresses, exchanges, profitLoss]
