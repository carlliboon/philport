import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import styles from "./layout.module.css";

export const FooterMenus = ({ careers = true }: { careers?: boolean }) => (
  <footer className={styles.footer}>
    <div className={styles.footerMain}>
      <div className={styles.footerBrand}>
        <Link href="/" className={styles.brand} aria-label="PhilPort home">
          <Image
            src="/logo.png"
            width={44}
            height={44}
            alt=""
            className={styles.footerBrandImage}
          />
          <span className={styles.wordmark}>PhilPort</span>
        </Link>
        <p>
          Good people. Thoughtful support.
          <br />
          More possibilities for your store.
        </p>
        <a href="mailto:support@philport.com" className={styles.footerEmail}>
          support@philport.com <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
      <nav aria-label="Explore PhilPort" className={styles.footerNav}>
        <h2>EXPLORE</h2>
        <Link href="/services">Our services</Link>
        <Link href="/portfolio">Our work</Link>
        <Link href="/about">About PhilPort</Link>
        <Link href="/contact">Get in touch</Link>
        {careers && (
          <Link href="/signup">
            Join our team <ArrowUpRight size={13} aria-hidden="true" />
          </Link>
        )}
      </nav>
      <div className={styles.footerConversation}>
        <h2>LET’S BUILD SOMETHING BETTER.</h2>
        <p>
          Your next chapter starts
          <br />
          with a conversation.
        </p>
        <a
          href="https://cal.com/carl-michael-libo-on-vh8bih/30min"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a consultation <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </div>
    </div>
    <div className={styles.footerBottom}>
      <p>© {new Date().getFullYear()} PhilPort. All rights reserved.</p>
      <nav aria-label="Legal">
        <Link href="/privacy">Privacy policy</Link>
        <Link href="/terms">Terms of service</Link>
      </nav>
      <span>Shopify expertise. Human connection.</span>
    </div>
  </footer>
);
