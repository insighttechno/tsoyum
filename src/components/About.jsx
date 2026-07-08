import Ingredients from './Ingredients.jsx'

export default function About() {
  return (
    <section className="section about" id="about">
      <Ingredients items={[
        { k: 'Onion', top: '14%', right: '8%', size: 30, speed: 40 },
        { k: 'Chilli', bottom: '16%', right: '20%', size: 32, speed: -45, rot: -20 },
        { k: 'Sesame', top: '24%', left: '46%', size: 15, speed: 30 },
      ]} />
      <div className="wrap about-grid">
        <div className="about-visual">
          <div className="about-plate" />
          {/* invisible anchor — the travelling bowl rests & spins here until you scroll */}
          <div className="about-anchor" id="aboutAnchor" />
          {/* static bowl shown on small screens where the travelling bowl is disabled */}
          <img className="about-bowl" src="/food/d-noodles.png" alt="Hakka noodles bowl" />
          {/* chopsticks lifting noodles out of the spinning bowl */}
          <div className="about-chopstick"><img src="/food/chopstick-noodles.png" alt="Chopsticks lifting noodles" /></div>
          <div className="about-badge b1"><span className="em">🥢</span> Freshly wok-tossed</div>
          <div className="about-badge b2"><span className="em">🍽️</span> Veg &amp; Non-Veg</div>
        </div>

        <div className="about-copy">
          <span className="eyebrow">About us</span>
          <h2>Where every bite is an <span className="text-orange">Asian delight</span></h2>
          <p>
            At Tso Yum!, we celebrate the vibrant flavours of authentic Chinese &amp; Asian cuisine
            with fresh, wholesome ingredients. From crispy spring rolls to sizzling fries,
            spicy Szechuan noodles and steamed dumplings — every dish is crafted to perfection.
          </p>
          <div className="about-feats">
            <span>🔥 Wok-fired daily</span>
            <span>🥬 Fresh ingredients</span>
            <span>🌶️ Signature sauces</span>
            <span>⚡ Delivered hot</span>
          </div>
        </div>
      </div>

      {/* Circular bowl that travels from here (left) into the Popular card on scroll */}
      <img className="travel-bowl" id="travelBowl" src="/food/d-noodles.png" alt="Hakka noodles bowl" />
    </section>
  )
}
