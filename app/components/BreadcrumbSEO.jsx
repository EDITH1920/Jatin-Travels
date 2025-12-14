"use client";

import { usePathname } from "next/navigation";

export default function BreadcrumbSEO() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);

  const itemListElement = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://jatin-travels.vercel.app/",
    },
    ...segments.map((seg, index) => ({
      "@type": "ListItem",
      position: index + 2,
      name: seg.replace("-", " "),
      item:
        "https://jatin-travels.vercel.app/" +
        segments.slice(0, index + 1).join("/"),
    })),
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
