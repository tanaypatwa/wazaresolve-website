import Head from 'next/head'

export default function LegalResolve() {
  return (
    <>
      <Head>
        <title>Legal Resolve - Waza Resolve</title>
        <meta name="description" content="Learn about our Legal Resolve services." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="section">
            <div className="container">
                <h2 className="section-title">Legal Resolve</h2>
                <p className="service-description">
                    In today's complex legal landscape, you need a partner you can trust. Waza Resolve offers expert legal counsel and strategic guidance to help you navigate your most pressing legal challenges. Our team of experienced attorneys provides clear, concise, and actionable advice to protect your interests and achieve your goals.
                </p>

                <div className="offerings-grid">
                    <div className="offering-card">
                        <h3>IP & Patents</h3>
                        <p>Protect your most valuable assets with our comprehensive IP and patent services. We help you secure and enforce your intellectual property rights, from patents and trademarks to copyrights and trade secrets.</p>
                    </div>
                    <div className="offering-card">
                        <h3>Legal-Tech & Automation</h3>
                        <p>Leverage the power of technology to streamline your legal operations. We help you implement legal-tech solutions and automate routine tasks, so you can focus on what matters most: your business.</p>
                    </div>
                    <div className="offering-card">
                        <h3>Dispute Resolution</h3>
                        <p>Resolve legal disputes efficiently and effectively. Our experienced litigators and mediators will work with you to develop a customized dispute resolution strategy that minimizes risk and maximizes your chances of success.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="cta-section">
            <div className="container">
                <h2 className="section-title" style={{ color: 'var(--secondary-color)' }}>Get Expert Legal Advice</h2>
                <p>Let's discuss how we can help you with your legal needs.</p>
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
