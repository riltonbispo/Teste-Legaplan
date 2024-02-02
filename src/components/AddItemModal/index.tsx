import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react'
import Button from '../Button'
import '@/styles/addItemModal.scss'
import useTaksStore  from '@/store/tasks';

type Props = {
  onClose: () => void
}

const AddItemModal = ({ onClose}: Props) => {
  const [newItemTitle, setNewItemTitle] = useState('');
  const id = uuidv4()
  const { addItem} = useTaksStore();


  const handleAddItem = () => {
    addItem({ title: newItemTitle, checked: false, id });
    onClose();
  };

  return (
    <div className='modal__container'>
      <div className='modal__content'>
        <h2>Nova Tarefa</h2>
        <div className='modal__info'>
          <label htmlFor="">Titulo</label>
          <input
            type="text"
            placeholder='Digite'
            value={newItemTitle}
            onChange={(e) => setNewItemTitle(e.target.value)}
          />
        </div>
        <div className='modal__buttons'>
          <Button variant='primary' onClick={handleAddItem}>Adicionar</Button>
          <Button variant='secondary' onClick={() => onClose()}>Cancelar</Button>
        </div>
      </div>
    </div>
  )
}

export default AddItemModal