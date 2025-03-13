import FolderOpenIcon from '@mui/icons-material/FolderOpen'

import DevicesFoldOutlinedIcon from '@mui/icons-material/DevicesFoldOutlined'
import { MetricType } from '../constants/enums'

export function getIconFromFileType(type: MetricType) {
	switch (type) {
		case MetricType.CATEGORY:
			return FolderOpenIcon
		case MetricType.GROUP:
			return DevicesFoldOutlinedIcon
		case MetricType.INDICATOR:
			return undefined
		default:
			return undefined
	}
}
