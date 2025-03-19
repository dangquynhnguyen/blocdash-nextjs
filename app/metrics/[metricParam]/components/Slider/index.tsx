import { colors } from '@/theme'
import { Slider as MUISlider } from '@mui/material'
import Box from '@mui/material/Box'
import { SliderThumb } from '@mui/material/Slider'
import * as React from 'react'

type ThumbComponentProps = React.HTMLAttributes<unknown>

type SliderProps = {
	onChange: () => void
	minMaxValues: [number, number]
	values: [number, number]
}

export default function Slider(props: SliderProps) {
	function ThumbComponent(props: ThumbComponentProps) {
		const { children, ...other } = props
		const style = {
			height: 7,
			width: 1,
			backgroundColor: colors.primary[300],
			marginLeft: 1,
			marginRight: 1,
		}
		return (
			<SliderThumb {...other}>
				{children}
				<span className="day-bar" style={style}></span>
				<span className="day-bar" style={style}></span>
			</SliderThumb>
		)
	}

	return (
		<Box
			sx={{
				width: 'auto',
				marginLeft: 14.9,
				marginRight: 8.8,
				height: 55,
			}}
		>
			<MUISlider
				slots={{ thumb: ThumbComponent }}
				disableSwap
				getAriaLabel={() => 'Minimum distance'}
				defaultValue={props.minMaxValues}
				value={props.values}
				valueLabelDisplay="auto"
				valueLabelFormat={(timestamp) => <div>{new Date(timestamp).toLocaleDateString()}</div>}
				min={props.minMaxValues[0]}
				max={props.minMaxValues[1]}
				step={1000 * 60 * 60 * 24 * 3}
				onChange={props.onChange}
				sx={{
					color: colors.primary[900],
					height: 0,
					padding: '13px 0',
					borderRadius: 0,
					'& .MuiSlider-thumb': {
						height: 16,
						width: 10,
						backgroundColor: colors.primary[1000],
						border: '0.6px solid' + colors.primary[300],
						borderRadius: 0,
						'&:hover': {
							cursor: 'ew-resize',
						},
					},
					'& .MuiSlider-track': {
						height: 30,
						border: 'none',
					},
					'& .MuiSlider-rail': {
						color: colors.primary[950],
						border: '0.2px solid' + colors.primary[850],
						borderRadius: 0,
						opacity: 0.9,
						height: 30,
					},
					'& .MuiSlider-valueLabel': {
						lineHeight: 1.2,
						fontSize: 12,
						background: 'unset',
						color: colors.primary[0],
					},
				}}
			/>
		</Box>
	)
}
