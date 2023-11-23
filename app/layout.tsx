import "./globals.css";
import "./data-tables-css.css";
import "./satoshi.css";
import { ClerkProvider } from '@clerk/nextjs'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <ClerkProvider>
      <html lang="en">
        <body suppressHydrationWarning={true}>
          {children}
        </body>
      </html>
    </ClerkProvider>

  );
}
