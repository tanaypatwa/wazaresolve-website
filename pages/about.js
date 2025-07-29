import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>About Waza Resolve - Our Philosophy and People</title>
        <meta name="description" content="Learn about the philosophy and people behind Waza Resolve." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="section">
            <div className="container">
                <h2 className="section-title">About Waza Resolve</h2>
                <div className="about-content">
                    <div>
                        <h3>Our Philosophy</h3>
                        <p>At Waza Resolve, we believe that the most complex problems have the simplest, most elegant solutions. We are a team of thinkers, innovators, and problem-solvers dedicated to helping our clients navigate the ever-changing landscape of technology, law, and science. Our philosophy is rooted in the principles of clarity, precision, and purpose. We don't just provide answers; we provide the right answers, tailored to your unique needs and goals.</p>
                    </div>
                    <img src="https://static.wixstatic.com/media/97ea88_baef22db9e5f49cfa46119069a57b807~mv2.jpg/v1/fill/w_500,h_250,al_c/97ea88_baef22db9e5f49cfa46119069a57b807~mv2.jpg" alt="A diverse team of professionals collaborating in a modern office." />
                </div>
            </div>
        </section>

        <section id="team" className="section">
            <div className="container">
                <h2 className="section-title">Our People</h2>
                <div className="team-grid">
                    <div className="team-member">
                        <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36" alt="A smiling man with short dark hair and a beard, wearing a blue shirt." />
                        <h3>John Doe</h3>
                        <p>Founder & CEO</p>
                    </div>
                    <div className="team-member">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80" alt="A smiling woman with long brown hair, wearing a yellow sweater." />
                        <h3>Jane Smith</h3>
                        <p>Head of Legal Resolve</p>
                    </div>
                    <div className="team-member">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" alt="A man with a beard and glasses, wearing a black shirt." />
                        <h3>Peter Jones</h3>
                        <p>Lead Innovator</p>
                    </div>
                </div>
            </div>
        </section>
      </main>
      <style jsx>{`
        .about-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 50px;
            align-items: center;
        }
        .about-content img {
            width: 100%;
            border-radius: 10px;
        }
        .team-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
        }
        .team-member {
            text-align: center;
        }
        .team-member img {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            object-fit: cover;
            margin-bottom: 15px;
        }
        .team-member h3 {
            font-family: var(--font-secondary);
            color: var(--primary-color);
            font-size: 1.5rem;
            margin-bottom: 5px;
        }
      `}</style>
    </>
  )
}
