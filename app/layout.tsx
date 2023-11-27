import "./globals.css";
import "./data-tables-css.css";
import "./satoshi.css";
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from "sonner";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <ClerkProvider>
      <html lang="en">
        <body suppressHydrationWarning={true}>
          <Toaster position="top-right" />
          {children}
        </body>
      </html>
    </ClerkProvider>

  );
}
