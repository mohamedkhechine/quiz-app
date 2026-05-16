// script.js — Logique principale du Quiz

// ─── État du quiz ───
let currentIndex = 0;
let score = 0;
let answered = false;
let startTime = null;
let timerInterval = null;
let elapsedSeconds = 0;
let userAnswers = []; // { questionIndex, chosen, correct }
let shuffledQuestions = [];

// ─── Utilitaires ───

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function pad(n) {
  return String(n).padStart(2, '0');
}

// ─── Timer ───

function startTimer() {
  elapsedSeconds = 0;
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    elapsedSeconds++;
    const m = Math.floor(elapsedSeconds / 60);
    const s = elapsedSeconds % 60;
    document.getElementById('timer-display').textContent = `${pad(m)}:${pad(s)}`;
    const badge = document.getElementById('timer-badge');
    if (elapsedSeconds > 120) {
      badge.classList.add('urgent');
    } else {
      badge.classList.remove('urgent');
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

// ─── Démarrage du quiz ───

function startQuiz() {
  shuffledQuestions = shuffle(QUESTIONS);
  currentIndex = 0;
  score = 0;
  answered = false;
  userAnswers = [];
  document.getElementById('q-total').textContent = shuffledQuestions.length;
  startTimer();
  showScreen('screen-quiz');
  renderQuestion();
}

// ─── Affichage d'une question ───

function renderQuestion() {
  answered = false;
  const q = shuffledQuestions[currentIndex];
  const total = shuffledQuestions.length;

  // Progression
  document.getElementById('q-current').textContent = currentIndex + 1;
  const pct = ((currentIndex) / total) * 100;
  document.getElementById('progress-bar').style.width = pct + '%';

  // Catégorie & texte
  document.getElementById('q-category').textContent = q.category;
  const qText = document.getElementById('q-text');
  qText.style.opacity = 0;
  qText.textContent = q.text;
  setTimeout(() => { qText.style.transition = 'opacity 0.3s'; qText.style.opacity = 1; }, 50);

  // Bouton suivant caché
  document.getElementById('btn-next').style.display = 'none';

  // Réponses
  const grid = document.getElementById('answers-grid');
  grid.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];
  q.answers.forEach((ans, i) => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.innerHTML = `<span class="answer-letter">${letters[i]}</span><span>${ans}</span>`;
    btn.style.animationDelay = (i * 0.07) + 's';
    btn.style.animation = 'fadeUp 0.35s ease both';
    btn.addEventListener('click', () => selectAnswer(i, btn));
    grid.appendChild(btn);
  });
}

// ─── Sélection d'une réponse ───

function selectAnswer(index, clickedBtn) {
  if (answered) return;
  answered = true;

  const q = shuffledQuestions[currentIndex];
  const allBtns = document.querySelectorAll('.answer-btn');

  allBtns.forEach(b => b.disabled = true);

  if (index === q.correct) {
    clickedBtn.classList.add('correct');
    score++;
    userAnswers.push({ qIndex: currentIndex, chosen: index, isCorrect: true });
  } else {
    clickedBtn.classList.add('wrong');
    allBtns[q.correct].classList.add('correct');
    userAnswers.push({ qIndex: currentIndex, chosen: index, isCorrect: false });
  }

  // Afficher bouton suivant / résultats
  const btnNext = document.getElementById('btn-next');
  btnNext.style.display = 'flex';

  if (currentIndex === shuffledQuestions.length - 1) {
    btnNext.innerHTML = `Voir les résultats <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`;
  } else {
    btnNext.innerHTML = `Suivant <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`;
  }
}

// ─── Question suivante ───

function nextQuestion() {
  currentIndex++;
  if (currentIndex >= shuffledQuestions.length) {
    showResults();
  } else {
    renderQuestion();
  }
}

// ─── Résultats ───

function showResults() {
  stopTimer();
  showScreen('screen-result');

  const total = shuffledQuestions.length;
  const wrong = total - score;
  const pct = score / total;

  // Emoji & message
  let emoji, title, sub;
  if (pct === 1)        { emoji = '🏆'; title = 'Parfait !';        sub = 'Score parfait ! Tu es un expert.'; }
  else if (pct >= 0.8)  { emoji = '🌟'; title = 'Excellent !';      sub = 'Tu maîtrises très bien le sujet.'; }
  else if (pct >= 0.6)  { emoji = '👍'; title = 'Bien joué !';      sub = 'Bon résultat, continue comme ça !'; }
  else if (pct >= 0.4)  { emoji = '📚'; title = 'Pas mal !';        sub = 'Encore un peu de révision et tu y es.'; }
  else                   { emoji = '💪'; title = 'Continue !';       sub = 'Ne lâche pas, la pratique paie toujours.'; }

  document.getElementById('result-emoji').textContent = emoji;
  document.getElementById('result-title').textContent = title;
  document.getElementById('result-sub').textContent = sub;

  // Score
  document.getElementById('score-num').textContent = score;
  document.getElementById('score-denom').textContent = `/${total}`;

  // Stats
  document.getElementById('rs-correct').textContent = score;
  document.getElementById('rs-wrong').textContent = wrong;
  const m = Math.floor(elapsedSeconds / 60);
  const s = elapsedSeconds % 60;
  document.getElementById('rs-time').textContent = m > 0 ? `${m}m${pad(s)}s` : `${elapsedSeconds}s`;

  // Anneau animé
  const circumference = 2 * Math.PI * 52; // ≈ 326.7
  const offset = circumference * (1 - pct);
  setTimeout(() => {
    document.getElementById('ring-fill').style.strokeDashoffset = offset;
  }, 200);

  // Couleur de l'anneau selon score
  const ring = document.getElementById('ring-fill');
  if (pct >= 0.8)       ring.style.stroke = '#4ade80';
  else if (pct >= 0.5)  ring.style.stroke = '#a78bfa';
  else                  ring.style.stroke = '#f472b6';
}

// ─── Révision des réponses ───

function reviewAnswers() {
  const list = document.getElementById('review-list');
  list.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];

  userAnswers.forEach((ua, i) => {
    const q = shuffledQuestions[ua.qIndex];
    const item = document.createElement('div');
    item.className = `review-item ${ua.isCorrect ? 'correct-item' : 'wrong-item'}`;

    const answersHTML = q.answers.map((ans, idx) => {
      let cls = '';
      if (idx === q.correct) cls = 'correct-ans';
      else if (idx === ua.chosen && !ua.isCorrect) cls = 'wrong-ans';
      return `<div class="ri-answer ${cls}">${letters[idx]}. ${ans}</div>`;
    }).join('');

    item.innerHTML = `
      <div class="ri-header">
        <span class="ri-num">Question ${i + 1}</span>
        <span class="ri-badge">${ua.isCorrect ? '✓ Correct' : '✗ Incorrect'}</span>
      </div>
      <div class="ri-question">${q.text}</div>
      <div class="ri-answers">${answersHTML}</div>
    `;
    list.appendChild(item);
  });

  showScreen('screen-review');
}

// ─── Navigation ───

function goHome() {
  stopTimer();
  showScreen('screen-home');
}

function showResult() {
  showScreen('screen-result');
}

function replayQuiz() {
  startQuiz();
}
