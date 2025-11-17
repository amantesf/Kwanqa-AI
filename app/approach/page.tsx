'use client';

import Link from 'next/link';
import { FadeInOnScroll } from '@/components/FadeInOnScroll';

export default function ApproachPage() {
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
                  <span>Our approach</span>
                </div>
                <h1
                  style={{
                    fontSize: 'clamp(24px, 3vw, 28px)',
                    fontWeight: 600,
                    marginBottom: 8,
                  }}
                >
                  How Kwanqa teaches Amharic, English, and heritage languages
                </h1>
                <p className="text-secondary" style={{ fontSize: 14 }}>
                  We’re committed to making language learning accessible, engaging,
                  and meaningful for everyone. Our platform empowers learners to
                  master English, Amharic, and other heritage languages like Afaan
                  Oromo and Tigrinya, while honoring culture and identity.
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
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: 16,
                }}
              >
                <div className="card-soft">
                  <h2 style={{ fontSize: 14, marginBottom: 6 }}>
                    Personalized learning paths
                  </h2>
                  <p className="text-secondary" style={{ fontSize: 13 }}>
                    Tailored lessons adapt to each learner’s skill level, pace, and
                    goals, ensuring steady progress and real‑world fluency—whether
                    you&apos;re learning Amharic or English.
                  </p>
                </div>

                <div className="card-soft">
                  <h2 style={{ fontSize: 14, marginBottom: 6 }}>
                    Smart matching with tutors & practice partners
                  </h2>
                  <p className="text-secondary" style={{ fontSize: 13 }}>
                    We connect learners with the right teachers, conversation
                    partners, and peer groups for the most effective, engaging
                    learning experience.
                  </p>
                </div>

                <div className="card-soft">
                  <h2 style={{ fontSize: 14, marginBottom: 6 }}>
                    Culturally grounded curriculum
                  </h2>
                  <p className="text-secondary" style={{ fontSize: 13 }}>
                    Our courses honor heritage languages like Amharic, Afaan Oromo,
                    and Tigrinya, while teaching English in ways that respect culture
                    and identity, at home and across the diaspora.
                  </p>
                </div>

                <div className="card-soft">
                  <h2 style={{ fontSize: 14, marginBottom: 6 }}>
                    Progress tracking & feedback
                  </h2>
                  <p className="text-secondary" style={{ fontSize: 13 }}>
                    Built‑in assessments, milestones, and feedback loops keep
                    learners accountable and motivated throughout their journey. You
                    can see your growth, not just your streak.
                  </p>
                </div>

                <div className="card-soft">
                  <h2 style={{ fontSize: 14, marginBottom: 6 }}>
                    Secure & flexible access
                  </h2>
                  <p className="text-secondary" style={{ fontSize: 13 }}>
                    Learners can study anytime, anywhere, on devices they already
                    use, with flexible options that fit their schedules and
                    lifestyle.
                  </p>
                </div>

                <div className="card-soft">
                  <h2 style={{ fontSize: 14, marginBottom: 6 }}>
                    AI that stays in your corner
                  </h2>
                  <p className="text-secondary" style={{ fontSize: 13 }}>
                    Our AI tutor runs locally and privately by design, helping you
                    practice both Amharic and English without sending your
                    conversations to the cloud. It supports human teachers and
                    connections—it doesn’t replace them.
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