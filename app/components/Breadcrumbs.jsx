"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);

  return (
    <div className="w-full bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-3 text-sm text-gray-300 flex items-center gap-2">
        <Link href="/" className="hover:text-[#FF6A00] transition">
          Home
        </Link>

        {segments.map((seg, idx) => {
          const path = "/" + segments.slice(0, idx + 1).join("/");
          const isLast = idx === segments.length - 1;

          return (
            <span key={path} className="flex items-center gap-2">
              <span className="opacity-50">›</span>
              {isLast ? (
                <span className="text-[#FF6A00] capitalize">
                  {seg.replace("-", " ")}
                </span>
              ) : (
                <Link
                  href={path}
                  className="hover:text-[#FF6A00] transition capitalize"
                >
                  {seg.replace("-", " ")}
                </Link>
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
}
