import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  metadataBase: new URL("https://dosie.bg"),
  title: "ДОСИЕ — Криминални Мистерии и Настолни Игри",
  description:
    "Потопете се в света на детективите. Разкрийте убийства, разгадайте шифри и повдигнете обвинения. Custom криминални мистерии за партита, сватби и корпоративни събития.",
  keywords: "криминална мистерия, настолни игри, детектив, убийство в тъмното, murder mystery, България",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "ДОСИЕ — Криминални Мистерии",
    description: "Разплети мистерията. Ти си детективът.",
    locale: "bg_BG",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ДОСИЕ — Криминални Мистерии",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="bg">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Yeseva+One&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Kelly+Slab&family=IBM+Plex+Mono:ital,wght@0,300..700;1,300..700&family=Inter:wght@300;400;500;600;700&family=Cinzel+Decorative:wght@400;700;900&family=Courier+Prime:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
