"use client";

import { useEffect, useState } from "react";
import { GetStarted } from "@/components/common";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

import { useContactForm, ContactFormFields } from "../../../hooks/contactHandler";

export const CallToAction = () => {
  const [form, setForm] = useState<ContactFormFields>({firstName: "", lastName: "", email: "", shopifyUrl: "",
    message: "", subject: "", phone: "" });

  const { status, isLoading, submitContactForm, resetStatus } = useContactForm();

  const handleChange = ( e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await submitContactForm({ ...form });
    if (success) {
      setForm({ firstName: "", lastName: "", email: "", shopifyUrl: "", message: "", subject: "", phone: "" });
    }
  };

  useEffect(() => {
    if (!isLoading &&
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
            <GetStarted title={"Ready to Transform Your Shopify Store Experience?"}
              description={
                "Schedule a free consultation to discuss how our services can help your Shopify business save time, reduce stress, and grow."
              } scheduleBtnText={"Schedule a Free Consultation"} hasViewOurServices={true} hasEmailUs={false} />
          </div>

          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <form onSubmit={handleSubmit}>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <ContactFormField htmlFor="firstName" label="First name" type="input" form={form} handleChange={handleChange} placeholder="John" />
                  <ContactFormField htmlFor="lastName" label="Last name" type="input" form={form} handleChange={handleChange} placeholder="Doe" />
                </div>
                <ContactFormField htmlFor="email" label="Email" type="input" form={form} handleChange={handleChange} placeholder="john@example.com" />
                <ContactFormField htmlFor="shopifyUrl" label="Shopify Store URL" type="input" form={form} hasOptional={true} handleChange={handleChange} placeholder="yourstore.myshopify.com" />
                <ContactFormField htmlFor="message" label="How can we help?" type="textarea" form={form} handleChange={handleChange} placeholder="Tell us about your Shopify store and what you need help with..." />

                <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 relative" disabled={isLoading}>
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

function ContactFormField({htmlFor, label, hasOptional = false, type, form, placeholder, handleChange} : {htmlFor: string, label: string, hasOptional?: boolean, type?: "input" | "textarea", form: ContactFormFields, placeholder?: string, handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void } ) {
  return (
    <div className="space-y-2">
      <label htmlFor={htmlFor} className="text-sm font-medium"> {label} 
        {hasOptional && <span className="text-gray-500 mb-2"> (optional)</span>}
        {type === "input" && <input 
          id={htmlFor} 
          name={htmlFor} 
          type={htmlFor === "email" ? "email" : "text"}
          value={form[htmlFor as keyof typeof form]} 
          onChange={handleChange}
          required={!hasOptional}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" 
          placeholder={placeholder}
        />}
        {type === "textarea" && <textarea 
          id={htmlFor}
          name={htmlFor}
          value={form[htmlFor as keyof typeof form]}
          onChange={handleChange} 
          required={!hasOptional}
          className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                placeholder="Tell us about your Shopify store and what you need help with..."
                />}
      </label>
    </div>
  );
}