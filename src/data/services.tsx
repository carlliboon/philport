import { Headphones, Layout, PenTool, Settings, Users2 } from "lucide-react";

export const services = [
  {
    title: "Admin & Customer Support",
    description:
      "We handle your store's admin tasks and provide exceptional customer support.",
    icon: <Headphones className="h-6 w-6 text-emerald-600" />,
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
    icon: <Users2 className="h-6 w-6 text-emerald-600" />,
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
    icon: <Settings className="h-6 w-6 text-emerald-600" />,
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
    icon: <PenTool className="h-6 w-6 text-emerald-600" />,
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
    icon: <Layout className="h-6 w-6 text-emerald-600" />,
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
