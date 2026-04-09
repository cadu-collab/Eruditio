module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { relationship, occasion, tone, language } = req.body;
  const isSpanish = language === 'es';

  const toneLabel = { 1: 'subtle', 2: 'sharp', 3: 'savage' }[tone] ?? 'subtle';

  const relationshipLabel = {
    general:  'anyone (no specific relationship)',
    coworker: 'a professional peer / coworker',
    boss:     'a superior / boss',
    friend:   'a close friend',
    ex:       'a former romantic partner',
  }[relationship] ?? 'anyone';

  const occasionLabel = {
    general:     'any situation',
    'in-person': 'a face-to-face interaction',
    email:       'a written email (professional or semi-formal)',
    text:        'a casual text message',
  }[occasion] ?? 'any situation';

  const system = `You generate sophisticated insults disguised as compliments for the app Eruditio. Respond ONLY with valid JSON — no markdown, no explanation, nothing else.`;

  const user = `Generate exactly 5 distinct compliments that are actually insults in disguise.

Context:
- Recipient: ${relationshipLabel}
- Occasion: ${occasionLabel}
- Tone: ${toneLabel}
  • subtle = sounds like a genuine compliment; the insult is barely noticeable and fully deniable
  • sharp = clearly backhanded but still phrased as praise
  • savage = devastating; still technically a compliment but the sting is obvious

Rules:
- Each must sound sincere on first read
- The insult is always implied, never stated directly
- Stay under 2 sentences each
- Vary structure and approach across the 5 — no repetition of phrasing patterns
- Match the tone level strictly

Respond with this exact JSON structure:
{
  "insults": [
    { "text": "..." },
    { "text": "..." },
    { "text": "..." },
    { "text": "..." },
    { "text": "..." }
  ]
}${isSpanish ? '\n\nRespond entirely in Spanish. The compliments must sound natural in Spanish, not translated.' : ''}`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key':         process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'content-type':      'application/json',
      },
      body: JSON.stringify({
        model:      'claude-haiku-4-5-20251001',
        max_tokens: 1024,
        system,
        messages: [{ role: 'user', content: user }],
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('Anthropic error:', err);
      return res.status(502).json({ error: 'API request failed' });
    }

    const data = await response.json();
    const raw = data.content[0].text.replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/, '').trim();
    const parsed = JSON.parse(raw);
    res.status(200).json(parsed);

  } catch (err) {
    console.error('Handler error:', err);
    res.status(500).json({ error: 'Failed to generate insults' });
  }
};
