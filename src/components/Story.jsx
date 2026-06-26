import { motion } from 'framer-motion'
import { storyStages } from '../data/siteData.js'

export default function Story() {
  return (
    <section className="story section" id="story">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-kicker">The transformation</span>
        <h2>From construction material to cultural object.</h2>
        <p>Scroll through the three-stage luxury upgrade. The idea is simple: make the most boring product feel unforgettable.</p>
      </motion.div>

      <div className="story-grid">
        {storyStages.map((stage, index) => {
          const Icon = stage.icon
          return (
            <motion.article
              className="story-card glass-card"
              key={stage.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
            >
              <div className="card-icon"><Icon size={24} /></div>
              <p className="card-eyebrow">{stage.eyebrow}</p>
              <h3>{stage.title}</h3>
              <p>{stage.text}</p>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
