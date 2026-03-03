export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-learn-languages-from-tiktok',
    title: 'How to Learn Languages from TikTok Videos',
    description:
      "TikTok isn't just for entertainment. Discover how short-form video content can accelerate your language learning with the right approach and tools.",
    date: '2025-01-15',
    readTime: '6 min read',
    category: 'Learning Tips',
    content: `
## Why short videos are perfect for language learning

Short-form video has become the dominant content format worldwide. Platforms like TikTok, YouTube Shorts, and Instagram Reels serve billions of clips daily — many in languages other than your own. This creates an enormous, constantly refreshing library of authentic language material.

Unlike textbooks, these videos show language as it's actually spoken: with slang, natural pacing, cultural references, and real-world context. A 30-second TikTok about street food in Seoul teaches Korean vocabulary that no classroom can replicate.

## The science behind video-based learning

Research in second language acquisition consistently shows that **comprehensible input** — language you can mostly understand — is the fastest path to fluency. Videos provide multiple channels of comprehensible input simultaneously:

- **Audio** — hear native pronunciation and natural speech patterns
- **Visual context** — see what's being talked about, making unknown words guessable
- **Repetition** — short videos are designed to be rewatched, reinforcing memory
- **Emotional engagement** — entertaining content activates deeper memory encoding

A 2023 study from the University of Barcelona found that learners who supplemented traditional study with short video content improved vocabulary retention by 34% compared to a control group.

## How to get started

### 1. Choose content you genuinely enjoy

The biggest advantage of video-based learning is motivation. You're not forcing yourself through boring exercises — you're watching content you'd watch anyway, but in your target language.

Start by searching for topics you already love: cooking, fitness, comedy, travel, fashion, or tech. Follow creators who make content in your target language.

### 2. Watch actively, not passively

Don't just scroll. When you find a video with interesting language:

- Watch it once for the general meaning
- Watch again, focusing on specific words or phrases
- Try to repeat what the speaker says, matching their pronunciation
- Write down new vocabulary with context

### 3. Use the right tools

This is where apps like Retell come in. Instead of doing all the analysis manually, you can share any TikTok directly to Retell. Our AI will:

- Transcribe the audio with word-level timestamps
- Identify key vocabulary with definitions and examples
- Generate pronunciation exercises for each phrase
- Create spaced repetition flashcards so you never forget

### 4. Build a daily habit

Consistency matters more than duration. Spending 10 minutes a day learning from videos you enjoy will compound faster than occasional hour-long study sessions.

Set a goal: learn from one new video per day. Over a month, that's 30 authentic language samples with vocabulary, pronunciation practice, and spaced repetition built in.

## Common mistakes to avoid

**Don't rely on subtitles alone.** Subtitles help, but they can become a crutch. Try watching without them first, then use them to check your understanding.

**Don't try to understand every word.** Tolerance for ambiguity is a key language learning skill. Get the gist, then focus on the phrases that interest you most.

**Don't skip pronunciation practice.** Passive listening helps comprehension, but active speaking builds fluency. Record yourself repeating phrases and compare to the original.

## The bottom line

TikTok and short-form video aren't distractions from language learning — they're one of the most effective tools available. With the right approach, every scroll through your feed becomes a micro-lesson in your target language.
    `.trim(),
  },
  {
    slug: 'spaced-repetition-explained',
    title: 'Spaced Repetition: The Science of Never Forgetting',
    description:
      'Learn how the SM-2 algorithm and spaced repetition systems can help you remember vocabulary permanently, not just for the next quiz.',
    date: '2025-01-08',
    readTime: '5 min read',
    category: 'Science',
    content: `
## The forgetting curve problem

In 1885, German psychologist Hermann Ebbinghaus discovered something that every language learner knows intuitively: we forget things. Fast.

Without review, you lose roughly 70% of newly learned information within 24 hours. After a week, you might remember less than 25%. This is the **forgetting curve**, and it's the reason most vocabulary study feels futile.

But Ebbinghaus also discovered the solution: **spaced review**. Each time you successfully recall a piece of information, the forgetting curve flattens. The memory becomes more durable, and you can wait longer before the next review.

## How spaced repetition works

Spaced repetition systems (SRS) automate this process. Instead of reviewing everything every day, the system calculates the optimal time to show you each item:

- **New word learned today** → review tomorrow
- **Recalled correctly tomorrow** → review in 3 days
- **Recalled correctly after 3 days** → review in 1 week
- **Recalled correctly after 1 week** → review in 2 weeks
- And so on, with intervals growing exponentially

If you forget a word, the interval resets to a shorter period. The system adapts to your actual memory performance.

## The SM-2 algorithm

The most widely used SRS algorithm is SM-2, developed by Piotr Wozniak in 1987. It's the foundation of popular tools like Anki and is what Retell uses for vocabulary review.

SM-2 tracks three values for each flashcard:

- **Ease factor** — how easy you find this particular item (starts at 2.5)
- **Interval** — days until the next review
- **Repetition count** — how many times you've successfully recalled it

After each review, you rate your recall quality from 0 (complete blackout) to 5 (effortless recall). The algorithm adjusts all three values based on your rating.

## Why SRS works so well for vocabulary

Language vocabulary is the ideal use case for spaced repetition:

**Volume**: A functional vocabulary requires thousands of words. You can't review all of them every day, so intelligent scheduling is essential.

**Binary recall**: You either know a word or you don't. This makes self-grading reliable and the algorithm's predictions accurate.

**Context independence**: Unlike grammar rules, individual words can be effectively tested in isolation (though contextual examples help enormously).

**Long-term goal**: Language learning is a multi-year project. SRS is specifically designed for permanent retention, not cramming.

## Making SRS more effective

### Add context, not just translations

Instead of "casa = house", include the sentence where you first encountered the word. "Mi casa es tu casa" creates a richer memory trace and helps you recall the word in natural speech.

### Use audio, not just text

Hearing the native pronunciation during review activates auditory memory alongside visual memory. This dual coding makes recall more robust and improves your own pronunciation.

### Review daily, even for just 5 minutes

The power of SRS comes from consistency. Missing a day means cards pile up, creating a discouraging backlog. A short daily session prevents this and keeps intervals accurate.

### Trust the algorithm

It's tempting to review "easy" cards more often or skip "hard" ones. Resist this urge. The algorithm is optimizing your time across thousands of items in ways your intuition can't match.

## The compound effect

Here's what consistent SRS practice looks like over time:

- **Month 1**: ~150 words learned, reviewing 20-30 cards daily
- **Month 3**: ~400 words, still reviewing 20-30 cards daily (most earlier words have long intervals)
- **Month 6**: ~800 words, daily review stays manageable
- **Year 1**: ~1,500+ words — approaching conversational fluency in most languages

The key insight: your daily workload stays roughly constant even as your total vocabulary grows, because older words need increasingly infrequent review.

## Getting started

If you're new to spaced repetition, start with vocabulary from content you've consumed — words you've heard in videos, read in articles, or encountered in conversations. These words already have context and emotional associations, making them easier to retain.

Retell automatically creates SRS flashcards from every lesson, complete with audio pronunciation, example sentences, and the original video context. This means every video you learn from automatically feeds your long-term vocabulary system.
    `.trim(),
  },
  {
    slug: 'pronunciation-tips-for-language-learners',
    title: 'Pronunciation Tips That Actually Work',
    description:
      'Stop sounding like a textbook. These evidence-based pronunciation techniques will help you sound more natural in any language.',
    date: '2024-12-20',
    readTime: '7 min read',
    category: 'Speaking',
    content: `
## Why pronunciation matters more than you think

You can know thousands of words and have perfect grammar, but if your pronunciation is off, native speakers will struggle to understand you. Worse, poor pronunciation can make you sound less competent than you are, undermining your confidence in real conversations.

The good news: pronunciation is a physical skill, like playing an instrument. With targeted practice and good feedback, anyone can improve dramatically — regardless of age or "natural talent."

## Start with sounds, not words

Every language has a set of distinct sounds (phonemes). English has about 44, Spanish has 24, Mandarin has about 35 (plus 4 tones). Many of these sounds don't exist in your native language.

Before drilling vocabulary pronunciation, identify which sounds in your target language are new to you:

- **Spanish**: the rolled "rr" and the distinction between "b" and "v"
- **French**: nasal vowels and the uvular "r"
- **Japanese**: the "r/l" sound that's neither English "r" nor "l"
- **Mandarin**: the four tones that change word meaning entirely

Spend time with minimal pairs — words that differ by only one sound. This trains your ear to hear distinctions and your mouth to produce them.

## The shadowing technique

Shadowing is one of the most effective pronunciation exercises, used by professional interpreters:

1. Find audio of a native speaker (a short video works perfectly)
2. Play a short phrase (3-5 words)
3. Immediately repeat it, trying to match the speaker's rhythm, intonation, and sounds
4. Record yourself and compare
5. Repeat until you're satisfied

The key is **immediacy** — you're not memorizing the text and reading it back. You're mimicking the physical sensation of the sounds, almost like singing along to a song.

Start with short phrases and gradually work up to longer sentences. Focus on matching the overall melody of the speech, not just individual sounds.

## Rhythm and intonation matter most

Native speakers often say they can "tell" someone is foreign before they even make a pronunciation mistake. What they're detecting is prosody — the rhythm, stress, and intonation patterns of speech.

Every language has characteristic patterns:

- **English** is stress-timed: stressed syllables come at roughly equal intervals, and unstressed syllables get compressed
- **Spanish** is syllable-timed: each syllable takes roughly equal time
- **Japanese** is mora-timed: each mora (roughly a syllable) gets equal duration
- **Mandarin** uses lexical tone: pitch contour changes word meaning

Getting the rhythm right makes individual sound errors less noticeable and makes your speech significantly more comprehensible.

## Use your phone as a pronunciation lab

Modern technology has made pronunciation practice accessible to everyone:

### Record and compare

Record yourself saying a phrase, then play it back next to the original. You'll hear differences you couldn't notice in real-time. Focus on one aspect at a time: first get the rhythm right, then work on individual sounds.

### Slow down native audio

Most media players let you slow audio to 0.75x or 0.5x speed. This reveals details of pronunciation — connected speech, vowel reduction, consonant clusters — that are invisible at full speed.

### Get AI feedback

Apps like Retell use Azure Speech AI to give you word-by-word pronunciation scores. This objective feedback shows you exactly which sounds need work, removing the guesswork from practice.

## Common pronunciation traps

### The spelling trap

Don't let spelling influence your pronunciation. English is notorious for this ("though," "through," "thought" all have different vowel sounds), but it happens in every language with a writing system.

Listen to how words actually sound, not how they're spelled. When learning vocabulary, always learn the pronunciation alongside the written form.

### The perfectionism trap

You don't need to sound like a native speaker. The goal is **intelligibility** — being clearly understood by native speakers. Many successful polyglots have noticeable accents and communicate perfectly.

Perfectionism leads to avoidance, which is the real enemy of pronunciation improvement. Speak imperfectly and often rather than silently and never.

### The isolation trap

Practicing sounds in isolation is useful for beginners, but real improvement comes from practicing in context. Words sound different in sentences than in isolation due to connected speech phenomena:

- **Linking**: "an apple" sounds like "a napple"
- **Reduction**: "going to" becomes "gonna"
- **Assimilation**: "ten bags" might sound like "tem bags"

Practice with full phrases from real content to develop natural connected speech patterns.

## Building a pronunciation routine

Here's a practical 10-minute daily routine:

1. **Warm up (2 min)**: Practice any difficult individual sounds with minimal pairs
2. **Shadow (5 min)**: Pick a short video clip and shadow it 5-10 times, getting closer each time
3. **Record and review (3 min)**: Record yourself speaking freely about any topic for 1 minute. Listen back and note one area to improve tomorrow

Consistency beats intensity. Ten minutes daily for a month will improve your pronunciation more than a single two-hour session.

## The role of content you love

The reason video-based learning works so well for pronunciation is motivation and repetition. When you love a piece of content, you naturally want to rewatch it and imitate the speaker. This effortless repetition is exactly what pronunciation practice requires.

Find creators whose speaking style you admire and want to emulate. Their voice becomes your model, and every lesson becomes a pronunciation workshop.
    `.trim(),
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
