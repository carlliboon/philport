import { Star } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
import { CalCom } from "@/components/common";

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
              eCommerce Support Specialists
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter">
              PhilPort: Your Dedicated <span className="text-emerald-600">Shopify &amp; eCommerce</span>{" "}
              Support Team
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-[600px]">
              From store setup and theme customization to ongoing virtual assistance, PhilPort delivers end-to-end <strong>Shopify support</strong> that frees you to focus on sales and marketing while we handle the technical heavy lifting.
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
                <span className="cursor-pointer">
                  <CalCom btnTitle="Book a Free Consultation" />
                </span>
              </Button>
            </div>

            <div className="flex items-center pt-4 space-x-4">
              <div className="flex -space-x-2">
                <ClientImage src="https://nydmrvnsirdvaxmzfbyx.supabase.co/storage/v1/object/public/images//michael.webp" alt="Michael Haessig" />
                <ClientImage src="https://nydmrvnsirdvaxmzfbyx.supabase.co/storage/v1/object/public/images//nolan.webp" alt="Nolan Kahal" />
                <ClientImage src="https://nydmrvnsirdvaxmzfbyx.supabase.co/storage/v1/object/public/images//ben.webp" alt="Ben Lebowitz" />
                <div className="relative w-8 h-8 rounded-full overflow-hidden">
                  <div
                    className="absolute inset-0 bg-center bg-cover scale-130 blur-md"
                    style={{
                      backgroundImage: `url(https://nydmrvnsirdvaxmzfbyx.supabase.co/storage/v1/object/public/images//clients.webp)`,
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
                src="https://nydmrvnsirdvaxmzfbyx.supabase.co/storage/v1/object/public/images//team-meeting.avif"
                alt="Team Meeting"
                fill
                priority
                quality={85}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover rounded-xl"
                loading="eager"
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

function ClientImage({src, alt} : {src: string | StaticImageData, alt: string}) {
  return (
    <div className="w-8 h-8 rounded-full bg-emerald-200 flex items-center justify-center text-emerald-700 text-xs font-medium">
      <Image
        src={src}
        alt={alt}
        className="object-cover rounded-xl"
        width={32}
        height={32}
        loading="lazy"
        quality={75}/>
    </div>
  );
}
