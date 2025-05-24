"use client";

import { useState } from "react";
import { Loader2, Check } from "lucide-react";
import { JSX } from "react";
import React from "react";

export interface ContactFormFields {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  shopifyUrl?: string;
  subject?: string;
  phone?: string;
}

export const useContactForm = () => {
  const [status, setStatus] = useState<string | JSX.Element>("");
  const [isLoading, setIsLoading] = useState(false);

  const resetStatus = () => {
    setStatus("");
    setIsLoading(false);
  };

  const submitContactForm = async (form: ContactFormFields) => {
    setIsLoading(true);
    setStatus(
      React.createElement(
        "span",
        { className: "flex items-center gap-2 text-white" },
        "Sending",
        React.createElement(Loader2, { className: "w-4 h-4 animate-spin" })
      )
    );

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus(
          React.createElement(
            "span",
            { className: "flex items-center gap-2 text-white" },
            React.createElement(Check, { className: "w-4 h-4" }),
            " Message sent!"
          )
        );
        setIsLoading(false);
        return true;
      } else {
        setStatus("❌ Failed to send. Please try again.");
        setIsLoading(false);
        return false;
      }
    } catch {
      setStatus("❌ Failed to send. Please try again.");
      setIsLoading(false);
      return false;
    }
  };

  return { status, isLoading, submitContactForm, resetStatus };
};
