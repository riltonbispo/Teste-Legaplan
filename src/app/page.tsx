'use client'
import AddItemModal from '@/components/AddItemModal';
import Button from '@/components/Button';
import TodoItem from '@/components/TodoItem';
import { useState } from 'react';
import useTaksStore from '@/store/tasks';
import '@/styles/home.scss';

export default function Home() {
  const [showAddModal, setShowAddModal] = useState(false)
  const { items } = useTaksStore();

  return (
    <main className='todo__container'>
      <div className='todo__content'>
        <span>Suas tarefas de hoje</span>
        <ul>
          {items.map(item => (
            !item.checked && <TodoItem key={item.id} item={item} />
          ))}
        </ul>
        <span>Tarefas finalizadas</span>
        <ul>
          {items?.map(item => (
            item.checked && <TodoItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
      <Button variant='primary' onClick={() => setShowAddModal(true)}>Adicionar nova tarefa</Button>
      {showAddModal && (
        <AddItemModal
          onClose={() => setShowAddModal(false)}
        />
      )}
    </main>
  );
}
