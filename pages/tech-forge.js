import Head from 'next/head'

export default function TechForge() {
  return (
    <>
      <Head>
        <title>Tech-Forge - Waza Resolve</title>
        <meta name="description" content="Learn about our Tech-Forge services." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="section">
            <div className="container">
                <h2 className="section-title">Tech-Forge</h2>
                <p className="service-description">
                    At Waza Resolve, our Tech-Forge is where ideas are transformed into tangible, working solutions. We specialize in engineering technology that is not only innovative but also reliable, precise, and built with purpose. Whether you need custom software, hardware prototypes, or a complete system, we have the expertise to bring your vision to life.
                </p>

                <div className="offerings-grid">
                    <div className="offering-card">
                        <h3>Custom Software Development</h3>
                        <p>We build bespoke software solutions tailored to your specific needs, from web and mobile applications to complex enterprise systems.</p>
                    </div>
                    <div className="offering-card">
                        <h3>Hardware Prototyping</h3>
                        <p>Our team of engineers can help you design, build, and test hardware prototypes, from simple circuits to complex mechatronic systems.</p>
                    </div>
                    <div className="offering-card">
                        <h3>Systems Integration</h3>
                        <p>We help you integrate disparate systems and technologies to create a seamless, efficient, and scalable solution.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <h2 className="section-title">Green-Tech Projects & Prototypes</h2>
                <div className="portfolio-grid">
                    <div className="portfolio-item">
                        <img src="https://static.wixstatic.com/media/97ea88_a374c22f75ca4df285c52f9b9928cb90%7Emv2.png/v1/fill/w_320,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/97ea88_a374c22f75ca4df285c52f9b9928cb90~mv2.png" alt="A close-up of a circuit board with various electronic components." />
                        <h3>Project Alpha</h3>
                        <p>A revolutionary new energy storage solution.</p>
                    </div>
                    <div className="portfolio-item">
                        <img src="https://static.wixstatic.com/media/97ea88_a374c22f75ca4df285c52f9b9928cb90%7Emv2.png/v1/fill/w_320,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/97ea88_a374c22f75ca4df285c52f9b9928cb90~mv2.png" alt="A 3D model of a wind turbine." />
                        <h3>Project Beta</h3>
                        <p>A next-generation wind turbine design.</p>
                    </div>
                    <div className="portfolio-item">
                        <img src="https://static.wixstatic.com/media/97ea88_a374c22f75ca4df285c52f9b9928cb90%7Emv2.png/v1/fill/w_320,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/97ea88_a374c22f75ca4df285c52f9b9928cb90~mv2.png" alt="A diagram of a smart grid." />
                        <h3>Project Gamma</h3>
                        <p>A smart grid solution for a more sustainable future.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="cta-section">
            <div className="container">
                <h2 className="section-title" style={{ color: 'var(--secondary-color)' }}>Let's Build Something Amazing</h2>
                <p>Have a project in mind? We'd love to hear about it.</p>
                <a href="contact.html" className="cta-button">Get in Touch</a>
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
        .portfolio-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }
        .portfolio-item img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 10px;
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
