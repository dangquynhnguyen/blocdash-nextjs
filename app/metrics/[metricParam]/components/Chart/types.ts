/* eslint-disable @typescript-eslint/no-explicit-any */
import { RefObject } from 'react'

export type NetFlowProps = {
	// data: ChartData
	// minMaxDayRange: [number, number]
	// dayRange: [number, number]
	daySliderOnChange?: (...args: any[]) => void
}

export type ChartData = {
	metric: number[]
	y_prices: number[]
	x_dates: Date[]
}

export type ChartContextType = {
	svgRef: RefObject<SVGSVGElement>
	data: ChartData
}
