import React from 'react';
import { cn } from '@/lib/utils'; // I'll show how to write `cn` below if you need it

// Define allowed variants
type ButtonVariant = 'primary' | 'secondary' | 'outline';

// Extend button props
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

// Styles based on variant
const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-white hover:bg-primary/70',
  secondary: 'bg-gray-600 text-white hover:bg-gray-700',
  outline: 'border border-primary text-primary hover:bg-primary/20',
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  ...props
}) => {
  return (
    <button
      className={cn(
        'px-8 py-2 lg:px-14 lg:py-3 rounded-[10px] font-medium transition-colors duration-200 cursor-pointer',
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
