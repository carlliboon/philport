import SUPPORT_ICON from "@/assets/lordicon/support.json";
import VIRTUAL_ASSISTANT_ICON from "@/assets/lordicon/virtual-assistant.json";
import SHOPIFY_APP_SUPPORT_ICON from "@/assets/lordicon/shopify-app.json";
import DESIGN_ICON from "@/assets/lordicon/design.json";
import LAYOUT_ICON from "@/assets/lordicon/layout.json";

export const services = [
  {
    title: "Admin & Customer Support",
    description:
      "We handle your store's admin tasks and provide exceptional customer support.",
    icon: SUPPORT_ICON,
    featured: true,
    features: [
      "Order management & processing",
      "Customer inquiry handling",
      "Returns & refunds processing",
      "Inventory management",
      "24/7 support availability",
    ],
  },
  {
    title: "Virtual Assistance",
    description:
      "Dedicated virtual assistants to handle day-to-day operations for your Shopify store.",
    icon: VIRTUAL_ASSISTANT_ICON,
    featured: false,
    features: [
      "Email management",
      "Social media management",
      "Data entry & reporting",
      "Task scheduling & reminders",
      "Customer engagement strategies",
    ],
  },
  {
    title: "Shopify App Support",
    description:
      "Expert assistance with installing, configuring, and optimizing Shopify apps.",
    icon: SHOPIFY_APP_SUPPORT_ICON,
    featured: false,
    features: [
      "App installation & setup",
      "Troubleshooting & bug fixes",
      "Performance optimization",
      "Integration with existing systems",
      "Regular app updates & maintenance",
    ],
  },
  {
    title: "Creative & Digital Media",
    description:
      "Professional creative services to enhance your store's visual appeal and brand identity.",
    icon: DESIGN_ICON,
    featured: false,
    features: [
      "Graphic design for marketing materials",
      "Video editing & production",
      "Content creation for blogs & social media",
      "Brand identity development",
      "Photography & image editing",
    ],
  },
  {
    title: "Product Page Customization",
    description:
      "Optimize your product pages for better user experience and increased conversions.",
    icon: LAYOUT_ICON,
    featured: false,
    features: [
      "Custom product descriptions",
      "SEO optimization for product pages",
      "Image optimization & editing",
      "A/B testing for product layouts",
      "User experience enhancements",
    ],
  },
];
