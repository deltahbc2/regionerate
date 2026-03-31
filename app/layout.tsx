import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Maven_Pro } from "next/font/google";
import { ConvexClientProvider } from "@/providers/convex-provider";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });
const Maven = Maven_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Echo NL",
  description: "Reforestando Nuevo León, un arbol a la vez.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <body className={inter.className + " min-h-full flex flex-col "}>
        <ConvexClientProvider>
          {children}
          <Toaster position='bottom-center'/>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
