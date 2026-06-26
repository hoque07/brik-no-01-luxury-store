const STORAGE_KEY = 'brik_no_01_orders'

export function getOrders() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch (error) {
    console.warn('Could not read orders from localStorage:', error)
    return []
  }
}

export function saveOrder(order) {
  const savedOrder = {
    ...order,
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    createdAt: new Date().toISOString(),
  }
  const orders = getOrders()
  const updatedOrders = [savedOrder, ...orders]
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedOrders))
  return savedOrder
}

export function downloadOrdersCsv(orders) {
  const headers = ['Date', 'Name', 'Phone', 'Email', 'Plan', 'Price', 'Quantity', 'Message']
  const rows = orders.map((order) => [
    new Date(order.createdAt).toLocaleString(),
    order.name,
    order.phone,
    order.email,
    order.planName,
    order.price,
    order.quantity,
    order.message,
  ])

  const csv = [headers, ...rows]
    .map((row) => row.map((cell) => `"${String(cell ?? '').replaceAll('"', '""')}"`).join(','))
    .join('\n')

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'brik-no-01-orders.csv'
  link.click()
  URL.revokeObjectURL(url)
}

export function clearOrders() {
  localStorage.removeItem(STORAGE_KEY)
}

export function buildWhatsAppUrl(order) {
  const businessPhone = '8801700000000'
  const message = [
    'Hello, I want to order BRÍK No. 01.',
    `Plan: ${order.planName}`,
    `Price: ৳${Number(order.price).toLocaleString('en-BD')}`,
    `Quantity: ${order.quantity}`,
    `Name: ${order.name}`,
    `Phone: ${order.phone}`,
    `Email: ${order.email || 'Not provided'}`,
    `Note: ${order.message || 'No note'}`,
  ].join('\n')

  return `https://wa.me/${businessPhone}?text=${encodeURIComponent(message)}`
}
