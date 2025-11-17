'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FadeInOnScroll } from '@/components/FadeInOnScroll';

type CourseCard = {
  slug: string;
  title: string;
  description: string;
  level: string;
  audience: string;
  focus: 'Amharic' | 'English';
  part: 1 | 2;
};

const amharicCourses: CourseCard[] = [
  {
    slug: 'amharic-beginner-1',
    title: 'Amharic for Absolute Beginners – Part 1',
    description: 'Greetings, introductions, and basic polite phrases.',
    level: 'Part 1 · Start here',
    audience: 'Non‑Amharic speakers learning Amharic',
    focus: 'Amharic',
    part: 1,
  },
  {
    slug: 'amharic-beginner-2',
    title: 'Amharic for Absolute Beginners – Part 2',
    description: 'Numbers, family, and everyday expressions.',
    level: 'Part 2 · Next step',
    audience: 'Non‑Amharic speakers learning Amharic',
    focus: 'Amharic',
    part: 2,
  },
];

const englishCourses: CourseCard[] = [
  {
    slug: 'english-from-amharic-1',
    title: 'English from Amharic – Part 1',
    description: 'Everyday English greetings and basics explained in Amharic.',
    level: 'Part 1 · Start here',
    audience: 'Amharic speakers learning English',
    focus: 'English',
    part: 1,
  },
  {
    slug: 'english-from-amharic-2',
    title: 'English from Amharic – Part 2',
    description: 'Family, work, and simple daily English phrases.',
    level: 'Part 2 · Next step',
    audience: 'Amharic speakers learning English',
    focus: 'English',
    part: 2,
  },
];

export default function CoursesPage() {
  const [track, setTrack] = useState<'amharic' | 'english'>('amharic');

  const currentCourses = track === 'amharic' ? amharicCourses : englishCourses;

  return (
    <main className="app-main">
      {/* Hero band */}
      <section className="band-none">
        <div className="section-shell">
          <FadeInOnScroll>
            <div
              style={{
                maxWidth: 720,
                marginBottom: 24,
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
              }}
            >
              <div className="chip">
                <span>Guided tracks</span>
              </div>
              <h1
                style={{
                  fontSize: 'clamp(24px, 3vw, 28px)',
                  fontWeight: 600,
                }}
              >
                Choose what you want to practice: Amharic or English
              </h1>
              <p className="text-secondary" style={{ fontSize: 14 }}>
                First choose your direction—learning Amharic, or learning English as an Amharic
                speaker—then pick Part 1 or Part 2. Each part has short lessons you can reinforce
                inside the Tutor.
              </p>
            </div>
          </FadeInOnScroll>

          {/* Track selector */}
          <FadeInOnScroll delay={0.05}>
            <div
              style={{
                display: 'inline-flex',
                padding: 4,
                borderRadius: 999,
                border: '1px solid var(--border-soft)',
                backgroundColor: 'var(--base-variant)',
                marginBottom: 16,
              }}
            >
              <button
                type="button"
                onClick={() => setTrack('amharic')}
                style={{
                  border: 'none',
                  borderRadius: 999,
                  padding: '6px 14px',
                  fontSize: 12,
                  cursor: 'pointer',
                  backgroundColor:
                    track === 'amharic' ? 'var(--base-color)' : 'transparent',
                  color: track === 'amharic' ? 'var(--text-color)' : 'var(--secondary-text)',
                  fontWeight: track === 'amharic' ? 600 : 500,
                }}
              >
                Learn Amharic
              </button>
              <button
                type="button"
                onClick={() => setTrack('english')}
                style={{
                  border: 'none',
                  borderRadius: 999,
                  padding: '6px 14px',
                  fontSize: 12,
                  cursor: 'pointer',
                  backgroundColor:
                    track === 'english' ? 'var(--base-color)' : 'transparent',
                  color: track === 'english' ? 'var(--text-color)' : 'var(--secondary-text)',
                  fontWeight: track === 'english' ? 600 : 500,
                }}
              >
                Learn English (from Amharic)
              </button>
            </div>
          </FadeInOnScroll>

          {/* Quick link to Tutor */}
          <FadeInOnScroll delay={0.1}>
            <div style={{ marginBottom: 24 }}>
              <Link href="/tutor">
                <button className="btn-ghost">Jump straight into the Tutor</button>
              </Link>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Course list for selected track */}
      <section className="band-soft">
        <div className="section-shell">
          <FadeInOnScroll>
            <div style={{ marginBottom: 16 }}>
              <h2 style={{ fontSize: 14, marginBottom: 4 }}>
                {track === 'amharic'
                  ? 'Amharic tracks – for people learning Amharic'
                  : 'English tracks – for Amharic speakers learning English'}
              </h2>
              <p className="text-secondary" style={{ fontSize: 12 }}>
                Each track is split into Part 1 and Part 2. Start with Part 1 if you’re not sure.
              </p>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.05}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: 16,
              }}
            >
              {currentCourses.map(course => (
                <Link
                  key={course.slug}
                  href={`/courses/${course.slug}`}
                  style={{ textDecoration: 'none' }}
                >
                  <div className="card-soft" style={{ height: '100%' }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                        gap: 12,
                        marginBottom: 8,
                      }}
                    >
                      <div>
                        <h3 style={{ fontSize: 16, marginBottom: 4 }}>{course.title}</h3>
                        <p className="text-secondary" style={{ fontSize: 13 }}>
                          {course.description}
                        </p>
                        <p className="text-secondary" style={{ fontSize: 11, marginTop: 4 }}>
                          Audience: {course.audience}
                        </p>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                        <span
                          style={{
                            fontSize: 10,
                            padding: '4px 8px',
                            borderRadius: 999,
                            border: '1px solid var(--border-soft)',
                            backgroundColor: 'var(--base-color)',
                            textTransform: 'uppercase',
                            fontWeight: 600,
                            textAlign: 'center',
                          }}
                        >
                          {course.level}
                        </span>
                        <span
                          style={{
                            fontSize: 10,
                            padding: '4px 8px',
                            borderRadius: 999,
                            border: '1px solid var(--border-soft)',
                            backgroundColor:
                              course.focus === 'English'
                                ? 'rgba(59,130,246,0.1)'
                                : 'rgba(16,185,129,0.1)',
                            textTransform: 'uppercase',
                            fontWeight: 600,
                            textAlign: 'center',
                          }}
                        >
                          {course.focus === 'English' ? 'Learn English' : 'Learn Amharic'}
                        </span>
                      </div>
                    </div>
                    <p className="text-secondary" style={{ fontSize: 11 }}>
                      Click to see phrases, mini‑dialogues, and a ready‑made prompt for Kwanqa
                      Tutor. You can still switch your learning mode in the Tutor between Amharic
                      and English.
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </FadeInOnScroll>
        </div>
      </section>
    </main>
  );
}