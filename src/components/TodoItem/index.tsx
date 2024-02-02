'use client'
import { Trash } from 'lucide-react'
import { useId, useState } from 'react'
import useTaksStore from '@/store/tasks';
import { ItemType } from '@/types/itemType';
import RemoveItemModal from '../RemoveItemModal';
import '@/styles/todoItem.scss'

type Props = {
  item: ItemType;
}

const TodoItem = ({ item }: Props) => {
  const [showRemoveModal, setShowRemoveModal] = useState(false)
  const itemId = useId()
  const { toggleItem } = useTaksStore();

  const handleCheckboxChange = () => {
    toggleItem(item);
  };

  return (
    <>
      <li className='item__container' >
        <div className='item__info' onClick={handleCheckboxChange}>
          <input type="checkbox" id={itemId} checked={item.checked} />
          <label htmlFor={itemId}>{item.title}</label>
        </div>
        <Trash className='item__trash' onClick={() => setShowRemoveModal(true)} />
      </li>

      {showRemoveModal && <RemoveItemModal item={item} onClose={() => setShowRemoveModal(false)} />}
    </>
  )
}

export default TodoItem