import Button from '../Button'
import useTaksStore from '@/store/tasks';
import { ItemType } from '@/types/itemType';
import '@/styles/addItemModal.scss'

type Props = {
  onClose: () => void
  item: ItemType;
}

const RemoveItemModal = ({ onClose, item }: Props) => {
  const { removeItem } = useTaksStore();

  const handleDelItem = () => {
    removeItem(item.id)
    onClose();
  };

  return (
    <div className='modal__container'>
      <div className='modal__content'>
        <h2>Deletar tarefa</h2>
        <div className='modal__info'>
          <p>Tem certeza que você deseja deletar essa tarefa?</p>
        </div>
        <div className='modal__buttons'>
          <Button variant='danger' onClick={handleDelItem}>Deletar</Button>
          <Button variant='secondary' onClick={() => onClose()}>Cancelar</Button>
        </div>
      </div>
    </div>
  )
}

export default RemoveItemModal