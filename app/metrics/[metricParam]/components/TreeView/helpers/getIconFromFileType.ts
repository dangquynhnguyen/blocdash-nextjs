import FolderOpenIcon from '@mui/icons-material/FolderOpen'

import DevicesFoldOutlinedIcon from '@mui/icons-material/DevicesFoldOutlined'
import { MetricType } from '../constants/types'

export function getIconFromFileType(type: MetricType) {
	switch (type) {
		case 'category':
			return FolderOpenIcon
		case 'group':
			return DevicesFoldOutlinedIcon
		case 'indicator':
			return undefined
		default:
			return undefined
	}
}
