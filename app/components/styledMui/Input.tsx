'use client'
import { colors } from '@/theme'
import { inputClasses, Input as InputMUI, InputProps, styled } from '@mui/material'

const StyledInput = styled(InputMUI)(
	() => `
    display: inline-block;
    margin-top: 0px !important;
  
    .${inputClasses.input} {
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.5;
      padding: 8px 12px;
      border-radius: 8px;
      color: ${colors.primary[100]};
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

export default function Input(props: InputProps) {
	return <StyledInput fullWidth disableUnderline {...props} />
}
