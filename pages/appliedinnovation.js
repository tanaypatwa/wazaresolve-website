import Head from 'next/head'

export default function AppliedInnovation() {
  return (
    <>
      <Head>
        <title>Applied Innovation - Waza Resolve</title>
        <meta name="description" content="Learn about our Applied Innovation services." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="section">
            <div className="container">
                <h2 className="section-title">Applied Innovation</h2>
                <p className="service-description">
                    At Waza Resolve, we bridge the gap between brilliant ideas and real-world impact. Our Applied Innovation service is designed to help you navigate the complexities of the innovation lifecycle, from initial concept to market-ready solution. We provide the strategic guidance, technical expertise, and hands-on support you need to turn your vision into a reality.
                </p>

                <div className="offerings-grid">
                    <div className="offering-card">
                        <h3>IP Strategy & Monetization</h3>
                        <p>Protect your intellectual property and unlock its full value. We help you develop a robust IP strategy and explore monetization opportunities through licensing, partnerships, and other commercialization channels.</p>
                    </div>
                    <div className="offering-card">
                        <h3>R&D Tax Credits</h3>
                        <p>Maximize your return on investment in research and development. Our experts will help you identify and claim all eligible R&D tax credits, ensuring you get the financial benefits you deserve.</p>
                    </div>
                    <div className="offering-card">
                        <h3>Product & Service Innovation</h3>
                        <p>Stay ahead of the curve with our product and service innovation support. We help you identify new market opportunities, develop innovative products and services, and create a roadmap for sustainable growth.</p>
                    </div>
                    <div className="offering-card">
                        <h3>Go-To-Market Strategy</h3>
                        <p>Launch your new products and services with confidence. We help you develop a comprehensive go-to-market strategy that covers everything from market research and positioning to pricing and promotion.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="cta-section">
            <div className="container">
                <h2 className="section-title" style={{ color: 'var(--secondary-color)' }}>Ready to Innovate?</h2>
                <p>Let's discuss how we can help you achieve your innovation goals.</p>
                <a href="contact.html" className="cta-button">Get a Free Consultation</a>
            </div>
        </section>
      </main>
      <style jsx>{`
        .service-description {
            max-width: 800px;
            margin: 0 auto 50px auto;
            text-align: center;
            font-size: 1.1rem;
            line-height: 1.6;
        }
        .offerings-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }
        .offering-card {
            background-color: #f8f9fa;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        .offering-card h3 {
            font-family: var(--font-secondary);
            color: var(--primary-color);
            font-size: 1.8rem;
            margin-bottom: 15px;
        }
        .cta-section {
            text-align: center;
            padding: 80px 0;
            background-color: var(--primary-color);
            color: var(--secondary-color);
        }
      `}</style>
    </>
  )
}
