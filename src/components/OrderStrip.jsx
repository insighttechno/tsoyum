const apps = [
  { name: 'Zomato', img: '/food/zomato.png', href: '#' },
  { name: 'Swiggy', img: '/food/swiggy.png', href: '#' },
  { name: 'MagicPin', img: '/food/magicpin.png', href: '#' },
]

export default function OrderStrip() {
  return (
    <section className="section" id="order">
      <div className="wrap">
        <div className="order reveal">
          <div className="order-inner">
            <div>
              <span className="eyebrow light" style={{ color: '#fff' }}>Hungry already?</span>
              <h2>Order hot &amp; fresh<br />in minutes</h2>
              <p>Get your favourite Tso Yum! dishes delivered straight to your door from your preferred app.</p>
            </div>
            <div className="order-apps">
              {apps.map((a) => (
                <a className="app-btn" key={a.name} href={a.href} aria-label={`Order on ${a.name}`}>
                  <img src={a.img} alt={a.name} /> {a.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
