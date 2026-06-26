# BRÍK No. 01: Luxury Redefined

BRÍK No. 01 is a one-page luxury product website that transforms a plain red brick into a premium collectible item. It was designed for a bootcamp selection assignment where the goal is to sell a boring object in an exciting, interactive, and premium way.

## Live Project Idea

The website presents a plain red brick as a luxury product. It uses premium visuals, smooth animation, scroll storytelling, an interactive mini-game, pricing tiers, and a working order lead capture system.

## Main Features

- Premium dark luxury landing page
- Animated CSS brick visual with glow, shine, orbit, and floating effects
- Smooth scroll-based storytelling section
- Interactive Brick Catcher mini-game
- Founder Edition unlock system
- Pricing section with 3 product tiers
- Functional order modal with form validation
- Local lead capture using browser localStorage
- WhatsApp order message generator
- Business dashboard showing captured orders and potential revenue
- CSV export for captured orders
- Fully responsive mobile and desktop design
- Clean React component structure

## Tech Stack

- React
- Vite
- JavaScript
- Framer Motion
- Lucide React Icons
- CSS
- localStorage

## How to Run Locally

```bash
npm install
npm run dev
```

Then open the local Vite URL in your browser.

## Build for Production

```bash
npm run build
npm run preview
```

## Business Use Notes

This project is frontend-only, so it does not use a real backend or real payment gateway. For business demo purposes, it includes:

1. Order lead capture in localStorage.
2. CSV export for collected leads.
3. WhatsApp order message handoff.
4. Pricing tiers for upselling.
5. Conversion-focused CTA sections.

To use with your real business phone number, open:

```txt
src/utils/storage.js
```

Then replace:

```js
const businessPhone = '8801700000000'
```

with your own WhatsApp number in international format.

## Suggested Deployment

Use Vercel or Netlify.

For Vercel:

1. Push this project to GitHub.
2. Go to Vercel.
3. Import the GitHub repository.
4. Keep default Vite settings.
5. Deploy.

## Developed By

Tanvir Nibir
