# JACKFRUIT CO. Website

Single-page, animation-rich brand website built with Next.js, Tailwind CSS, Framer Motion, and Nodemailer.

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS
- Framer Motion + Lenis
- Nodemailer contact endpoint

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy env template and configure SMTP:

   ```bash
   cp .env.local.example .env.local
   ```

3. Start dev server:

   ```bash
   npm run dev
   ```

## Contact form environment variables

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `CONTACT_TO`

## Content and assets

- Main website content is in `lib/content.ts`.
- Replace placeholder images in `public/images`.
- Keep image file names unchanged unless you update component paths.
