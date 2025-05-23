"use client";

import { JSX, useEffect, useState } from "react";
import { GetStarted } from "@/app/components/GetStarted";
import { Button } from "@/components/ui/button";
import { Check, Loader2 } from "lucide-react";

export const CallToAction = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    shopifyUrl: "",
    message: "",
  });
  const [status, setStatus] = useState<string | JSX.Element>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(
      <span className="flex items-center gap-2 text-white">
        Sending
        <Loader2 className="w-4 h-4 animate-spin" />
      </span>
    );

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus(
        <span className="flex items-center gap-2 text-white">
          <Check className="w-4 h-4" /> Message sent!
        </span>
      );
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        shopifyUrl: "",
        message: "",
      });
    } else {
      setStatus("❌ Failed to send. Please try again.");
    }
  };

  useEffect(() => {
    if (
      form.firstName !== "" ||
      form.lastName !== "" ||
      form.email !== "" ||
      form.shopifyUrl !== "" ||
      form.message !== ""
    ) {
      setStatus("");
    }
  }, [form]);

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
            <form onSubmit={handleSubmit}>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">
                      First name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">
                      Last name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      required
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
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="shopifyUrl" className="text-sm font-medium">
                    Shopify Store URL
                  </label>
                  <input
                    id="shopifyUrl"
                    name="shopifyUrl"
                    value={form.shopifyUrl}
                    onChange={handleChange}
                    required
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
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    placeholder="Tell us about your Shopify store and what you need help with..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700"
                >
                  {status ? status : "Submit"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
