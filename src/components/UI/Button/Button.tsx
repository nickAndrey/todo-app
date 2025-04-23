import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { Size } from './types/size';
import { Variant } from './types/variant';
import { getVariantStyles } from './utils/getVariantStyles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: Variant;
  children: ReactNode;
  size?: Size;
  customClass?: string;
};

const Button: FC<ButtonProps> = ({ variant, children, size, ...props }) => {
  return (
    <button className={getVariantStyles(variant, size, props.className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
