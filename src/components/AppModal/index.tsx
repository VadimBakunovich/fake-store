import Modal from 'react-modal';

import { useStore } from 'store';

Modal.setAppElement('#root');

export default function AppModal() {
  const { isModalOpen, modalContent, toggleModalOpen } = useStore();
  const handler = () => toggleModalOpen();

  return (
    <Modal
      overlayClassName=' '
      className=' '
      isOpen={isModalOpen}
      onRequestClose={handler}
      closeTimeoutMS={300}
    >
      <button className='ReactModal__Btn-close' onClick={handler}>
        ✖
      </button>
      {modalContent}
    </Modal>
  );
}
