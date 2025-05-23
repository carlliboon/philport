"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ShoppingBag, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export const NavHeaderMenus = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            <ShoppingBag className="h-5 w-5 text-emerald-700" />
            <span className="text-emerald-700 font-bold">
              ShopifySupportPro
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navItems.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={`text-sm font-medium transition-colors ${
                pathname === href
                  ? "text-emerald-600"
                  : "hover:text-emerald-600"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Call-to-action buttons */}
        <div className="hidden md:flex items-center gap-2">
          <Button asChild variant="outline" size="sm">
            <Link href="https://cal.com/carl-michael/shopify-support-pro">
              Book a Call
            </Link>
          </Button>
          <Button
            asChild
            size="sm"
            className="bg-emerald-600 hover:bg-emerald-700"
          >
            <Link href="/admin/login">
              <span>
                <User />
              </span>
              Login
            </Link>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <div className="flex flex-col p-4 space-y-2">
            {navItems.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-medium py-2 px-2 rounded ${
                  pathname === href
                    ? "text-emerald-600 bg-emerald-50"
                    : "hover:text-emerald-600"
                }`}
              >
                {label}
              </Link>
            ))}

            {/* Two-button row */}
            <div className="flex gap-2">
              <Button asChild variant="outline" size="sm" className="w-1/2">
                <Link href="https://cal.com/carl-michael/shopify-support-pro">
                  Book a Call
                </Link>
              </Button>
              <Button
                asChild
                size="sm"
                className="w-1/2 bg-emerald-600 hover:bg-emerald-700"
              >
                <Link href="#">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
