import { Button } from '@/shared/components/Button';
import { FC, ReactNode } from 'react';
import { IoClose } from 'react-icons/io5';
import { tv } from 'tailwind-variants';

type ModalProps = {
  children: ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  onClose?: () => void;
};

const Modal: FC<ModalProps> = ({ onClose, size = 'md', children }) => {
  const dialogStyles = tv({
    slots: {
      wrapper: `fixed inset-0 z-50 flex items-center justify-center transition-all duration-200`,
      backdrop: `absolute -inset-20 bg-black/10`,
      content: `relative bg-white rounded-xl shadow-xl flex flex-col p-6 z-10 w-full min-h-[100px]`,
      generalCloseBtn: `absolute top-2.5 right-2.5 bg-transparent`,
      generalCloseBtnIcon: `w-4 h-4`,
    },
    variants: {
      size: {
        xs: {
          content: 'max-w-xs',
        },
        sm: {
          content: 'max-w-sm',
        },
        md: {
          content: 'max-w-md',
        },
        lg: {
          content: 'max-w-lg',
        },
      },
    },
  });

  const { wrapper, backdrop, content, generalCloseBtn, generalCloseBtnIcon } = dialogStyles({
    size,
  });

  return (
    <div id="customModal" className={wrapper()}>
      <div className={backdrop()} onClick={onClose} />

      <div className={content()}>
        <Button variant="round" size="sm" onClick={onClose} className={generalCloseBtn()}>
          <IoClose className={generalCloseBtnIcon()} />
        </Button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
