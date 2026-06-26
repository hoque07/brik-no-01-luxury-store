import { motion } from 'framer-motion'
import { Download, RefreshCcw } from 'lucide-react'
import { businessStats } from '../data/siteData.js'
import { clearOrders, downloadOrdersCsv } from '../utils/storage.js'

export default function BusinessPanel({ orders, revenue }) {
  function handleClear() {
    const confirmed = window.confirm('Clear all locally saved orders?')
    if (!confirmed) return
    clearOrders()
    window.location.reload()
  }

  return (
    <section className="business section" id="business">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-kicker">Business purpose</span>
        <h2>Not only UI. It captures buyer interest.</h2>
        <p>This frontend version works as a lead generation system. Orders are saved locally, can be exported as CSV, and can be sent through WhatsApp.</p>
      </motion.div>

      <div className="business-grid">
        {businessStats.map((stat) => {
          const Icon = stat.icon
          return (
            <article className="business-stat glass-card" key={stat.label}>
              <div className="card-icon"><Icon size={23} /></div>
              <p>{stat.label}</p>
              <strong>{stat.value}</strong>
              <span>{stat.text}</span>
            </article>
          )
        })}
      </div>

      <div className="dashboard glass-card">
        <div>
          <p className="dashboard-label">Captured orders</p>
          <strong>{orders.length}</strong>
        </div>
        <div>
          <p className="dashboard-label">Potential revenue</p>
          <strong>৳{revenue.toLocaleString('en-BD')}</strong>
        </div>
        <div className="dashboard-actions">
          <button className="btn btn-primary" onClick={() => downloadOrdersCsv(orders)} disabled={!orders.length}>
            <Download size={17} /> Export CSV
          </button>
          <button className="btn btn-ghost" onClick={handleClear} disabled={!orders.length}>
            <RefreshCcw size={17} /> Clear
          </button>
        </div>
      </div>
    </section>
  )
}
