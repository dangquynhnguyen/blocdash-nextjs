import { TreeViewBaseItem } from '@mui/x-tree-view'
import { addresses } from './categories/addresses'
import { exchanges } from './categories/exchanges'
import { profitLoss } from './categories/profitLoss'
import { BaseMetricItem } from './types'

export const constants: TreeViewBaseItem<BaseMetricItem>[] = [addresses, exchanges, profitLoss]
