import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2, Clock, TrendingUp, Zap } from "lucide-react";
import { CardMotion } from "@/components/common/CardMotion";

export const HowWeHelp = () => {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
            How We Help
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            We Take Care of Your Shopify Store So You Can Focus on Growth
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Running a Shopify store involves many moving parts. We handle the
            day-to-day operations so you can focus on strategy and growth.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8 items-stretch">
          <CardMotion custom={0} amount={0.3}>
            <Card className="h-full flex flex-col">
              <CardHeader>
                <div className="p-2 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-2">
                  <Clock
                    className="h-6 w-6 text-emerald-600"
                    aria-label="Clock icon representing time savings and efficiency"
                  />
                </div>
                <CardTitle>Save Time</CardTitle>
                <CardDescription>
                  Reclaim hours each week by delegating store management and
                  customer support tasks to our expert team.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-1" />
                    <span className="text-sm">
                      Eliminate repetitive admin tasks
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-1" />
                    <span className="text-sm">
                      Faster response to customer inquiries
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-1" />
                    <span className="text-sm">
                      Streamlined order processing
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </CardMotion>
          <CardMotion custom={1} amount={0.5}>
            <Card className="h-full flex flex-col">
              <CardHeader>
                <div className="p-2 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-2">
                  <Zap
                    className="h-6 w-6 text-emerald-600"
                    aria-label="Lightning bolt icon symbolizing reduced stress and technical support"
                  />
                </div>
                <CardTitle>Reduce Stress</CardTitle>
                <CardDescription>
                  Stop worrying about the technical details and day-to-day
                  operations of your Shopify store.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-1" />
                    <span className="text-sm">
                      Expert handling of technical issues
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-1" />
                    <span className="text-sm">Proactive store maintenance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-1" />
                    <span className="text-sm">
                      Peace of mind during busy seasons
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </CardMotion>
          <CardMotion custom={2} amount={0.7}>
            <Card className="h-full flex flex-col">
              <CardHeader>
                <div className="p-2 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-2">
                  <TrendingUp
                    className="h-6 w-6 text-emerald-600"
                    aria-label="Arrow icon indicating business growth and improvement"
                  />
                </div>
                <CardTitle>Grow Your Business</CardTitle>
                <CardDescription>
                  Focus on strategy and growth while we handle the operational
                  aspects of your Shopify store.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-1" />
                    <span className="text-sm">
                      Improved customer satisfaction
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-1" />
                    <span className="text-sm">Enhanced store performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-1" />
                    <span className="text-sm">
                      More time for strategic initiatives
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </CardMotion>
        </div>
      </div>
    </section>
  );
};
