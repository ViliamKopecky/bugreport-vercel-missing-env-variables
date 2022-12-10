# Bugreport: Vercel wrong env variables from .env files

This repository is a bugreport for problems with using `.env` files in Vercel deployments.

## Main issues

- edge functions (middleware, experimental-edge runtime) dont have access to env variables from `.env` files (only `NEXT_PUBLIC` prefixed).
- preview deployments seem to use `.env.production` values instead of `.env.preview`

## Screencast of this repository

- `localhost`: everything works as expected
- [Vercel `production`](https://bugreport-vercel-missing-env-variables.vercel.app): edge-functions dont have access to secret env variables from .env files
- [Vercel `preview`](https://bugreport-vercel-missing-env-variables-viliamkopecky.vercel.app): same as production development and also not loading correctly .env.preview (loads values from .env.production)

https://user-images.githubusercontent.com/316435/206859112-234cb11b-7a1a-4ef2-9e49-8185d207f953.mov

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
