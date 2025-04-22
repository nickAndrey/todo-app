import { Size } from '../types/size';
import { Variant } from '../types/variant';

const sizeClasses: Record<Size, string> = {
  xs: 'text-xs px-2 py-1 w-6 h-6',
  sm: 'text-sm px-3 py-1.5 w-8 h-8',
  md: 'text-base px-4 py-2 w-10 h-10',
  lg: 'text-lg px-5 py-3 w-12 h-12',
};

export const getVariantStyles = (variant: Variant, size: Size = 'md') => {
  const base = `flex items-center justify-center transition-colors duration-200 bg-gray-200 hover:bg-gray-300 hover:cursor-pointer`;

  switch (variant) {
    case 'default':
      return `rounded-md ${sizeClasses[size]} ${base}`;
    case 'round':
      return `rounded-full ${sizeClasses[size]} ${base}`;
    default:
      return base;
  }
};
