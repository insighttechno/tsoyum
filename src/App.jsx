import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Preloader from './components/Preloader.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import About from './components/About.jsx'
import PopularFood from './components/PopularFood.jsx'
import DishSwitcher from './components/DishSwitcher.jsx'
import BoldBanner from './components/BoldBanner.jsx'
import MovingRows from './components/MovingRows.jsx'
import Testimonials from './components/Testimonials.jsx'
import Blog from './components/Blog.jsx'
import OrderStrip from './components/OrderStrip.jsx'
import Locations from './components/Locations.jsx'
import Footer from './components/Footer.jsx'

gsap.registerPlugin(ScrollTrigger)

const clamp = (v, a, b) => Math.max(a, Math.min(b, v))
const smooth = (p) => p * p * (3 - 2 * p)
const lerp = (a, b, t) => a + (b - a) * t

export default function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.075, wheelMultiplier: 1, smoothWheel: true, syncTouch: true })
    lenis.on('scroll', ScrollTrigger.update)
    const raf = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    let onMove = null

    // Travelling bowl (cached measure, transform-only updates)
    const bowl = document.getElementById('travelBowl')
    const anchor = document.getElementById('aboutAnchor')
    const slot = document.getElementById('awaitSlot')
    const card = document.getElementById('awaitCard')
    const menu = document.getElementById('menu')
    let M = null
    const measure = () => {
      if (!bowl || !anchor || !slot || !menu) return
      const sc = window.scrollY
      const a = anchor.getBoundingClientRect(), s = slot.getBoundingClientRect(), mm = menu.getBoundingClientRect()
      M = { aXv: a.left + a.width / 2, aYd: a.top + sc + a.height / 2, aW: a.width,
        sXv: s.left + s.width / 2, sYd: s.top + sc + s.height / 2, sW: s.width, menuTopD: mm.top + sc }
      bowl.style.width = M.aW + 'px'
    }
    const updateBowl = (scrollY) => {
      if (!M) return
      const vh = window.innerHeight
      // Travel spans the whole About -> Popular scroll: starts when the About
      // anchor sits ~45% down the viewport, finishes when the destination card
      // slot reaches ~42% down (i.e. the Popular cards are clearly in view).
      const startS = M.aYd - vh * 0.45
      const endS = M.sYd - vh * 0.42
      const e = smooth(clamp((scrollY - startS) / Math.max(1, endS - startS), 0, 1))
      // Travel (move + shrink + spin) completes by 92%, then the bowl HOLDS
      // exactly on the card slot and dissolves — so the landing lines up cleanly.
      const te = clamp(e / 0.92, 0, 1)
      const x = lerp(M.aXv, M.sXv, te)
      const y = lerp(M.aYd, M.sYd, te) - scrollY
      const scale = lerp(1, M.sW / M.aW, te)
      // slow, smooth spin driven by eased progress (not raw scroll) — a gentle half-turn
      const rot = te * 180
      bowl.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) rotate(${rot}deg) scale(${scale})`
      let op = (y > -160 && y < vh + 160) ? 1 : 0
      if (e > 0.92) op *= clamp((1 - e) / 0.08, 0, 1)
      bowl.style.opacity = String(op)
      // Destination card stays blank until the bowl has arrived, then fills in
      if (card) card.classList.toggle('filled', e >= 0.92)
    }

    const ctx = gsap.context(() => {
      const reveal = (sel, to) => gsap.utils.toArray(sel).forEach((el) =>
        gsap.to(el, { ...to, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%' } }))
      reveal('.reveal', { y: 0, opacity: 1 })
      reveal('.reveal-l', { x: 0, opacity: 1 })
      reveal('.reveal-r', { x: 0, opacity: 1 })

      gsap.utils.toArray('.about-plate').forEach((el) =>
        gsap.to(el, { yPercent: -12, ease: 'none', scrollTrigger: { trigger: el.closest('section'), start: 'top bottom', end: 'bottom top', scrub: true } }))

      // hero food + ingredients (after preloader)
      gsap.from('.hero-food, .hero-food-2, .hero-food-3', { scale: 0.6, opacity: 0, duration: 1.2, ease: 'back.out(1.3)', stagger: 0.12, delay: 2.4 })
      gsap.from('.hero .ing', { scale: 0, opacity: 0, duration: 0.7, ease: 'back.out(2)', stagger: 0.08, delay: 2.8 })
      gsap.delayedCall(3.4, () => {
        gsap.to('.hero-food', { y: 16, duration: 3.6, repeat: -1, yoyo: true, ease: 'sine.inOut' })
        gsap.to('.hero-food-2', { y: -13, duration: 3, repeat: -1, yoyo: true, ease: 'sine.inOut' })
        gsap.to('.hero-food-3', { y: 17, duration: 2.6, repeat: -1, yoyo: true, ease: 'sine.inOut' })
        gsap.to('.hero-food', { rotation: 2, duration: 8, repeat: -1, yoyo: true, ease: 'sine.inOut' })
        gsap.utils.toArray('.ing').forEach((el, i) =>
          gsap.to(el, { y: i % 2 ? 16 : -14, duration: 2 + (i % 4) * 0.35, repeat: -1, yoyo: true, ease: 'sine.inOut' }))
        const movers = gsap.utils.toArray('.hero-food, .hero-food-2, .hero-food-3, .hero .ing')
        const xTo = movers.map((m) => gsap.quickTo(m, 'x', { duration: 0.9, ease: 'power3' }))
        onMove = (e) => {
          const nx = e.clientX / window.innerWidth - 0.5, ny = e.clientY / window.innerHeight - 0.5
          movers.forEach((m, i) => xTo[i](nx * (m.classList.contains('ing') ? (Math.abs(parseFloat(m.dataset.speed)) || 30) : 20) * 0.6 + ny * 4))
        }
        window.addEventListener('pointermove', onMove)
      })

      gsap.to('.about-badge.b1', { y: -10, duration: 3, repeat: -1, yoyo: true, ease: 'sine.inOut' })
      gsap.to('.about-badge.b2', { y: 12, duration: 3.4, repeat: -1, yoyo: true, ease: 'sine.inOut' })

      // chopsticks gently lifting the noodles (idle, very smooth)
      gsap.to('.about-chopstick img', { y: -16, duration: 3.2, repeat: -1, yoyo: true, ease: 'sine.inOut' })
      gsap.to('.about-chopstick img', { rotation: 3, duration: 5, repeat: -1, yoyo: true, ease: 'sine.inOut' })

      // ---- DISH SWITCHER: pinned, scroll-driven dish change ----
      const slides = gsap.utils.toArray('.sw-slide')
      const dots = gsap.utils.toArray('.sw-dot')
      if (slides.length) {
        gsap.set(slides, { autoAlpha: 0, scale: 1.08 })
        gsap.set(slides[0], { autoAlpha: 1, scale: 1 })
        dots[0] && dots[0].classList.add('on')
        let last = 0
        ScrollTrigger.create({
          trigger: '.switcher', start: 'top top', end: '+=' + slides.length * 720,
          pin: '.switcher-pin', scrub: 0.6,
          snap: { snapTo: 1 / (slides.length - 1), duration: { min: 0.25, max: 0.6 }, ease: 'power2.inOut', delay: 0.05 },
          onUpdate: (self) => {
            const idx = clamp(Math.floor(self.progress * slides.length), 0, slides.length - 1)
            if (idx === last) return
            last = idx
            slides.forEach((s, i) => gsap.to(s, { autoAlpha: i === idx ? 1 : 0, scale: i === idx ? 1 : 1.08, duration: 0.5, ease: 'power2.out', overwrite: true }))
            dots.forEach((d, i) => d.classList.toggle('on', i === idx))
            const cur = slides[idx]
            gsap.fromTo(cur.querySelector('.sw-dish'), { scale: 1.16, rotation: -5 }, { scale: 1, rotation: 0, duration: 0.8, ease: 'power3.out' })
            gsap.fromTo(cur.querySelectorAll('.ing'), { scale: 0.3, opacity: 0 }, { scale: 1, opacity: 1, stagger: 0.05, duration: 0.5, ease: 'back.out(2)' })
            gsap.fromTo(cur.querySelector('.sw-info'), { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
          },
        })
      }

      // sauce drip subtle stretch on scroll
      gsap.utils.toArray('.sd-path').forEach((el) =>
        gsap.fromTo(el, { scaleY: 0.7, transformOrigin: 'top' }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: el.closest('.testi'), start: 'top bottom', end: 'top 60%', scrub: true } }))

      if (bowl && anchor && slot && menu) {
        measure(); updateBowl(window.scrollY)
        lenis.on('scroll', ({ scroll }) => updateBowl(scroll))
        ScrollTrigger.addEventListener('refresh', measure)
      }
    })

    const onResize = () => { measure(); updateBowl(window.scrollY); ScrollTrigger.refresh() }
    const onLoad = () => { ScrollTrigger.refresh(); measure(); updateBowl(window.scrollY) }
    window.addEventListener('resize', onResize)
    window.addEventListener('load', onLoad)
    const settle = setTimeout(() => { ScrollTrigger.refresh(); measure(); updateBowl(window.scrollY) }, 2600)

    return () => {
      gsap.ticker.remove(raf)
      if (onMove) window.removeEventListener('pointermove', onMove)
      lenis.destroy(); ctx.revert()
      window.removeEventListener('resize', onResize)
      window.removeEventListener('load', onLoad)
      clearTimeout(settle)
    }
  }, [])

  return (
    <>
      <Preloader onDone={() => setLoaded(true)} />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <PopularFood />
        <DishSwitcher />
        <BoldBanner />
        <MovingRows />
        <Testimonials />
        <Blog />
        <OrderStrip />
        <Locations />
      </main>
      <Footer />
    </>
  )
}
