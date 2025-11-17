'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FadeInOnScroll } from '@/components/FadeInOnScroll';

export default function AboutPage() {
  return (
    <main className="app-main" id="top">
      {/* Intro / Hero */}
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

              <div style={{ maxWidth: 720 }}>
                <div className="chip" style={{ marginBottom: 8 }}>
                  <span>About Kwanqa</span>
                </div>
                <h1
                  style={{
                    fontSize: 'clamp(26px, 3.2vw, 32px)',
                    fontWeight: 600,
                    marginBottom: 12,
                  }}
                >
                  Kwanqa is the fastest way to learn Amharic and English — powered
                  by AI, built for connection.
                </h1>
                <p className="text-secondary" style={{ fontSize: 14 }}>
                  We built Kwanqa for Amharic speakers, Ethiopian families, and
                  the diaspora who never saw themselves in traditional language
                  apps. It’s a modern, culturally grounded place to learn,
                  practice, and stay connected—in Amharic, English, and other
                  Ethiopian languages.
                </p>
              </div>

              {/* In-page nav / anchors */}
              <div
                style={{
                  marginTop: 20,
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 8,
                  fontSize: 11,
                }}
              >
                <Link href="#why" className="anchor-pill">
                  Why we built it
                </Link>
                <Link href="#values" className="anchor-pill">
                  Values
                </Link>
                <Link href="#approach" className="anchor-pill">
                  How we teach
                </Link>
                <Link href="#team" className="anchor-pill">
                  Team
                </Link>
                <Link href="#reviews" className="anchor-pill">
                  Reviews
                </Link>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Why we built Kwanqa */}
      <section className="band-soft" id="why">
        <div className="section-shell">
          <FadeInOnScroll>
            <div className="section-card">
              <div style={{ maxWidth: 780 }}>
                <p
                  style={{
                    fontSize: 11,
                    textTransform: 'uppercase',
                    letterSpacing: '0.18em',
                    color: 'var(--secondary-text)',
                    marginBottom: 8,
                  }}
                >
                  Why we built Kwanqa
                </p>
                <h2 style={{ fontSize: 20, marginBottom: 12 }}>
                  No one built it for us—so we built it ourselves.
                </h2>
                <div
                  className="text-secondary"
                  style={{
                    fontSize: 14,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12,
                  }}
                >
                  <p>
                    We built Kwanqa because millions of Amharic speakers still
                    don’t have quality tools to learn English—and millions of
                    Ethiopian diaspora kids grow up wanting to learn Amharic but
                    never get the chance. The world didn’t make space for our
                    language, so we decided to build it ourselves.
                  </p>
                  <p>
                    For years, major language apps ignored Amharic. That meant
                    fewer opportunities at home, and no real way for the diaspora
                    to reconnect with their culture, their families, or their
                    identity.
                  </p>
                  <p>We don’t think that’s right.</p>
                  <ul style={{ paddingLeft: 18, margin: 0 }}>
                    <li>
                      Because learning a language shouldn’t depend on where you’re
                      born.
                    </li>
                    <li>
                      Because Amharic speakers deserve the same resources everyone
                      else gets.
                    </li>
                    <li>
                      Because our community deserves a place to learn and stay
                      connected.
                    </li>
                  </ul>
                  <p>
                    So we created Kwanqa, a modern, culturally grounded platform
                    built for Amharic speakers and the Ethiopian diaspora.
                  </p>
                  <p>
                    We also offer tools to help you learn your parents’ native
                    languages, including Afaan Oromo, Tigrinya, and more.
                  </p>
                  <p>No one built it for us. So we built it ourselves.</p>
                </div>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Our values */}
      <section className="band-none" id="values">
        <div className="section-shell">
          <FadeInOnScroll>
            <div className="section-card">
              <div style={{ maxWidth: 780, marginBottom: 16 }}>
                <p
                  style={{
                    fontSize: 11,
                    textTransform: 'uppercase',
                    letterSpacing: '0.18em',
                    color: 'var(--secondary-text)',
                    marginBottom: 8,
                  }}
                >
                  Our values
                </p>
                <h2 style={{ fontSize: 20, marginBottom: 8 }}>
                  What guides how we build Kwanqa
                </h2>
                <p className="text-secondary" style={{ fontSize: 14 }}>
                  Kwanqa is more than an app. It’s a commitment to language,
                  culture, and community. These are the principles that shape every
                  feature we ship and every conversation we design.
                </p>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: 16,
                }}
              >
                <div className="card-soft">
                  <h3 style={{ fontSize: 14, marginBottom: 6 }}>
                    Language belongs to everyone
                  </h3>
                  <p className="text-secondary" style={{ fontSize: 13 }}>
                    Access to learning shouldn’t depend on where you’re born or what
                    tools you have. Every learner deserves a path to English,
                    Amharic, and other Ethiopian languages.
                  </p>
                </div>

                <div className="card-soft">
                  <h3 style={{ fontSize: 14, marginBottom: 6 }}>Culture matters</h3>
                  <p className="text-secondary" style={{ fontSize: 13 }}>
                    We honor heritage languages—Amharic, Afaan Oromo, Tigrinya, and
                    more—because language is identity, history, and connection, not
                    just vocabulary.
                  </p>
                </div>

                <div className="card-soft">
                  <h3 style={{ fontSize: 14, marginBottom: 6 }}>
                    Learning made simple
                  </h3>
                  <p className="text-secondary" style={{ fontSize: 13 }}>
                    No confusion. No extra noise. Just clear, intuitive tools that
                    help you learn at your own pace, with small steps that fit into
                    real life.
                  </p>
                </div>

                <div className="card-soft">
                  <h3 style={{ fontSize: 14, marginBottom: 6 }}>Community first</h3>
                  <p className="text-secondary" style={{ fontSize: 13 }}>
                    We build with and for the Ethiopian community, at home and
                    across the diaspora. Feedback from learners, teachers, and
                    families shapes our roadmap.
                  </p>
                </div>

                <div className="card-soft">
                  <h3 style={{ fontSize: 14, marginBottom: 6 }}>
                    Empowerment through education
                  </h3>
                  <p className="text-secondary" style={{ fontSize: 13 }}>
                    Whether you&apos;re learning English to unlock opportunities or
                    Amharic to reconnect with family, our goal is to lift you
                    higher—not just help you memorize words.
                  </p>
                </div>

                <div className="card-soft">
                  <h3 style={{ fontSize: 14, marginBottom: 6 }}>
                    Technology with a heart
                  </h3>
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

      {/* Our approach / How we teach */}
      <section className="band-soft" id="approach">
        <div className="section-shell">
          <FadeInOnScroll>
            <div className="section-card">
              <div style={{ maxWidth: 780, marginBottom: 16 }}>
                <p
                  style={{
                    fontSize: 11,
                    textTransform: 'uppercase',
                    letterSpacing: '0.18em',
                    color: 'var(--secondary-text)',
                    marginBottom: 8,
                  }}
                >
                  Our approach
                </p>
                <h2 style={{ fontSize: 20, marginBottom: 8 }}>
                  How Kwanqa teaches Amharic, English, and heritage languages
                </h2>
                <p className="text-secondary" style={{ fontSize: 14 }}>
                  We’re committed to making language learning accessible, engaging,
                  and meaningful for everyone. Our platform empowers learners to
                  master English, Amharic, and other heritage languages like Afaan
                  Oromo and Tigrinya, while honoring culture and identity.
                </p>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: 16,
                }}
              >
                <div className="card-soft">
                  <h3 style={{ fontSize: 14, marginBottom: 6 }}>
                    Personalized learning paths
                  </h3>
                  <p className="text-secondary" style={{ fontSize: 13 }}>
                    Tailored lessons adapt to each learner’s skill level, pace, and
                    goals, ensuring steady progress and real‑world fluency—whether
                    you&apos;re learning Amharic or English.
                  </p>
                </div>

                <div className="card-soft">
                  <h3 style={{ fontSize: 14, marginBottom: 6 }}>
                    Smart matching with tutors & practice partners
                  </h3>
                  <p className="text-secondary" style={{ fontSize: 13 }}>
                    We connect learners with the right teachers, conversation
                    partners, and peer groups for the most effective, engaging
                    learning experience.
                  </p>
                </div>

                <div className="card-soft">
                  <h3 style={{ fontSize: 14, marginBottom: 6 }}>
                    Culturally grounded curriculum
                  </h3>
                  <p className="text-secondary" style={{ fontSize: 13 }}>
                    Our courses honor heritage languages like Amharic, Afaan Oromo,
                    and Tigrinya, while teaching English in ways that respect culture
                    and identity, at home and across the diaspora.
                  </p>
                </div>

                <div className="card-soft">
                  <h3 style={{ fontSize: 14, marginBottom: 6 }}>
                    Progress tracking & feedback
                  </h3>
                  <p className="text-secondary" style={{ fontSize: 13 }}>
                    Built‑in assessments, milestones, and feedback loops keep
                    learners accountable and motivated throughout their journey. You
                    can see your growth, not just your streak.
                  </p>
                </div>

                <div className="card-soft">
                  <h3 style={{ fontSize: 14, marginBottom: 6 }}>
                    Secure & flexible access
                  </h3>
                  <p className="text-secondary" style={{ fontSize: 13 }}>
                    Learners can study anytime, anywhere, on devices they already
                    use, with flexible options that fit their schedules and
                    lifestyle.
                  </p>
                </div>

                <div className="card-soft">
                  <h3 style={{ fontSize: 14, marginBottom: 6 }}>
                    AI that stays in your corner
                  </h3>
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

      {/* Team */}
      <section className="band-none" id="team">
        <div className="section-shell">
          <FadeInOnScroll>
            <div className="section-card">
              <div style={{ maxWidth: 780, marginBottom: 16 }}>
                <p
                  style={{
                    fontSize: 11,
                    textTransform: 'uppercase',
                    letterSpacing: '0.18em',
                    color: 'var(--secondary-text)',
                    marginBottom: 8,
                  }}
                >
                  Team
                </p>
                <h2 style={{ fontSize: 20, marginBottom: 8 }}>
                  Built by people who grew up between languages
                </h2>
                <p className="text-secondary" style={{ fontSize: 14 }}>
                  Kwanqa is created by Ethiopians who know what it feels like to
                  translate for parents, to miss parts of your own language, and to
                  want better tools for the next generation.
                </p>
              </div>

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
                      <h3 style={{ fontSize: 16, marginBottom: 2 }}>
                        Amanuel Tesfaye
                      </h3>
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
                      <h3 style={{ fontSize: 16, marginBottom: 2 }}>
                        Nehmiya Erkelo
                      </h3>
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

      {/* Reviews */}
      <section className="band-soft" id="reviews">
        <div className="section-shell">
          <FadeInOnScroll>
            <div className="section-card">
              <div style={{ maxWidth: 780, marginBottom: 16 }}>
                <p
                  style={{
                    fontSize: 11,
                    textTransform: 'uppercase',
                    letterSpacing: '0.18em',
                    color: 'var(--secondary-text)',
                    marginBottom: 8,
                  }}
                >
                  Reviews
                </p>
                <h2 style={{ fontSize: 20, marginBottom: 6 }}>
                  What learners are saying about Kwanqa
                </h2>
                <p className="text-secondary" style={{ fontSize: 13 }}>
                  Real people using Kwanqa to grow in English, Amharic, and their
                  connection to Ethiopia.
                </p>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: 16,
                }}
              >
                {/* Yafiet */}
                <div
                  className="card-soft"
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      pointerEvents: 'none',
                      opacity: 0.35,
                      background:
                        'radial-gradient(circle at top left, rgba(59,130,246,0.35), transparent 55%)',
                      mixBlendMode: 'screen',
                    }}
                  />
                  <div style={{ position: 'relative' }}>
                    <p
                      style={{
                        fontSize: 30,
                        lineHeight: 1,
                        margin: 0,
                        marginBottom: 6,
                        color: 'var(--accent-color)',
                      }}
                    >
                      “
                    </p>
                    <p
                      className="text-secondary"
                      style={{ fontSize: 13, marginBottom: 10 }}
                    >
                      I’ve tried several language apps before, but Kwanqa Ai is
                      different. The lessons are engaging, the instructors are
                      knowledgeable, and the personalized approach really helps me
                      progress. I feel more confident speaking both English and
                      Amharic every day.
                    </p>
                    <p
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        margin: 0,
                      }}
                    >
                      Yafiet Bereket
                    </p>
                  </div>
                </div>

                {/* Ruth */}
                <div
                  className="card-soft"
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      pointerEvents: 'none',
                      opacity: 0.35,
                      background:
                        'radial-gradient(circle at top right, rgba(16,185,129,0.35), transparent 55%)',
                      mixBlendMode: 'screen',
                    }}
                  />
                  <div style={{ position: 'relative' }}>
                    <p
                      style={{
                        fontSize: 30,
                        lineHeight: 1,
                        margin: 0,
                        marginBottom: 6,
                        color: 'var(--accent-color)',
                      }}
                    >
                      “
                    </p>
                    <p
                      className="text-secondary"
                      style={{ fontSize: 13, marginBottom: 10 }}
                    >
                      The platform is extremely user-friendly, and the quality of
                      both lessons and instructors is outstanding. I’ve used Kwanqa
                      Ai to improve my English and reconnect with my Amharic roots.
                      I highly recommend it!
                    </p>
                    <p
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        margin: 0,
                      }}
                    >
                      Ruth Nuguse
                    </p>
                  </div>
                </div>

                {/* Dawit (Amharic) */}
                <div
                  className="card-soft"
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      pointerEvents: 'none',
                      opacity: 0.35,
                      background:
                        'radial-gradient(circle at bottom, rgba(244,114,182,0.3), transparent 55%)',
                      mixBlendMode: 'screen',
                    }}
                  />
                  <div style={{ position: 'relative' }}>
                    <p
                      style={{
                        fontSize: 30,
                        lineHeight: 1,
                        margin: 0,
                        marginBottom: 6,
                        color: 'var(--accent-color)',
                      }}
                    >
                      “
                    </p>
                    <p
                      className="text-secondary"
                      style={{
                        fontSize: 13,
                        marginBottom: 10,
                        direction: 'ltr',
                      }}
                    >
                      Kwanqa Ai እንግሊዘኛን ለመማር መጠቀም በሚያስደንቅ ሁኔታ ምቹ ነበር። ለግል የተበጁ የመማሪያ
                      መንገዶች ከትክክለኛዎቹ ትምህርቶች እና የተግባር እድሎች ጋር በቅጽበት ያገናኙኛል፣ እና መድረኩን ማወቄ
                      እውነተኛ መምህራንን እና ተወላጆችን ይደግፋል በራስ መተማመን ይሰጠኛል። የመማር ልምዱ ጥራት እና
                      አስተማማኝነት ወደር የለሽ ነው።
                    </p>
                    <p
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        margin: 0,
                      }}
                    >
                      Dawit Kebede
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* CTA band */}
      <section className="band-none">
        <div className="section-shell">
          <FadeInOnScroll>
            <div className="section-card">
              <div
                className="card-soft"
                style={{
                  maxWidth: 780,
                  margin: '0 auto',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 16,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ maxWidth: 460 }}>
                  <h2 style={{ fontSize: 18, marginBottom: 6 }}>
                    Built for connection
                  </h2>
                  <p className="text-secondary" style={{ fontSize: 13 }}>
                    Whether you&apos;re learning English to unlock opportunities or
                    Amharic to reconnect with family, Kwanqa is here to keep you
                    close to your language, your people, and your story.
                  </p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    gap: 6,
                    flexWrap: 'wrap',
                  }}
                >
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    <Link href="/tutor">
                      <button className="btn btn-accent">Start learning</button>
                    </Link>
                    <Link href="/courses">
                      <button className="btn-ghost">Browse courses</button>
                    </Link>
                  </div>
                  <Link
                    href="#top"
                    className="text-secondary"
                    style={{
                      fontSize: 11,
                      textDecoration: 'none',
                    }}
                  >
                    ↑ Back to top
                  </Link>
                </div>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>
    </main>
  );
}