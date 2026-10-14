/**
 * 속담 온(ON) - 고1 국어 어휘력 마스터 퀴즈
 * Core Application Logic
 */

// 1. QUESTION DATASET (고등학교 1학년 필수 속담 5선)
const QUIZ_DATA = [
  {
    id: 1,
    category: "상황 맥락 추론",
    context: "민수는 내일이 기말고사인데 한 달 동안 공부를 미루다 밤을 새워 벼락치기를 하려고 한다. 그러자 친구 지훈이가 다음과 같이 조언했다.\n\n\"지금 그렇게 잠도 안 자고 암기만 해봤자 시험 시간에 머리만 멍해지고 뒤통수 맞기 십상이야. 근본적인 공부 습관을 바꾸지 않고 당장 급한 불만 끄려는 건 오히려 해가 될 텐데...\"",
    prompt: "위 대화에서 지훈이의 생각과 가장 잘 어울리는 속담은?",
    options: [
      "밑 빠진 독에 물 붓기",
      "언 발에 오줌 누기",
      "우물을 파도 한 우물을 파라",
      "뱁새가 황새 따라가다 가랑이 찢어진다"
    ],
    answerIndex: 1, // 2번: 언 발에 오줌 누기
    explanation: "'언 발에 오줌 누기'는 당장에는 효력이 있을지 모르나 결국 더 나쁜 결과를 초래하는 임시방편을 뜻합니다.",
    tip: "💡 연계 한자성어: 동족방뇨(凍足放尿), 하석상대(下石上臺), 임시변통(臨時變通)"
  },
  {
    id: 2,
    category: "비유적 의미 파악",
    context: "소설 지문 속 한 인물은 최신형 고급 승용차를 몰고 다니며 사람들에게 화려한 외양을 과시하지만, 실제로는 월세조차 내지 못해 끼니를 거르는 형편이었다. 이를 바라보는 마을 사람들의 평가는 냉담했다.",
    prompt: "위 인물의 처지를 꼬집기에 가장 적절한 속담은?",
    options: [
      "보기 좋은 떡이 먹기도 좋다",
      "빛 좋은 개살구",
      "그림의 떡",
      "호박에 줄 긋는다고 수박 되랴"
    ],
    answerIndex: 1, // 2번: 빛 좋은 개살구
    explanation: "'빛 좋은 개살구'는 겉모양은 그럴듯하고 화려해 보이지만 실속이 전혀 없음을 비유합니다.",
    tip: "💡 연계 한자성어: 양두구육(羊頭狗肉), 유명무실(有名無實)"
  },
  {
    id: 3,
    category: "문맥적 빈칸 추론",
    context: "\"하루 10분씩 낭비하는 시간은 얼핏 별것 아닌 것처럼 느껴집니다. 하지만 이 사소한 시간 낭비가 1년, 3년 쌓이면 결국 인생의 큰 손실로 이어집니다. 옛 속담에 (       )라는 말이 있듯, 작은 습관이 오랜 시간 누적되어 미치는 파급력을 결코 간과해서는 안 됩니다.\"",
    prompt: "다음 강연의 빈칸에 들어갈 속담으로 가장 알맞은 것은?",
    options: [
      "티끌 모아 태산",
      "가랑잎이 솔잎더러 바스락거린다고 한다",
      "가랑비에 옷 젖는 줄 모른다",
      "바늘 도둑이 소도둑 된다"
    ],
    answerIndex: 2, // 3번: 가랑비에 옷 젖는 줄 모른다
    explanation: "'가랑비에 옷 젖는 줄 모른다'는 사소한 일이나 지출이라도 거듭되면 무시하지 못할 정도로 커져 손해를 입게 됨을 비유합니다.",
    tip: "💡 오답 주의: '티끌 모아 태산'은 작은 것을 모아 큰 것을 이룬다는 긍정적 측면이며, 본 문맥은 사소한 손실/습관의 누적을 경계하므로 '가랑비에 옷 젖는 줄 모른다'가 정답입니다."
  },
  {
    id: 4,
    category: "인물의 태도 비판",
    context: "조별 과제 발표를 준비할 때, 본인의 분량인 자료 조사를 하나도 해오지 않은 수현이가 오히려 5분 늦게 도착한 영호에게 \"너 때문에 우리 팀 발표가 망가지게 생겼다\"며 삿대질을 하고 화를 냈다.",
    prompt: "이 상황에서 수현이의 뻔뻔한 태도를 꼬집기에 가장 적절한 속담은?",
    options: [
      "닭 쫓던 개 지붕 쳐다본다",
      "도둑이 제 발 저린다",
      "가는 말이 고와야 오는 말이 곱다",
      "똥 묻은 개가 겨 묻은 개 나무란다"
    ],
    answerIndex: 3, // 4번: 똥 묻은 개가 겨 묻은 개 나무란다
    explanation: "'똥 묻은 개가 겨 묻은 개 나무란다'는 자기는 더 큰 흉과 결함이 있으면서 남의 사소한 잘못을 들추어 흉본다는 뜻입니다.",
    tip: "💡 연계 한자성어: 적반하장(賊反荷杖), 하로진태(河魯陳太)"
  },
  {
    id: 5,
    category: "인물의 성품 파악",
    context: "전교 1등을 놓치지 않는 정우는 친구들이 어려운 문제를 물어보러 올 때마다 늘 친절하고 겸손한 태도로 가르쳐 주며, 결코 자신의 뛰어난 실력을 뽐내거나 으스대지 않는다.",
    prompt: "정우의 성숙한 인품과 태도를 가장 잘 드러내는 속담은?",
    options: [
      "벼는 익을수록 고개를 숙인다",
      "빈 수레가 요란하다",
      "얌전한 고양이가 부뚜막에 먼저 올라간다",
      "백지장도 맞들면 낫다"
    ],
    answerIndex: 0, // 1번: 벼는 익을수록 고개를 숙인다
    explanation: "'벼는 익을수록 고개를 숙인다'는 교양과 학식, 인격이 깊고 뛰어난 사람일수록 교만하지 않고 더욱 겸손해진다는 뜻입니다.",
    tip: "💡 국어 내신 포인트: '빈 수레가 요란하다'와 반의적(대비적) 의미를 지닌 대표 속담으로 자주 출제됩니다."
  }
];

// 2. STATE MANAGEMENT
const state = {
  currentIndex: 0,
  userAnswers: [null, null, null, null, null],
  isSubmitted: false,
  startTime: null,
  elapsedSeconds: 0,
  timerInterval: null,
  filterMode: 'all', // 'all' | 'wrong'
  soundEnabled: true
};

// 3. SOUND SYNTHESIZER (Web Audio API)
class SoundManager {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playTone(freq, type = 'sine', duration = 0.15, gainVal = 0.08) {
    if (!state.soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn("Audio play error", e);
    }
  }

  playClick() {
    this.playTone(600, 'triangle', 0.05, 0.05);
  }

  playSelect() {
    this.playTone(520, 'sine', 0.08, 0.06);
  }

  playNext() {
    if (!state.soundEnabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.12);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.12);
    } catch(e) {}
  }

  playFanfare() {
    if (!state.soundEnabled) return;
    this.init();
    if (!this.ctx) return;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playTone(freq, 'triangle', 0.35, 0.1);
      }, idx * 120);
    });
  }
}

const sound = new SoundManager();

// 4. CONFETTI EFFECT (Canvas Particle Engine)
class ConfettiEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
    this.particles = [];
    this.animId = null;
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  burst(count = 100) {
    if (!this.canvas || !this.ctx) return;
    this.particles = [];
    const colors = ['#FF385C', '#E00B41', '#008489', '#FFB400', '#222222', '#717171', '#484848'];

    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: this.canvas.width * 0.5 + (Math.random() - 0.5) * 200,
        y: this.canvas.height * 0.4 + (Math.random() - 0.5) * 100,
        vx: (Math.random() - 0.5) * 16,
        vy: (Math.random() - 1.2) * 16,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 12,
        alpha: 1,
        gravity: 0.35,
        decay: Math.random() * 0.008 + 0.006
      });
    }

    if (!this.animId) {
      this.render();
    }
  }

  render() {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.rotation += p.rotSpeed;
      p.alpha -= p.decay;

      if (p.alpha <= 0) {
        this.particles.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rotation * Math.PI) / 180);
      this.ctx.globalAlpha = p.alpha;
      this.ctx.fillStyle = p.color;
      this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      this.ctx.restore();
    }

    if (this.particles.length > 0) {
      this.animId = requestAnimationFrame(() => this.render());
    } else {
      this.animId = null;
    }
  }
}

let confetti = null;

// 5. DOM ELEMENT REFERENCES
const elements = {
  // Screens
  introScreen: document.getElementById('intro-screen'),
  quizScreen: document.getElementById('quiz-screen'),
  resultScreen: document.getElementById('result-screen'),

  // Header
  soundBtn: document.getElementById('sound-toggle-btn'),
  soundIconOn: document.getElementById('sound-icon-on'),
  soundIconOff: document.getElementById('sound-icon-off'),

  // Intro
  startBtn: document.getElementById('start-quiz-btn'),

  // Quiz Bar
  currentQNum: document.getElementById('current-q-num'),
  questionNavigator: document.getElementById('question-navigator'),
  quizTimer: document.getElementById('quiz-timer'),
  progressFill: document.getElementById('progress-fill'),

  // Question Card
  categoryTag: document.getElementById('question-category'),
  contextText: document.getElementById('question-context'),
  promptText: document.getElementById('question-prompt'),
  optionsContainer: document.getElementById('options-container'),
  optionHint: document.getElementById('option-hint-text'),
  prevBtn: document.getElementById('prev-question-btn'),
  nextBtn: document.getElementById('next-question-btn'),
  nextBtnText: document.getElementById('next-btn-text'),

  // Result
  tierTitle: document.getElementById('result-tier-title'),
  tierDesc: document.getElementById('result-tier-desc'),
  scoreCounter: document.getElementById('score-counter'),
  circleScoreFill: document.getElementById('circle-score-fill'),
  statCorrectCount: document.getElementById('stat-correct-count'),
  statAccuracy: document.getElementById('stat-accuracy'),
  statDuration: document.getElementById('stat-duration'),
  retryBtn: document.getElementById('retry-quiz-btn'),
  shareBtn: document.getElementById('share-score-btn'),
  shareBtnText: document.getElementById('share-btn-text'),

  // Review
  filterAllBtn: document.getElementById('filter-all-btn'),
  filterWrongBtn: document.getElementById('filter-wrong-btn'),
  wrongCountBadge: document.getElementById('wrong-count-badge'),
  reviewList: document.getElementById('review-list'),

  // Toast
  toast: document.getElementById('toast')
};

// 6. INITIALIZATION & EVENT BINDING
document.addEventListener('DOMContentLoaded', () => {
  confetti = new ConfettiEngine('confetti-canvas');
  bindEvents();
});

function bindEvents() {
  // Brand Logo Click -> Return Home
  const brandBtn = document.getElementById('header-brand-btn');
  if (brandBtn) {
    brandBtn.addEventListener('click', () => {
      sound.playClick();
      resetQuiz();
    });
  }

  // Sound Toggle
  elements.soundBtn.addEventListener('click', () => {
    state.soundEnabled = !state.soundEnabled;
    elements.soundIconOn.classList.toggle('hidden', !state.soundEnabled);
    elements.soundIconOff.classList.toggle('hidden', state.soundEnabled);
    showToast(state.soundEnabled ? "🔊 효과음이 켜졌습니다." : "🔇 효과음이 꺼졌습니다.");
    if (state.soundEnabled) sound.playClick();
  });

  // Start Quiz
  elements.startBtn.addEventListener('click', () => {
    sound.playClick();
    startQuiz();
  });

  // Question Prev / Next
  elements.prevBtn.addEventListener('click', () => {
    if (state.currentIndex > 0) {
      sound.playClick();
      navigateToQuestion(state.currentIndex - 1);
    }
  });

  elements.nextBtn.addEventListener('click', () => {
    // Check if on last question
    if (state.currentIndex === QUIZ_DATA.length - 1) {
      submitQuiz();
    } else {
      sound.playNext();
      navigateToQuestion(state.currentIndex + 1);
    }
  });

  // Retry Quiz
  elements.retryBtn.addEventListener('click', () => {
    sound.playClick();
    resetQuiz();
  });

  // Share / Copy Results
  elements.shareBtn.addEventListener('click', () => {
    sound.playClick();
    copyResults();
  });

  // Filter Tabs
  elements.filterAllBtn.addEventListener('click', () => {
    sound.playClick();
    setFilterMode('all');
  });

  elements.filterWrongBtn.addEventListener('click', () => {
    sound.playClick();
    setFilterMode('wrong');
  });

  // Keyboard Shortcuts (1~4 for options, ArrowLeft/Right for navigation)
  window.addEventListener('keydown', (e) => {
    if (!elements.quizScreen.classList.contains('active')) return;

    if (['1', '2', '3', '4'].includes(e.key)) {
      const optIdx = parseInt(e.key, 10) - 1;
      selectOption(optIdx);
    } else if (e.key === 'ArrowRight' && !elements.nextBtn.disabled) {
      elements.nextBtn.click();
    } else if (e.key === 'ArrowLeft' && !elements.prevBtn.disabled) {
      elements.prevBtn.click();
    }
  });
}

// 7. SCREEN TRANSITION HELPERS
function switchScreen(targetScreen) {
  [elements.introScreen, elements.quizScreen, elements.resultScreen].forEach(screen => {
    screen.classList.remove('active');
  });
  targetScreen.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 8. QUIZ LIFECYCLE
function startQuiz() {
  state.currentIndex = 0;
  state.userAnswers = [null, null, null, null, null];
  state.isSubmitted = false;
  state.elapsedSeconds = 0;

  // Start Timer
  state.startTime = Date.now();
  if (state.timerInterval) clearInterval(state.timerInterval);
  state.timerInterval = setInterval(updateTimerDisplay, 1000);
  updateTimerDisplay();

  renderNavPills();
  renderQuestion(0);
  switchScreen(elements.quizScreen);
}

function updateTimerDisplay() {
  state.elapsedSeconds = Math.floor((Date.now() - state.startTime) / 1000);
  const mins = String(Math.floor(state.elapsedSeconds / 60)).padStart(2, '0');
  const secs = String(state.elapsedSeconds % 60).padStart(2, '0');
  elements.quizTimer.textContent = `${mins}:${secs}`;
}

function renderNavPills() {
  elements.questionNavigator.innerHTML = '';
  QUIZ_DATA.forEach((q, idx) => {
    const pill = document.createElement('button');
    pill.className = `nav-pill-btn ${idx === state.currentIndex ? 'active' : ''} ${state.userAnswers[idx] !== null ? 'answered' : ''}`;
    pill.textContent = `Q${idx + 1}`;
    pill.title = `문항 ${idx + 1}번으로 이동`;
    pill.addEventListener('click', () => {
      sound.playClick();
      navigateToQuestion(idx);
    });
    elements.questionNavigator.appendChild(pill);
  });
}

function navigateToQuestion(index) {
  state.currentIndex = index;
  renderQuestion(index);
  renderNavPills();
}

function renderQuestion(index) {
  const q = QUIZ_DATA[index];
  const total = QUIZ_DATA.length;

  // Update Tracker & Progress
  elements.currentQNum.textContent = String(index + 1).padStart(2, '0');
  const progressPct = ((index + 1) / total) * 100;
  elements.progressFill.style.width = `${progressPct}%`;

  // Update Content
  elements.categoryTag.textContent = q.category;
  elements.contextText.innerHTML = formatContextText(q.context);
  elements.promptText.textContent = q.prompt;

  // Options
  elements.optionsContainer.innerHTML = '';
  const currentSelection = state.userAnswers[index];

  q.options.forEach((optText, optIdx) => {
    const btn = document.createElement('button');
    btn.className = `option-btn ${currentSelection === optIdx ? 'selected' : ''}`;
    btn.setAttribute('role', 'radio');
    btn.setAttribute('aria-checked', currentSelection === optIdx ? 'true' : 'false');
    btn.innerHTML = `
      <span class="option-num-badge">${optIdx + 1}</span>
      <span class="option-text">${optText}</span>
    `;

    btn.addEventListener('click', () => {
      selectOption(optIdx);
    });

    elements.optionsContainer.appendChild(btn);
  });

  // Buttons state
  elements.prevBtn.disabled = index === 0;

  if (index === total - 1) {
    elements.nextBtnText.textContent = '최종 제출하기 💯';
    elements.nextBtn.className = 'airbnb-rausch-btn btn-compact';
  } else {
    elements.nextBtnText.textContent = '다음 문제';
    elements.nextBtn.className = 'airbnb-rausch-btn btn-compact';
  }

  // Hint
  if (currentSelection === null) {
    elements.optionHint.textContent = `답안을 선택해 주세요 (키보드 1~4)`;
  } else {
    elements.optionHint.textContent = `선택 완료: ${currentSelection + 1}번 보기`;
  }
}

function formatContextText(text) {
  // Convert quotes or parentheses into highlighted spans
  return text
    .replace(/\n\n/g, '<br><br>')
    .replace(/\((.*?)\)/g, '<strong>($1)</strong>');
}

function selectOption(optIndex) {
  sound.playSelect();
  state.userAnswers[state.currentIndex] = optIndex;

  // Update option button styles
  const allBtns = elements.optionsContainer.querySelectorAll('.option-btn');
  allBtns.forEach((btn, idx) => {
    btn.classList.toggle('selected', idx === optIndex);
    btn.setAttribute('aria-checked', idx === optIndex ? 'true' : 'false');
  });

  elements.optionHint.textContent = `선택 완료: ${optIndex + 1}번 보기`;
  renderNavPills();
}

// 9. SUBMISSION & RESULTS
function submitQuiz() {
  // Check if there are unanswered questions
  const unanswered = [];
  state.userAnswers.forEach((ans, idx) => {
    if (ans === null) unanswered.push(idx + 1);
  });

  if (unanswered.length > 0) {
    sound.playTone(300, 'square', 0.2);
    const proceed = confirm(`아직 풀지 않은 문항(${unanswered.join(', ')}번)이 있습니다.\n그대로 최종 제출하시겠습니까?`);
    if (!proceed) {
      navigateToQuestion(unanswered[0] - 1);
      return;
    }
  }

  // Stop Timer
  clearInterval(state.timerInterval);
  state.isSubmitted = true;
  sound.playClick();

  calculateAndShowResults();
}

function calculateAndShowResults() {
  let correctCount = 0;
  QUIZ_DATA.forEach((q, idx) => {
    if (state.userAnswers[idx] === q.answerIndex) {
      correctCount++;
    }
  });

  const score = correctCount * 20; // 문항당 20점
  const accuracy = Math.round((correctCount / QUIZ_DATA.length) * 100);

  // Switch Screen
  switchScreen(elements.resultScreen);

  // Set Feedback Tier
  let tierTitle = "속담 마스터!";
  let tierDesc = "국어 1등급의 탁월한 속담 이해력과 문맥 통찰력을 입증했습니다.";

  if (score === 100) {
    tierTitle = "👑 만점! 완벽한 속담 마스터";
    tierDesc = "수능과 내신에 출제되는 어떤 고난도 속담 문맥도 막힘없이 풀 수 있는 최상위권 실력입니다!";
  } else if (score >= 80) {
    tierTitle = "✨ 우수한 실력! 1등급 유망주";
    tierDesc = "대부분의 속담 맥락을 정확하게 파악하고 있습니다. 아쉽게 놓친 문항의 오답 노트를 확인해 보세요.";
  } else if (score >= 60) {
    tierTitle = "🌱 꾸준한 발전이 기대되는 실력";
    tierDesc = "기본적인 속담은 잘 알고 있으나, 복합적 맥락이나 유의 속담과의 구별 학습이 조금 더 필요합니다.";
  } else {
    tierTitle = "📖 집중 보완이 필요한 단계";
    tierDesc = "비유적 의미와 한자성어 연계 개념을 아래 상세 풀이를 통해 꼼꼼히 정리해 보세요!";
  }

  elements.tierTitle.textContent = tierTitle;
  elements.tierDesc.textContent = tierDesc;

  // Stats
  elements.statCorrectCount.textContent = `${correctCount} / ${QUIZ_DATA.length}`;
  elements.statAccuracy.textContent = `${accuracy}%`;

  const mins = Math.floor(state.elapsedSeconds / 60);
  const secs = state.elapsedSeconds % 60;
  elements.statDuration.textContent = mins > 0 ? `${mins}분 ${secs}초` : `${secs}초`;

  // Wrong count badge
  const wrongCount = QUIZ_DATA.length - correctCount;
  elements.wrongCountBadge.textContent = wrongCount;

  // Animate Circular Gauge & Score Counter
  animateScoreCounter(score);

  // Fanfare & Confetti on Good Score
  if (score >= 80) {
    setTimeout(() => {
      sound.playFanfare();
      confetti.burst(120);
    }, 400);
  }

  // Render Review Section
  renderReviewList('all');
}

function animateScoreCounter(targetScore) {
  const duration = 1200;
  const start = 0;
  const startTime = performance.now();

  // Circle Gauge: Circumference = 2 * PI * 52 = 326.7
  const circumference = 326.7;
  const targetOffset = circumference - (circumference * targetScore) / 100;

  elements.circleScoreFill.style.strokeDashoffset = targetOffset;
  if (targetScore >= 80) {
    elements.circleScoreFill.style.stroke = '#FF385C';
  } else if (targetScore >= 60) {
    elements.circleScoreFill.style.stroke = '#FFB400';
  } else {
    elements.circleScoreFill.style.stroke = '#E00B41';
  }

  function step(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const easeOutQuad = 1 - (1 - progress) * (1 - progress);
    const currentVal = Math.round(start + (targetScore - start) * easeOutQuad);
    elements.scoreCounter.textContent = currentVal;

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

// 10. REVIEW LIST & FILTER
function setFilterMode(mode) {
  state.filterMode = mode;
  elements.filterAllBtn.classList.toggle('active', mode === 'all');
  elements.filterWrongBtn.classList.toggle('active', mode === 'wrong');
  renderReviewList(mode);
}

function renderReviewList(mode) {
  elements.reviewList.innerHTML = '';

  const itemsToRender = QUIZ_DATA.filter((q, idx) => {
    const isCorrect = state.userAnswers[idx] === q.answerIndex;
    return mode === 'all' || (mode === 'wrong' && !isCorrect);
  });

  if (itemsToRender.length === 0) {
    elements.reviewList.innerHTML = `
      <div class="empty-filter-state">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <h4>틀린 문제가 없습니다!</h4>
        <p>5문항 모두 정답입니다. 완벽한 실력을 축하드립니다!</p>
      </div>
    `;
    return;
  }

  itemsToRender.forEach((q) => {
    const originalIndex = q.id - 1;
    const userChoiceIdx = state.userAnswers[originalIndex];
    const isCorrect = userChoiceIdx === q.answerIndex;

    const card = document.createElement('div');
    card.className = `review-item-card ${isCorrect ? 'is-correct' : 'is-wrong'}`;

    const userChoiceText = userChoiceIdx !== null ? `${userChoiceIdx + 1}. ${q.options[userChoiceIdx]}` : '미선택';
    const correctChoiceText = `${q.answerIndex + 1}. ${q.options[q.answerIndex]}`;

    card.innerHTML = `
      <div class="item-top-row">
        <span class="item-num-tag">QUESTION ${String(q.id).padStart(2, '0')} · ${q.category}</span>
        <span class="status-badge ${isCorrect ? 'correct' : 'wrong'}">
          ${isCorrect ? '✓ 정답 (20점)' : '✕ 오답 (0점)'}
        </span>
      </div>

      <div class="item-context-quote">
        ${q.context.replace(/\n\n/g, '<br>')}
      </div>

      <h4 class="item-prompt">${q.prompt}</h4>

      <div class="answers-comparison">
        <div class="answer-box user-choice ${!isCorrect ? 'wrong-choice' : ''}">
          <span class="ans-tag">내가 고른 답</span>
          <span class="ans-text">${userChoiceText}</span>
        </div>
        <div class="answer-box correct-choice">
          <span class="ans-tag">실제 정답</span>
          <span class="ans-text">${correctChoiceText}</span>
        </div>
      </div>

      <div class="item-explanation-box">
        <div class="exp-title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          속담 해설 & 핵심 의미
        </div>
        <p class="exp-desc">${q.explanation}</p>
        <div class="exp-tip">${q.tip}</div>
      </div>
    `;

    elements.reviewList.appendChild(card);
  });
}

// 11. UTILITIES
function resetQuiz() {
  if (state.timerInterval) clearInterval(state.timerInterval);
  state.currentIndex = 0;
  state.userAnswers = [null, null, null, null, null];
  state.isSubmitted = false;
  switchScreen(elements.introScreen);
}

function copyResults() {
  let correctCount = 0;
  QUIZ_DATA.forEach((q, idx) => {
    if (state.userAnswers[idx] === q.answerIndex) correctCount++;
  });
  const score = correctCount * 20;

  const resultText = `[속담 온(ON) - 고1 국어 속담 챌린지]\n` +
    `내 성적: ${score}점 / 100점 (${correctCount}/5문항 정답)\n` +
    `소요 시간: ${elements.statDuration.textContent}\n` +
    `지금 함께 도전해 보세요!`;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(resultText).then(() => {
      showToast("📋 결과가 클립보드에 복사되었습니다!");
    }).catch(() => {
      fallbackCopy(resultText);
    });
  } else {
    fallbackCopy(resultText);
  }
}

function fallbackCopy(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    showToast("📋 결과가 클립보드에 복사되었습니다!");
  } catch(e) {
    showToast("복사에 실패했습니다.");
  }
  document.body.removeChild(textarea);
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.remove('hidden');
  setTimeout(() => {
    elements.toast.classList.add('hidden');
  }, 2400);
}
