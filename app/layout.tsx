import { ReactNode } from 'react';

import { notoSans } from '@configs/bigContents';

import ReactQueryProvider from '@provider/ReactQueryProvider';

import AppLayout from './_components/AppLayout';

import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'NextJS App Router Zustand ReactQuery Template',
  description: 'Simple NextJS App Route Template'
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko" className={notoSans.className} suppressHydrationWarning>
      <body>
        <ReactQueryProvider>
          <AppLayout>{children}</AppLayout>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
