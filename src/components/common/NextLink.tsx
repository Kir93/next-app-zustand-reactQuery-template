import { AnchorHTMLAttributes, ReactNode } from 'react';

import Link, { LinkProps } from 'next/link';

type IProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    children: ReactNode;
  };

export default function NextLink({ href, children, ...rest }: IProps) {
  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
}
