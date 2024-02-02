import { ButtonHTMLAttributes } from 'react'
import '@/styles/button.scss'

export type ButtonProps = {
  variant: 'primary' | 'danger' | 'secondary'
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ variant, ...props }: ButtonProps) => {

  return (
    <button className={variant} {...props}>
      {props.children}
    </button>
  )
}

export default Button