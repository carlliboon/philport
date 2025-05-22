import westandwillow from "@/images/westandwillow.png";
import thewhisperingpages from "@/images/whispering.png";
import haroldhome from "@/images/haroldhome.png";
import cloudlift from "@/images/cloudlift.png";
import tagsmate from "@/images/tagsmate.png";
import Image from "next/image";

export const TrustedBy = () => {
  return (
    <section className="w-full py-8 border-y bg-muted/100">
      <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <p className="text-sm text-muted-foreground uppercase tracking-wide">
            Trusted by Shopify merchants worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
            <div className="h-8 w-auto">
              <div className="h-full w-full bg-muted/30 rounded flex items-center justify-center px-6">
                <Image
                  src={westandwillow}
                  alt="West and Willow Brand"
                  className="object-cover rounded-xl"
                  width={100}
                  height={32}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="h-8 w-auto">
              <div className="h-full w-full bg-muted/30 rounded flex items-center justify-center px-6">
                <Image
                  src={thewhisperingpages}
                  alt="The Whispering Pages Brand"
                  className="object-cover rounded-xl"
                  width={100}
                  height={32}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="h-8 w-auto">
              <div className="h-full w-full bg-muted/30 rounded flex items-center justify-center px-6">
                <Image
                  src={haroldhome}
                  alt="Harold Home Brand"
                  className="object-cover rounded-xl"
                  width={100}
                  height={25}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="h-8 w-auto">
              <div className="h-full w-full bg-muted/30 rounded flex items-center justify-center px-6">
                <Image
                  src={cloudlift}
                  alt="Cloudlift App Brand"
                  className="object-cover rounded-xl"
                  width={100}
                  height={32}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="h-8 w-auto">
              <div className="h-full w-full bg-muted/30 rounded flex items-center justify-center px-6">
                <Image
                  src={tagsmate}
                  alt="Tagsmate Brand"
                  className="object-cover rounded-xl"
                  width={100}
                  height={32}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
