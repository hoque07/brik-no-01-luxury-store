import { motion } from 'framer-motion'
import { Check, ShoppingBag } from 'lucide-react'
import { pricingPlans } from '../data/siteData.js'

export default function Pricing({ onSelectPlan }) {
  return (
    <section className="pricing section" id="pricing">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-kicker">Revenue section</span>
        <h2>Choose your brick status.</h2>
        <p>The pricing tiers are designed for humor, upsell psychology, and business presentation.</p>
      </motion.div>

      <div className="pricing-grid">
        {pricingPlans.map((plan, index) => {
          const Icon = plan.icon
          return (
            <motion.article
              className={`price-card glass-card ${plan.highlighted ? 'price-card--highlighted' : ''}`}
              key={plan.id}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <div className="price-card-top">
                <div className="card-icon"><Icon size={24} /></div>
                <span>{plan.tag}</span>
              </div>
              <h3>{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>
              <p className="price-value">{plan.displayPrice}</p>
              <ul className="plan-list">
                {plan.features.map((feature) => (
                  <li key={feature}><Check size={16} /> {feature}</li>
                ))}
              </ul>
              <button className="btn btn-primary full-btn" onClick={() => onSelectPlan(plan.id)}>
                <ShoppingBag size={17} /> Select Plan
              </button>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
