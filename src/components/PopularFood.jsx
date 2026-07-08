const dishes = [
  { name: 'Steamed Momos', desc: 'Soft dumplings with spiced filling & a fiery red dip.', img: '/food/d-momos.png', tag: "Chef's Pick" },
  { name: 'Chinese Fried Rice', desc: 'Flavourful rice tossed with crunchy vegetables.', img: '/food/d-rice.png', tag: 'Popular' },
  { name: 'Hakka Noodles', desc: 'Stir-fried with crisp vegetables & signature sauces.', img: '/food/d-noodles.png', tag: 'Bestseller', await: true },
  { name: 'Chilli Paneer', desc: 'Crispy paneer in a sweet & spicy tangy glaze.', img: '/food/d-paneer.png', tag: 'Spicy' },
]

import Ingredients from './Ingredients.jsx'

export default function PopularFood() {
  return (
    <section className="section bg-peach" id="menu">
      <Ingredients items={[
        { k: 'Chilli', top: '10%', left: '5%', size: 34, speed: 40, rot: 15 },
        { k: 'Onion', bottom: '12%', right: '6%', size: 30, speed: -45 },
        { k: 'Sesame', top: '20%', right: '12%', size: 15, speed: 30 },
      ]} />
      <div className="wrap">
        <div className="section-head center reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>Best food</span>
          <h2>Popular <span className="text-orange">food items</span></h2>
          <p>The flavours that keep Noida coming back — hand-tossed, wok-fired and always fresh.</p>
        </div>

        <div className="pop-grid">
          {dishes.map((d) => (
            <article className="pop-card reveal" key={d.name} id={d.await ? 'awaitCard' : undefined}>
              <span className="pop-tag">{d.tag}</span>
              <div className="pop-slot" id={d.await ? 'awaitSlot' : undefined}>
                <span className="pop-plate" />
                <img className="pop-img" src={d.img} alt={d.name} />
              </div>
              <h3>{d.name}</h3>
              <p>{d.desc}</p>
              <a href="#order" className="pop-order">Order now</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
