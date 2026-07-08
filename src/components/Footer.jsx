export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <img className="flogo" src="/logo.webp" alt="Tso Yum!" />
            <p className="tag">Where every bite is an Asian delight. Veg &amp; Non-Veg Chinese &amp; Asian cuisine, made fresh daily in Noida &amp; Greater Noida.</p>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#menu">Popular Food</a>
            <a href="#blog">Blog</a>
            <a href="#locations">Locations</a>
          </div>
          <div className="footer-col">
            <h4>Order On</h4>
            <a href="#">Zomato</a>
            <a href="#">Swiggy</a>
            <a href="#">MagicPin</a>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <a href="tel:+919220231927">+91 92202 31927</a>
            <a href="mailto:tsoyumnoida@gmail.com">tsoyumnoida@gmail.com</a>
            <p>Open daily · 3 PM – 3 AM</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Tso Yum! · All rights reserved.</span>
          <span>Made with 🧡 in Noida</span>
        </div>
      </div>
    </footer>
  )
}
