// ── Insults data ───────────────────────────────────────────────────────────
// Each entry: { text, relationship[], tone (1=Subtle 2=Sharp 3=Savage), occasion[] }
// "general" in relationship/occasion acts as a wildcard match.

const insults = [
  // Subtle ──────────────────────────────────────────────────────────────────
  {
    text: "I'm impressed by your commitment to your current level of understanding.",
    relationship: ["coworker", "boss", "friend", "general"],
    tone: 1,
    occasion: ["meeting", "party", "text", "general"]
  },
  {
    text: "You bring a special energy to conversations — the kind that makes everyone else think harder.",
    relationship: ["coworker", "boss", "friend", "general"],
    tone: 1,
    occasion: ["meeting", "party", "general"]
  },
  {
    text: "You have a very distinctive approach to things. I've genuinely never seen anyone do it quite that way.",
    relationship: ["coworker", "boss", "general"],
    tone: 1,
    occasion: ["meeting", "general"]
  },
  {
    text: "I always know exactly what to expect from you.",
    relationship: ["coworker", "boss", "friend", "general"],
    tone: 1,
    occasion: ["meeting", "party", "general"]
  },
  {
    text: "You make every room feel more... alive.",
    relationship: ["friend", "coworker", "general"],
    tone: 1,
    occasion: ["party", "general"]
  },
  {
    text: "Your confidence is one of the most consistent things about you.",
    relationship: ["coworker", "boss", "general"],
    tone: 1,
    occasion: ["meeting", "general"]
  },
  {
    text: "I really appreciate how sure of yourself you always are.",
    relationship: ["boss", "coworker"],
    tone: 1,
    occasion: ["meeting", "general"]
  },
  {
    text: "You have a truly unique way of seeing things that most people simply don't.",
    relationship: ["friend", "coworker", "general"],
    tone: 1,
    occasion: ["party", "text", "general"]
  },
  {
    text: "You're the kind of person people remember.",
    relationship: ["ex", "friend", "general"],
    tone: 1,
    occasion: ["text", "general"]
  },
  {
    text: "There's no one quite like you. That's something I think about often.",
    relationship: ["ex", "friend"],
    tone: 1,
    occasion: ["text", "general"]
  },
  {
    text: "You always bring such energy to these conversations.",
    relationship: ["coworker", "boss", "friend", "general"],
    tone: 1,
    occasion: ["meeting", "party", "general"]
  },
  {
    text: "I find your perspective genuinely interesting.",
    relationship: ["coworker", "boss", "general"],
    tone: 1,
    occasion: ["meeting", "general"]
  },

  // Sharp ───────────────────────────────────────────────────────────────────
  {
    text: "I love how you never let facts get in the way of your opinions.",
    relationship: ["coworker", "boss", "friend", "general"],
    tone: 2,
    occasion: ["meeting", "party", "text", "general"]
  },
  {
    text: "It's refreshing how unbothered you are by nuance.",
    relationship: ["coworker", "boss", "friend", "general"],
    tone: 2,
    occasion: ["meeting", "party", "general"]
  },
  {
    text: "You speak with the authority of someone who has never been confused by the facts.",
    relationship: ["coworker", "boss", "general"],
    tone: 2,
    occasion: ["meeting", "general"]
  },
  {
    text: "There's something almost poetic about how consistently you miss the point.",
    relationship: ["coworker", "boss", "friend", "general"],
    tone: 2,
    occasion: ["meeting", "party", "text", "general"]
  },
  {
    text: "You have a talent for simplifying things — well beyond what the situation calls for.",
    relationship: ["coworker", "boss", "general"],
    tone: 2,
    occasion: ["meeting", "general"]
  },
  {
    text: "Your opinions are clearly your own — no outside influence from research or reflection.",
    relationship: ["coworker", "boss", "friend", "general"],
    tone: 2,
    occasion: ["meeting", "party", "text", "general"]
  },
  {
    text: "I find it genuinely impressive how quickly you form views that will take years to unlearn.",
    relationship: ["coworker", "boss", "friend", "general"],
    tone: 2,
    occasion: ["meeting", "party", "text", "general"]
  },
  {
    text: "You've accomplished so much, all things considered.",
    relationship: ["coworker", "boss", "general"],
    tone: 2,
    occasion: ["meeting", "general"]
  },
  {
    text: "Not everyone could do what you do. Honestly, most people wouldn't try.",
    relationship: ["coworker", "boss", "general"],
    tone: 2,
    occasion: ["meeting", "general"]
  },
  {
    text: "Your ideas are always... memorable.",
    relationship: ["boss", "coworker"],
    tone: 2,
    occasion: ["meeting", "general"]
  },
  {
    text: "I admire how unbothered you are by what other people think.",
    relationship: ["friend", "coworker", "general"],
    tone: 2,
    occasion: ["party", "text", "general"]
  },
  {
    text: "You always manage to make an impression. Every single time.",
    relationship: ["coworker", "boss", "friend", "general"],
    tone: 2,
    occasion: ["meeting", "party", "general"]
  },
  {
    text: "You're someone who has never let a lack of information slow you down.",
    relationship: ["boss", "coworker"],
    tone: 2,
    occasion: ["meeting", "general"]
  },
  {
    text: "I genuinely didn't think anyone could handle this role the way you do.",
    relationship: ["coworker", "boss"],
    tone: 2,
    occasion: ["meeting", "general"]
  },
  {
    text: "You've clearly put a lot of yourself into this. It shows.",
    relationship: ["coworker", "boss", "friend", "general"],
    tone: 2,
    occasion: ["meeting", "general"]
  },
  {
    text: "Spending time with you has genuinely made me a better judge of character.",
    relationship: ["ex", "friend"],
    tone: 2,
    occasion: ["text", "party", "general"]
  },
  {
    text: "You're the kind of person who teaches others things they didn't know they needed to learn.",
    relationship: ["ex", "friend", "general"],
    tone: 2,
    occasion: ["text", "general"]
  },

  // Savage ──────────────────────────────────────────────────────────────────
  {
    text: "You have a mind remarkably unburdened by the complexities of thought. Your confidence is truly independent of any supporting evidence.",
    relationship: ["coworker", "boss", "friend", "general"],
    tone: 3,
    occasion: ["meeting", "party", "text", "general"]
  },
  {
    text: "You have a rare gift for arriving at the wrong conclusion with absolute certainty.",
    relationship: ["coworker", "boss", "friend", "general"],
    tone: 3,
    occasion: ["meeting", "party", "general"]
  },
  {
    text: "I admire how you approach every problem with a completely open — and entirely empty — mind.",
    relationship: ["coworker", "boss", "general"],
    tone: 3,
    occasion: ["meeting", "general"]
  },
  {
    text: "You're the kind of person who can witness something firsthand and still misunderstand it.",
    relationship: ["coworker", "boss", "friend", "general"],
    tone: 3,
    occasion: ["meeting", "party", "text", "general"]
  },
  {
    text: "You're proof that a strong opinion and a working knowledge of the subject are entirely separate things.",
    relationship: ["coworker", "boss", "general"],
    tone: 3,
    occasion: ["meeting", "general"]
  },
  {
    text: "You're proof that confidence and competence are entirely unrelated qualities.",
    relationship: ["coworker", "boss", "general"],
    tone: 3,
    occasion: ["meeting", "general"]
  },
  {
    text: "Somehow you always manage to exceed expectations — which says everything about the expectations.",
    relationship: ["coworker", "boss"],
    tone: 3,
    occasion: ["meeting", "general"]
  },
  {
    text: "I genuinely enjoy your company — in the same way one enjoys a long flight delay. Character building.",
    relationship: ["friend", "coworker", "general"],
    tone: 3,
    occasion: ["party", "general"]
  },
  {
    text: "Looking back, you really did give me the greatest gift: clarity.",
    relationship: ["ex"],
    tone: 3,
    occasion: ["text", "general"]
  },
  {
    text: "You have a rare talent for making everyone around you feel better about their own choices.",
    relationship: ["friend", "coworker", "general"],
    tone: 3,
    occasion: ["party", "meeting", "general"]
  },
  {
    text: "You speak with such conviction. I find that fascinating, given everything.",
    relationship: ["boss", "coworker", "general"],
    tone: 3,
    occasion: ["meeting", "general"]
  },
  {
    text: "Your work ethic is a constant reminder that the bar exists for a reason.",
    relationship: ["coworker"],
    tone: 3,
    occasion: ["meeting", "general"]
  },
  {
    text: "I've learned so much from watching you. Mostly what not to do, but still.",
    relationship: ["boss", "coworker", "ex"],
    tone: 3,
    occasion: ["general", "text"]
  },
  {
    text: "You're the kind of person I'd never want to change. The world needs its cautionary tales.",
    relationship: ["ex", "friend"],
    tone: 3,
    occasion: ["text", "general"]
  },
  {
    text: "I admire how you've made peace with being exactly who you are.",
    relationship: ["friend", "ex", "general"],
    tone: 3,
    occasion: ["party", "text", "general"]
  },
  {
    text: "Your ability to simplify complex problems is remarkable — mostly by ignoring them entirely.",
    relationship: ["boss", "coworker"],
    tone: 3,
    occasion: ["meeting", "general"]
  },
  {
    text: "You always bring something to the table. It's rarely useful, but it's always something.",
    relationship: ["coworker", "boss"],
    tone: 3,
    occasion: ["meeting", "general"]
  },
];

// ── State ──────────────────────────────────────────────────────────────────

let selectedTone = 1;
let lastPickedIndex = -1;

// ── Elements ───────────────────────────────────────────────────────────────

const generateBtn = document.getElementById('generate-btn');
const copyBtn     = document.getElementById('copy-btn');
const anotherBtn  = document.getElementById('another-btn');
const output      = document.getElementById('output');
const insultText  = document.getElementById('insult-text');
const toneBtns    = document.querySelectorAll('.tone-btn');

// ── Tone selection ─────────────────────────────────────────────────────────

toneBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    toneBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedTone = parseInt(btn.dataset.tone);
  });
});

// ── Pick an insult ─────────────────────────────────────────────────────────

function pickInsult() {
  const relationship = document.getElementById('relationship').value;
  const occasion     = document.getElementById('occasion').value;

  // Filter by all three context dimensions
  let pool = insults.filter(i => {
    const rMatch = i.relationship.includes(relationship) || relationship === 'general';
    const oMatch = i.occasion.includes(occasion)         || occasion === 'general';
    return rMatch && oMatch && i.tone === selectedTone;
  });

  // Fallback: match tone only if nothing fits the full context
  if (pool.length === 0) {
    pool = insults.filter(i => i.tone === selectedTone);
  }

  // Avoid repeating the last pick when the pool allows it
  const available = pool.length > 1
    ? pool.filter(i => insults.indexOf(i) !== lastPickedIndex)
    : pool;

  const pick = available[Math.floor(Math.random() * available.length)];
  lastPickedIndex = insults.indexOf(pick);
  return pick;
}

// ── Render ─────────────────────────────────────────────────────────────────

function showInsult() {
  const insult = pickInsult();
  insultText.textContent = `"${insult.text}"`;
  output.hidden = false;
  output.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ── Events ─────────────────────────────────────────────────────────────────

generateBtn.addEventListener('click', showInsult);
anotherBtn.addEventListener('click', showInsult);

copyBtn.addEventListener('click', () => {
  const text = insultText.textContent.replace(/^"|"$/g, '');
  navigator.clipboard.writeText(text).then(() => {
    const original = copyBtn.textContent;
    copyBtn.textContent = 'Copied';
    setTimeout(() => { copyBtn.textContent = original; }, 1500);
  });
});
