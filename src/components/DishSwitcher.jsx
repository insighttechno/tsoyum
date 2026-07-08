import Ingredients from './Ingredients.jsx'

const dishes = [
  { name: 'Chilli Potato', tag: 'Crispy', desc: 'Golden potato fingers wok-tossed in a fiery schezwan-garlic glaze with crunchy peppers.', price: '₹149', img: '/food/d-potato.png' },
  { name: 'Manchurian Balls', tag: 'Bestseller', desc: 'Fried dumplings simmered in a glossy garlic-soy Manchurian gravy — spicy and moreish.', price: '₹159', img: '/food/d-manchurian.png' },
  { name: 'Sweet Corn Soup', tag: 'Comfort', desc: 'A silky sweet-corn broth loaded with finely diced vegetables — the perfect warm starter.', price: '₹119', img: '/food/d-soup.png' },
  { name: 'Starters Platter', tag: 'For Sharing', desc: 'A loaded feast of spring rolls, crispy fries, manchurian and fritters with two dips.', price: '₹249', img: '/food/d-starters.png' },
]

const ingSets = [
  [{ k: 'Onion', top: '12%', left: '8%', size: 34, speed: 40 }, { k: 'Chilli', bottom: '18%', right: '10%', size: 36, speed: -40, rot: 20 }, { k: 'Sesame', top: '30%', right: '20%', size: 16, speed: 30 }],
  [{ k: 'Chilli', top: '16%', right: '12%', size: 34, speed: -40 }, { k: 'Onion', bottom: '20%', left: '10%', size: 30, speed: 45 }, { k: 'Drop', top: '40%', left: '18%', size: 14, speed: 30 }],
  [{ k: 'Onion', top: '14%', left: '12%', size: 30, speed: 40 }, { k: 'Sesame', bottom: '22%', right: '14%', size: 16, speed: -30 }, { k: 'Drop', top: '34%', right: '10%', size: 13, speed: 35 }],
  [{ k: 'Chilli', top: '18%', left: '10%', size: 36, speed: 40, rot: -15 }, { k: 'Onion', bottom: '16%', right: '12%', size: 30, speed: -45 }, { k: 'Sesame', top: '30%', left: '22%', size: 15, speed: 30 }],
]

export default function DishSwitcher() {
  return (
    <section className="switcher" id="switcher">
      <div className="switcher-pin">
        <div className="sw-head">
          <span className="eyebrow center-eb">Straight from the wok</span>
          <h2>Taste the <span className="text-orange">favourites</span></h2>
          <p className="sw-hint">Keep scrolling →</p>
        </div>

        <div className="sw-stage">
          {dishes.map((d, i) => (
            <div className="sw-slide" data-i={i} key={d.name}>
              <span className="sw-ghost">{d.name.split(' ').pop()}</span>
              <div className="sw-ings"><Ingredients items={ingSets[i]} /></div>
              <img className="sw-dish" src={d.img} alt={d.name} />
              <div className="sw-info">
                <span className="pop-tag sw-tag">{d.tag}</span>
                <h3>{d.name}</h3>
                <p>{d.desc}</p>
                <div className="sw-foot">
                  <span className="sw-price">{d.price}</span>
                  <a href="#order" className="btn btn-primary">Order now →</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="sw-dots">
          {dishes.map((d, i) => <span className="sw-dot" data-i={i} key={i} />)}
        </div>
      </div>
    </section>
  )
}
