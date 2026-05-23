import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Политика за поверителност — ДОСИЕ",
  description:
    "Политика за поверителност на ДОСИЕ. Научете как събираме, използваме и защитаваме вашите лични данни съгласно GDPR.",
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
