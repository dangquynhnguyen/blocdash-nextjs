/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDrawingArea, useXScale, useYScale } from '@mui/x-charts'
import { ScaleBand, ScaleLinear, ScaleLogarithmic } from 'd3-scale'
import * as React from 'react'
import { useEffect, useState } from 'react'

import {
	Circle_Solid,
	Path,
	Rect_Outline,
	Rect_Solid,
	Text_Medium,
	Text_Small,
	Text_Small_Bold,
	Text_Tiny,
} from './styles'
import { ValueHighlightProps } from './types'
import {
	calculateDate,
	calculateNetflow,
	calculatePrice,
	calculateTooltipPosition,
	formatCurrency,
} from './utils'

export default function ValueHighlight(props: ValueHighlightProps) {
	// Get the drawing area bounding box
	const { left, top, width, height } = useDrawingArea()

	// Get the scales
	const leftAxisScale = useYScale(props.leftAxisId) as ScaleLinear<any, any>
	const rightAxisScale = useYScale(props.rightAxisId) as ScaleLogarithmic<any, any>
	const bottomAxisScale = useXScale(props.bottomAxisId) as ScaleBand<any>

	const [mouseY, setMouseY] = useState<null | number>(null)
	const [mouseX, setMouseX] = useState<null | number>(null)

	useEffect(() => {
		const element = props.svgRef.current
		if (element === null) {
			return () => {}
		}

		const handleMouseOut = () => {
			setMouseY(null)
			setMouseX(null)
		}

		const handleMouseMove = (event: MouseEvent) => {
			const x = event.offsetX
			const y = event.offsetY

			if (x < left || x > left + width) {
				setMouseY(null)
				return
			}

			if (y < top - 10 || y > top + height + 10) {
				// Allows some margin if slightly on top/bottom of the drawing area
				setMouseY(null)
				return
			}

			setMouseY(Math.max(Math.min(top + height, y), top)) // clamp to the drawing area
			setMouseX(Math.max(Math.min(left + width, x), left)) // clamp to the drawing area
		}

		element.addEventListener('mouseout', handleMouseOut)
		element.addEventListener('mousemove', handleMouseMove)

		return () => {
			element.removeEventListener('mouseout', handleMouseOut)
			element.removeEventListener('mousemove', handleMouseMove)
		}
	}, [height, left, top, width, props.svgRef])

	if (mouseY === null || mouseX === null) {
		return null
	}

	const { tooltip_rect_X, tooltip_rect_Y, tooltip_text_X, tooltip_text_Y } =
		calculateTooltipPosition(mouseX, mouseY, bottomAxisScale, leftAxisScale)

	return (
		<React.Fragment>
			{/* x highlight */}
			<Path d={`M ${left} ${mouseY} l ${width} 0`} />
			<Rect_Solid x={left - 120} y={mouseY - 10} width={120} height={20} />
			<Text_Medium x={left - 8} y={mouseY + 8} textAnchor="end">
				{formatCurrency(leftAxisScale.invert(mouseY), 'ICP')}
			</Text_Medium>
			<Rect_Solid x={left + width} y={mouseY - 10} width={70} height={20} />
			<Text_Medium x={left + width + 5} y={mouseY + 8} textAnchor="start">
				{formatCurrency(rightAxisScale.invert(mouseY), 'USD', 2)}
			</Text_Medium>

			{/* y highlight */}
			<Path d={`M ${mouseX} ${top} l 0 ${height}`} />
			<Rect_Solid x={mouseX - 40} y={top + height} width={80} height={25} />
			<Text_Medium x={mouseX} y={top + height + 21} textAnchor="middle">
				{calculateDate(mouseX, bottomAxisScale, props.sliderRight_Miliseconds)}
			</Text_Medium>

			{/* tooltip */}
			<Rect_Outline x={tooltip_rect_X} y={tooltip_rect_Y} width={220} height={55} />
			<Text_Tiny x={tooltip_text_X} y={tooltip_text_Y} textAnchor="start">
				{calculateDate(mouseX, bottomAxisScale, props.sliderRight_Miliseconds)}
			</Text_Tiny>

			<Circle_Solid
				cx={tooltip_text_X + 4}
				cy={tooltip_text_Y + 10}
				color={calculateNetflow(mouseX, bottomAxisScale, props.tooltip.flow).color}
			/>
			<Text_Small x={tooltip_text_X + 12} y={tooltip_text_Y + 17} textAnchor="start">
				Netflow Volume :
			</Text_Small>
			<Text_Small_Bold x={tooltip_text_X + 110} y={tooltip_text_Y + 17} textAnchor="start">
				{calculateNetflow(mouseX, bottomAxisScale, props.tooltip.flow).value}
			</Text_Small_Bold>

			<Circle_Solid
				cx={tooltip_text_X + 4}
				cy={tooltip_text_Y + 25}
				color={props.tooltip.price.color}
			/>
			<Text_Small x={tooltip_text_X + 12} y={tooltip_text_Y + 32} textAnchor="start">
				Price :
			</Text_Small>
			<Text_Small_Bold x={tooltip_text_X + 50} y={tooltip_text_Y + 32} textAnchor="start">
				{calculatePrice(mouseX, bottomAxisScale, props.tooltip.price.data)}
			</Text_Small_Bold>
		</React.Fragment>
	)
}
