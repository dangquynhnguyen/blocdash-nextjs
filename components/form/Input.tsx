'use client'
import { colors } from '@/theme'
import { inputClasses, Input as InputMUI, styled } from '@mui/material'
import { ChangeEventHandler } from 'react'

type Props = {
	id?: string
	placeholder?: string
	value?: string
	onChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> | undefined
}
const StyledInput = styled(InputMUI)(
	() => `
    display: inline-block;
  
    .${inputClasses.input} {
      width: 320px;
      font-family: 'IBM Plex Sans', sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.5;
      padding: 8px 12px;
      border-radius: 8px;
      color: ${colors.primary[500]};
      background: ${colors.primary[1000]};
      border: 1px solid ${colors.logo[200]};
      box-shadow: 0 0 2px 2px ${colors.logo[200]};
  
      &:hover {
        border-color: ${colors.logo[1000]};
      }
  
      &:focus {
        outline: 0;
        border-color: ${colors.logo[500]};
        box-shadow: 0 0 0 2px ${colors.logo[500]};
      }
    }
  
    &.filled .${inputClasses.input} {
      box-shadow: 0 0 3px 2px ${colors.logo[100]};
    }
  `,
)

export default function Input(props: Props) {
	return (
		<StyledInput
			disableUnderline
			id={props.id}
			placeholder={props.placeholder}
			value={props.value}
			onChange={props.onChange}
		/>
	)
}
