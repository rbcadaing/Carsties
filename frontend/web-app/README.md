This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Assets
 1. https://flexboxfroggy.com/
 2. https://react-icons.github.io/react-icons/
 3. https://v2.tailwindcss.com/docs/guides/create-react-app docs if tailwind.config.js is missing


 ## NextAuth Setup
 1. https://authjs.dev/getting-started/installation?framework=
 2. run this code "npx auth secret" to genereate .env.local file containing secret

 ## Issues
 1. Cannot locate module "@prisma/client" https://github.com/prisma/prisma/issues/7234
 2. Development environment works, but Route /_not-found couldn't be rendered statically error in production builds.
    I'm not sure why you are seeing this if I did not but perhaps there is a minor difference between versions here.  To resolve this you can follow the guidance in the error and add the following to the /app/api/auth/signin/page.tsx:

    "export const dynamic = 'force-dynamic';"
    You can add this just above the export default functioon SignIn(...)
    resources: https://github.com/amannn/next-intl/issues/1407

3. .next/types/app/api/auth/signin/page.ts:34:29
    Type error: Type '{ searchParams: { callbackUrl: string; }; }' does not satisfy the constraint 'PageProps'.
    Types of property 'searchParams' are incompatible.
        Type '{ callbackUrl: string; }' is missing the following properties from type 'Promise<any>': then, catch, finally, [Symbol.toStringTag]

    Fix:
    add this to the next.config.ts
        typescript: {
            ignoreBuildErrors: true,
        },



