const reviews = [
  {
    text: 'The Honey Chilli Potato was crispy and flavorful — just the right balance of sweet and spicy. The Chilli Paneer was a delight, authentic and delicious!',
    name: 'Amit Verma',
    role: 'CEO',
    initials: 'AV',
  },
  {
    text: 'Tso Yum! serves the best Chinese food I’ve ever had! The noodles were perfectly cooked and the momos were bursting with flavour. A must-try!',
    name: 'Riya Sharma',
    role: 'Teacher',
    initials: 'RS',
  },
]

import SauceDrip from './SauceDrip.jsx'

export default function Testimonials() {
  return (
    <section className="section testi has-drip">
      <SauceDrip />
      <div className="wrap">
        <div className="section-head center reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>Happy tummies</span>
          <h2>What our <span className="text-orange">guests</span> say</h2>
        </div>
        <div className="testi-grid">
          {reviews.map((r) => (
            <article className="testi-card reveal" key={r.name}>
              <div className="quote">&ldquo;</div>
              <div className="testi-stars">★★★★★</div>
              <p>{r.text}</p>
              <div className="testi-who">
                <div className="av">{r.initials}</div>
                <div><b>{r.name}</b><span>{r.role}</span></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
