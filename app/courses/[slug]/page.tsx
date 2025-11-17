'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FadeInOnScroll } from '@/components/FadeInOnScroll';

type LessonSection = {
  title: string;
  description: string;
  phrases?: {
    amharic: string;
    transliteration: string;
    english: string;
  }[];
  dialogue?: {
    speaker: 'A' | 'B';
    amharic: string;
    transliteration: string;
    english: string;
  }[];
  practicePrompt?: string;
};

type Course = {
  title: string;
  intro?: string;
  sections: LessonSection[];
};

const courseContent: Record<string, Course> = {
  // Amharic part 1
  'amharic-beginner-1': {
    title: 'Amharic for Absolute Beginners – Part 1',
    intro:
      'Start speaking from day one with simple greetings, introductions, and polite phrases.',
    sections: [
      {
        title: 'Lesson 1 – Greetings',
        description:
          'Learn how to say hello, ask “How are you?”, and respond politely.',
        phrases: [
          { amharic: 'ሰላም', transliteration: 'selam', english: 'Hello / Peace' },
          {
            amharic: 'ሰላም እንዴት ነህ?',
            transliteration: 'selam, endet neh?',
            english: 'Hello, how are you? (to a man)',
          },
          {
            amharic: 'ሰላም እንዴት ነሽ?',
            transliteration: 'selam, endet nesh?',
            english: 'Hello, how are you? (to a woman)',
          },
          {
            amharic: 'ደህና ነኝ፣ አንተ?',
            transliteration: 'dehna neñ, ante?',
            english: 'I am fine, and you? (to a man)',
          },
          {
            amharic: 'ደህና ነኝ፣ አንቺ?',
            transliteration: 'dehna neñ, anchi?',
            english: 'I am fine, and you? (to a woman)',
          },
          {
            amharic: 'እግዚአብሔር ይመስገን',
            transliteration: 'əgziabher yimmesgen',
            english: 'Thanks be to God (common polite response)',
          },
        ],
        dialogue: [
          {
            speaker: 'A',
            amharic: 'ሰላም እንዴት ነህ?',
            transliteration: 'selam, endet neh?',
            english: 'Hello, how are you? (to a man)',
          },
          {
            speaker: 'B',
            amharic: 'ደህና ነኝ፣ አንተ?',
            transliteration: 'dehna neñ, ante?',
            english: 'I am fine, and you?',
          },
          {
            speaker: 'A',
            amharic: 'ደህና ነኝ፣ እግዚአብሔር ይመስገን።',
            transliteration: 'dehna neñ, əgziabher yimmesgen.',
            english: 'I am fine, thanks be to God.',
          },
        ],
        practicePrompt:
          'Kwanqa, please quiz me on basic greetings. Ask me to say “Hello, how are you?” to a man and to a woman, and then correct me gently.',
      },
      {
        title: 'Lesson 2 – Introducing Yourself',
        description:
          'Learn to say your name, ask for someone else’s name, and say where you are from.',
        phrases: [
          {
            amharic: 'ስሜ ... ነው።',
            transliteration: 'səme ... new.',
            english: 'My name is ....',
          },
          {
            amharic: 'ስምህ ማን ነው?',
            transliteration: 'səmməh man new?',
            english: 'What is your name? (to a man)',
          },
          {
            amharic: 'ስምሽ ማን ነው?',
            transliteration: 'səmməsh man new?',
            english: 'What is your name? (to a woman)',
          },
          {
            amharic: 'እባክህ ስምህ?',
            transliteration: 'əbbakih, səmməh?',
            english: 'Please, your name? (to a man, polite)',
          },
          {
            amharic: 'እባክሽ ስምሽ?',
            transliteration: 'əbbakish, səmməsh?',
            english: 'Please, your name? (to a woman, polite)',
          },
          {
            amharic: 'ከአሜሪካ መጣሁ።',
            transliteration: 'kə Amerika metahu.',
            english: 'I came from America / I am from America.',
          },
          {
            amharic: 'ከኢትዮጵያ መጣሁ።',
            transliteration: 'kə Ityopya metahu.',
            english: 'I came from Ethiopia / I am from Ethiopia.',
          },
        ],
        dialogue: [
          {
            speaker: 'A',
            amharic: 'ሰላም፣ ስሜ አማኑኤል ነው።',
            transliteration: 'selam, səme Amanuel new.',
            english: 'Hello, my name is Amanuel.',
          },
          {
            speaker: 'B',
            amharic: 'እባክህ ስምህ?',
            transliteration: 'əbbakih, səmməh?',
            english: 'Please, your name? (to a man, polite)',
          },
          {
            speaker: 'A',
            amharic: 'ስሜ አሌክስ ነው። ከአሜሪካ መጣሁ።',
            transliteration: 'səme Alex new. kə Amerika metahu.',
            english: 'My name is Alex. I am from America.',
          },
          {
            speaker: 'B',
            amharic: 'ደህና መጣህ፣ አሌክስ።',
            transliteration: 'dehna metah, Alex.',
            english: 'Welcome, Alex.',
          },
        ],
        practicePrompt:
          'Kwanqa, please help me practice introductions. Ask me: “What is your name?” and “Where are you from?” in Amharic, wait for my Amharic answer, then correct me and explain gently in English.',
      },
      {
        title: 'Lesson 3 – Thank You & Sorry',
        description:
          'Practice አመሰግናለሁ (amesegenallo) and ይቅርታ (yiqirta) in simple situations.',
        phrases: [
          {
            amharic: 'አመሰግናለሁ',
            transliteration: 'amesegenallo',
            english: 'Thank you (formal / general)',
          },
          {
            amharic: 'እጅግ አመሰግናለሁ',
            transliteration: 'əjjəg amesegenallo',
            english: 'Thank you very much.',
          },
          {
            amharic: 'የለም፣ በደህና',
            transliteration: 'yelem, bedehna',
            english: 'You’re welcome / It’s nothing, be well.',
          },
          {
            amharic: 'ይቅርታ',
            transliteration: 'yiqirta',
            english: 'Sorry / Excuse me',
          },
          {
            amharic: 'እባክህ ይቅርታ',
            transliteration: 'əbbakih, yiqirta',
            english: 'Please, forgive me (to a man, polite)',
          },
          {
            amharic: 'እባክሽ ይቅርታ',
            transliteration: 'əbbakish, yiqirta',
            english: 'Please, forgive me (to a woman, polite)',
          },
        ],
        dialogue: [
          {
            speaker: 'A',
            amharic: 'ይቅርታ፣ በመንገድህ ቆመሁ።',
            transliteration: 'yiqirta, be-mengedih qomehu.',
            english: 'Sorry, I stood in your way.',
          },
          {
            speaker: 'B',
            amharic: 'የለም፣ በደህና።',
            transliteration: 'yelem, bedehna.',
            english: 'No problem, be well.',
          },
          {
            speaker: 'A',
            amharic: 'እጅግ አመሰግናለሁ።',
            transliteration: 'əjjəg amesegenallo.',
            english: 'Thank you very much.',
          },
        ],
        practicePrompt:
          'Kwanqa, help me practice thanking and apologising in Amharic. Ask me to say “thank you”, “you’re welcome”, and “sorry” in different short situations, and correct me gently.',
      },
    ],
  },

  // Amharic part 2
  'amharic-beginner-2': {
    title: 'Amharic for Absolute Beginners – Part 2',
    intro:
      'Build on the basics with numbers, family vocabulary, and high‑frequency everyday expressions.',
    sections: [
      {
        title: 'Lesson 1 – Numbers & Counting',
        description:
          'Get familiar with basic numbers so you can handle prices, time, and quantities.',
        phrases: [
          { amharic: 'አንድ', transliteration: 'and', english: 'one' },
          { amharic: 'ሁለት', transliteration: 'hulət', english: 'two' },
          { amharic: 'ሶስት', transliteration: 'sost', english: 'three' },
          { amharic: 'አምስት', transliteration: 'aməst', english: 'five' },
          { amharic: 'አስር', transliteration: 'asir', english: 'ten' },
          { amharic: 'አምሳ', transliteration: 'amsa', english: 'fifty' },
          { amharic: 'መቶ', transliteration: 'meto', english: 'hundred' },
        ],
        dialogue: [
          {
            speaker: 'A',
            amharic: 'እባክህ ከአንድ እስከ አስር ቁጥሮችን ተናገር።',
            transliteration: 'əbbakih, ke-and ɨska asir qutər-wotchin tenager.',
            english: 'Please say the numbers from one to ten.',
          },
          {
            speaker: 'B',
            amharic:
              'አንድ፣ ሁለት፣ ሶስት፣ አራት፣ አምስት፣ ስድስት፣ ሰባት፣ ስምንት፣ ዘጠኝ፣ አስር።',
            transliteration:
              'and, hulət, sost, arat, aməst, sɨdɨst, sebāt, səmənt, zäteny, asir.',
            english: 'One, two, three, four, five, six, seven, eight, nine, ten.',
          },
        ],
        practicePrompt:
          'Kwanqa, please quiz me on numbers. Ask me to say numbers between 1 and 100 in Amharic, and correct my pronunciation and spelling gently.',
      },
      {
        title: 'Lesson 2 – Family & People',
        description:
          'Learn common words for family members and how to talk about people around you.',
        phrases: [
          { amharic: 'አባቴ', transliteration: 'abate', english: 'my father' },
          { amharic: 'እናቴ', transliteration: 'ənnate', english: 'my mother' },
          { amharic: 'እህቴ', transliteration: 'əhtē', english: 'my sister' },
          { amharic: 'ወንድሜ', transliteration: 'wəndime', english: 'my brother' },
          {
            amharic: 'አያቴ',
            transliteration: 'ayyate',
            english: 'my grandfather / grandmother (depending on context)',
          },
          { amharic: 'ጓደኛዬ', transliteration: 'gwadenyaye', english: 'my friend' },
        ],
        dialogue: [
          {
            speaker: 'A',
            amharic: 'ቤተሰቦችህ እንዴት ናቸው?',
            transliteration: 'betesebotchih endet nachəw?',
            english: 'How is your family?',
          },
          {
            speaker: 'B',
            amharic:
              'አባቴና እናቴ በደህና ናቸው፣ እህቴም በደህና ናት።',
            transliteration: 'abate-na ənnate bedehna nachəw, əhtem bedehna nat.',
            english: 'My father and mother are well, my sister is also well.',
          },
        ],
        practicePrompt:
          'Kwanqa, help me talk about my family in Amharic. Ask me about my parents, siblings, and friends, and correct my sentences with transliteration and English.',
      },
      {
        title: 'Lesson 3 – Everyday Expressions',
        description:
          'Short, high‑frequency phrases you can plug into real life immediately.',
        phrases: [
          { amharic: 'እሺ', transliteration: 'əshi', english: 'Okay / alright' },
          {
            amharic: 'ጊዜ አለህ?',
            transliteration: 'gize alleh?',
            english: 'Do you have time? (to a man)',
          },
          {
            amharic: 'ጊዜ አለሽ?',
            transliteration: 'gize allesh?',
            english: 'Do you have time? (to a woman)',
          },
          {
            amharic: 'አሁን አልችልም',
            transliteration: 'ahun alchilem',
            english: 'I can’t right now.',
          },
          {
            amharic: 'ድጋሚ ተናገር እባክህ',
            transliteration: 'dɨgami tenager əbbakih',
            english: 'Please say it again (to a man).',
          },
          {
            amharic: 'ትንሽ ቀርበህ ተናገር',
            transliteration: 'tɨnɨsh qerbeh tenager',
            english: 'Speak a little slower.',
          },
        ],
        dialogue: [
          {
            speaker: 'A',
            amharic: 'ጊዜ አለህ? ትንሽ ማነጋገር እፈልጋለሁ።',
            transliteration: 'gize alleh? tɨnɨsh manəgager əfelləgaləhu.',
            english: 'Do you have time? I would like to talk a little.',
          },
          {
            speaker: 'B',
            amharic: 'እሺ፣ ነግ እንነጋገር።',
            transliteration: 'əshi, nəg ənnəgager.',
            english: 'Okay, let’s talk tomorrow.',
          },
        ],
        practicePrompt:
          'Kwanqa, please help me practice everyday expressions. Ask me to respond in Amharic when you invite me, ask for time, or speak too fast, and then correct me.',
      },
    ],
  },

  // English from Amharic – Part 1
  'english-from-amharic-1': {
    title: 'English from Amharic – Part 1',
    intro:
      'Designed for Amharic speakers who want to build everyday English, with explanations in Amharic and English side‑by‑side.',
    sections: [
      {
        title: 'Lesson 1 – Greetings in English',
        description:
          'Practice simple English greetings and polite expressions, explained in Amharic.',
        phrases: [
          {
            amharic: 'ሰላም',
            transliteration: 'selam',
            english: 'Hello.',
          },
          {
            amharic: 'እንዴት ነህ?',
            transliteration: 'endet neh?',
            english: 'How are you?',
          },
          {
            amharic: 'ደህና ነኝ፣ አንተ?',
            transliteration: 'dehna neñ, ante?',
            english: 'I’m fine, and you?',
          },
          {
            amharic: 'እጅግ አመሰግናለሁ',
            transliteration: 'əjjəg amesegenallo',
            english: 'Thank you very much.',
          },
        ],
        dialogue: [
          {
            speaker: 'A',
            amharic: 'ሰላም እንዴት ነህ?',
            transliteration: 'selam, endet neh?',
            english: 'Hello, how are you?',
          },
          {
            speaker: 'B',
            amharic: 'ደህና ነኝ፣ አንተ?',
            transliteration: 'dehna neñ, ante?',
            english: 'I’m fine, and you?',
          },
        ],
        practicePrompt:
          'Kwanqa, I am an Amharic speaker learning English. Please help me practice basic English greetings. Ask me in Amharic, and make me answer in English. Correct me gently and explain in Amharic when needed.',
      },
      {
        title: 'Lesson 2 – Introducing Yourself in English',
        description:
          'Learn to talk about your name and where you are from, starting from Amharic.',
        phrases: [
          {
            amharic: 'ስሜ ... ነው።',
            transliteration: 'səme ... new.',
            english: 'My name is ....',
          },
          {
            amharic: 'ከኢትዮጵያ መጣሁ።',
            transliteration: 'kə Ityopya metahu.',
            english: 'I am from Ethiopia.',
          },
          {
            amharic: 'እባክህ ስምህ?',
            transliteration: 'əbbakih, səmməh?',
            english: 'What is your name?',
          },
        ],
        dialogue: [
          {
            speaker: 'A',
            amharic: 'ስሜ አማኑኤል ነው። ከኢትዮጵያ መጣሁ።',
            transliteration: 'səme Amanuel new. kə Ityopya metahu.',
            english: 'My name is Amanuel. I am from Ethiopia.',
          },
          {
            speaker: 'B',
            amharic: 'ደህና መጣህ፣ አማኑኤል።',
            transliteration: 'dehna metah, Amanuel.',
            english: 'Welcome, Amanuel.',
          },
        ],
        practicePrompt:
          'Kwanqa, I speak Amharic and want to practice introducing myself in English. Ask me in Amharic, and make me answer in English. Correct my English and explain in Amharic where needed.',
      },
      {
        title: 'Lesson 3 – Everyday English Responses',
        description:
          'Short English replies to common questions, starting from Amharic prompts.',
        phrases: [
          {
            amharic: 'ጊዜ አለህ?',
            transliteration: 'gize alleh?',
            english: 'Do you have time?',
          },
          {
            amharic: 'አሁን አልችልም።',
            transliteration: 'ahun alchilem.',
            english: 'I can’t right now.',
          },
          {
            amharic: 'ድጋሚ ተናገር እባክህ።',
            transliteration: 'dɨgami tenager əbbakih.',
            english: 'Please say it again.',
          },
        ],
        dialogue: [
          {
            speaker: 'A',
            amharic: 'ጊዜ አለህ?',
            transliteration: 'gize alleh?',
            english: 'Do you have time?',
          },
          {
            speaker: 'B',
            amharic: 'አሁን አልችልም፣ ነግ እችላለሁ።',
            transliteration: 'ahun alchilem, nəg əchəlalhu.',
            english: 'I can’t right now, but I can tomorrow.',
          },
        ],
        practicePrompt:
          'Kwanqa, ask me everyday questions in Amharic and help me answer in English. Correct my English sentences gently and give short explanations in Amharic.',
      },
    ],
  },

  // English from Amharic – Part 2
  'english-from-amharic-2': {
    title: 'English from Amharic – Part 2',
    intro:
      'Continue building everyday English as an Amharic speaker, focusing on family, work, and daily routines.',
    sections: [
      {
        title: 'Lesson 1 – Family & People in English',
        description:
          'Talk about your family members and people around you in English, starting from Amharic.',
        phrases: [
          {
            amharic: 'አባቴ በአውሮፓ ይኖራል።',
            transliteration: 'abate be-Europa yinoral.',
            english: 'My father lives in Europe.',
          },
          {
            amharic: 'እናቴ በቤት ትሰራለች።',
            transliteration: 'ənnate be-bet tɨseralech.',
            english: 'My mother works at home.',
          },
        ],
        practicePrompt:
          'Kwanqa, I speak Amharic and want to practice describing my family in English. Ask me questions in Amharic and guide me to answer in English, correcting me gently.',
      },
      {
        title: 'Lesson 2 – Work & Study in English',
        description:
          'Build English sentences about your job, school, or what you do every day.',
        phrases: [
          {
            amharic: 'እኔ ተማሪ ነኝ።',
            transliteration: 'ene temari neñ.',
            english: 'I am a student.',
          },
          {
            amharic: 'በቢሮ እሰራለሁ።',
            transliteration: 'be-biro əsəralehu.',
            english: 'I work in an office.',
          },
        ],
        practicePrompt:
          'Kwanqa, please help me talk about my work or studies in English. Ask me in Amharic and help me answer in English with short corrections.',
      },
      {
        title: 'Lesson 3 – Daily Routine in English',
        description:
          'Talk about your typical day—waking up, eating, working or studying—in English.',
        phrases: [
          {
            amharic: 'ጠዋት ስድስት ሰዓት እነሳለሁ።',
            transliteration: 'ṯewat sɨdɨst se-at ənəsalehu.',
            english: 'I wake up at six in the morning.',
          },
          {
            amharic: 'ስራ በኋላ ወደ ቤት እመለሳለሁ።',
            transliteration: 'səra behwala wede bet əmelesalehu.',
            english: 'I go back home after work.',
          },
        ],
        practicePrompt:
          'Kwanqa, ask me about my daily routine in Amharic and make me answer in English. Correct me gently and give short explanations in Amharic when I make mistakes.',
      },
    ],
  },
};

export default function CourseDetailPage() {
  const pathname = usePathname();
  const router = useRouter();
  const slug = pathname.split('/').filter(Boolean).pop();

  const course = slug ? courseContent[slug] : undefined;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!course || !slug) return;
    if (typeof window === 'undefined') return;
    const stored = window.localStorage.getItem(`kwanqa-last-lesson-${slug}`);
    if (stored) {
      const idx = Number(stored);
      if (!Number.isNaN(idx) && idx >= 0 && idx < course.sections.length) {
        setActiveIndex(idx);
      }
    }
  }, [slug, course]);

  if (!slug || !course) {
    return (
      <main className="app-main">
        <div className="section-shell">
          <p className="text-secondary" style={{ fontSize: 14, marginBottom: 8 }}>
            Course not found.
          </p>
          <Link href="/courses" style={{ color: 'var(--primary-color)', fontSize: 14 }}>
            ← Back to all courses
          </Link>
        </div>
      </main>
    );
  }

  const courseSlug = slug as string;
  const activeSection = course.sections[activeIndex];

  function handleOpenTutor() {
    const prompt = activeSection?.practicePrompt ?? '';
    const params = new URLSearchParams();
    params.set('course', courseSlug);
    params.set('lesson', String(activeIndex));
    if (prompt) params.set('prompt', prompt);
    router.push(`/tutor?${params.toString()}`);
  }

  function setLesson(index: number) {
    setActiveIndex(index);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(`kwanqa-last-lesson-${courseSlug}`, String(index));
    }
  }

  const hasDetailedContent =
    !!activeSection?.phrases ||
    !!activeSection?.dialogue ||
    !!activeSection?.practicePrompt;

  const isEnglishFromAmharic = courseSlug.startsWith('english-from-amharic');

  return (
    <main className="app-main">
      {/* Top section: title + blurb */}
      <section className="band-none">
        <div className="section-shell">
          <FadeInOnScroll>
            <Link
              href="/courses"
              style={{
                display: 'inline-flex',
                fontSize: 12,
                marginBottom: 8,
                color: 'var(--secondary-text)',
                textDecoration: 'none',
              }}
            >
              ← Back to all courses
            </Link>
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.05}>
            <div style={{ maxWidth: 720, marginBottom: 24 }}>
              <div className="chip" style={{ marginBottom: 8 }}>
                <span>Course</span>
              </div>
              <h1
                style={{
                  fontSize: 'clamp(24px, 3vw, 28px)',
                  fontWeight: 600,
                  marginBottom: 8,
                }}
              >
                {course.title}
              </h1>
              {course.intro && (
                <p className="text-secondary" style={{ fontSize: 14, marginBottom: 8 }}>
                  {course.intro}
                </p>
              )}

              {isEnglishFromAmharic && (
                <p
                  className="text-secondary"
                  style={{
                    fontSize: 12,
                    marginTop: 4,
                    padding: '6px 10px',
                    borderRadius: 999,
                    border: '1px solid var(--border-soft)',
                    backgroundColor: 'var(--base-variant)',
                    display: 'inline-block',
                  }}
                >
                  Tip: In the Tutor profile, set your learning mode to{' '}
                  <strong>“Learn English (from Amharic)”</strong> for the best experience in this
                  course.
                </p>
              )}
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Lesson list + details */}
      <section className="band-soft">
        <div className="section-shell">
          <FadeInOnScroll>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 260px) minmax(0, 1fr)',
                gap: 24,
              }}
            >
              {/* Lesson list */}
              <div>
                <h2
                  style={{
                    fontSize: 12,
                    textTransform: 'uppercase',
                    letterSpacing: '0.18em',
                    color: 'var(--secondary-text)',
                    marginBottom: 8,
                  }}
                >
                  Lessons in this part
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {course.sections.map((section, idx) => {
                    const isActive = idx === activeIndex;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setLesson(idx)}
                        style={{
                          textAlign: 'left',
                          borderRadius: 12,
                          border: `1px solid ${
                            isActive ? 'var(--primary-color)' : 'var(--border-soft)'
                          }`,
                          backgroundColor: isActive
                            ? 'var(--base-color)'
                            : 'var(--base-variant)',
                          padding: 10,
                          cursor: 'pointer',
                        }}
                      >
                        <p
                          style={{
                            fontSize: 13,
                            fontWeight: 600,
                            marginBottom: 4,
                          }}
                        >
                          {section.title}
                        </p>
                        <p
                          className="text-secondary"
                          style={{
                            fontSize: 12,
                          }}
                        >
                          {section.description}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active lesson content */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {hasDetailedContent && (
                  <>
                    {activeSection?.phrases && (
                      <FadeInOnScroll delay={0.05}>
                        <div className="card-soft">
                          <h2 style={{ fontSize: 14, marginBottom: 4 }}>
                            Core phrases for {activeSection.title}
                          </h2>
                          <p className="text-secondary" style={{ fontSize: 12, marginBottom: 8 }}>
                            Say each phrase out loud. Use the transliteration as a bridge, not a
                            crutch.
                          </p>
                          <div style={{ overflowX: 'auto' }}>
                            <table
                              style={{
                                width: '100%',
                                borderCollapse: 'collapse',
                                fontSize: 12,
                              }}
                            >
                              <thead>
                                <tr>
                                  <th
                                    style={{
                                      textAlign: 'left',
                                      padding: '6px 4px',
                                      borderBottom: '1px solid var(--border-soft)',
                                    }}
                                  >
                                    Amharic
                                  </th>
                                  <th
                                    style={{
                                      textAlign: 'left',
                                      padding: '6px 4px',
                                      borderBottom: '1px solid var(--border-soft)',
                                    }}
                                  >
                                    Transliteration
                                  </th>
                                  <th
                                    style={{
                                      textAlign: 'left',
                                      padding: '6px 4px',
                                      borderBottom: '1px solid var(--border-soft)',
                                    }}
                                  >
                                    Meaning / English
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {activeSection.phrases!.map((p, idx) => (
                                  <tr key={idx}>
                                    <td
                                      style={{
                                        padding: '6px 4px',
                                        borderBottom: '1px solid var(--border-soft)',
                                      }}
                                    >
                                      {p.amharic}
                                    </td>
                                    <td
                                      className="text-secondary"
                                      style={{
                                        padding: '6px 4px',
                                        borderBottom: '1px solid var(--border-soft)',
                                      }}
                                    >
                                      {p.transliteration}
                                    </td>
                                    <td
                                      className="text-secondary"
                                      style={{
                                        padding: '6px 4px',
                                        borderBottom: '1px solid var(--border-soft)',
                                      }}
                                    >
                                      {p.english}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </FadeInOnScroll>
                    )}

                    {activeSection?.dialogue && (
                      <FadeInOnScroll delay={0.1}>
                        <div className="card-soft">
                          <h2 style={{ fontSize: 14, marginBottom: 4 }}>Mini‑dialogue</h2>
                          <p className="text-secondary" style={{ fontSize: 12, marginBottom: 8 }}>
                            Use this as a script with Kwanqa. Play both roles, then let the tutor
                            correct and expand your lines.
                          </p>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                            {activeSection.dialogue!.map((line, idx) => (
                              <div key={idx} style={{ fontSize: 12 }}>
                                <p
                                  style={{
                                    fontSize: 11,
                                    fontWeight: 600,
                                    color: 'var(--primary-color)',
                                  }}
                                >
                                  Speaker {line.speaker}
                                </p>
                                <p>{line.amharic}</p>
                                <p className="text-secondary">{line.transliteration}</p>
                                <p className="text-secondary">{line.english}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </FadeInOnScroll>
                    )}

                    {activeSection?.practicePrompt && (
                      <FadeInOnScroll delay={0.15}>
                        <div className="card-soft">
                          <h2 style={{ fontSize: 14, marginBottom: 4 }}>Practice with Kwanqa</h2>
                          <p className="text-secondary" style={{ fontSize: 12, marginBottom: 8 }}>
                            Copy this into Kwanqa Tutor—or click the button to open the tutor with
                            this prompt pre‑filled and the lesson context attached.
                          </p>
                          <pre
                            style={{
                              whiteSpace: 'pre-wrap',
                              fontSize: 11,
                              borderRadius: 8,
                              border: '1px solid var(--border-soft)',
                              backgroundColor: 'var(--base-color)',
                              padding: 8,
                              marginBottom: 10,
                            }}
                          >
                            {activeSection.practicePrompt}
                          </pre>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                            <button onClick={handleOpenTutor} className="btn btn-accent">
                              Open with this lesson
                            </button>
                            <Link href="/tutor">
                              <button className="btn-ghost">Open tutor without this lesson</button>
                            </Link>
                          </div>
                        </div>
                      </FadeInOnScroll>
                    )}
                  </>
                )}

                {/* Fallback if some future lesson has no detailed content */}
                {!hasDetailedContent && (
                  <FadeInOnScroll delay={0.05}>
                    <div className="card-soft">
                      <h2 style={{ fontSize: 14, marginBottom: 4 }}>{activeSection.title}</h2>
                      <p className="text-secondary" style={{ fontSize: 12, marginBottom: 8 }}>
                        {activeSection.description}
                      </p>
                      <p className="text-secondary" style={{ fontSize: 12 }}>
                        More detailed examples and practice prompts are coming soon. For now, you
                        can ask Kwanqa Tutor to help you practice this topic in your own words.
                      </p>
                      <div style={{ marginTop: 10, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        <button
                          onClick={() => {
                            const prompt = `Kwanqa, please help me practice the topic "${activeSection.title}". I want phrases for: ${activeSection.description}`;
                            const params = new URLSearchParams();
                            params.set('course', courseSlug);
                            params.set('lesson', String(activeIndex));
                            params.set('prompt', prompt);
                            router.push(`/tutor?${params.toString()}`);
                          }}
                          className="btn btn-accent"
                        >
                          Practice this topic in Tutor
                        </button>
                      </div>
                    </div>
                  </FadeInOnScroll>
                )}
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>
    </main>
  );
}