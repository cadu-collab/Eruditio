// ── State ──────────────────────────────────────────────────────────────────

let selectedTone = 1;

// ── Elements ───────────────────────────────────────────────────────────────

const generateBtn       = document.getElementById('generate-btn');
const output            = document.getElementById('output');
const resultsList       = document.getElementById('results-list');
const outputPlaceholder = document.getElementById('output-placeholder');
const toneBtns          = document.querySelectorAll('.tone-btn');

// ── Tone selection ─────────────────────────────────────────────────────────

toneBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    toneBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedTone = parseInt(btn.dataset.tone);
  });
});

// ── Render ─────────────────────────────────────────────────────────────────

async function showInsults() {
  const relationship = document.getElementById('relationship').value;
  const occasion     = document.getElementById('occasion').value;

  generateBtn.disabled     = true;
  generateBtn.textContent  = 'Generating\u2026';
  resultsList.innerHTML    = '<li class="result-loading">Crafting your compliments\u2026</li>';
  output.hidden            = false;
  outputPlaceholder.hidden = true;

  try {
    const res = await fetch('/api/generate', {
      method:  'POST',
      headers: { 'content-type': 'application/json' },
      body:    JSON.stringify({ relationship, occasion, tone: selectedTone }),
    });

    if (!res.ok) throw new Error('API error');

    const { insults } = await res.json();

    resultsList.innerHTML = '';
    insults.forEach((insult, i) => {
      const li = document.createElement('li');
      li.className = 'result-item animate';
      li.style.animationDelay = `${i * 60}ms`;

      const num = document.createElement('span');
      num.className = 'result-num';
      num.setAttribute('aria-hidden', 'true');
      num.textContent = String(i + 1).padStart(2, '0');

      const text = document.createElement('p');
      text.className = 'result-text';
      text.textContent = insult.text;

      const btn = document.createElement('button');
      btn.className = 'result-copy-btn';
      btn.textContent = 'Copy';

      li.append(num, text, btn);
      resultsList.appendChild(li);
    });

    if (window.innerWidth <= 900) {
      output.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

  } catch (err) {
    resultsList.innerHTML = '<li class="result-error">Something went wrong. Try again.</li>';
  } finally {
    generateBtn.disabled    = false;
    generateBtn.textContent = 'Generate \u2192';
  }
}

// ── Events ─────────────────────────────────────────────────────────────────

generateBtn.addEventListener('click', showInsults);

resultsList.addEventListener('click', e => {
  const btn = e.target.closest('.result-copy-btn');
  if (!btn) return;
  const text = btn.closest('.result-item').querySelector('.result-text').textContent;
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = 'Copied';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('copied'); }, 1500);
  });
});
