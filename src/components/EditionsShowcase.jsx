import { motion } from 'framer-motion'
import { editions } from '../data/v2Data.js'

export default function EditionsShowcase({ onSelectPlan }) {
  return (
    <section className="v2-section" id="editions">
      <motion.div
        className="v2-section-head"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="v2-eyebrow">LIMITED EDITIONS</p>
        <h2>Choose your brick status.</h2>
        <p>Each edition has a price, rarity level, and unlock condition.</p>
      </motion.div>

      <div className="edition-grid">
        {editions.map((item, index) => (
          <motion.article
            className={`edition-card ${item.id === 'founder' ? 'edition-featured' : ''}`}
            key={item.id}
            initial={{ opacity: 0, y: 42 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.1 }}
          >
            <div className="edition-top">
              <span>{item.rarity}</span>
              <strong>{item.price}</strong>
            </div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <small>{item.unlock}</small>
            <button
              className="v2-button"
              onClick={() => onSelectPlan?.(item.id === 'founder' ? 'founder' : 'standard')}
            >
              Request Allocation
            </button>
          </motion.article>
        ))}
      </div>
    </section>
  )
}