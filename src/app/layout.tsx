import type {Metadata} from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'MatchMyCofounder - Find Your Perfect Business Partner',
  description: 'Join a global network of founders, investors, and professionals. Find your co-founder, get funded, and build your dream team.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("font-body bg-background text-foreground antialiased")}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
