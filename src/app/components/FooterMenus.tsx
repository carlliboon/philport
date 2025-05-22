import { ShoppingBag } from "lucide-react";
import Link from "next/link";

export const FooterMenus = () => {
  return (
    <footer className="w-full border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row max-w-screen-xl mx-auto px-4">
        <div className="flex items-center gap-2">
          <ShoppingBag className="h-5 w-5 text-emerald-600" />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ShopifySupportPro. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-emerald-600"
          >
            Terms
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-emerald-600"
          >
            Privacy
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-emerald-600"
          >
            Blog
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-emerald-600"
          >
            Careers
          </Link>
        </div>
      </div>
    </footer>
  );
};
