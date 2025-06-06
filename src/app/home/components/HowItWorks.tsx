import CalCom from "@/components/common/CalCom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

import { Player } from "@lordicon/react";
import type { Player as LordiconPlayer } from "@lordicon/react";

import APPPOINTMENT_ICON from "@/assets/lordicon/appointment.json";
import PLAN_ICON from "@/assets/lordicon/plan.json";
import IMPLEMENTATION_ICON from "@/assets/lordicon/launch.json";
import { AnimationHandler } from "@/utils/animationHandler";

export const HowItWorks = () => {
  const appointmentPlayerRef = useRef<LordiconPlayer>(null);
  const planPlayerRef = useRef<LordiconPlayer>(null);
  const implementationPlayerRef = useRef<LordiconPlayer>(null);
  const animationHandler = useRef<AnimationHandler | null>(null);
  const players = [appointmentPlayerRef, planPlayerRef, implementationPlayerRef];

  useEffect(() => {
    animationHandler.current = AnimationHandler.createFromRefs(players);
  }, []);

  const handleLoopWithDelay = () => animationHandler.current?.handleLoop();

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
            How It Works
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Simple Process, Exceptional Results
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Getting started with our Shopify support services is easy.
            Here&apos;s how it works:
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mt-8">
          {[1, 2, 3].map((step, index) => {
            const stepContent = [
              {
                title: "Consultation",
                description: "We start with a free consultation to understand your Shopify store's specific needs and challenges.",
                icon: (
                  <Player
                    ref={appointmentPlayerRef}
                    size={100}
                    icon={APPPOINTMENT_ICON}
                    onComplete={handleLoopWithDelay}
                  />
                ),
              },
              {
                title: "Custom Plan",
                description: "We create a tailored support plan based on your specific requirements and budget.",
                icon: (
                  <Player
                    ref={planPlayerRef}
                    size={100}
                    icon={PLAN_ICON}
                    onComplete={handleLoopWithDelay}
                  />
                ),
              },
              {
                title: "Implementation",
                description: "Our team seamlessly integrates with your business and begins providing support right away.",
                icon: (
                  <Player
                    ref={implementationPlayerRef}
                    size={100}
                    icon={IMPLEMENTATION_ICON}
                    onComplete={handleLoopWithDelay}
                  />
                ),
              },
            ];

            const { title, description, icon } = stepContent[index];

            return (
              <div
                key={step}
                className="p-4 flex flex-row md:flex-col items-start md:items-center text-left md:text-center gap-4"
              >
                {/* Icon with floating number */}
                <div className="relative min-w-[64px]">
                  <div className="p-3 w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto">
                    {icon}
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-emerald-600 text-white text-xs flex items-center justify-center font-bold shadow">
                    {step}
                  </div>
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="text-lg font-bold mb-1">{title}</h3>
                  <p className="text-muted-foreground text-sm">{description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-10">
          <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
            <span className="flex items-center cursor-pointer">
              <CalCom btnTitle="Schedule Your Free Consultation " />
              <ArrowRight className="ml-2 h-4 w-4" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
