/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LoginModal } from "@/components/forms";
import { CalCom } from "@/components/common";
import Image from "next/image";
import ppLogo from "@/assets/images/general/philport-logo.png";

export const NavHeaderMenus = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Career", href: "/signup" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between max-w-screen-xl mx-auto px-4">
        <div className="flex items-center text-lg font-semibold">
          <Link href="/" className="flex items-center">
            
            <span className="text-2xl font-bold flex items-center text-emerald-700"><Image
            className="-mr-2.5"
              src={ppLogo}
              alt="Philport Logo"
              width={50}
              height={50}
            />hilport</span>
          </Link>
          
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navItems.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={`text-md font-semibold transition-colors ${
                pathname === href
                  ? "text-emerald-800"
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
            <span className="cursor-pointer">
              <CalCom btnTitle="Book a Call" />
            </span>
          </Button>

          {/* {pathname === "/signup" && (
            <>
              <Button
                size="sm"
                className="w-1/2 bg-emerald-600 hover:bg-emerald-700"
                onClick={() => setLoginOpen(true)}
              >
                <User className="mr-1 h-4 w-4" /> Login
              </Button>
              <LoginModal open={loginOpen} onOpenChange={setLoginOpen} />
            </>
          )} */}
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
                className={`text-md font-semibold py-2 px-2 rounded ${
                  pathname === href
                    ? "text-emerald-800 bg-emerald-50"
                    : "hover:text-emerald-600"
                }`}
              >
                {label}
              </Link>
            ))}

            {/* Two-button row */}
            <div className="flex gap-2">
              {/* <Button asChild variant="outline" size="sm" className="w-1/2"> */}
              {/* <span className="cursor-pointer w-1/2">
                <CalCom btnTitle="Book a Call" />
              </span> */}
              {/* </Button> */}

              <Button asChild variant="outline" size="sm" className="w-1/2">
                <span className="cursor-pointer">
                  <CalCom btnTitle="Book a Call" />
                </span>
              </Button>
              {/* {pathname === "signup" && (
                <>
                  <Button
                    size="sm"
                    className="w-1/2 bg-emerald-600 hover:bg-emerald-700"
                    onClick={() => setLoginOpen(true)}
                  >
                    <User className="mr-1 h-4 w-4" /> Login
                  </Button>
                  <LoginModal open={loginOpen} onOpenChange={setLoginOpen} />
                </>
              )} */}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
