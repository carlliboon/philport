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
                {/* <span className="font-semibold">West & Willow</span> */}
                <picture>
                  <img
                    src="../../../../images/westandwillow.png"
                    alt="West & Willow Brand"
                    width={100}
                  />
                </picture>
              </div>
            </div>
            <div className="h-8 w-auto">
              <div className="h-full w-full bg-muted/30 rounded flex items-center justify-center px-6">
                <picture>
                  <img
                    src="https://i.postimg.cc/L8tjsHvw/whispering.png"
                    alt="Whispering Pages Brand"
                    width={110}
                  />
                </picture>
              </div>
            </div>
            <div className="h-8 w-auto">
              <div className="h-full w-full bg-muted/30 rounded flex items-center justify-center px-6">
                <picture>
                  <img
                    src="https://i.postimg.cc/pr31P2ky/logo-harold-home.avif"
                    alt="Harold Home Brand"
                    width={70}
                  />
                </picture>
              </div>
            </div>
            <div className="h-8 w-auto">
              <div className="h-full w-full bg-muted/30 rounded flex items-center justify-center px-6">
                <picture>
                  <img
                    src="https://i.postimg.cc/qMzWCF3p/cloudlift-logo-on-dark.png"
                    alt="Cloudlift App Brand"
                    width={130}
                  />
                </picture>
              </div>
            </div>
            <div className="h-8 w-auto">
              <div className="h-full w-full bg-muted/30 rounded flex items-center justify-center px-6">
                <picture>
                  <img
                    src="https://i.postimg.cc/NFSDkxz5/tagsmate.png"
                    alt="TagsMate Brand"
                    width={150}
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
