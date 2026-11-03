"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import styles from "./layout.module.css";

const navItems = [
  { label: "Services", href: "/services" },
  { label: "Our work", href: "/portfolio" },
  { label: "About us", href: "/about" },
  { label: "Contact", href: "/contact" },
];
const bookingUrl = "https://cal.com/carl-michael-libo-on-vh8bih/30min";

export const NavHeaderMenus = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link
          href="/"
          className={styles.brand}
          aria-label="PhilPort home"
          onClick={() => setMobileMenuOpen(false)}
        >
          <Image
            src="/logo.png"
            width={43}
            height={43}
            alt=""
            className={styles.brandImage}
          />
          <span className={styles.wordmark}>
            PhilPort<span>YOUR ECOMMERCE PARTNER</span>
          </span>
        </Link>
        <nav className={styles.desktopNav} aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.headerCta}
        >
          Let’s talk <ArrowUpRight size={17} aria-hidden="true" />
        </a>
        <button
          ref={toggleRef}
          className={styles.menuToggle}
          type="button"
          aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileMenuOpen}
          aria-controls="philport-mobile-navigation"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? (
            <X size={24} aria-hidden="true" />
          ) : (
            <Menu size={24} aria-hidden="true" />
          )}
        </button>
      </div>
      <nav
        id="philport-mobile-navigation"
        aria-label="Mobile navigation"
        className={styles.mobileNav}
        hidden={!mobileMenuOpen}
      >
        <Link
          href="/"
          onClick={() => setMobileMenuOpen(false)}
          aria-current={pathname === "/" ? "page" : undefined}
        >
          Home
        </Link>
        {navItems.map((item) => (
          <Link
            href={item.href}
            key={item.href}
            aria-current={pathname === item.href ? "page" : undefined}
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.label}
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        ))}
        <Link
          href="/signup"
          onClick={() => setMobileMenuOpen(false)}
          aria-current={pathname === "/signup" ? "page" : undefined}
        >
          Careers
          <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mobileCta}
          onClick={() => setMobileMenuOpen(false)}
        >
          Book a free consultation <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
};
