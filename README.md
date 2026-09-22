# HellaK9s Official Website

Marketing site for HellaK9s Dog Training — built with Next.js (App Router), TypeScript, and Tailwind CSS, with Supabase powering the contact, franchise, and trainer-application forms.

Recreated from the [Figma Make prototype](https://www.figma.com/make/Q3TYOzF739QTuplnEthHSr/Hellak9s-Official-Website), preserving all copy, branding (black + orange), and page structure: Home, Services (+ per-program pages), Locations (+ per-location pages), About, Contact, Franchise, and Apply as Trainer.

## Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4**
- **Supabase** (Postgres) for form submissions
- Deploys to **Vercel**

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Connecting Supabase

1. Create a project at [supabase.com](https://supabase.com).
2. Open the **SQL Editor** and run [`supabase/schema.sql`](supabase/schema.sql) — this creates the `contact_messages`, `franchise_inquiries`, and `trainer_applications` tables.
3. Go to **Project Settings -> API** and copy the **Project URL** and the **service_role** key (keep this secret).
4. Copy `.env.local.example` to `.env.local` and fill in the values:

   ```bash
   cp .env.local.example .env.local
   ```

5. Restart `npm run dev`. The Contact, Franchise, and Apply-as-Trainer forms will now write to your Supabase tables.

Without these env vars set, the forms return a friendly "not connected yet" message instead of failing silently.

## Deploying to Vercel

1. Push this repository to GitHub (see below).
2. Go to [vercel.com/new](https://vercel.com/new) and import the GitHub repo.
3. Add the three environment variables from `.env.local` (`NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`) in the Vercel project's **Settings -> Environment Variables**.
4. Deploy. Vercel will build and host the site automatically on every push to `main`.

## Pushing to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## Project structure

```
src/
  app/                # Routes (App Router)
    page.tsx           # Home
    about/
    services/           # Programs index + [slug] detail
    locations/          # Locations index + [slug] detail
    contact/
    franchise/
    apply/               # Apply as Trainer
    api/                 # Form submission routes (contact, franchise, trainer-apply)
  components/          # UI, forms, icons, header/footer
  lib/
    data/               # Site content (programs, locations, copy)
    supabase/           # Supabase server client
    images.ts           # Stock photography references
supabase/
  schema.sql            # Database schema
```

## Content notes

- Stock photography (Unsplash) stands in for HellaK9s' own brand photography — swap `src/lib/images.ts` for real location/team photos when available.
- Copy, pricing ($20,000 franchise fee, $50,000 minimum capital), locations (New Braunfels TX, Virginia Beach VA, Colorado Springs CO, Orlando FL, Wisconsin), and program details were carried over verbatim from the Figma Make prototype.
