import { motion } from 'framer-motion'
import { ArrowRight, BadgeCheck, Sparkles } from 'lucide-react'
import BrickModel from './BrickModel.jsx'

export default function Hero({ onOrder }) {
  return (
    <section className="hero section" id="top">
      <div className="hero-noise" aria-hidden="true" />
      <motion.div
        className="hero-copy"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="eyebrow"><Sparkles size={16} /> Limited edition object</div>
        <h1>BRÍK No. 01</h1>
        <p className="hero-lead">Not just a brick. A statement.</p>
        <p className="hero-text">
          A plain red brick reimagined as a luxury collectible product experience. Built for people who refuse ordinary design, ordinary walls, and ordinary landing pages.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={onOrder}>
            Claim Founder Edition <ArrowRight size={18} />
          </button>
          <a className="btn btn-ghost" href="#game">
            Play Brick Catcher
          </a>
        </div>
        <div className="hero-trust">
          <span><BadgeCheck size={16} /> Responsive</span>
          <span><BadgeCheck size={16} /> Animated</span>
          <span><BadgeCheck size={16} /> Business ready</span>
        </div>
      </motion.div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.82, rotate: -8 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        <BrickModel />
      </motion.div>
    </section>
  )
}
