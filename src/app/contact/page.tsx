import Link from "next/link";
import {
  Mail,
  // Phone,
  MapPin,
  Clock,
  ArrowRight,
  // MessageSquare,
  Calendar,
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { NavHeaderMenus } from "../components/NavHeaderMenus";
import { FooterMenus } from "../components/FooterMenus";
import CalCom from "../components/CalCom";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavHeaderMenus />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-emerald-50 to-white">
          <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                Get In Touch
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Let&apos;s Discuss Your{" "}
                <span className="text-emerald-600">E-Commerce</span> Needs
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                We&apos;re here to help you with your Shopify store, customer
                support, or creative needs. Reach out to us today to start the
                conversation.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium"
                      >
                        First name
                      </label>
                      <input
                        id="first-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium"
                      >
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
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone (optional)
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <select
                      id="subject"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option value="shopify-app-support">
                        Shopify App Support
                      </option>
                      <option value="admin-customer-support">
                        Admin & Customer Support
                      </option>
                      <option value="virtual-assistance">
                        Virtual Assistance
                      </option>
                      <option value="product-page-customization">
                        Product Page Customization
                      </option>
                      <option value="creative-digital-media">
                        Creative & Digital Media (Graphic Design, Social Media,
                        Video Editing)
                      </option>
                      <option value="general-inquiry">
                        Not Sure / General Inquiry
                      </option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                    Send Message
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    We&apos;ll get back to you within 24 hours during business
                    days.
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-6 max-w-screen-xl mx-auto">
                <h2 className="text-2xl font-bold">Contact Information</h2>
                <p className="text-muted-foreground">
                  Have questions or need assistance? Reach out to us through any
                  of these channels:
                </p>

                <div className="grid gap-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <Mail className="h-6 w-6 text-emerald-600" />
                      <CardTitle>Email Us</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        <a
                          href="mailto:support@remotestaff.com"
                          className="hover:text-emerald-600"
                        >
                          support@shopifysupportpro.com
                        </a>
                      </CardDescription>
                      <CardDescription>
                        For general inquiries and support
                      </CardDescription>
                    </CardContent>
                  </Card>

                  {/* <Card>
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <Phone className="h-6 w-6 text-emerald-600" />
                      <CardTitle>Call Us</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        <a
                          href="tel:+15551234567"
                          className="hover:text-emerald-600"
                        >
                          +1 (555) 123-4567
                        </a>
                      </CardDescription>
                      <CardDescription>
                        Monday to Friday, 9am - 5pm EST
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <MessageSquare className="h-6 w-6 text-emerald-600" />
                      <CardTitle>Live Chat</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        Available on our website
                      </CardDescription>
                      <CardDescription>
                        Get immediate assistance during business hours
                      </CardDescription>
                      <Button variant="outline" className="mt-2">
                        Start Chat
                      </Button>
                    </CardContent>
                  </Card> */}

                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <Calendar className="h-6 w-6 text-emerald-600" />
                      <CardTitle>Schedule a Call</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        Book a free consultation
                      </CardDescription>
                      <CardDescription>
                        Discuss your project with our experts
                      </CardDescription>
                      <Button className="mt-2 bg-emerald-600 hover:bg-emerald-700">
                        <a className="cursor-pointer">
                          <CalCom btnTitle="Book Appointment" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                  <div className="flex space-x-4">
                    <Link
                      href="#"
                      className="h-10 w-10 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-600 hover:bg-emerald-200"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link
                      href="#"
                      className="h-10 w-10 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-600 hover:bg-emerald-200"
                    >
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">Facebook</span>
                    </Link>
                    <Link
                      href="#"
                      className="h-10 w-10 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-600 hover:bg-emerald-200"
                    >
                      <Instagram className="h-5 w-5" />
                      <span className="sr-only">Instagram</span>
                    </Link>
                    <Link
                      href="#"
                      className="h-10 w-10 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-600 hover:bg-emerald-200"
                    >
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Hours & Location */}
        <section className="w-full py-12 md:py-24 bg-emerald-50">
          <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">Our Office</h2>
                <div className="bg-white p-6 rounded-lg border shadow-sm">
                  <div className="flex items-start gap-4 mb-4">
                    <MapPin className="h-6 w-6 text-emerald-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Main Office</h3>
                      <p className="text-muted-foreground">
                        Poblacion 1, Charmaine Village
                        <br />
                        Negros Occidental, Sagay City 6122
                        <br />
                        Philippines
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-emerald-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 5:00 PM EST
                        <br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-6">Location</h2>
                <div className="aspect-video w-full overflow-hidden rounded-lg border bg-muted">
                  {/* In a real implementation, this would be a Google Maps embed
                  <div className="h-full w-full bg-muted flex items-center justify-center">
                    <div className="text-center p-4">
                      <MapPin className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                      <p className="font-medium">Interactive Map</p>
                      <p className="text-sm text-muted-foreground">
                        Google Maps would be embedded here in a production
                        environment
                      </p>
                    </div>
                  </div> */}
                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0 }}
                    src={process.env.GOOGLE_MAP_URL_WITH_API_KEY}
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                FAQ
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                Find answers to common questions about our services and how we
                work.
              </p>
            </div>

            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    How quickly can you start working on my project?
                  </AccordionTrigger>
                  <AccordionContent>
                    We can typically begin work on new projects within 3-5
                    business days after finalizing the details and receiving any
                    necessary access or information. For urgent matters, we
                    offer expedited services - please mention your timeline when
                    contacting us.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    What are your payment terms?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>
                      We provide flexible payment options to suit your needs,
                      including monthly retainers, project-based pricing, and
                      hourly rates. Most projects are managed through Upwork for
                      security and transparency. However, if Upwork is not a
                      suitable option for you, we offer the following
                      alternatives:
                    </p>

                    <div className="my-2">
                      <strong>Hourly Rates:</strong>
                      <p className="py-1">
                        Billed weekly, with payments due at the end of each
                        week.
                      </p>
                    </div>

                    <div className="my-2">
                      <strong>Project-Based Pricing:</strong>
                      <p className="py-1">
                        For projects under $500, payment is due upon completion.
                        For projects exceeding $500, a 30% down payment is
                        required before starting.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    Do you offer ongoing support after project completion?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, we offer various support packages to ensure your
                    Shopify store continues to run smoothly after the initial
                    project is complete. Our support packages include regular
                    maintenance, updates, and priority assistance for any issues
                    that may arise.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    How do you handle confidential information?
                  </AccordionTrigger>
                  <AccordionContent>
                    We take data security and confidentiality very seriously.
                    All client information is protected under strict
                    confidentiality agreements. We use secure systems for file
                    sharing and communication, and our team follows best
                    practices for data protection and privacy.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    Can you work with clients in different time zones?
                  </AccordionTrigger>
                  <AccordionContent>
                    We have experience working with clients worldwide and can
                    accommodate different time zones. We&apos;ll establish
                    communication schedules that work for both parties and
                    ensure timely responses regardless of location. Our support
                    team is available extended hours to provide assistance when
                    you need it.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>
                    What makes Shopify Support Pro different from other
                    agencies?
                  </AccordionTrigger>
                  <AccordionContent>
                    Shopify Support Pro specializes exclusively in e-commerce
                    and Shopify support, giving us deep expertise in this
                    specific area. Our team consists of dedicated specialists
                    rather than generalists, and we pride ourselves on building
                    long-term relationships with our clients. Our Top-Rated Plus
                    status on Upwork and consistent 5-star reviews demonstrate
                    our commitment to excellence.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-emerald-900 text-white">
          <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ready to Get Started?
              </h2>
              <p className="mx-auto max-w-[700px] text-emerald-100 md:text-xl">
                Take the first step toward improving your e-commerce business
                with our expert support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-emerald-900 hover:bg-emerald-100"
                >
                  <a className="cursor-pointer">
                    <CalCom btnTitle="Schedule a Free Consultation " />
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-emerald-900 hover:bg-emerald-800"
                >
                  <Link href="/services">View Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterMenus />
    </div>
  );
}
