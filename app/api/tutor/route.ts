import { NextRequest, NextResponse } from 'next/server';

type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};

type LearnerProfile = {
  level: 'absolute-beginner' | 'script-aware' | 'conversational';
  goal: 'heritage' | 'travel' | 'work' | 'curious';
  learningMode?: 'amharic' | 'english'; // direction of learning
};

type TutorRequestBody = {
  messages: ChatMessage[];
  profile?: LearnerProfile | null;
  sessionInfo?: {
    course?: string | null;
    lesson?: string | null;
  };
};

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as TutorRequestBody;

    const { messages, profile, sessionInfo } = body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: 'Missing messages array' },
        { status: 400 }
      );
    }

    const latestUserMessage =
      [...messages].reverse().find(m => m.role === 'user') ??
      messages[messages.length - 1];

    const profileText = profile
      ? `Learner profile:
- Level: ${profile.level}
- Goal: ${profile.goal}
- Learning mode: ${profile.learningMode ?? 'amharic'}
`
      : '';

    const sessionText =
      sessionInfo && (sessionInfo.course || sessionInfo.lesson)
        ? `Course context:
- Course: ${sessionInfo.course ?? 'unknown'}
- Lesson index: ${sessionInfo.lesson ?? 'unknown'}
Focus on this topic while still having a natural conversation.
`
        : '';

    const system = `
You are "Kwanqa", a friendly and patient language tutor.

${profileText}${sessionText}
GENERAL BEHAVIOR
- Always be encouraging and non‑judgmental.
- Assume the learner may be shy or nervous about speaking.
- Keep answers short and level‑appropriate.
- Use plenty of simple, real‑world examples.

LEARNING MODES
- If learning mode is "amharic":
  * The learner's target language is Amharic.
  * Use Amharic as the main language, with transliteration and English help.
- If learning mode is "english":
  * The learner already speaks Amharic and wants to improve English.
  * Use English as the main language, with Amharic support/explanation.
  * You may ask some questions in Amharic, but focus on improving English.

RESPONSE FORMAT
Always respond in this structure, in this order:

1) Target language:
   - One or a few short sentences mainly in the target language
     (Amharic if learning mode is "amharic", English if learning mode is "english").
2) Other language + transliteration:
   - Show the equivalent sentences in the other language.
   - If Amharic is used, also show transliteration.
3) Explanation:
   - A brief explanation in whichever language helps most, based on the learner's level.
4) Follow‑up question:
   - A short question in the target language that keeps the conversation going.

CORRECTIONS
- Gently correct mistakes in either language.
- Show:
  * Corrected sentence
  * Transliteration (if Amharic is involved)
  * Explanation in a few words.
- Avoid long grammar lectures; keep it practical.

LANGUAGE MIX
- If the learner is an absolute beginner in the target language, use simpler sentences and more explanation.
- If the learner is conversational, use more of the target language and fewer explanations.
`.trim();

    const historyText = messages
      .map(m => `${m.role === 'user' ? 'User' : 'Tutor'}: ${m.content}`)
      .join('\n');

    const prompt = `${system}

Conversation so far:
${historyText}

Tutor: Respond to the latest user message in the required structure.
Latest user message:
${latestUserMessage.content}
`;

    // Call your local model via Ollama
    const ollamaRes = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama3:latest', // updated to match your installed model
        prompt,
        stream: false,
      }),
    });

    if (!ollamaRes.ok) {
      const text = await ollamaRes.text();
      console.error('Ollama error:', text);
      return NextResponse.json(
        { error: 'Failed to reach local model' },
        { status: 500 }
      );
    }

    const ollamaJson = (await ollamaRes.json()) as { response?: string };
    const reply = ollamaJson.response ?? '';

    return NextResponse.json({ reply });
  } catch (err) {
    console.error('Tutor API error:', err);
    return NextResponse.json(
      { error: 'Unexpected error in tutor API' },
      { status: 500 }
    );
  }
}