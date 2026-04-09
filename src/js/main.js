// ── i18n ────────────────────────────────────────────────────────────────────

const i18n = {
  en: {
    tagline:          'The art of the eloquent slight.',
    heroH1:           'Intelligence,<br>weaponized.',
    heroSub:          'Select your context. Receive your compliment.',
    labelRecipient:   'Recipient',
    labelOccasion:    'Occasion',
    labelTone:        'Tone',
    optRGeneral:      'Anyone',
    optRCoworker:     'Coworker',
    optRBoss:         'Boss',
    optRFriend:       'Friend',
    optREx:           'Ex',
    optOGeneral:      'Any',
    optOInperson:     'In Person',
    optOEmail:        'Email',
    optOText:         'Text Message',
    tone1:            'Subtle',
    tone2:            'Sharp',
    tone3:            'Savage',
    generateBtn:      'Generate \u2192',
    outputLabel:      'Your Compliments',
    placeholder:      'Select a recipient, occasion, and tone \u2014 then generate.',
    footer:           'Eruditio \u2014 Because bluntness is for amateurs.',
    loading:          'Crafting your compliments\u2026',
    error:            'Something went wrong. Try again.',
    copy:             'Copy',
    copied:           'Copied',
  },
  es: {
    tagline:          'El arte del halago.',
    heroH1:           'La inteligencia,<br>como arma.',
    heroSub:          'Elige el contexto. Recibe tu cumplido.',
    labelRecipient:   'Destinatario',
    labelOccasion:    'Ocasi\u00f3n',
    labelTone:        'Tono',
    optRGeneral:      'Cualquiera',
    optRCoworker:     'Colega',
    optRBoss:         'Jefe',
    optRFriend:       'Amigo',
    optREx:           'Ex',
    optOGeneral:      'Cualquiera',
    optOInperson:     'En persona',
    optOEmail:        'Email',
    optOText:         'Mensaje de texto',
    tone1:            'Sutil',
    tone2:            'Directo',
    tone3:            'Brutal',
    generateBtn:      'Generar \u2192',
    outputLabel:      'Tus Cumplidos',
    placeholder:      'Elige destinatario, ocasi\u00f3n y tono \u2014 luego genera.',
    footer:           'Eruditio \u2014 La groser\u00eda es para aficionados.',
    loading:          'Elaborando tus cumplidos\u2026',
    error:            'Algo sali\u00f3 mal. Intenta de nuevo.',
    copy:             'Copiar',
    copied:           'Copiado',
  },
};

// ── State ──────────────────────────────────────────────────────────────────

let selectedTone     = 1;
let selectedLanguage = 'en';

// ── Elements ───────────────────────────────────────────────────────────────

const generateBtn       = document.getElementById('generate-btn');
const output            = document.getElementById('output');
const resultsList       = document.getElementById('results-list');
const outputPlaceholder = document.getElementById('output-placeholder');
const toneBtns          = document.querySelectorAll('.tone-btn');

// ── Language ────────────────────────────────────────────────────────────────

function setLanguage(lang) {
  selectedLanguage = lang;
  const t = i18n[lang];

  document.getElementById('tagline').textContent                  = t.tagline;
  document.getElementById('hero-h1').innerHTML                    = t.heroH1;
  document.getElementById('hero-sub').textContent                 = t.heroSub;
  document.getElementById('label-relationship').textContent       = t.labelRecipient;
  document.getElementById('label-occasion').textContent           = t.labelOccasion;
  document.getElementById('label-tone').textContent               = t.labelTone;
  document.getElementById('opt-r-general').textContent            = t.optRGeneral;
  document.getElementById('opt-r-coworker').textContent           = t.optRCoworker;
  document.getElementById('opt-r-boss').textContent               = t.optRBoss;
  document.getElementById('opt-r-friend').textContent             = t.optRFriend;
  document.getElementById('opt-r-ex').textContent                 = t.optREx;
  document.getElementById('opt-o-general').textContent            = t.optOGeneral;
  document.getElementById('opt-o-inperson').textContent           = t.optOInperson;
  document.getElementById('opt-o-email').textContent              = t.optOEmail;
  document.getElementById('opt-o-text').textContent               = t.optOText;
  document.getElementById('tone-btn-1').textContent               = t.tone1;
  document.getElementById('tone-btn-2').textContent               = t.tone2;
  document.getElementById('tone-btn-3').textContent               = t.tone3;
  document.getElementById('generate-btn').textContent             = t.generateBtn;
  document.getElementById('output-section-label').textContent     = t.outputLabel;
  document.getElementById('output-placeholder-text').textContent  = t.placeholder;
  document.getElementById('footer-text').textContent              = t.footer;

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

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
  const t            = i18n[selectedLanguage];

  generateBtn.disabled     = true;
  generateBtn.textContent  = t.loading.split('\u2026')[0] + '\u2026';
  resultsList.innerHTML    = `<li class="result-loading">${t.loading}</li>`;
  output.hidden            = false;
  outputPlaceholder.hidden = true;

  try {
    const res = await fetch('/api/generate', {
      method:  'POST',
      headers: { 'content-type': 'application/json' },
      body:    JSON.stringify({ relationship, occasion, tone: selectedTone, language: selectedLanguage }),
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
      btn.textContent = i18n[selectedLanguage].copy;

      li.append(num, text, btn);
      resultsList.appendChild(li);
    });

    if (window.innerWidth <= 900) {
      output.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

  } catch (err) {
    resultsList.innerHTML = `<li class="result-error">${i18n[selectedLanguage].error}</li>`;
  } finally {
    generateBtn.disabled    = false;
    generateBtn.textContent = i18n[selectedLanguage].generateBtn;
  }
}

// ── Events ─────────────────────────────────────────────────────────────────

generateBtn.addEventListener('click', showInsults);

resultsList.addEventListener('click', e => {
  const btn = e.target.closest('.result-copy-btn');
  if (!btn) return;
  const text = btn.closest('.result-item').querySelector('.result-text').textContent;
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = i18n[selectedLanguage].copied;
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = i18n[selectedLanguage].copy;
      btn.classList.remove('copied');
    }, 1500);
  });
});
