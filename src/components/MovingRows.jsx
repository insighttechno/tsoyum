const rowA = [
  { img: '/food/d-momos.png', label: 'Steamed Momos'},
  { img: '/food/d-noodles.png', label: 'Hakka Noodles' },
  { img: '/food/d-rice.png', label: 'Chinese Fried Rice'},
  { img: '/food/d-paneer.png', label: 'Chilli Paneer' },
  { img: '/food/d-potato.png', label: 'Chilli Potato' },
  { img: '/food/d-manchurian.png', label: 'Manchurian Balls'},
]
const rowB = [
  { img: '/food/d-soup.png', label: 'Sweet Corn Soup' },
  { img: '/food/d-starters.png', label: 'Starters Platter' },
  { img: '/food/d-manchurian.png', label: 'Manchurian Balls'},
  { img: '/food/d-potato.png', label: 'Chilli Potato' },
  { img: '/food/d-noodles.png', label: 'Hakka Noodles' },
  { img: '/food/d-momos.png', label: 'Steamed Momos'},
]

function Track({ items, dir }) {
  const loop = [...items, ...items, ...items]
  return (
    <div className="mv-track">
      <div className={`mv-strip ${dir === 'rtl' ? 'rtl' : ''}`}>
        {loop.map((it, i) => (
          <figure className="mv-tile" key={i}>
            <span className="mv-plate" />
            <img src={it.img} alt={it.label} loading="lazy" />
            <figcaption>{it.label}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}

export default function MovingRows() {
  return (
    <section className="section moving">
      <div className="wrap">
        <div className="section-head center reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>A taste of everything</span>
          <h2>Better food for <span className="text-orange">more people</span></h2>
          <p>From steaming momos to sizzling noodles — a whole world of Chinese &amp; Asian flavour, always fresh.</p>
        </div>
      </div>
      <div className="mv-rows">
        <Track items={rowA} dir="ltr" />
        <Track items={rowB} dir="rtl" />
      </div>
    </section>
  )
}
