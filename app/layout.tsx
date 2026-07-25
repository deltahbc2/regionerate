import type { Metadata } from "next";
import "./globals.css";
import { Inter, Maven_Pro } from "next/font/google";
import { ConvexClientProvider } from "@/providers/convex-provider";
import { Toaster } from "sonner";
import Menu from "@/components/menu";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });
const maven = Maven_Pro({ subsets: ["latin"] });

const siteUrl = "https://deltahbc.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Regionerate",
    template: "%s | Regionerate",
  },
  description:
    "Regionerate es una plataforma para explorar especies nativas de Nuevo Leon, consultar un mapa de arboles plantados y apoyar la reforestacion inteligente.",
  keywords: [
    "Regionerate",
    "reforestacion",
    "Nuevo Leon",
    "arboles plantados",
    "especies nativas",
    "mapa interactivo",
    "deltaHBC",
  ],
  authors: [{ name: "deltaHBC" }],
  creator: "deltaHBC",
  publisher: "deltaHBC",
  applicationName: "Regionerate",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: siteUrl,
    siteName: "Regionerate",
    title: "Regionerate",
    description:
      "Explora el mapa de arboles plantados en Nuevo Leon y descubre informacion util para reforestacion inteligente.",
    images: [
      {
        url: "/Imagenes/Logo.webp",
        width: 512,
        height: 512,
        alt: "Regionerate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Regionerate",
    description:
      "Explora el mapa de arboles plantados en Nuevo Leon y consulta informacion para reforestacion inteligente.",
    images: ["/Imagenes/Logo.webp"],
  },
  icons: {
    icon: "/Imagenes/Logo.webp",
    shortcut: "/Imagenes/Logo.webp",
    apple: "/Imagenes/Logo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <body className={`${inter.className} min-h-full flex flex-col`}>
        <ConvexClientProvider>
          <Menu />
          {children}
          <Toaster position="bottom-center" />
          <Footer />
        </ConvexClientProvider>
      </body>
    </html>
  );
}
