function Footer() {
  return (
    <footer>
      {/* CTA Section */}
      <div className="footer-cta">
        <div className="footer-cta-content">
          <p>
            Let’s build the right systems to<br />
            make everyday work easier.
          </p>
          <button className="footer-cta-btn">Contact us</button>
        </div>
        <div className="footer-gradient"></div>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="container footer-main-content">
          <div className="footer-brand">Ozta Labs</div>

          <div className="footer-links">
            <div>
              <a href="/about">About us</a>
              <a href="/contact">Contact</a>
            </div>
            <div>
              <a href="/products">Products</a>
              <a href="/company">Company details</a>
              <a href="/careers">Careers</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

