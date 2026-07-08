import { motion } from 'framer-motion'
import Ingredients from './Ingredients.jsx'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 2.25 } } }
const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="wrap hero-grid">
        <motion.div className="hero-copy" variants={container} initial="hidden" animate="show">
          <motion.span className="eyebrow" variants={item}>Veg &amp; Non-Veg · Chinese &amp; Asian</motion.span>
          <h1>
            <motion.span variants={item} style={{ display: 'block' }}>Freshly steamed.</motion.span>
            <motion.span variants={item} style={{ display: 'block' }}>Truly</motion.span>
            <motion.span className="grad" variants={item}>irresistible.</motion.span>
          </h1>
          <motion.p className="sub" variants={item}>
            Hand-folded momos, sizzling noodles &amp; wok-tossed flavours — crafted fresh
            every day and delivered hot across Noida &amp; Greater Noida.
          </motion.p>
          <motion.div className="hero-actions" variants={item}>
            <a href="#order" className="btn btn-primary">Order Now →</a>
            <a href="#menu" className="btn btn-ghost">See the menu</a>
          </motion.div>
          <motion.div className="hero-badges" variants={item}>
            <span>🍽️ Veg &amp; Non-Veg</span>
            <span>🔥 Wok-fired fresh</span>
            <span>📍 2 Outlets in Noida</span>
          </motion.div>
        </motion.div>

        <motion.div className="hero-stage"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 2.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-glow" />
          <div className="hero-steam" aria-hidden="true">
            <span style={{ left: '30%', '--d': '0s', '--dur': '4.6s', '--sway': '-16px' }} />
            <span style={{ left: '42%', '--d': '1.1s', '--dur': '5.2s', '--sway': '12px' }} />
            <span style={{ left: '52%', '--d': '2s', '--dur': '4.9s', '--sway': '-10px' }} />
            <span style={{ left: '62%', '--d': '0.6s', '--dur': '5.4s', '--sway': '14px' }} />
            <span style={{ left: '46%', '--d': '3s', '--dur': '4.4s', '--sway': '-8px' }} />
            <span style={{ left: '36%', '--d': '2.5s', '--dur': '5.1s', '--sway': '10px' }} />
            <span style={{ left: '58%', '--d': '3.6s', '--dur': '4.8s', '--sway': '-12px' }} />
          </div>
          <img className="hero-food" src="/food/hero-momos.png" alt="Steamed momos" />
          <img className="hero-food-2 float-mid" src="/food/hero-noodles.png" alt="Hakka noodles" />
          <img className="hero-food-3 float-fast" src="/food/d-paneer.png" alt="Chilli paneer" />
          <Ingredients items={[
            { k: 'Onion', top: '6%', left: '4%', size: 40, speed: -50, rot: -10 },
            { k: 'Onion', top: '30%', right: '2%', size: 30, speed: 60 },
            { k: 'Chilli', bottom: '22%', left: '0%', size: 40, speed: 45, rot: 12 },
            { k: 'Sesame', top: '18%', left: '24%', size: 16, speed: -35 },
            { k: 'Drop', top: '46%', left: '10%', size: 14, speed: 40 },
            { k: 'Drop', bottom: '30%', right: '14%', size: 12, speed: -30 },
          ]} />
        </motion.div>
      </div>

      <div className="scroll-cue">
        <div className="mouse" />
        <span>Scroll</span>
      </div>
    </section>
  )
}
