import type { Metadata, Viewport } from 'next/types';
import './styles.css';
import { Analytics } from '@vercel/analytics/react';

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <html>
      <head>
        <title>Liquid Metal • Meha</title>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: 'Turn your logo into liquid metal | Meha',
  description: 'Liquid metal for your logo by Meha',
  icons: {
    icon: process.env.NODE_ENV === 'production' ? '/favicon.ico' : '/favicon-dev.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    url: 'https://liquid.meha.ai',
    type: 'website',
    locale: 'en_US',
    siteName: 'Liquid logo by Meha',
    title: 'Turn your logo into liquid metal | Meha',
    description: 'Liquid metal for your logo by Meha',
    images: [
      {
        url: 'https://liquid.meha.ai/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Turn your logo into liquid metal | Meha',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Turn your logo into liquid metal | Meha',
    description: 'Liquid metal for your logo by Meha',
    creator: '@meha',
    images: ['https://liquid.meha.ai/og-image.png'],
  },
};

export const viewport = {
  width: 480,
  initialScale: 0,
  themeColor: '#000',
};
