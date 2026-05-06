# Social Reset Landing Page

Modern, responsive landing page for Social Reset built with Next.js and Tailwind CSS.

## Start locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Verification

```bash
npm run lint
npm run build
```

## Share or host the site

### Netlify preview

Netlify is the cleanest way to share a preview link with a friend before going live.

```bash
npx netlify login
npx netlify deploy --build
```

Choose the current folder when Netlify asks what to deploy. The build command is `npm run build`
and the publish directory is `.next`, also configured in `netlify.toml`.

When the preview looks good, publish it:

```bash
npx netlify deploy --build --prod
```

### Phone on same Wi-Fi

Start the dev server on your local network:

```bash
npm run dev -- --hostname 0.0.0.0
```

Open the network URL from your phone, for example `http://192.168.1.78:3000`.

### ngrok temporary link

Use this only for a quick temporary public link from your computer:

```bash
ngrok http 3000
```

If `ngrok` is not installed, install it from ngrok and connect your auth token first.

## Remaining integrations

- Replace CTA links with the real Calendly link.
- Replace Discord CTA with the real invite link.
- Connect the form to Google Forms, Typeform, Calendly, CRM, or backend.
