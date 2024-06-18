import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import {
  FooterComponent,
  HeaderComponent,
  PageRouteAnimation,
} from '@/components';

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
      </body>
    </html>
  );
}
