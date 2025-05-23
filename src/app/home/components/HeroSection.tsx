import { Star } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

import teamMeeting from "@/images/team-meeting.jpg";
import clients from "@/images/clients.png";
import ben from "@/images/ben.jpg";
import nolan from "@/images/nolan.jpeg";
import michael from "@/images/michael.png";

export const HeroSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-emerald-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="container px-4 md:px-6 max-w-screen-xl mx-auto"
      >
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center lg:flex-row flex-col-reverse">
          <div className="space-y-4">
            <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
              Shopify Support Specialists
            </Badge>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tighter">
              Your Dedicated <span className="text-emerald-600">Shopify</span>{" "}
              Support Team
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-[600px]">
              We help Shopify store owners save time, reduce stress, and grow
              their business with our specialized support services.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 pt-4">
              <Button
                asChild
                className="bg-emerald-600 hover:bg-emerald-700 text-sm font-medium w-[160px] sm:w-auto px-3 py-2"
              >
                <Link href="/services">Explore Our Services</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="text-sm font-medium w-[190px] sm:w-auto px-3 py-2"
              >
                <Link href="https://cal.com/carl-michael/shopify-support-pro">
                  Book a Free Consultation
                </Link>
              </Button>
            </div>

            <div className="flex items-center pt-4 space-x-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-emerald-200 flex items-center justify-center text-emerald-700 text-xs font-medium">
                  <Image
                    src={michael}
                    alt="Michael Haessig"
                    className="object-cover rounded-xl"
                  />
                </div>
                <div className="w-8 h-8 rounded-full bg-emerald-200 flex items-center justify-center text-emerald-700 text-xs font-medium">
                  <Image
                    src={nolan}
                    alt="Nolan Kahal"
                    className="object-cover rounded-xl"
                  />
                </div>
                <div className="w-8 h-8 rounded-full bg-emerald-200 flex items-center justify-center text-emerald-700 text-xs font-medium">
                  <Image
                    src={ben}
                    alt="Ben Lebowitz"
                    className="object-cover rounded-xl"
                  />
                </div>
                <div className="relative w-8 h-8 rounded-full overflow-hidden">
                  <div
                    className="absolute inset-0 bg-center bg-cover scale-130 blur-md"
                    style={{
                      backgroundImage: `url(${clients.src})`,
                      filter: "blur(2px)",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-emerald-700 text-md font-medium">
                    +
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Trusted by <span className="font-medium">50+</span> Shopify
                store owners
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
              <Image
                src={teamMeeting}
                alt="Team Meeting"
                fill
                priority
                quality={75}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-xl"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <span className="text-sm font-medium">
                  4.9/5 from 80+ reviews
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
