"use client";

import type React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ServiceCard, GetStarted, Title, CalCom } from "@/components/common";
import { NavHeaderMenus, FooterMenus } from "@/components/layout";
import { services } from "@/data/services";

import { useEffect, useRef } from "react";
import { Player } from "@lordicon/react";
import type { Player as LordiconPlayer } from "@lordicon/react";
import { AnimationHandler } from "@/utils/animationHandler";

export default function Services() {
  const playerRefs = useRef<(LordiconPlayer | null)[]>([]);
  const animationHandler = useRef<AnimationHandler | null>(null);

  useEffect(() => {
    // Wait for next render to ensure refs are populated
    const timeoutId = setTimeout(() => {
      // Convert refs array to proper format for AnimationHandler
      const refs = playerRefs.current.map(player => ({
        current: player
      }));

      animationHandler.current = AnimationHandler.createFromRefs(refs);
    }, 0);

    return () => clearTimeout(timeoutId);
  }, []);

  // Ensure animation handler timers are cleared when the component unmounts
  useEffect(() => {
    return () => {
      if (animationHandler.current) {
        animationHandler.current.destroy();
        animationHandler.current = null;
      }
    };
  }, []);

  return (
    <>
      <Title />
      <div className="flex min-h-screen flex-col">
        <NavHeaderMenus />
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-emerald-50 to-white">
            <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100"> Shopify Experts </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Comprehensive Support for Your{" "}
                  <span className="text-emerald-600">Shopify</span> Store
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  We help Shopify store owners manage, optimize, and grow their
                  online businesses with our specialized support services.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild className="bg-emerald-600 hover:bg-emerald-700" >
                    <Link href="#services"> Explore Our Services{" "}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section id="services" className="w-full py-12 md:py-24">
            <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
                <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                  Our Services
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Specialized Shopify Support Services
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Comprehensive solutions designed specifically for Shopify
                  store owners.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
                {services.map((service, idx) => (
                  <ServiceCard
                    key={service.title}
                    icon={
                      service.icon ? (
                        <Player
                          ref={(el) => {
                           if (playerRefs.current) {
                            playerRefs.current[idx] = el;
                           }
                          }}
                          icon={service.icon}
                          size={48}
                          onComplete={() => animationHandler.current?.handleLoop()}
                        />
                      ) : (
                        // fallback to Lucide or other icon
                        <ArrowRight size={48} />
                      )
                    }
                    title={service.title}
                    description={service.description}
                  />
                ))}

                <div className="flex flex-col p-6 bg-emerald-50 rounded-lg border border-emerald-100">
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center space-y-4">
                      <h3 className="text-xl font-bold">
                        Not sure which service you need?
                      </h3>
                      <p className="text-muted-foreground">
                        We offer customized packages based on your specific
                        requirements.
                      </p>
                      <Button
                        asChild
                        className="bg-emerald-600 hover:bg-emerald-700"
                      >
                        <a className="cursor-pointer">
                          <CalCom btnTitle="Schedule a Consultation" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full py-12 md:py-24 bg-emerald-50">
            <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                    Why Choose Us
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Shopify Specialists Who Understand Your Business
                  </h2>
                  <p className="text-muted-foreground md:text-xl">
                    We focus exclusively on Shopify stores, giving us deep
                    expertise in the platform and the unique challenges store
                    owners face.
                  </p>
                  <div className="space-y-3">
                    <Advantages heading="Shopify Platform Expertise" description="Our team specializes in all aspects of the Shopify ecosystem" />
                    <Advantages heading="E-commerce Focused Support" description="We understand the unique needs of online retailers" />
                    <Advantages heading="Flexible Service Packages" description="Customized solutions based on your specific requirements" />
                    <Advantages heading="Proven Track Record" description="Helping Shopify merchants increase sales and efficiency" />
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                    <Button
                      asChild
                      className="bg-emerald-600 hover:bg-emerald-700"
                    >
                      <Link href="#contact">Get Started Today</Link>
                    </Button>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="relative h-[450px] w-full max-w-[600px] sm:h-[500px] overflow-hidden rounded-xl">
                    <Image
                      src="https://nydmrvnsirdvaxmzfbyx.supabase.co/storage/v1/object/public/images//business-owner-working-on-online-store.avif"
                      alt="Business Owner Working on his Shopify Store"
                      fill
                      className="object-cover rounded-xl"
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="w-full py-12 md:py-24 bg-emerald-50">
            <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <GetStarted
                  title={"Ready to Transform Your Shopify Store?"}
                  description={
                    "Schedule a free consultation to discuss how our services can help your Shopify business grow."
                  }
                  scheduleBtnText={"Schedule a Free Consultation"}
                  hasEmailUs={true}
                  hasViewOurServices={false}
                />
              </div>
            </div>
          </section>
        </main>
        <FooterMenus />
      </div>
    </>
  );
}

function Advantages({heading, description}: {heading: string, description: string}) {
  return (
    <div className="flex items-start gap-2">
      <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" />
      <div>
        <h3 className="font-medium">{heading}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}