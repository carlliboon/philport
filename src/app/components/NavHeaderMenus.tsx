"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export const NavHeaderMenus = () => {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between max-w-screen-xl mx-auto px-4">
        <div className="flex items-center gap-2 text-lg font-semibold">
          <Link href="/" className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-emerald-600" />
            <span>Shopify Support Pro</span>
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          {navItems.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={`text-sm font-medium transition-colors ${
                pathname === href
                  ? "text-emerald-600"
                  : " hover:text-emerald-600"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="hidden md:flex"
          >
            <Link href="https://cal.com/carl-michael/shopify-support-pro">
              Book a Call
            </Link>
          </Button>
          <Button
            asChild
            size="sm"
            className="bg-emerald-600 hover:bg-emerald-700"
          >
            <Link href="#">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
