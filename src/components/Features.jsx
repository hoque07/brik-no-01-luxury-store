import { motion } from 'framer-motion'
import { featureCards } from '../data/siteData.js'

export default function Features() {
  return (
    <section className="features section" id="features">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-kicker">Product logic</span>
        <h2>Engineered for presence.</h2>
        <p>Every feature is written like a luxury product claim, but the UX is built like a real conversion page.</p>
      </motion.div>

      <div className="features-grid">
        {featureCards.map((feature, index) => {
          const Icon = feature.icon
          return (
            <motion.article
              className="feature-card glass-card"
              key={feature.title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="card-icon"><Icon size={24} /></div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
