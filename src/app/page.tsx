import Button from '@/components/Button';
import TodoItem from '@/components/TodoItem';
import '@/styles/home.scss';

/**
 * TODO:
 *  [] Usar o drag and drop para para manuzear as tasks
 */

export default function Home() {
  return (
    <main className='todo__container'>
      <div className='todo__content'>
        <span>Suas tarefas de hoje</span>
        <ul>
          <TodoItem title='Item1' />
          <TodoItem title='Item1' />
          <TodoItem title='Item1' />
          <TodoItem title='Item1' />
        </ul>
        <span>Tarefas finalizadas</span>
        <ul>
          <TodoItem title='Item1' checked/>
          <TodoItem title='Item1' checked/>
          <TodoItem title='Item1' checked/>
          <TodoItem title='Item1' checked/>
        </ul>
      </div>
      <Button variant='primary'>Adicionar nova tarefa</Button>
    </main>
  );
}
