import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3>Waza Resolve</h3>
            <p>Innovation That Wins.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li>
                <Link href="/appliedinnovation">Applied Innovation</Link>
              </li>
              <li>
                <Link href="/legalresolve">Legal Resolve</Link>
              </li>
              <li>
                <Link href="/tech-forge">Tech-Forge</Link>
              </li>
              <li>
                <Link href="/chemicalsolutions">Chemical Solutions</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#">LinkedIn</a>
              <a href="#">Twitter</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Waza Resolve. All Rights Reserved.</p>
        </div>
      </div>
      <style jsx>{`
        footer {
          background-color: var(--primary-color);
          color: var(--secondary-color);
          padding: 80px 0 20px 0;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
          margin-bottom: 50px;
        }
        .footer-grid h3,
        .footer-grid h4 {
          font-family: var(--font-secondary);
          color: var(--accent-color);
        }
        .footer-grid ul {
          list-style: none;
          padding: 0;
        }
        .footer-grid ul li {
          margin-bottom: 10px;
        }
        .footer-grid ul li a {
          color: var(--secondary-color);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .footer-grid ul li a:hover {
          color: var(--accent-color);
        }
        .social-links a {
          color: var(--secondary-color);
          text-decoration: none;
          margin-right: 15px;
          font-weight: bold;
        }
        .footer-bottom {
          text-align: center;
          border-top: 1px solid #123468;
          padding-top: 20px;
        }
      `}</style>
    </footer>
  )
}
