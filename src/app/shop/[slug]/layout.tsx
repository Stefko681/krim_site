import { cases } from "@/lib/data";

export function generateStaticParams() {
  return cases.map((c) => ({
    slug: c.slug,
  }));
}

export default function ShopDetailLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
