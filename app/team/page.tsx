'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FadeInOnScroll } from '@/components/FadeInOnScroll';

export default function TeamPage() {
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

              <div style={{ maxWidth: 720, marginBottom: 4 }}>
                <div className="chip" style={{ marginBottom: 8 }}>
                  <span>Our team</span>
                </div>
                <h1
                  style={{
                    fontSize: 'clamp(24px, 3vw, 28px)',
                    fontWeight: 600,
                    marginBottom: 8,
                  }}
                >
                  Built by people who grew up between languages
                </h1>
                <p className="text-secondary" style={{ fontSize: 14 }}>
                  Kwanqa is created by Ethiopians who know what it feels like to
                  translate for parents, to miss parts of your own language, and to
                  want better tools for the next generation.
                </p>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Team cards with circular photos */}
      <section className="band-soft">
        <div className="section-shell">
          <FadeInOnScroll>
            <div className="section-card">
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: 20,
                  maxWidth: 840,
                  margin: '0 auto',
                }}
              >
                {/* Amanuel */}
                <div className="card-soft" style={{ textAlign: 'left' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      marginBottom: 10,
                    }}
                  >
                    <div
                      style={{
                        position: 'relative',
                        width: 72,
                        height: 72,
                        borderRadius: '50%',
                        overflow: 'hidden',
                        flexShrink: 0,
                      }}
                    >
                      <Image
                        src="/amanuel.jpeg"
                        alt="Portrait of Amanuel Tesfaye"
                        fill
                        sizes="72px"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div>
                      <h2 style={{ fontSize: 16, marginBottom: 2 }}>
                        Amanuel Tesfaye
                      </h2>
                      <p className="text-secondary" style={{ fontSize: 13 }}>
                        Co‑founder
                      </p>
                    </div>
                  </div>
                  <p className="text-secondary" style={{ fontSize: 13 }}>
                    Amanuel co‑founded Kwanqa to give Amharic speakers and
                    diaspora kids the kind of learning tools he never had growing
                    up. He cares deeply about access, clarity, and building
                    technology that actually feels like it was made for our
                    community.
                  </p>
                </div>

                {/* Nehmiya */}
                <div className="card-soft" style={{ textAlign: 'left' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      marginBottom: 10,
                    }}
                  >
                    <div
                      style={{
                        position: 'relative',
                        width: 72,
                        height: 72,
                        borderRadius: '50%',
                        overflow: 'hidden',
                        flexShrink: 0,
                      }}
                    >
                      <Image
                        src="/nehmiya.png"
                        alt="Portrait of Nehmiya Erkelo"
                        fill
                        sizes="72px"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div>
                      <h2 style={{ fontSize: 16, marginBottom: 2 }}>
                        Nehmiya Erkelo
                      </h2>
                      <p className="text-secondary" style={{ fontSize: 13 }}>
                        Co‑founder
                      </p>
                    </div>
                  </div>
                  <p className="text-secondary" style={{ fontSize: 13 }}>
                    Nehmiya co‑founded Kwanqa to bridge the gap between Ethiopia and
                    the diaspora through language. He believes technology should
                    amplify teachers, families, and cultural knowledge—not replace
                    them.
                  </p>
                </div>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Community note */}
      <section className="band-none">
        <div className="section-shell">
          <FadeInOnScroll>
            <div className="section-card">
              <div className="card-soft" style={{ maxWidth: 720, margin: '0 auto' }}>
                <h2 style={{ fontSize: 16, marginBottom: 6 }}>
                  Growing with the community
                </h2>
                <p className="text-secondary" style={{ fontSize: 13, marginBottom: 8 }}>
                  Kwanqa is still early—and we&apos;re building it in the open with
                  teachers, students, and families who care about Ethiopian
                  languages and stories.
                </p>
                <p className="text-secondary" style={{ fontSize: 13 }}>
                  If you&apos;re a teacher, content creator, or technologist who
                  wants to help, we&apos;d love to hear from you as we grow the
                  platform and the team.
                </p>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>
    </main>
  );
}