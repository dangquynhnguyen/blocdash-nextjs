import { colors } from '@/theme'
import { styled } from '@mui/material/styles'

export const Circle_Solid = styled('circle')((props: { color: string }) => ({
	fill: props.color,
	r: 4,
}))

export const Rect_Solid = styled('rect')(() => ({
	fill: colors.primary[850],
}))

export const Rect_Outline = styled('rect')(() => ({
	fill: colors.primary[1000],
	filter: 'drop-shadow(1px 1px 1.5px)',
}))

export const Path = styled('path')(() => ({
	fill: 'none',
	shapeRendering: 'crispEdges',
	stroke: colors.primary[700],
	strokeWidth: 0.8,
	// strokeDasharray: '2 2',
	pointerEvents: 'none',
}))

export const BaseText = styled('text')(() => ({
	shapeRendering: 'crispEdges',
	pointerEvents: 'none',
	dominantBaseline: 'text-after-edge',
}))

export const Text_Medium = styled(BaseText)(() => ({
	fill: colors.primary[50],
	fontSize: '0.8rem',
}))

export const Text_Small = styled(BaseText)(() => ({
	fill: colors.primary[400],
	fontSize: '0.75rem',
	fontWeight: 400,
}))

export const Text_Small_Bold = styled(BaseText)(() => ({
	fill: colors.primary[300],
	fontSize: '0.75rem',
	fontWeight: 500,
}))

export const Text_Tiny = styled(BaseText)(() => ({
	fill: colors.primary[400],
	fontSize: '0.6rem',
	fontWeight: 400,
}))
