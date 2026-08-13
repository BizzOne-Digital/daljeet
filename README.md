# Let's Get Carpet Clean

Production-ready marketing website for **Let's Get Carpet Clean** — a locally owned carpet, upholstery, and epoxy flooring company serving the Greater Toronto Area.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS 4
- Framer Motion, GSAP, Lenis
- React Hook Form + Zod
- Nodemailer (SMTP)
- Swiper, Sonner, Lucide React

## Install

```bash
npm install
cp .env.example .env.local
```

## Environment variables

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM_NAME=Lets Get Carpet Clean
SMTP_FROM_EMAIL=your-email@gmail.com
CONTACT_TO_EMAIL=info@letsgetcarpetclean.com
```

### Gmail example

1. Enable 2FA on your Google account
2. Create an App Password at https://myaccount.google.com/apppasswords
3. Use it as `SMTP_PASS`

For other providers, use their SMTP host, port, and credentials.

## Development

```bash
npm run dev
npm run typecheck
npm run lint
npm run build
npm start
```

## Email flows

### Contact form (`/contact`, `/pricing`)

- POST `/api/contact`
- Sends HTML + plain-text email to `CONTACT_TO_EMAIL`
- Sets customer email as `replyTo`
- Honeypot + in-memory rate limiting (5 requests / 15 min per IP)

### Booking request (`/booking`)

- POST `/api/booking`
- Sends business notification + customer acknowledgement
- Generates reference ID without a database
- **Not a confirmed appointment** until the business replies

If SMTP is not configured, the API returns a clear configuration error — submissions are never faked.

## Content editing

All content lives in typed files under `src/data/`:

- `site.ts` — business info, offer, service area
- `services.ts` — services and detail content
- `faqs.ts`, `testimonials.ts`, `gallery.ts`

Replace placeholder images in `public/images/` and the official logo at `public/logo/logo.png`.

Regenerate labeled SVG placeholders:

```bash
npm run generate:images
```

## Routes

- `/` Home
- `/about`
- `/services` + `/services/[slug]`
- `/gallery`
- `/testimonials`
- `/faqs`
- `/pricing`
- `/contact`
- `/booking`

## Deployment notes

- In-memory rate limiting suits single-instance Node deployments
- For serverless/multi-instance production, use a durable rate-limit store
- Uploads are static assets in `public/` — no external storage required

## Client assets still needed

- Authentic project/gallery photos
- Verified testimonials
- Final offer terms/eligibility
- Preferred SMTP provider credentials
- Final favicon and social sharing image
- Confirmed Instagram URL and service boundaries
