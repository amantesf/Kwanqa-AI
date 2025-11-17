'use client';

import Link from 'next/link';
import { FadeInOnScroll } from '@/components/FadeInOnScroll';

export default function ValuesPage() {
  return (
    <main className="app-main">
      <section className="band-none">
        <div className="section-shell">
          <FadeInOnScroll>
            <div className="section-card">
              <Link
                href="/"
                style={{
                  display: 'inline-flex',
                  fontSize: 12,
                  marginBottom: 8,
                  color: 'var(--secondary-text)',
                  textDecoration: 'none',
                }}
              >
                ← Back to home
              </Link>

              <div style={{ maxWidth: 720, marginBottom: 8 }}>
                <div className="chip" style={{ marginBottom: 8 }}>
                  <span>Our values</span>
                </div>
                <h1
                  style={{
                    fontSize: 'clamp(24px, 3vw, 28px)',
                    fontWeight: 600,
                    marginBottom: 8,
                  }}
                >
                  What guides how we build Kwanqa
                </h1>
                <p className="text-secondary" style={{ fontSize: 14 }}>
                  Kwanqa is more than an app. It’s a commitment to language,
                  culture, and community. These are the principles that shape every
                  feature we ship and every conversation we design.
                </p>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      <section className="band-soft">
        <div className="section-shell">
          <FadeInOnScroll>
            <div className="section-card">
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: 16,
                }}
              >
                <div className="card-soft">
                  <h2 style={{ fontSize: 14, marginBottom: 6 }}>
                    Language belongs to everyone
                  </h2>
                  <p className="text-secondary" style={{ fontSize: 13 }}>
                    Access to learning shouldn’t depend on where you’re born or what
                    tools you have. Every learner deserves a path to English,
                    Amharic, and other Ethiopian languages.
                  </p>
                </div>

                <div className="card-soft">
                  <h2 style={{ fontSize: 14, marginBottom: 6 }}>Culture matters</h2>
                  <p className="text-secondary" style={{ fontSize: 13 }}>
                    We honor heritage languages—Amharic, Afaan Oromo, Tigrinya, and
                    more—because language is identity, history, and connection, not
                    just vocabulary.
                  </p>
                </div>

                <div className="card-soft">
                  <h2 style={{ fontSize: 14, marginBottom: 6 }}>
                    Learning made simple
                  </h2>
                  <p className="text-secondary" style={{ fontSize: 13 }}>
                    No confusion. No extra noise. Just clear, intuitive tools that
                    help you learn at your own pace, with small steps that fit into
                    real life.
                  </p>
                </div>

                <div className="card-soft">
                  <h2 style={{ fontSize: 14, marginBottom: 6 }}>Community first</h2>
                  <p className="text-secondary" style={{ fontSize: 13 }}>
                    We build with and for the Ethiopian community, at home and
                    across the diaspora. Feedback from learners, teachers, and
                    families shapes our roadmap.
                  </p>
                </div>

                <div className="card-soft">
                  <h2 style={{ fontSize: 14, marginBottom: 6 }}>
                    Empowerment through education
                  </h2>
                  <p className="text-secondary" style={{ fontSize: 13 }}>
                    Whether you&apos;re learning English to unlock opportunities or
                    Amharic to reconnect with family, our goal is to lift you
                    higher—not just help you memorize words.
                  </p>
                </div>

                <div className="card-soft">
                  <h2 style={{ fontSize: 14, marginBottom: 6 }}>
                    Technology with a heart
                  </h2>
                  <p className="text-secondary" style={{ fontSize: 13 }}>
                    Our tools support teachers and learners—they never replace the
                    human connection that real language is built on. AI is the
                    engine, but people are the purpose.
                  </p>
                </div>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>
    </main>
  );
}