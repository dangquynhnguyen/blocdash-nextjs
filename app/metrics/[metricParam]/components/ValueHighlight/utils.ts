/* eslint-disable @typescript-eslint/no-explicit-any */
import { ScaleBand } from 'd3-scale'
import { NetflowCalculation, Tooltip_Flow } from './types'

export function calculateDate(
	mouse: number,
	scale: ScaleBand<any>,
	sliderRight_Miliseconds: number,
): string {
	const value = (mouse - scale.range()[0]) / scale.step()
	const max = (scale.range()[1] - scale.range()[0]) / scale.step()
	return new Date(
		sliderRight_Miliseconds - (max - value - 1) * 60 * 60 * 24 * 1000,
	).toLocaleDateString()
}

export function calculatePrice(mouse: number, scale: ScaleBand<any>, prices: number[]): string {
	const value = Math.ceil((mouse - scale.range()[0]) / scale.step())
	if (prices[value - 1] !== undefined) {
		return prices[value - 1].toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD',
			maximumFractionDigits: 2,
		})
	} else {
		return ''
	}
}

export function calculateNetflow(
	mouse: number,
	scale: ScaleBand<any>,
	flows: Tooltip_Flow,
): NetflowCalculation {
	const value = Math.ceil((mouse - scale.range()[0]) / scale.step())
	const inflow = flows.inflow.data[value - 1]
	switch (inflow) {
		case undefined:
			return { color: '', value: '' }

		default:
			return {
				color: flows.inflow.color,
				value: inflow.toLocaleString('en-US', {
					style: 'currency',
					currency: 'ICP',
					maximumFractionDigits: 0,
				}),
			}
	}
}

export function formatCurrency(value: number, currency: string, decimals: number = 0): string {
	return value.toLocaleString('en-US', {
		style: 'currency',
		currency: currency,
		maximumFractionDigits: decimals,
	})
}

export function calculateTooltipPosition(
	mouseX: number,
	mouseY: number,
	bottomAxisScale: ScaleBand<any>,
	leftAxisScale: any,
) {
	const tooltip_rect_X = mouseX < bottomAxisScale.range()[1] - 245 ? mouseX + 20 : mouseX - 240
	const tooltip_rect_Y = mouseY < leftAxisScale.range()[0] - 80 ? mouseY + 20 : mouseY - 75
	const tooltip_text_X = mouseX < bottomAxisScale.range()[1] - 245 ? mouseX + 25 : mouseX - 235
	const tooltip_text_Y = mouseY < leftAxisScale.range()[0] - 80 ? mouseY + 38 : mouseY - 57

	return {
		tooltip_rect_X,
		tooltip_rect_Y,
		tooltip_text_X,
		tooltip_text_Y,
	}
}
