import Modal from 'react-modal';

import { useStore } from 'store';

Modal.setAppElement('#root');

export default function AppModal() {
  const { modalContent, setModalContent } = useStore();

  return (
    <Modal
      isOpen={!!modalContent}
      onRequestClose={() => setModalContent(null)}
      closeTimeoutMS={400}
    >
      <button
        className='ReactModal__Btn-close'
        onClick={() => setModalContent(null)}
      >
        ✖
      </button>
      {modalContent}
    </Modal>
  );
}
