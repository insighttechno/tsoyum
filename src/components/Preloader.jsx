import { useEffect, useState } from 'react'

export default function Preloader({ onDone }) {
  const [pct, setPct] = useState(0)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    let raf, start
    const dur = 1900
    const tick = (t) => {
      if (!start) start = t
      const p = Math.min(1, (t - start) / dur)
      const e = 1 - Math.pow(1 - p, 3)
      setPct(Math.round(e * 100))
      if (p < 1) raf = requestAnimationFrame(tick)
      else setTimeout(() => { setGone(true); document.body.style.overflow = ''; onDone && onDone() }, 350)
    }
    raf = requestAnimationFrame(tick)
    return () => { cancelAnimationFrame(raf); document.body.style.overflow = '' }
  }, [onDone])

  return (
    <div className={`preloader ${gone ? 'gone' : ''}`} aria-hidden={gone}>
      <div className="pre-inner">
        <img className="pre-logo" src="/logo.webp" alt="Tso Yum!" />
        <div className="pre-bar"><span style={{ width: pct + '%' }} /></div>
        <div className="pre-row">
          <span className="pre-label">Warming the wok…</span>
          <span className="pre-pct">{pct}%</span>
        </div>
      </div>
    </div>
  )
}
