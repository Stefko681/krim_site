import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Политика за бисквитки — ДОСИЕ",
  description:
    "Политика за бисквитки на ДОСИЕ. Научете какви бисквитки използваме, защо и как да управлявате предпочитанията си.",
};

export default function CookiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
