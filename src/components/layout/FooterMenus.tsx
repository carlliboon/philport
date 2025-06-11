import Image from "next/image";
import Link from "next/link";

export const FooterMenus = ({careers = true}: {careers?: boolean}) => {
  return (
    <footer className="w-full border-t py-6 md:py-0">
      <div className="container flex flex-col-reverse md:flex-row items-center justify-between gap-4 md:h-24 max-w-screen-xl mx-auto px-4">
        {/* Copyright Text */}
        <div className="flex items-center">
          <Image
            src="https://nydmrvnsirdvaxmzfbyx.supabase.co/storage/v1/object/public/images//philport-logo.webp"
            alt="Philport Logo"
            width={40}
            height={40}
            className="rounded-lg mr-3"
          />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} PhilPort. All rights
            reserved.
          </p>
        </div>

        {/* Footer Links */}
        <div className="flex gap-4">
          <Link
            href="/terms"
            className="text-sm font-medium text-muted-foreground hover:text-emerald-600"
          >
            Terms
          </Link>
          <Link
            href="/privacy"
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
          {careers && <Link
            href="/signup"
            className="text-sm font-medium text-muted-foreground hover:text-emerald-600"
          >
            Careers
          </Link>}
        </div>
      </div>
    </footer>
  );
};
