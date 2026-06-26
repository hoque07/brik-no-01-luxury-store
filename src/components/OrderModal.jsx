import { useMemo, useState } from 'react'
import { MessageCircle, Send, X } from 'lucide-react'
import { buildWhatsAppUrl } from '../utils/storage.js'

export default function OrderModal({ plan, onClose, onSubmit }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    quantity: 1,
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [lastOrder, setLastOrder] = useState(null)

  const total = useMemo(() => Number(plan.price) * Number(form.quantity || 1), [plan.price, form.quantity])

  function updateField(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function validate() {
    const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = 'Name is required'
    if (!form.phone.trim()) nextErrors.phone = 'Phone is required'
    if (Number(form.quantity) < 1) nextErrors.quantity = 'Quantity must be at least 1'
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (!validate()) return

    const order = {
      ...form,
      quantity: Number(form.quantity),
      planId: plan.id,
      planName: plan.name,
      price: total,
    }
    setLastOrder(order)
    onSubmit(order)
  }

  const whatsAppUrl = lastOrder ? buildWhatsAppUrl(lastOrder) : null

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Order form">
      <div className="order-modal glass-card">
        <button className="modal-close" onClick={onClose} aria-label="Close order form"><X size={20} /></button>
        <div className="modal-heading">
          <span className="section-kicker">Order intent</span>
          <h2>{plan.name}</h2>
          <p>{plan.description}</p>
          <strong>{plan.displayPrice}</strong>
        </div>

        {whatsAppUrl ? (
          <div className="success-box">
            <MessageCircle size={42} />
            <h3>Lead saved successfully.</h3>
            <p>Your order has been saved in local storage. Continue to WhatsApp to send the buyer message.</p>
            <a className="btn btn-primary full-btn" href={whatsAppUrl} target="_blank" rel="noreferrer">
              Continue to WhatsApp <Send size={17} />
            </a>
            <button className="btn btn-ghost full-btn" onClick={onClose}>Close</button>
          </div>
        ) : (
          <form className="order-form" onSubmit={handleSubmit}>
            <label>
              Full name
              <input name="name" value={form.name} onChange={updateField} placeholder="Your name" />
              {errors.name && <span className="field-error">{errors.name}</span>}
            </label>

            <label>
              Phone number
              <input name="phone" value={form.phone} onChange={updateField} placeholder="01XXXXXXXXX" />
              {errors.phone && <span className="field-error">{errors.phone}</span>}
            </label>

            <label>
              Email address
              <input name="email" type="email" value={form.email} onChange={updateField} placeholder="you@example.com" />
            </label>

            <label>
              Quantity
              <input name="quantity" type="number" min="1" value={form.quantity} onChange={updateField} />
              {errors.quantity && <span className="field-error">{errors.quantity}</span>}
            </label>

            <label className="full-field">
              Message
              <textarea name="message" value={form.message} onChange={updateField} placeholder="Any delivery note or custom request?" />
            </label>

            <div className="order-summary">
              <span>Total</span>
              <strong>৳{total.toLocaleString('en-BD')}</strong>
            </div>

            <button className="btn btn-primary full-btn" type="submit">
              Save Lead <Send size={17} />
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
