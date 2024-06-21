import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import {
  Cursor,
  FooterComponent,
  HeaderComponent,
  PageRouteAnimation,
} from '@/components';
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Piset Heang',
  description: 'Welcome to Piset Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderComponent />
        <PageRouteAnimation>{children}</PageRouteAnimation>
        <FooterComponent />

        <Cursor />
        <NextTopLoader />
      </body>
    </html>
  );
}
