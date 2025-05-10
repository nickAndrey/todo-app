import { tv } from 'tailwind-variants';
import { Size } from '../types/size';
import { Variant } from '../types/variant';

const buttonVariants = tv({
  base: 'flex items-center justify-center transition-colors duration-200 bg-gray-100 hover:bg-gray-200 hover:cursor-pointer',
  variants: {
    shape: {
      default: 'rounded-md',
      round: 'rounded-full',
    },
    style: {
      xs_default: 'text-xs px-2 py-1',
      xs_round: 'text-xs px-2 py-1 w-6 h-6',
      sm_default: 'text-sm px-3 py-1.5',
      sm_round: 'text-sm w-8 h-8',
      md_default: 'text-base px-4 py-2',
      md_round: 'text-base w-10 h-10',
      lg_default: 'text-lg px-5 py-3',
      lg_round: 'text-lg w-12 h-12',
    },
  },
  defaultVariants: {
    shape: 'default',
    style: 'md_default',
  },
});

export const getVariantStyles = (variant: Variant, size: Size = 'md', className = '') => {
  const style = `${size}_${variant}` as keyof typeof buttonVariants.variants.style;
  const baseClass = buttonVariants({ shape: variant, style });

  return `${baseClass} ${className}`.trim();
};
