const posts = [
  { img: '/food/blog1.png', date: 'Food Tips', title: 'How to make crispy spring rolls at home' },
  { img: '/food/blog2.png', date: 'Recipes', title: '5 secrets behind perfect Hakka noodles' },
  { img: '/food/blog3.png', date: 'Culture', title: 'The story behind authentic Asian momos' },
]

export default function Blog() {
  return (
    <section className="section" id="blog">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">From our kitchen</span>
          <h2>The Tso Yum! <span className="text-orange">blog</span></h2>
          <p>Tips, stories and recipes from the world of Chinese &amp; Asian cuisine.</p>
        </div>
        <div className="blog-grid">
          {posts.map((p) => (
            <article className="blog-card reveal" key={p.title}>
              <div className="blog-media"><img src={p.img} alt={p.title} /></div>
              <div className="blog-body">
                <span className="date">{p.date}</span>
                <h3>{p.title}</h3>
                <a href="#">Read more →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
