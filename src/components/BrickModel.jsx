export default function BrickModel({ compact = false }) {
  return (
    <div className={`brick-stage ${compact ? 'brick-stage--compact' : ''}`} aria-hidden="true">
      <div className="brick-orbit brick-orbit-one" />
      <div className="brick-orbit brick-orbit-two" />
      <div className="luxury-brick">
        <span className="brick-line brick-line-one" />
        <span className="brick-line brick-line-two" />
        <span className="brick-line brick-line-three" />
        <span className="brick-shine" />
      </div>
      <div className="brick-shadow" />
    </div>
  )
}
