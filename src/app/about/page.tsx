"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ServiceCard, GetStarted, Title, CalCom } from "@/components/common";
import { NavHeaderMenus, FooterMenus } from "@/components/layout";
import { services } from "@/data/services";
import Image from "next/image";

import { TARGET, GOAL, SHOPIFY_SPECIALIST, CHAT, MARKETING, BAG, TOP_RATED, BUSINESS_NETWORK, RELIABLE } from "@/assets/lordicon";

import { Player } from "@lordicon/react";
import { useLordiconAnimation } from "@/hooks/useLordiconAnimation";
import type { Player as LordiconPlayer } from "@lordicon/react";

export default function AboutPage() {
  // 9 icons above + dynamic service icons
  const totalPlayers = 9 + services.length;
  const { registerPlayer, replay } = useLordiconAnimation(3000, totalPlayers);
  const handleLoopWithDelay = replay;

  return (
    <>
      <Title />
      <div className="flex min-h-screen flex-col">
        <NavHeaderMenus />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-emerald-50 to-white">
            <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                    About Us
                  </Badge>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                    Where Expertise Meets{" "}
                    <span className="text-emerald-600">Excellence</span>
                  </h1>
                  <p className="text-muted-foreground text-lg md:text-xl max-w-[600px]">
                    Welcome to PhilPort, where exceptional customer
                    service meets expert technical solutions in the e-commerce
                    world. With 8+ years of experience, we take pride in being
                    Top-Rated Plus Freelancers on Upwork.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2 pt-4">
                    <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                      <Link href="#services"> Our Services <ArrowRight className="ml-2 h-4 w-4" /> </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <a className="cursor-pointer"> <CalCom btnTitle="Contact Us"/> </a>
                    </Button>
                  </div>
                  <div className="flex items-center pt-4 space-x-4">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-5 w-5 fill-amber-400 text-amber-400"/>
                      ))}
                    </div>
                    <p className="text-sm font-medium">
                      Top-Rated Plus on{" "}
                      <Link href="https://www.upwork.com/freelancers/~013da667a64c2056fc?mp_source=share"
                        target="_blank" className="text-emerald-600 font-bold tracking-tighter">
                        Upwork
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
                    <Image src="https://nydmrvnsirdvaxmzfbyx.supabase.co/storage/v1/object/public/images//team-meeting.avif" width={1000} height={1000} alt="Team Meeting" className="object-cover rounded-xl"/>
                  </div>
                  <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                    <div className="flex items-center gap-2">
                      <span className="text-4xl font-bold text-emerald-600"> 8+ </span>
                      <span className="text-sm font-medium"> Years of <br /> Experience </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mission & Vision Section */}
          <section className="w-full py-12 md:py-24">
            <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
              <div className="grid gap-6 md:grid-cols-2">
                <MissionVision 
                  playerRef={registerPlayer(0)}
                  icon={TARGET} 
                  title="Our Mission" 
                  content="We are committed to empowering e-commerce brands by providing seamless Shopify support, exceptional customer service, and strategic digital solutions that drive growth, efficiency, and profitability." 
                  handleLoopWithDelay={handleLoopWithDelay} 
                />
                <MissionVision 
                  playerRef={registerPlayer(1)}
                  icon={GOAL} 
                  title="Our Vision" 
                  content="To become the leading Shopify support agency, setting new standards in e-commerce assistance and helping businesses scale effortlessly in the competitive digital space." 
                  handleLoopWithDelay={handleLoopWithDelay} 
                />
              </div>
            </div>
          </section>

          {/* Team Overview */}
          <section className="w-full py-12 md:py-24 bg-emerald-50">
            <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
                <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100"> Our Team </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl"> E-Commerce Experts at Your Service </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                  Our team of skilled Shopify experts and e-commerce
                  professionals is dedicated to helping online businesses thrive
                  by providing seamless support, expert store development, and
                  top-tier customer service solutions.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3 mt-8">
                <TeamSkills 
                  playerRef={registerPlayer(2)}
                  icon={SHOPIFY_SPECIALIST} 
                  title="Shopify Specialists" 
                  content="Expert developers and designers who specialize in Shopify store optimization and customization." 
                  handleLoopWithDelay={handleLoopWithDelay} 
                />
                <TeamSkills 
                  playerRef={registerPlayer(3)}
                  icon={CHAT} 
                  title="Customer Support Pros" 
                  content="Dedicated support specialists who provide exceptional service through email, chat, and virtual assistance." 
                  handleLoopWithDelay={handleLoopWithDelay} 
                />
                <TeamSkills 
                  playerRef={registerPlayer(4)}
                  icon={MARKETING} 
                  title="Marketing Strategists" 
                  content="Growth-focused marketers who develop and implement strategies to boost your e-commerce performance." 
                  handleLoopWithDelay={handleLoopWithDelay} 
                />
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="w-full py-12 md:py-24">
            <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
                <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100"> Why Choose Us </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl"> What Sets Us Apart </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                  Our commitment to excellence and proven track record make us
                  the ideal partner for your e-commerce success.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 mt-8">
                <TrackRecord 
                  playerRef={registerPlayer(5)}
                  icon={BAG} 
                  title="Proven Shopify Expertise" 
                  content="We specialize in Shopify support, store optimization, and custom solutions tailored to your needs." 
                  list={["Store setup and optimization", "Theme customization", "Technical troubleshooting"]} 
                  handleLoopWithDelay={handleLoopWithDelay} 
                />
                <TrackRecord 
                  playerRef={registerPlayer(6)}
                  icon={RELIABLE} 
                  title="Reliable Customer Support" 
                  content="Our highly skilled team provides outstanding email, chat, and virtual assistance to enhance your customer experience." 
                  list={["Professional communication", "Quick response times", "Customer satisfaction focus"]} 
                  handleLoopWithDelay={handleLoopWithDelay} 
                />
                <TrackRecord 
                  playerRef={registerPlayer(7)}
                  icon={TOP_RATED} 
                  title="Top-Rated Upwork Agency" 
                  content="Our track record of excellence has earned us a Top-Rated Plus status, showcasing our reliability and expertise." 
                  list={["Consistent 5-star reviews", "Long-term client relationships", "Proven project success"]} 
                  handleLoopWithDelay={handleLoopWithDelay} 
                />
                <TrackRecord 
                  playerRef={registerPlayer(8)}
                  icon={BUSINESS_NETWORK} 
                  title="Comprehensive E-Commerce Solutions" 
                  content="From store management to marketing, we provide full-scale e-commerce support." 
                  list={["End-to-end store management", "Marketing and growth strategies", "Content creation and design"]} 
                  handleLoopWithDelay={handleLoopWithDelay} 
                />
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="w-full py-12 md:py-24 bg-emerald-50">
            <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
                <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100"> Our Services </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Comprehensive E-Commerce Solutions
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                  From store development to customer support, we offer a full
                  range of services to help your e-commerce business thrive.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
                {services.map((service, idx) => (
                  <ServiceCard
                    key={service.title}
                    icon={
                      service.icon ? (
                        <Player
                          ref={registerPlayer(9 + idx)}
                          icon={service.icon}
                          size={48}
                          onComplete={() => replay()}
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
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section id="contact" className="w-full py-12 md:py-24">
            <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <GetStarted title={"Ready to Take Your Shopify Store to the Next Level?"}
                  description={"Contact us today for expert e-commerce support and watch your business grow."}
                  scheduleBtnText={"Schedule a Consultation"}
                  hasViewOurServices={false}
                  hasEmailUs={false}
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

interface PlayerRefProps {
  playerRef: (node: LordiconPlayer | null) => void,
  icon: Record<string, unknown>,
  title: string,
  content: string,
  list?: string[],
  handleLoopWithDelay: () => void
}

function MissionVision({playerRef, icon, title, content, handleLoopWithDelay}: PlayerRefProps) {
  return (
    <Card className="border-emerald-200">
      <CardHeader>
        <div className="p-2 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-2">
          <Player ref={playerRef} size={100} icon={icon} onComplete={handleLoopWithDelay} />
        </div>
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{content}</p>
      </CardContent>
    </Card>
  )
}

function TeamSkills({playerRef, icon, title, content, handleLoopWithDelay}: PlayerRefProps) {
  return (
    <div className="flex flex-col items-center text-center space-y-3">
      <div className="w-24 h-24 rounded-full bg-emerald-100 flex items-center justify-center">
        <Player ref={playerRef} size={70} icon={icon} onComplete={handleLoopWithDelay} />
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground">{content}</p>
    </div>
  )
}

function TrackRecord({playerRef, icon, title, content, list, handleLoopWithDelay}: PlayerRefProps) {
  return (
    <div className="flex flex-col p-6 bg-white rounded-lg border shadow-sm">
      <div className="p-2 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
        <Player ref={playerRef} size={100} icon={icon} onComplete={handleLoopWithDelay} />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{content}</p>
      <ul className="space-y-2 mt-auto">
        {list?.map(i => {
          return (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" />
              <span>{i}</span>
            </li>
          );
        })}
      </ul>
    </div>
  )
}