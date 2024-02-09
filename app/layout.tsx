import type { Metadata } from 'next';

import StyledComponentsRegistry from '../lib/registry';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Seol Hi - Portfolio',
  description: 'Fullstack Developer Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
