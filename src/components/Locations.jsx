const outlets = [
  {
    name: 'Gaur City 1',
    area: 'Greater Noida',
    addr: 'Shop No. LG-201, GH-01 Gaur City Centre, Gaur City 1, Sector 4, Greater Noida, UP-201318',
    phone: '+91 92202 31927',
  },
  {
    name: 'Sector 46',
    area: 'Noida',
    addr: 'Shop No. UG-23 & 24, Plot No. B-156A, Tulip Mall, Sector 46, Noida, UP-201301',
    phone: '+91 92057 29834',
  },
]

export default function Locations() {
  return (
    <section className="section" id="locations">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Come say hi</span>
          <h2>Find a <span className="text-orange">Tso Yum!</span> near you</h2>
          <p>Two outlets across Noida &amp; Greater Noida — open daily 3 PM to 3 AM. Dine in or order out.</p>
        </div>

        <div className="loc-grid">
          {outlets.map((o) => (
            <article className="loc-card reveal" key={o.name}>
              <div className="pin">📍</div>
              <h3>{o.name}</h3>
              <div className="area">{o.area}</div>
              <p className="addr">{o.addr}</p>
              <div className="loc-meta">
                <a href={`tel:${o.phone.replace(/\s/g, '')}`}>📞 {o.phone}</a>
                <a href="mailto:tsoyumnoida@gmail.com">✉️ tsoyumnoida@gmail.com</a>
                <span className="hours">🕒 Open daily · 3:00 PM – 3:00 AM</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
