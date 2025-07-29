import Head from 'next/head'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - Waza Resolve</title>
        <meta name="description" content="Contact Waza Resolve for a free consultation." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="section">
            <div className="container">
                <h2 className="section-title">Write to Us</h2>
                <p style={{ textAlign: 'center', maxWidth: '600px', margin: '-30px auto 50px' }}>We're here to help. Fill out the form below and we'll get back to you within 2-3 business days.</p>
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" name="firstName" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" name="lastName" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="company">Company</label>
                        <input type="text" id="company" name="company" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" id="phone" name="phone" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label>Service/Offering</label>
                        <div>
                            <input type="checkbox" id="appliedInnovation" name="service" value="Applied Innovation" />
                            <label htmlFor="appliedInnovation">Applied Innovation</label>
                        </div>
                        <div>
                            <input type="checkbox" id="legalResolve" name="service" value="Legal Resolve" />
                            <label htmlFor="legalResolve">Legal Resolve</label>
                        </div>
                        <div>
                            <input type="checkbox" id="technology" name="service" value="Technology" />
                            <label htmlFor="technology">Technology</label>
                        </div>
                        <div>
                            <input type="checkbox" id="chemicalSolutions" name="service" value="Chemical Solutions" />
                            <label htmlFor="chemicalSolutions">Chemical Solutions</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="file">Upload File (if any)</label>
                        <input type="file" id="file" name="file" />
                    </div>
                    <button type="submit" className="cta-button">Send Message</button>
                </form>
            </div>
        </section>
      </main>
      <style jsx>{`
        .contact-form {
            max-width: 800px;
            margin: 0 auto;
        }
        .form-group {
            margin-bottom: 20px;
        }
        .form-group label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 15px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 1rem;
        }
        .form-group textarea {
            resize: vertical;
            min-height: 150px;
        }
        .cta-button {
            background-color: var(--accent-color);
            color: var(--primary-color);
            padding: 15px 30px;
            text-decoration: none;
            font-weight: bold;
            border-radius: 5px;
            transition: background-color 0.3s ease;
            border: none;
            cursor: pointer;
            font-size: 1.1rem;
        }
        .cta-button:hover {
            background-color: #00a0d1;
        }
      `}</style>
    </>
  )
}
