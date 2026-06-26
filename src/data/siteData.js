import {
  BadgeCheck,
  Boxes,
  Crown,
  Flame,
  Gem,
  HandCoins,
  MousePointerClick,
  ShieldCheck,
  Sparkles,
  Trophy,
  WalletCards,
  Zap,
} from 'lucide-react'

export const navLinks = [
  { label: 'Story', href: '#story' },
  { label: 'Features', href: '#features' },
  { label: 'Game', href: '#game' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Business', href: '#business' },
]

export const storyStages = [
  {
    eyebrow: 'Stage 01',
    title: 'Raw Material',
    text: 'Born from earth, shaped without identity. Just clay, pressure, and silence before the upgrade.',
    icon: Boxes,
  },
  {
    eyebrow: 'Stage 02',
    title: 'Refined by Fire',
    text: 'Heat changes the structure. The brick becomes stronger, sharper, and ready for attention.',
    icon: Flame,
  },
  {
    eyebrow: 'Stage 03',
    title: 'Luxury Object',
    text: 'No longer a building material. Now it is a symbol of design, confidence, and unnecessary excellence.',
    icon: Crown,
  },
]

export const featureCards = [
  {
    title: 'Timeless Geometry',
    text: 'A clean rectangular form designed for balance, visual confidence, and dramatic table placement.',
    icon: Gem,
  },
  {
    title: 'Signature Red Finish',
    text: 'A bold clay-red tone that brings warmth, weight, and authority to any imaginary collection.',
    icon: Sparkles,
  },
  {
    title: 'Collector Durability',
    text: 'Built to survive pressure, time, and boring interior design decisions without losing identity.',
    icon: ShieldCheck,
  },
  {
    title: 'Conversion Ready',
    text: 'Includes pricing, order capture, WhatsApp order handoff, and downloadable local leads for business use.',
    icon: HandCoins,
  },
]

export const pricingPlans = [
  {
    id: 'standard',
    name: 'Standard Brick',
    price: 999,
    displayPrice: '৳999',
    tag: 'Starter icon',
    description: 'One iconic red brick for everyday greatness.',
    features: ['Single premium brick', 'Luxury product page access', 'Basic bragging rights'],
    icon: WalletCards,
  },
  {
    id: 'founder',
    name: 'Founder Edition',
    price: 9999,
    displayPrice: '৳9,999',
    tag: 'Most selected',
    description: 'A premium collectible with full imaginary luxury status.',
    features: ['Founder badge unlocked', 'Premium certificate copy', 'Priority WhatsApp order flow'],
    icon: Crown,
    highlighted: true,
  },
  {
    id: 'legacy',
    name: 'Legacy Pack',
    price: 49999,
    displayPrice: '৳49,999',
    tag: 'Business pack',
    description: 'For people building not walls, but legacies.',
    features: ['Bundle concept package', 'Lead capture ready', 'Retail campaign friendly'],
    icon: Trophy,
  },
]

export const businessStats = [
  {
    label: 'Primary revenue path',
    value: 'Lead orders',
    text: 'Collect buyer interest and send the order through WhatsApp.',
    icon: MousePointerClick,
  },
  {
    label: 'Upsell system',
    value: '3 tiers',
    text: 'Standard, Founder, and Legacy pricing create a simple conversion ladder.',
    icon: Zap,
  },
  {
    label: 'Trust point',
    value: 'Local CSV',
    text: 'Export captured orders from browser storage without a backend.',
    icon: BadgeCheck,
  },
]

export const testimonials = [
  {
    name: 'A. Rahman',
    role: 'Imaginary Collector',
    quote: 'I bought one brick and suddenly my desk looked like it had architectural purpose.',
  },
  {
    name: 'N. Karim',
    role: 'Interior Thinker',
    quote: 'It is a brick, but the website convinced me it has a personality.',
  },
  {
    name: 'T. Studio',
    role: 'Creative Agency',
    quote: 'The product is boring. The experience is not. That is the whole point.',
  },
]
