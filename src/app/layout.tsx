import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ДОСИЕ — Криминални Мистерии и Настолни Игри",
  description:
    "Потопете се в света на детективите. Разкрийте убийства, разгадайте шифри и повдигнете обвинения. Custom криминални мистерии за партита, сватби и корпоративни събития.",
  keywords: "криминална мистерия, настолни игри, детектив, убийство в тъмното, murder mystery, България",
  openGraph: {
    title: "ДОСИЕ — Криминални Мистерии",
    description: "Разплети мистерията. Ти си детективът.",
    locale: "bg_BG",
    type: "website",
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
          href="https://fonts.googleapis.com/css2?family=Special+Elite&family=Inter:wght@300;400;500;600;700&family=Courier+Prime:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
