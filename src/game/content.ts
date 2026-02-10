export type ScoreKey = 'I' | 'E' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';

export type Scores = Record<ScoreKey, number>;

export interface Answer {
  text: string;
  scores: Partial<Scores>;
}

export interface Question {
  id: string;
  text: string;
  answers: Answer[];
}

export const INITIAL_SCORES: Scores = {
  I: 0, E: 0,
  S: 0, N: 0,
  T: 0, F: 0,
  J: 0, P: 0
};

// Phase 1 Questions (Common)
export const PHASE_1_QUESTIONS: Question[] = [
  {
    id: 'Q1',
    text: 'You arrive at school on Valentine\'s Day. What\'s the first thing you notice?',
    answers: [
      { text: 'The atmosphere is bustling with excitement.', scores: { I: 3 } },
      { text: 'A specific person you are looking for.', scores: { I: 1 } },
      { text: 'The decorations and potential activities.', scores: { E: 3 } },
      { text: 'My friends calling me over.', scores: { E: 1 } },
    ]
  },
  {
    id: 'Q2',
    text: 'A friend asks for advice on giving a gift. What do you say?',
    answers: [
      { text: 'Give them something practical they need.', scores: { T: 4 } },
      { text: 'Make something handmade and sentimental.', scores: { T: 2 } },
      { text: 'Just go tell them how you feel directly!', scores: { F: 4 } },
      { text: 'Plan a surprise scenario for them.', scores: { F: 2 } },
    ]
  },
  {
    id: 'Q3',
    text: 'You accidentally bump into someone carrying a lot of things. You...',
    answers: [
      { text: 'Immediately apologize and help pick things up.', scores: { S: 4 } },
      { text: 'check if anything is broken.', scores: { S: 2 } },
      { text: 'Ask if they are okay and where they are going.', scores: { N: 4 } },
      { text: 'Wonder why they are carrying so much stuff.', scores: { N: 2 } },
    ]
  },
  {
    id: 'Q4',
    text: 'The student council announces a surprise event. You think:',
    answers: [
      { text: 'I hope it doesn\'t disrupt the schedule.', scores: { T: 3 } },
      { text: 'I wonder what logic they used to plan this.', scores: { T: 1 } },
      { text: 'Sounds fun! I\'m excited.', scores: { F: 3 } },
      { text: 'I hope everyone enjoys it.', scores: { F: 1 } },
    ]
  }
];

// Phase 2 Questions - Thinking Path (Room 1)
export const PHASE_2_THINKING_QUESTIONS: Question[] = [
  {
    id: 'Q5.1',
    text: '[Thinking Path] You verify the event details. A conflict arises. You:',
    answers: [
      { text: 'Stick to the rules to be fair.', scores: { I: 4 } },
      { text: 'Wait and see how others react.', scores: { I: 2 } },
      { text: 'Lead the group to a solution.', scores: { E: 4 } },
      { text: 'Debate the best possible outcome.', scores: { E: 2 } },
    ]
  },
  {
    id: 'Q6.1',
    text: '[Thinking Path] The problem is solved, but someone is upset. You:',
    answers: [
      { text: 'Explain why the solution was necessary.', scores: { J: 3 } },
      { text: 'Give them space to cool down.', scores: { J: 1 } },
      { text: 'Try to cheer them up with a joke.', scores: { P: 3 } },
      { text: 'Offer to help them with their part.', scores: { P: 1 } },
    ]
  },
    {
    id: 'Q7.1',
    text: '[Thinking Path] It\'s almost time to go home. You reflect on the day:',
    answers: [
      { text: 'It was productive effectively.', scores: { S: 3 } },
      { text: 'I learned some new things.', scores: { S: 1 } },
      { text: 'I wonder what could have been done better.', scores: { N: 3 } },
      { text: 'I\'m thinking about tomorrow\'s plan.', scores: { N: 1 } },
    ]
  },
    {
    id: 'Q8.1',
    text: '[Thinking Path] Final thought before leaving:',
    answers: [
      { text: 'Everything is in order.', scores: { J: 4 } },
      { text: 'I\'ll finish the rest later.', scores: { J: 2 } },
      { text: 'Let\'s see what happens next.', scores: { P: 4 } },
      { text: 'Maybe I\'ll change my plans.', scores: { P: 2 } },
    ]
  }
];

// Phase 2 Questions - Feeling Path (Room 2)
export const PHASE_2_FEELING_QUESTIONS: Question[] = [
  {
    id: 'Q5.2',
    text: '[Feeling Path] You see someone looking lonely at the event. You:',
    answers: [
      { text: 'Quietly approach them to check in.', scores: { I: 4 } },
      { text: 'Wait for them to look at you first.', scores: { I: 2 } },
      { text: 'Invite them loudly to join your group.', scores: { E: 4 } },
      { text: 'Go over and start a fun conversation.', scores: { E: 2 } },
    ]
  },
  {
    id: 'Q6.2',
    text: '[Feeling Path] They share a personal story. You feel:',
    answers: [
      { text: 'Deeply moved and listen intently.', scores: { J: 3 } },
      { text: 'Appreciative of their trust.', scores: { J: 1 } },
      { text: 'Inspired to share your own story.', scores: { P: 3 } },
      { text: 'Curious about their feelings.', scores: { P: 1 } },
    ]
  },
      {
    id: 'Q7.2',
    text: '[Feeling Path] The atmosphere becomes romantic. Your reaction:',
    answers: [
      { text: 'I enjoy the moment as it is.', scores: { S: 3 } },
      { text: 'I notice the small details around us.', scores: { S: 1 } },
      { text: 'I imagine what this could lead to.', scores: { N: 3 } },
      { text: 'I feel a connection to something bigger.', scores: { N: 1 } },
    ]
  },
    {
    id: 'Q8.2',
    text: '[Feeling Path] As the day ends, you promise to:',
    answers: [
      { text: 'Keep in touch regularly.', scores: { J: 4 } },
      { text: 'Meet up again sometime soon.', scores: { J: 2 } },
      { text: 'Go with the flow of our friendship.', scores: { P: 4 } },
      { text: 'See where life takes us.', scores: { P: 2 } },
    ]
  }
];

export interface ResultType {
  mbti: string;
  title: string;
  description: string;
  quote?: string;
}

export const RESULTS: Record<string, ResultType> = {
  // Thinking Types
  'INTJ': { mbti: 'INTJ', title: 'Quietly (แอบรัก)', description: 'Observant and strategic. You keep your feelings hidden, waiting for the perfect moment that may never come unless you act.', quote: 'Love is a strategic move.' },
  'INTP': { mbti: 'INTP', title: 'Almost (ไปต่อไม่ได้)', description: 'Logical and curious. You analyze love so much that you might miss the emotional cues, leading to an "almost" relationship.', quote: 'Hypothetically, we work.' },
  'ENTJ': { mbti: 'ENTJ', title: 'All In (ใจกล้า)', description: 'Bold and decisive. When you know what you want, you go for it with 100% effort. Love is a goal to be achieved.', quote: 'I choose you.' },
  'ENTP': { mbti: 'ENTP', title: 'Almost (ไปต่อไม่ได้)', description: 'Inventive and enthusiastic. You love the chase and the possibilities, but consistency might be a challenge.', quote: 'What if we...?' }, // Note: Using 'Almost' for ENTP as per shared image if applicable, or custom. Reusing title for now based on image analysis similarity or grouping.
  
  'ISTJ': { mbti: 'ISTJ', title: 'Ones & Always (รักสุดท้าย)', description: 'Responsible and sincere. You take relationships seriously and aim for long-term stability.', quote: 'You can count on me.' },
  'ISTP': { mbti: 'ISTP', title: 'Before I Knew (เผลอใจ)', description: 'Practical and cool. You didn\'t expect to fall in love, but it happened while you were busy living life.', quote: 'It just happened.' },
  'ESTJ': { mbti: 'ESTJ', title: 'Solf Place (สบายใจ)', description: 'Organized and dedicated. You show love through actions and creating a secure environment.', quote: 'I\'ll take care of it.' }, // Typo 'Solf' -> 'Safe' or 'Soft'? detailed as 'Solf Place' in image
  'ESTP': { mbti: 'ESTP', title: 'All In (ใจกล้า)', description: 'Energetic and spontaneous. You love the thrill and express affection through grand gestures and fun.', quote: 'Let\'s do this!' },

  // Feeling Types
  'INFJ': { mbti: 'INFJ', title: 'Ones & Always (รักสุดท้าย)', description: 'Insightful and principled. You seek deep, meaningful connections and are fiercely loyal.', quote: 'Forever is not enough.' },
  'INFP': { mbti: 'INFP', title: 'Quietly (แอบรัก)', description: 'Idealistic and empathetic. You dream of a perfect romance but might be too shy to initiate it.', quote: 'In my dreams, we are perfect.' },
  'ENFJ': { mbti: 'ENFJ', title: 'Golden Chapter (สมหวัง)', description: 'Charismatic and inspiring. You bring out the best in others and strive for a harmonious relationship.', quote: 'We shine together.' },
  'ENFP': { mbti: 'ENFP', title: 'Before I Knew (เผลอใจ)', description: 'Enthusiastic and creative. You fall in love with souls and possibilities, often surprisingly quickly.', quote: 'Magic exists, I found you.' },

  'ISFJ': { mbti: 'ISFJ', title: 'Just Us (เพื่อน)', description: 'Warm and protector. You value harmony and often start as friends before developing deeper feelings.', quote: 'Always by your side.' },
  'ISFP': { mbti: 'ISFP', title: 'Solf Place (สบายใจ)', description: 'Artistic and sensitive. You express love through gentle actions and shared experiences.', quote: 'You feel like home.' },
  'ESFJ': { mbti: 'ESFJ', title: 'Just Us (เพื่อน)', description: 'Caring and social. You love to support your partner and are very attuned to their needs.', quote: 'Let me help you.' },
  'ESFP': { mbti: 'ESFP', title: 'Golden Chapter (สมหวัง)', description: 'Spontaneous and playful. You make every moment together fun and memorable.', quote: 'Life is a party with you.' },
};
