/* Lightweight 3D-ish SVG ingredients used as floating accents across the site. */

export function Onion({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <defs>
        <radialGradient id="on-g" cx="0.4" cy="0.35" r="0.75">
          <stop offset="0" stopColor="#d6f39b" />
          <stop offset="0.6" stopColor="#8fce54" />
          <stop offset="1" stopColor="#4f962b" />
        </radialGradient>
      </defs>
      <circle cx="20" cy="20" r="16" fill="url(#on-g)" />
      <circle cx="20" cy="20" r="6.5" fill="#f2f8de" />
      <circle cx="20" cy="20" r="6.5" fill="none" stroke="#78b442" strokeWidth="1.4" />
    </svg>
  )
}

export function Chilli({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <defs>
        <linearGradient id="ch-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ff7a4d" />
          <stop offset="1" stopColor="#d62828" />
        </linearGradient>
      </defs>
      <path d="M9 12c8-3 18 2 22 14 1 3-2 5-4 3C18 22 12 20 7 18c-3-1-1-5 2-6z" fill="url(#ch-g)" />
      <path d="M8 11c1-3 4-4 7-3" stroke="#5a9e2f" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  )
}

export function Sesame({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <ellipse cx="10" cy="10" rx="5" ry="7.5" fill="#f7e7c2" stroke="#e6cf98" strokeWidth="1" transform="rotate(24 10 10)" />
    </svg>
  )
}

export function Drop({ size = 12 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="6" fill="#e8532a" opacity="0.9" />
      <circle cx="6" cy="6" r="2" fill="#ffb38a" opacity="0.8" />
    </svg>
  )
}

const kinds = { Onion, Chilli, Sesame, Drop }

/* Scatter a set of ingredients. `items` = [{ k, top, left, right, bottom, size, speed, rot }] */
export default function Ingredients({ items = [] }) {
  return (
    <>
      {items.map((it, i) => {
        const C = kinds[it.k]
        const style = { position: 'absolute', top: it.top, left: it.left, right: it.right, bottom: it.bottom, transform: it.rot ? `rotate(${it.rot}deg)` : undefined }
        return (
          <span key={i} className="ing" data-speed={it.speed ?? 30} style={style}>
            <C size={it.size} />
          </span>
        )
      })}
    </>
  )
}
