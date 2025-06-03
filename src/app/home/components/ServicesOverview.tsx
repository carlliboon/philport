import { ServiceCard } from "@/components/common/ServiceCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/services";
import { useEffect, useRef } from "react";
import { Player } from "@lordicon/react";
import type { Player as LordiconPlayer } from "@lordicon/react";
import { AnimationHandler } from "@/utils/animationHandler";

export const ServicesOverview = () => {
  const playerRefs = useRef<(LordiconPlayer | null)[]>([]);
  const animationHandler = useRef<AnimationHandler | null>(null);

  useEffect(() => {
    // Convert refs array to proper format for AnimationHandler
    const refs = playerRefs.current.map(player => ({
      current: player
    }));

    animationHandler.current = AnimationHandler.createFromRefs(refs);
  }, []);

  return (
    <section className="w-full py-12 md:py-24 bg-emerald-50">
      <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
            Our Services
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Comprehensive Shopify Support Services
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            From day-to-day operations to creative projects, we offer a full
            range of services to support your Shopify store.
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
                  <ArrowRight size={48} />
                )
              }
              title={service.title}
              description={service.description}
            />
          ))}

          <div className="flex flex-col p-6 bg-white rounded-lg border shadow-sm">
            <div className="flex items-center justify-center h-full">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-bold">View All Services</h3>
                <p className="text-muted-foreground">
                  Explore our complete range of Shopify support services.
                </p>
                <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                  <Link href="/services">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
