import { useMemo, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Story from './components/Story.jsx'
import Features from './components/Features.jsx'
import BrickGame from './components/BrickGame.jsx'
import Pricing from './components/Pricing.jsx'
import BusinessPanel from './components/BusinessPanel.jsx'
import Testimonials from './components/Testimonials.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import OrderModal from './components/OrderModal.jsx'
import Toast from './components/Toast.jsx'
import { getOrders, saveOrder } from './utils/storage.js'
import { pricingPlans } from './data/siteData.js'
import HeritageTimeline from './components/HeritageTimeline.jsx'
import EditionsShowcase from './components/EditionsShowcase.jsx'
import ComparisonTable from './components/ComparisonTable.jsx'
export default function App() {
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [orders, setOrders] = useState(() => getOrders())
  const [toast, setToast] = useState('')

  const revenue = useMemo(() => {
    return orders.reduce((sum, item) => sum + Number(item.price || 0), 0)
  }, [orders])

  function handleOrderSubmit(order) {
    const savedOrder = saveOrder(order)
    setOrders((prev) => [savedOrder, ...prev])
    setSelectedPlan(null)
    setToast('Order captured locally. You can export leads from the business panel.')
  }

  function handleSelectPlan(planId) {
    const plan = pricingPlans.find((item) => item.id === planId)
    setSelectedPlan(plan)
  }

  return (
    <div className="app-shell">
      <div className="ambient-bg" aria-hidden="true" />
      <Navbar onOrder={() => handleSelectPlan('founder')} />
      <main>
        <Hero onOrder={() => handleSelectPlan('founder')} />

        <Story />

        <HeritageTimeline />

        <Features />

        <EditionsShowcase onSelectPlan={handleSelectPlan} />

        <ComparisonTable />

       <BrickGame onUnlock={() => handleSelectPlan('founder')} />

       <Pricing onSelectPlan={handleSelectPlan} />

       <BusinessPanel orders={orders} revenue={revenue} />

       <Testimonials />

        <FinalCTA onOrder={() => handleSelectPlan('founder')} />
      </main>
      {selectedPlan && (
        <OrderModal
          plan={selectedPlan}
          onClose={() => setSelectedPlan(null)}
          onSubmit={handleOrderSubmit}
        />
      )}
      <Toast message={toast} onClose={() => setToast('')} />
    </div>
  )
}
