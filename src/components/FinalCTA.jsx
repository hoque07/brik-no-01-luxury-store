import { motion } from 'framer-motion'
import { ArrowRight, GitFork, Globe2 } from 'lucide-react'
import BrickModel from './BrickModel.jsx'

export default function FinalCTA({ onOrder }) {
  return (
    <section className="final-cta section">
      <motion.div
        className="final-card glass-card"
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
      >
        <div className="final-copy">
          <span className="section-kicker">Final call</span>
          <h2>Own the icon.</h2>
          <p>The world has enough ordinary objects. BRÍK No. 01 is proof that even the most boring product can become a premium experience with the right design.</p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={onOrder}>
              Claim BRÍK No. 01 <ArrowRight size={18} />
            </button>
            <a className="btn btn-ghost" href="#top">
              Back to top
            </a>
          </div>
        </div>
        <BrickModel compact />
      </motion.div>

      <footer className="footer">
        <p>Designed and Developed by <strong>Tanvir Nibir</strong></p>
        <div>
          <a href="https://tanvirnibir.com" target="_blank" rel="noreferrer"><Globe2 size={16} /> Portfolio</a>
          <a href="https://github.com/hoque07" target="_blank" rel="noreferrer"><GitFork size={16} /> GitHub</a>
        </div>
      </footer>
    </section>
  )
}
