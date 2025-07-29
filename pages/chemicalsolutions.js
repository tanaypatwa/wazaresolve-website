import Head from 'next/head'

export default function ChemicalSolutions() {
  return (
    <>
      <Head>
        <title>Chemical Solutions - Waza Resolve</title>
        <meta name="description" content="Learn about our Chemical Solutions services." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="section">
            <div className="container">
                <h2 className="section-title">Chemical Solutions</h2>
                <p className="service-description">
                    Waza Resolve is your trusted partner for a wide range of chemical solutions. We provide high-quality chemicals for various industries, backed by our commitment to quality, reliability, and customer satisfaction. Our team of experts is here to help you find the right solution for your specific needs.
                </p>

                <div className="offerings-grid">
                    <div className="offering-card">
                        <h3>Automotive Chemicals</h3>
                        <p>We offer a comprehensive range of automotive chemicals, including lubricants, coolants, and additives, to keep your vehicles running smoothly.</p>
                    </div>
                    <div className="offering-card">
                        <h3>Industrial and Pharma-Grade Chemicals</h3>
                        <p>Our industrial and pharma-grade chemicals are manufactured to the highest standards of quality and purity, ensuring they meet the stringent requirements of your industry.</p>
                    </div>
                    <div className="offering-card">
                        <h3>Photoresist and Semiconductor Chemicals</h3>
                        <p>We provide a complete line of photoresist and semiconductor chemicals for the electronics industry, from photoresists and developers to etchants and strippers.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="cta-section">
            <div className="container">
                <h2 className="section-title" style={{ color: 'var(--secondary-color)' }}>Find Your Chemical Solution</h2>
                <p>Contact us today to discuss your chemical needs and get a custom quote.</p>
                <a href="contact.html" className="cta-button">Enquire Now</a>
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
