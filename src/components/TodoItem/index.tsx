'use client'
import { Trash } from 'lucide-react'
import { InputHTMLAttributes, useId, useState } from 'react'
import '@/styles/todoItem.scss'

type Props = {
  title: string
} & InputHTMLAttributes<HTMLInputElement>

/*
  FIXME: Erro no change gerando no console
*/

const TodoItem = ({ title, checked, ...props }: Props) => {
  const [isChecked, setIsChecked] = useState(checked)
  const itemId = useId()
  
  return (
    <li className='item__container' onClick={() => setIsChecked((prev) => !prev)}>
      <div className='item__info'>
        <input type="checkbox" name="" id={itemId} checked={isChecked} {...props} />
        <label htmlFor={itemId}>{title}</label>
      </div>
      <Trash className='trash' />
    </li>
  )
}

export default TodoItem