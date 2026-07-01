import { motion } from 'framer-motion'
import { comparisonRows } from '../data/v2Data.js'

export default function ComparisonTable() {
  return (
    <section className="v2-section" id="comparison">
      <motion.div
        className="v2-section-head"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="v2-eyebrow">COMPARISON</p>
        <h2>Regular brick vs BRÍK No. 01.</h2>
        <p>This section makes the joke clear and makes the product feel premium.</p>
      </motion.div>

      <div className="compare-table">
        <div className="compare-row compare-head">
          <div>Category</div>
          <div>Normal Brick</div>
          <div>BRÍK No. 01</div>
        </div>

        {comparisonRows.map((row) => (
          <motion.div
            className="compare-row"
            key={row.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>{row.label}</div>
            <div>{row.regular}</div>
            <div>{row.brik}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}