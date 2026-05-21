# Salami Hunters

A transparent Eid Salami mini-game platform built with Next.js 14, Supabase, TypeScript, and Tailwind CSS.

## Important ethics note
This ZIP intentionally uses fair, visible reward caps. It does not include hidden rigging, fake winners, fake scarcity, or deceptive payout manipulation.

## Local setup

1. Install Node.js 18.18 or later.
2. Open this folder in VS Code.
3. Run:

```bash
npm install
cp .env.local.example .env.local
npm run dev
```

4. Create a Supabase project.
5. Open Supabase SQL Editor and run `supabase/schema.sql`.
6. Run `supabase/seed.sql`.
7. Fill `.env.local` with your Supabase URL, anon key, service role key, and JWT secret.
8. Restart `npm run dev`.

## Deployment

1. Push this project to GitHub.
2. Connect the repo to Vercel.
3. Add all `.env.local.example` keys as Vercel environment variables.
4. Deploy.

## Reward logic

All game rewards are calculated in Next.js API routes. The server checks the user's remaining allowance before inserting earnings.
