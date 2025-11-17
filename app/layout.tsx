import './globals.css';
import type { ReactNode } from 'react';
import Header from '@/components/Header';

export const metadata = {
  title: 'Kwanqa AI',
  description: 'Amharic–English AI tutor running locally.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}