"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  Headphones,
  Layers3,
  Palette,
  ShoppingBag,
  Star,
} from "lucide-react";
import { NavHeaderMenus, FooterMenus } from "@/components/layout";
import { reviews } from "@/data/reviews";
import { services } from "@/data/services";
import styles from "./home.module.css";

const bookingUrl = "https://cal.com/carl-michael-libo-on-vh8bih/30min";
const serviceIcons = [Headphones, Layers3, Code2, Palette, ShoppingBag];
const steps = [
  {
    title: "Tell us what’s on your plate.",
    description:
      "Start with a conversation about your store, your priorities, and the work you want to hand over.",
  },
  {
    title: "Find your kind of support.",
    description:
      "Together, we’ll shape a scope around your business, from a focused project to ongoing help.",
  },
  {
    title: "Make space for what’s next.",
    description:
      "Work with a team that understands your store and keeps the day-to-day moving.",
  },
];
const faqs = [
  {
    question: "What can PhilPort help with?",
    answer:
      "We support Shopify and e-commerce businesses with customer service, store administration, virtual assistance, Shopify apps, creative work, and product page customization. Tell us what you need and we’ll discuss the right scope.",
  },
  {
    question: "Can I get help with an existing Shopify store?",
    answer:
      "Yes. Whether you need to improve a product page, work through an app issue, or get support with store operations, we can start with the store you already have.",
  },
  {
    question: "Do you work on one-off projects or ongoing support?",
    answer:
      "We can discuss both a defined project and ongoing support. The initial conversation helps us understand the work, priorities, and availability before agreeing on an approach.",
  },
  {
    question: "How do we get started?",
    answer:
      "Book a consultation or use our contact page to tell us about your business. Share your goals and the areas where you need help, and we’ll discuss next steps.",
  },
];

export default function HomePage() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [photoUnavailable, setPhotoUnavailable] = useState(false);
  return (
    <div className={styles.home}>
      <a className={styles.skipLink} href="#main-content">
        Skip to content
      </a>
      <NavHeaderMenus />
      <main id="main-content">
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              <span /> YOUR ECOMMERCE SUPPORT TEAM
            </p>
            <h1 id="hero-title">
              Less busywork.
              <br />
              More room
              <br />
              <span>to grow.</span>
            </h1>
            <p className={styles.heroDescription}>
              Your store has big potential. We help you make the most of it,
              with hands-on Shopify expertise, customer care, and the everyday
              support that keeps business moving.
            </p>
            <div className={styles.actions}>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryButton}
              >
                Let’s talk about your store{" "}
                <ArrowUpRight size={19} aria-hidden="true" />
              </a>
              <Link href="/services" className={styles.textLink}>
                Explore our services <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
            <div className={styles.heroNote}>
              <Check size={15} aria-hidden="true" /> Shopify specialists.
              People-first support.
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.photoFrame}>
              <div className={styles.heroArtwork} aria-hidden="true">
                <div className={styles.artworkHeader}>
                  <span>PHILPORT</span>
                  <span>✳</span>
                </div>
                <p>
                  A team for
                  <br />
                  <span>every detail.</span>
                </p>
                <div className={styles.artworkServices}>
                  <div>
                    <Headphones size={19} />
                    <span>Customer care</span>
                    <Check size={16} />
                  </div>
                  <div>
                    <ShoppingBag size={19} />
                    <span>Store operations</span>
                    <Check size={16} />
                  </div>
                  <div>
                    <Code2 size={19} />
                    <span>Shopify expertise</span>
                    <Check size={16} />
                  </div>
                </div>
              </div>
              {!photoUnavailable && (
                <Image
                  src="https://nydmrvnsirdvaxmzfbyx.supabase.co/storage/v1/object/public/images//team-meeting.avif"
                  alt="People collaborating around a table"
                  fill
                  priority
                  sizes="(max-width: 900px) 90vw, 44vw"
                  className={styles.heroPhoto}
                  onError={() => setPhotoUnavailable(true)}
                />
              )}
              <div className={styles.photoLabel}>
                <span /> THE PEOPLE BEHIND YOUR PROGRESS
              </div>
            </div>
            <div className={styles.supportBadge}>
              <Headphones size={21} aria-hidden="true" />
              <span>
                Your store.
                <br />
                <strong>Our shared focus.</strong>
              </span>
            </div>
            <div className={styles.heroCard}>
              <div className={styles.cardIcon}>
                <ShoppingBag size={25} aria-hidden="true" />
              </div>
              <div>
                <p>You focus on the bigger picture.</p>
                <strong>We’ll help with the details.</strong>
              </div>
              <ArrowUpRight size={24} aria-hidden="true" />
            </div>
            <span className={styles.visualAccent} aria-hidden="true">
              ✳
            </span>
          </div>
        </section>

        <div className={styles.focusStrip} aria-label="Our focus">
          <span>Built around your business</span>
          <span aria-hidden="true">✳</span>
          <span>Rooted in Shopify expertise</span>
          <span aria-hidden="true">✳</span>
          <span>Powered by real people</span>
        </div>

        <section className={styles.section} aria-labelledby="services-title">
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>WHAT WE DO</p>
              <h2 id="services-title">
                Good support changes
                <br />
                <span>everything.</span>
              </h2>
            </div>
            <p>
              From the first customer question to the next store improvement, we
              bring the skills and care to help you move forward.
            </p>
          </div>
          <div className={styles.serviceGrid}>
            {services.map((service, index) => {
              const Icon = serviceIcons[index] ?? Layers3;
              return (
                <Link
                  href="/services"
                  key={service.title}
                  className={styles.serviceCard}
                >
                  <div className={styles.serviceTop}>
                    <Icon size={28} strokeWidth={1.5} aria-hidden="true" />
                    <span>0{index + 1}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className={styles.serviceBottom}>
                    <span>Discover the service</span>
                    <ArrowUpRight size={21} aria-hidden="true" />
                  </div>
                </Link>
              );
            })}
            <div className={styles.serviceCta}>
              <span className={styles.asterisk} aria-hidden="true">
                ✳
              </span>
              <h3>
                A little of this.
                <br />A lot of that.
              </h3>
              <p>
                Need support across a few areas? Let’s find the right mix for
                your business.
              </p>
              <Link href="/contact">
                Tell us what you need{" "}
                <ArrowUpRight size={21} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.approach} aria-labelledby="approach-title">
          <div className={styles.approachInner}>
            <div className={styles.approachIntro}>
              <p className={styles.eyebrow}>THE PHILPORT APPROACH</p>
              <h2 id="approach-title">
                On your side.
                <br />
                In your corner.
                <br />
                <span>Part of your team.</span>
              </h2>
              <p>
                Running a store takes more than a to-do list. It takes people
                who listen, understand the details, and care about the work as
                much as you do.
              </p>
              <Link href="/about" className={styles.lightLink}>
                Get to know PhilPort{" "}
                <ArrowUpRight size={19} aria-hidden="true" />
              </Link>
            </div>
            <ol className={styles.steps}>
              {steps.map((step, index) => (
                <li key={step.title}>
                  <span className={styles.stepNumber}>0{index + 1}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          className={styles.section}
          aria-labelledby="testimonials-title"
        >
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>FROM OUR CLIENTS</p>
              <h2 id="testimonials-title">
                The work matters.
                <br />
                <span>So do the relationships.</span>
              </h2>
            </div>
            <Link href="/portfolio" className={styles.textLink}>
              Explore our portfolio <ArrowRight size={19} aria-hidden="true" />
            </Link>
          </div>
          <div className={styles.reviewGrid}>
            {reviews.slice(0, visibleCount).map((review) => (
              <figure className={styles.reviewCard} key={review.id}>
                <div
                  className={styles.rating}
                  role="img"
                  aria-label={`${review.rating} out of 5 stars`}
                >
                  {Array.from({ length: review.rating }, (_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill="currentColor"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote>“{review.review.trim()}”</blockquote>
                <figcaption>
                  <div className={styles.avatar} aria-hidden="true">
                    {review.name
                      .split(" ")
                      .map((name) => name[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div>
                    <strong>{review.name}</strong>
                    <span>{review.title}</span>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className={styles.moreReviews}>
            {visibleCount < reviews.length && (
              <button
                type="button"
                className={styles.secondaryButton}
                onClick={() =>
                  setVisibleCount((count) =>
                    Math.min(count + 3, reviews.length),
                  )
                }
              >
                Read more client stories{" "}
                <ChevronDown size={18} aria-hidden="true" />
              </button>
            )}
            <p role="status" className={styles.srOnly}>
              Showing {Math.min(visibleCount, reviews.length)} of{" "}
              {reviews.length} client stories.
            </p>
          </div>
        </section>

        <section
          className={`${styles.section} ${styles.faqSection}`}
          aria-labelledby="faq-title"
        >
          <div>
            <p className={styles.eyebrow}>A FEW THINGS TO KNOW</p>
            <h2 id="faq-title">
              Good questions.
              <br />
              <span>Clear answers.</span>
            </h2>
            <p className={styles.faqIntro}>
              Have something else in mind?
              <br />
              <Link href="/contact">We’re happy to talk.</Link>
            </p>
          </div>
          <div className={styles.faqList}>
            {faqs.map((faq) => (
              <details key={faq.question} className={styles.faq}>
                <summary>
                  {faq.question}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={styles.finalCta} aria-labelledby="contact-title">
          <div className={styles.ctaInner}>
            <p className={styles.eyebrow}>YOUR NEXT CHAPTER STARTS HERE</p>
            <h2 id="contact-title">
              Let’s make room
              <br />
              for <span>what’s next.</span>
            </h2>
            <p>A better-supported store starts with a conversation.</p>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.darkButton}
            >
              Book a free consultation{" "}
              <ArrowUpRight size={20} aria-hidden="true" />
            </a>
            <Link href="/contact" className={styles.ctaContact}>
              Prefer to send a message?{" "}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <span className={styles.ctaDecoration} aria-hidden="true">
            ✳
          </span>
        </section>
      </main>
      <FooterMenus />
    </div>
  );
}
