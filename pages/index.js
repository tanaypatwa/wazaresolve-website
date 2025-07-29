import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Waza Resolve - Innovation That Wins</title>
        <meta name="description" content="We deliver clear solutions and precise execution for your most complex challenges in innovation, law, chemicals, and technology." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="hero">
          <div className="container">
            <h1>Innovation That Wins</h1>
            <p>We deliver clear solutions and precise execution for your most complex challenges in innovation, law, chemicals, and technology.</p>
            <a href="contact.html" className="cta-button">Get a Free Consultation</a>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <h2 className="section-title">Our Services</h2>
            <div className="services-grid">
              <div className="service-card">
                <h3>Applied Innovation</h3>
                <p>We help you navigate the complexities of innovation, from ideation to execution, ensuring your ideas have a real-world impact.</p>
                <a href="appliedinnovation.html" className="cta-button">Explore Solutions</a>
              </div>
              <div className="service-card">
                <h3>Legal Resolve</h3>
                <p>Our legal experts provide clear, strategic guidance to protect your interests and resolve legal challenges with precision.</p>
                <a href="legalresolve.html" className="cta-button">Explore Solutions</a>
              </div>
              <div className="service-card">
                <h3>Tech-Forge</h3>
                <p>From custom software to hardware prototypes, we build technology that works, engineered quietly, precisely, and on purpose.</p>
                <a href="tech-forge.html" className="cta-button">Explore Solutions</a>
              </div>
              <div className="service-card">
                <h3>Chemical Solutions</h3>
                <p>We provide a wide range of chemical solutions, from automotive to industrial and pharma-grade chemicals, with a focus on quality and reliability.</p>
                <a href="chemicalsolutions.html" className="cta-button">Explore Solutions</a>
              </div>
            </div>
          </div>
        </section>

        <section id="why-choose-us" className="section">
          <div className="container">
            <h2 className="section-title">Why Choose Us?</h2>
            <div className="services-grid">
              <div className="service-card">
                <h3>Benefit-Driven Language</h3>
                <p>We speak your language, focusing on the benefits that matter most to your business.</p>
              </div>
              <div className="service-card">
                <h3>10x More Engaging</h3>
                <p>We transform your existing services and information into content that is 10 times more engaging and persuasive.</p>
              </div>
              <div className="service-card">
                <h3>High-Impact Sections</h3>
                <p>We add high-impact sections like testimonials, use cases, and FAQs to build trust and answer customer questions.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="section testimonials">
          <div className="container">
            <h2 className="section-title" style={{ color: 'var(--secondary-color)' }}>What Our Clients Say</h2>
            <div className="testimonial-card">
              <p>"Waza Resolve slashed our R&D timeline by 40% and delivered a product that exceeded our expectations. Their expertise is unmatched."</p>
              <footer>- CEO, Tech Startup</footer>
            </div>
            <div className="testimonial-card">
              <p>"The legal team at Waza Resolve provided us with clear, actionable advice that saved us from a costly lawsuit. We can't thank them enough."</p>
              <footer>- General Counsel, Fortune 500 Company</footer>
            </div>
          </div>
        </section>
      </main>
      <style jsx>{`
        .hero {
            background-color: var(--primary-color);
            color: var(--secondary-color);
            padding: 100px 0;
            text-align: center;
        }
        .hero h1 {
            font-family: var(--font-secondary);
            font-size: 4rem;
            margin-bottom: 20px;
        }
        .hero p {
            font-size: 1.2rem;
            margin-bottom: 30px;
        }
        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }
        .service-card {
            background-color: #f8f9fa;
            padding: 30px;
            border-radius: 10px;
            text-align: center;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        .service-card h3 {
            font-family: var(--font-secondary);
            color: var(--primary-color);
            font-size: 1.8rem;
            margin-bottom: 15px;
        }
        .testimonials {
            background-color: var(--primary-color);
            color: var(--secondary-color);
        }
        .testimonial-card {
            background-color: #123468;
            padding: 30px;
            border-radius: 10px;
            margin-bottom: 20px;
        }
        .testimonial-card p {
            font-style: italic;
            font-size: 1.1rem;
            margin-bottom: 15px;
        }
        .testimonial-card footer {
            font-weight: bold;
            color: var(--accent-color);
        }
      `}</style>
    </>
  )
}
