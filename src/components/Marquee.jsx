const words = ['Momos', 'Hakka Noodles', 'Manchurian', 'Spring Rolls', 'Fried Rice', 'Chilli Paneer', 'Hot & Sour Soup']

export default function Marquee() {
  const row = [...words, ...words]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row.map((w, i) => (
          <span className="marquee-item" key={i}>
            {w} <span className="dot" />
          </span>
        ))}
      </div>
    </div>
  )
}
