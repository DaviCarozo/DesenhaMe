let credits = 20;
let invited = false; // missão convite única

const creditCountEl = document.getElementById('creditCount');
const generateBtn = document.getElementById('generateBtn');
const inviteBtn = document.getElementById('inviteBtn');
const output = document.getElementById('output');

function updateUI() {
  creditCountEl.textContent = credits;
  generateBtn.disabled = credits < 1;
  inviteBtn.disabled = invited;
}

generateBtn.addEventListener('click', () => {
  if (credits < 1) return alert('Créditos insuficientes, bora convidar!');
  credits--;
  updateUI();
  // MOCK: gerar imagem fake
  output.textContent = 'Imagem gerada 🖼️ (simulação)';
  output.style.color = '#0f0';
});

inviteBtn.addEventListener('click', () => {
  if (invited) return alert('Você já cumpriu essa missão!');
  credits += 10;
  invited = true;
  updateUI();
  alert('Missão convite cumprida! +10 créditos');
});

updateUI();
