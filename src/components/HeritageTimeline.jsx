import { motion } from 'framer-motion'
import { heritageChapters } from '../data/v2Data.js'

export default function HeritageTimeline() {
  return (
    <section className="v2-section" id="heritage">
      <motion.div
        className="v2-section-head"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="v2-eyebrow">HERITAGE SYSTEM</p>
        <h2>From clay to cultural status.</h2>
        <p>
          A luxury-style timeline that makes the brick feel rare, intentional, and collectible.
        </p>
      </motion.div>

      <div className="timeline">
        {heritageChapters.map((item, index) => (
          <motion.article
            className="timeline-card"
            key={item.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: index * 0.08 }}
          >
            <span>{item.year}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}