import { GetStarted } from "@/app/components/GetStarted";
import { Button } from "@/components/ui/button";

export const CallToAction = () => {
  return (
    <section id="contact" className="w-full py-12 md:py-24 bg-emerald-50">
      <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <GetStarted
              title={"Ready to Transform Your Shopify Store Experience?"}
              description={
                "Schedule a free consultation to discuss how our services can help your Shopify business save time, reduce stress, and grow."
              }
              scheduleBtnText={"Schedule a Free Consultation"}
              hasViewOurServices={true}
              hasEmailUs={false}
            />
          </div>
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <form>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium">
                      First name
                    </label>
                    <input
                      id="first-name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium">
                      Last name
                    </label>
                    <input
                      id="last-name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="store-url" className="text-sm font-medium">
                    Shopify Store URL
                  </label>
                  <input
                    id="store-url"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    placeholder="yourstore.myshopify.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    placeholder="Tell us about your Shopify store and what you need help with..."
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
