import westandwillow from "@/assets/images/portfolio/westandwillow.png";
import thewhisperingpages from "@/assets/images/portfolio/whispering.png";
import haroldhome from "@/assets/images/portfolio/haroldhome.png";
import cloudlift from "@/assets/images/portfolio/cloudlift.png";
import tagsmate from "@/assets/images/portfolio/tagsmate.png";
import Image from "next/image";
import { StaticImageData } from "next/image";

export const TrustedBy = () => {
  return (
    <section className="w-full py-8 border-y bg-muted/100">
      <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <p className="text-sm text-muted-foreground uppercase tracking-wide">
            Trusted by Shopify merchants worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
            <BrandImage src={westandwillow} alt="West and Willow Brand" />
            <BrandImage src={thewhisperingpages} alt="The Whispering Pages Brand" />
            <BrandImage src={haroldhome} alt="Harold Home Brand" />
            <BrandImage src={cloudlift} alt="Cloudlift Brand" />
            <BrandImage src={tagsmate} alt="Tagsmate Brand" />
          </div>
        </div>
      </div>
    </section>
  );
};

function BrandImage({src, alt} : {src: string | StaticImageData, alt: string}) {
  return (
    <div className="h-8 w-auto">
      <div className="h-full w-full bg-muted/30 rounded flex items-center justify-center px-6">
        <Image 
          src={src} 
          alt={alt} 
          className="object-cover rounded-xl" 
          width={100} 
          height={32} 
          loading="lazy" 
          quality={75} 
          sizes="(max-width: 768px) 100px, 100px" />
      </div>
    </div>
  );
}
