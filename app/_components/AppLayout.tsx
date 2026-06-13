import { PropsWithChildren } from 'react';

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <div className="mx-auto mt-auto flex min-h-screen min-w-[414px] px-[21px] sm:min-w-[768px] sm:px-[22px] lg:min-w-[1200px]">
      {children}
    </div>
  );
}
