import { type ComponentProps } from 'react';

import { Button as BaseButton } from '@base-ui/react/button';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-primary-900 text-primary-50 hover:bg-primary-800 focus-visible:ring-primary-900',
        secondary:
          'bg-secondary-900 text-secondary-50 hover:bg-secondary-800 focus-visible:ring-secondary-900'
      }
    },
    defaultVariants: {
      variant: 'primary'
    }
  }
);

interface ButtonProps
  extends
    Omit<ComponentProps<typeof BaseButton>, 'className'>,
    VariantProps<typeof buttonVariants> {
  className?: string;
}

export default function Button({ className, variant, ...props }: ButtonProps) {
  return <BaseButton className={cn(buttonVariants({ variant }), className)} {...props} />;
}
