import Modal from 'react-modal';

import { useStore } from 'store';

Modal.setAppElement('#root');

export default function AppModal() {
  const { isModalOpen, modalContent, toggleModalOpen } = useStore();

  return (
    <Modal
      overlayClassName=' '
      className=' '
      isOpen={isModalOpen}
      onRequestClose={() => toggleModalOpen()}
      closeTimeoutMS={300}
    >
      <button
        className='ReactModal__Btn-close'
        onClick={() => toggleModalOpen()}
      >
        ✖
      </button>
      {modalContent}
    </Modal>
  );
}
