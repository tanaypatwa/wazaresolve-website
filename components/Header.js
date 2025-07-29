import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <Link href="/" className="logo">
            Waza Resolve
          </Link>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/appliedinnovation">Innovation</Link>
            </li>
            <li>
              <Link href="/legalresolve">Legal</Link>
            </li>
            <li>
              <Link href="/tech-forge">Tech-Forge</Link>
            </li>
            <li>
              <Link href="/chemicalsolutions">Chemicals</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <style jsx>{`
        header {
          background-color: var(--primary-color);
          padding: 20px 0;
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-family: var(--font-secondary);
          font-size: 1.8rem;
          color: var(--secondary-color);
          text-decoration: none;
        }
        nav ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
        }
        nav ul li {
          margin-left: 30px;
        }
        nav ul li a {
          color: var(--secondary-color);
          text-decoration: none;
          font-weight: bold;
          transition: color 0.3s ease;
        }
        nav ul li a:hover {
          color: var(--accent-color);
        }
      `}</style>
    </header>
  )
}
