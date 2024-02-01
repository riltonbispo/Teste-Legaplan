import { ButtonHTMLAttributes } from 'react'
import '@/styles/button.scss'

export type ButtonProps = {
  variant: 'primary' | 'danger'
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ variant, ...props }: ButtonProps) => {
  return (
    <button className={variant === 'danger' ? 'danger' : 'primary'}>
      {props.children}
    </button>
  )
}

export default Button