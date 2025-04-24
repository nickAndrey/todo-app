import { FC } from 'react';
import { tv } from 'tailwind-variants';

type ModalProps = {
  onClose?: () => void;
};

const Modal: FC<ModalProps> = ({ onClose }) => {
  const dialogStyles = tv({
    slots: {
      wrapper: 'fixed inset-0 z-50 flex items-center justify-center transition-all duration-200',
      backdrop: 'absolute -inset-20 bg-black/10',
      content: 'relative bg-white rounded-xl shadow-xl p-6 z-10 max-w-md w-full',
    },
  });

  const { wrapper, backdrop, content } = dialogStyles();

  return (
    <div id="customModal" className={wrapper()}>
      <div className={backdrop()} onClick={onClose}></div>

      <div className={content()}>
        Content here
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
