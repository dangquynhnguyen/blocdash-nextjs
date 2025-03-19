import React from 'react'

export type Data = {
	color: string
	data: number[]
}

export type Tooltip_Flow = {
	inflow: Data
}

export type Tooltip = {
	price: Data
	flow: Tooltip_Flow
}

export interface ValueHighlightProps {
	svgRef: React.RefObject<SVGSVGElement | null>
	leftAxisId: string
	rightAxisId: string
	bottomAxisId: string
	sliderRight_Miliseconds: number
	tooltip: Tooltip
}

export interface NetflowCalculation {
	color: string
	value: string
}
