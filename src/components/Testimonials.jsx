import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { testimonials } from '../data/siteData.js'

export default function Testimonials() {
  return (
    <section className="testimonials section">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-kicker">Social proof</span>
        <h2>Fake reviews. Real engagement logic.</h2>
        <p>The humor is intentional. It makes the boring object memorable while keeping the interface clean.</p>
      </motion.div>

      <div className="testimonial-grid">
        {testimonials.map((item, index) => (
          <motion.article
            className="testimonial-card glass-card"
            key={item.name}
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Quote size={26} />
            <p>“{item.quote}”</p>
            <strong>{item.name}</strong>
            <span>{item.role}</span>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
