import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Maridin San Miguel',
  description:
    'A Senior Software Engineer, experienced in developing frontend and backend services for various website applications.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
