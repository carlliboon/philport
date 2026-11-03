# PhilPort agency website redesign

This branch refreshes the existing PhilPort website without changing its backend APIs, service data, client review data, or existing routes.

## Included

- A redesigned Shopify and e-commerce agency homepage with an editorial layout, green/ivory palette, responsive service cards, client stories, FAQs, and clear consultation links.
- Shared desktop/mobile navigation and footer, preserving access to services, portfolio, about, contact, careers, and legal pages.
- Accessible navigation labels, current-page indicators, visible keyboard focus, an Escape-to-close mobile menu, a skip link, and reduced-motion support.
- Client stories load from the existing review data in groups of three. The older testimonial-fix branch and PR are not modified.
- Homepage metadata lives in the App Router page component. The page uses the repository’s existing local logo, booking destination, and contact email. The existing remote hero photo has a designed fallback illustration if it cannot load.

## Verification

- Dependency installation: `npm ci --ignore-scripts` completed using a writable temporary npm cache.
- TypeScript: `npx tsc --noEmit` passed.
- ESLint: direct lint of all four changed TSX files passed. The existing build configuration skips linting, so this was run separately.
- Production compilation and static generation: `npm run build` passed when nonfunctional placeholders were supplied for the existing Resend and Supabase environment variables.
- HTTP smoke checks against that production build returned 200 for `/`, `/services`, `/about`, `/portfolio`, `/contact`, `/privacy`, `/terms`, and `/signup`.
- Homepage server-rendered output has the expected title, one H1, three initial client stories, four FAQs, and the expected internal and external links.
- A build without service configuration stops at the existing Resend initialization because `RESEND_API_KEY` is absent. Real service configuration is still required for production.
- Asset check: the remote Supabase logo and hero photo returned HTTP 503. Shared branding now uses the existing local `/logo.png` (verified downloadable), and the homepage photo has a designed fallback. Other existing pages retain their original remote images.
- Browser-based visual, responsive, and interactive QA could not run in the build environment. Chromium was blocked by an operating-system socket restriction, and the separate browser could not reach the local preview.
- Email delivery, booking completion, database operations, uploads, and authentication were not exercised. No test form submissions or live data changes were made.

## Before deployment

Review desktop and mobile layouts in a browser. Check the mobile navigation, Escape key handling, repeated review loading, FAQ opening/closing, and browser Back/Forward navigation. Verify existing service credentials and run the normal production checks in the deployment environment. Confirm business claims and testimonials remain current.

This branch does not deploy, merge, or change the production branch.
