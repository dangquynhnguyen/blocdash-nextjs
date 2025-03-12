import { TreeViewBaseItem } from '@mui/x-tree-view'
import { BaseMetricItem } from '../types'
import { addresses } from './addresses'
import { exchanges } from './exchanges'
import { profitLoss } from './profitLoss'

export const constants: TreeViewBaseItem<BaseMetricItem>[] = [addresses, exchanges, profitLoss]
