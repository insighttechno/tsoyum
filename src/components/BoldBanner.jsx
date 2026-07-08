const lines = [
  { text: '100% VEGETARIAN', cls: 'hl-orange' },
  { text: 'WOK-FIRED FRESH', cls: 'hl-dark' },
  { text: 'BURSTING WITH FLAVOUR', cls: 'hl-gold' },
  { text: 'DELIVERED HOT', cls: 'hl-red' },
]

export default function BoldBanner() {
  return (
    <section className="section bold-banner">
      <div className="wrap">
        <span className="eyebrow center-eb">Why everyone loves us</span>
        <div className="bb-lines">
          {lines.map((l) => (
            <div className="bb-line reveal" key={l.text}>
              <span className={`bb-hl ${l.cls}`}>{l.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
