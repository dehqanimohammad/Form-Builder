import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@/components/providers/ThemeProvider';

const inter = Vazirmatn({ subsets: ["arabic"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <ClerkProvider>
        <html lang="fa" dir='rtl'>
          <body className={inter.className}>
            <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
              {children}
          </ThemeProvider>
          </body>
          
        </html>
      </ClerkProvider>
    
  );
}
