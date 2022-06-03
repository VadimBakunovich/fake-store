import Modal from 'react-modal';

import { useStore } from 'store';

Modal.setAppElement('#root');

export default function AppModal() {
  const { isModalOpen, toggleModalOpen, modalContent } = useStore();

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={toggleModalOpen}
      closeTimeoutMS={400}
    >
      <button className='ReactModal__Btn-close' onClick={toggleModalOpen}>
        ✖
      </button>
      {modalContent}
    </Modal>
  );
}
