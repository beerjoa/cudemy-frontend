import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const portalElement = document.getElementById('modal-root');

interface ModalProps extends React.ComponentPropsWithoutRef<'dialog'> {
  children: React.ReactNode;
  className?: string;
  open: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  const dialog = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const modal = dialog.current;

    if (modal && open) {
      modal.showModal();
    }
  }, [open]);

  if (!portalElement) return null;

  return (
    <>
      {createPortal(
        <dialog
          ref={dialog}
          id="default_modal"
          className="modal"
          onClose={onClose}
        >
          {children}
        </dialog>,
        portalElement,
      )}
    </>
  );
};

export default Modal;
