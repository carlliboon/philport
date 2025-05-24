"use client";

import { useEffect, useState } from "react";
import { GetStarted } from "@/components/common";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
// import { Check, Loader2 } from "lucide-react";

import {
  useContactForm,
  ContactFormFields,
} from "../../../hooks/contactHandler";

export const CallToAction = () => {
  const [form, setForm] = useState<ContactFormFields>({
    firstName: "",
    lastName: "",
    email: "",
    shopifyUrl: "",
    message: "",
    subject: "",
    phone: "",
  });

  const { status, isLoading, submitContactForm, resetStatus } =
    useContactForm();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await submitContactForm(form);
    if (success) {
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        shopifyUrl: "",
        message: "",
        subject: "",
        phone: "",
      });
    }
  };

  useEffect(() => {
    if (
      !isLoading &&
      (form.firstName !== "" ||
        form.lastName !== "" ||
        form.email !== "" ||
        form.shopifyUrl !== "" ||
        form.message !== "")
    ) {
      resetStatus();
    }
  }, [form, resetStatus, isLoading]);

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
                  className="w-full bg-emerald-600 hover:bg-emerald-700 relative"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    status || "Submit"
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
