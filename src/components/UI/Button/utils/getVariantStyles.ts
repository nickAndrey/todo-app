import { tv } from 'tailwind-variants';
import { Size } from '../types/size';
import { Variant } from '../types/variant';

export const getVariantStyles = (variant: Variant, size: Size = 'md', className = '') => {
  const buttonVariants = tv({
    base: 'flex items-center justify-center transition-colors duration-200 bg-gray-200 hover:bg-gray-300 hover:cursor-pointer',
    variants: {
      xs: {
        default: 'text-xs px-2 py-1',
        round: 'text-xs px-2 py-1 w-6 h-6',
      },
      sm: {
        default: 'text-sm px-3 py-1.5',
        round: 'text-sm w-8 h-8',
      },
      md: {
        default: 'text-base px-4 py-2',
        round: 'text-base w-10 h-10',
      },
      lg: {
        default: 'text-lg px-5 py-3',
        round: 'text-lg w-12 h-12',
      },
      shape: {
        default: 'rounded-md',
        round: 'rounded-full',
      },
    },
    defaultVariants: {
      shape: 'default',
      md: 'default',
    },
  });

  switch (variant) {
    case 'round':
      return buttonVariants({ [size]: variant, shape: 'round', className });
    default:
      return buttonVariants();
  }
};
