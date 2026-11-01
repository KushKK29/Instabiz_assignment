# TeddyPups U.A.E. — Next.js build

A responsive, accessible rebuild of the TeddyPups puppy-showroom site (home, puppies, puppy profiles, happy families, how it works, FAQ, contact, gone home).

## Stack

- **Next.js 15** (App Router, React 19, TypeScript, Turbopack)
- **Tailwind CSS v4** with design tokens in `app/globals.css`
- **next/font** (Fraunces, Figtree, Shantell Sans) and **next/image** (all photos optimised)
- **Server Actions** (`app/actions.ts`) for validated enquiry forms with a honeypot field
- Static generation for every puppy profile via `generateStaticParams`

## Run

    npm install
    npm run dev        # http://localhost:3000
    npm run build && npm start

## Structure

    app/                 routes (page.tsx per route), layout, server action
    components/          Header, Footer, PuppyCard, PuppiesBrowser (filters), FaqBoard, Gallery, LetterForm, Reveal, Mascot
    data/                puppies, gone-home and happy-family content (JSON)
    lib/                 typed data helpers and site constants
    public/img           optimised photo set

## Notes

- Mascot is an original inline SVG; all interactions (menu, filters, accordion, gallery, forms) are React state, no extra UI libraries.
- Enquiries are validated server-side and logged; connect a mail/CRM provider inside `sendEnquiry` to go live.
- Accessibility: skip link, landmarks, `aria-current`, `aria-live` result counts, keyboard-operable dialog/accordion/gallery, reduced-motion support.
