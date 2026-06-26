const translations = {
  zh: {
    brand: "林志宇",
    navAbout: "關於",
    navWork: "事蹟",
    navContact: "聯絡",
    heroEyebrow: "北醫醫學系學生 / 棋類與音樂愛好者",
    heroTitle: "林志宇",
    heroSubtitle: "在醫學學習、棋盤思考與音樂練習之間，培養專注、判斷與持續進步的節奏。",
    tagOne: "西洋棋",
    tagTwo: "象棋",
    tagThree: "鋼琴",
    tagFour: "桌球",
    heroMetricOneLabel: "興趣",
    heroMetricTwoLabel: "全國賽",
    statOne: "項主要興趣與專長",
    statTwo: "個醫學學習目標",
    statThree: "象棋全國團體賽名次",
    aboutEyebrow: "About",
    aboutTitle: "關於我",
    aboutBodyOne: "林志宇，英文名 James，是一位就讀臺北醫學大學醫學系的大學生。平時喜歡下棋，尤其享受西洋棋與象棋中推演局勢、判斷取捨的過程。",
    aboutBodyTwo: "除了棋類，他也喜歡彈鋼琴與打桌球。醫學訓練讓他重視細節與責任感，而這些興趣則讓他在課業之外保持專注、節奏與思考的彈性。",
    skillOneTitle: "棋盤思考",
    skillOneBody: "透過西洋棋與象棋訓練判斷力、耐心與長線規劃。",
    skillTwoTitle: "音樂節奏",
    skillTwoBody: "彈鋼琴讓他在旋律、練習與穩定表現中找到平衡。",
    skillThreeTitle: "運動反應",
    skillThreeBody: "桌球培養速度、手眼協調與面對變化時的即時反應。",
    workEyebrow: "Milestones",
    workTitle: "事蹟與作品",
    milestoneOneTitle: "象棋全國團體賽第三名",
    milestoneOneBody: "代表團隊參與全國象棋團體賽，與隊友合作取得第三名，累積競賽經驗與臨場判斷能力。",
    milestoneTwoTitle: "就讀臺北醫學大學醫學系",
    milestoneTwoBody: "在醫學課程中學習基礎醫學、臨床思維與團隊合作，持續培養成為醫學生所需的專注與責任感。",
    milestoneThreeTitle: "持續精進鋼琴與桌球",
    milestoneThreeBody: "在課業之外保持規律練習，透過音樂與運動調整狀態，也讓生活保持彈性與平衡。",
    showcaseEyebrow: "Now Building",
    showcaseTitle: "在醫學、棋局與音樂之間，練習成為更穩定的人。",
    showcaseBody: "James 相信長期累積比一時爆發更重要。無論是讀醫、下棋、彈琴或打球，他都希望把每一次練習變成下一次更好的起點。",
    contactEyebrow: "Contact",
    contactTitle: "聯絡我",
    contactBody: "歡迎透過 Email 或電話聯絡，聊聊學習、棋類、音樂、桌球，或任何有趣的交流機會。",
    footerText: "© 2026 林志宇 James。以純 HTML / CSS / JS 製作。"
  },
  en: {
    brand: "James Lin",
    navAbout: "About",
    navWork: "Milestones",
    navContact: "Contact",
    heroEyebrow: "TMU medical student / chess and music enthusiast",
    heroTitle: "James",
    heroSubtitle: "Learning medicine while training focus, judgment, and steady growth through chess, music, and table tennis.",
    tagOne: "Chess",
    tagTwo: "Xiangqi",
    tagThree: "Piano",
    tagFour: "Table Tennis",
    heroMetricOneLabel: "Interests",
    heroMetricTwoLabel: "National",
    statOne: "core interests and strengths",
    statTwo: "medical learning goal",
    statThree: "place in national Xiangqi team event",
    aboutEyebrow: "About",
    aboutTitle: "About Me",
    aboutBodyOne: "James Lin is a medical student at Taipei Medical University. He enjoys chess in daily life, especially the process of reading positions, planning ahead, and making careful decisions.",
    aboutBodyTwo: "Beyond chess and Xiangqi, he also enjoys playing piano and table tennis. Medical training teaches him attention to detail and responsibility, while these interests help him stay focused, balanced, and flexible.",
    skillOneTitle: "Board Strategy",
    skillOneBody: "Chess and Xiangqi train patience, judgment, and long-term planning.",
    skillTwoTitle: "Musical Rhythm",
    skillTwoBody: "Piano practice helps him find balance through melody, discipline, and steady performance.",
    skillThreeTitle: "Quick Response",
    skillThreeBody: "Table tennis builds speed, hand-eye coordination, and calm reactions under change.",
    workEyebrow: "Milestones",
    workTitle: "Milestones & Work",
    milestoneOneTitle: "Third Place in National Xiangqi Team Competition",
    milestoneOneBody: "Represented his team in a national Xiangqi team event and earned third place through collaboration, preparation, and in-game judgment.",
    milestoneTwoTitle: "Medical Student at Taipei Medical University",
    milestoneTwoBody: "Studies basic medicine, clinical thinking, and teamwork while developing the focus and responsibility required in medical training.",
    milestoneThreeTitle: "Continuing Piano and Table Tennis Practice",
    milestoneThreeBody: "Keeps a regular practice rhythm outside class, using music and sports to stay balanced and adaptable.",
    showcaseEyebrow: "Now Building",
    showcaseTitle: "Practicing steadiness through medicine, chess, and music.",
    showcaseBody: "James believes long-term progress matters more than short bursts. Whether studying medicine, playing chess, practicing piano, or training table tennis, each session becomes a better starting point for the next.",
    contactEyebrow: "Contact",
    contactTitle: "Contact",
    contactBody: "Feel free to reach out by email or phone to talk about learning, chess, music, table tennis, or any interesting opportunity to connect.",
    footerText: "© 2026 James Lin. Built with pure HTML / CSS / JS."
  }
};

const root = document.documentElement;
const themeToggle = document.querySelector("#themeToggle");
const langToggle = document.querySelector("#langToggle");
let currentLang = localStorage.getItem("language") || "zh";
let currentTheme = localStorage.getItem("theme") || "dark";

function applyTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem("theme", theme);
}

function applyLanguage(lang) {
  currentLang = lang;
  root.lang = lang === "zh" ? "zh-Hant" : "en";
  langToggle.textContent = lang === "zh" ? "中" : "英";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = translations[lang][key] || node.textContent;
  });
  localStorage.setItem("language", lang);
}

themeToggle.addEventListener("click", () => {
  currentTheme = root.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(currentTheme);
  pulseButton(themeToggle);
});

langToggle.addEventListener("click", () => {
  applyLanguage(currentLang === "zh" ? "en" : "zh");
  pulseButton(langToggle);
});

function pulseButton(button) {
  if (!window.gsap) return;
  gsap.fromTo(button, { scale: 0.86 }, { scale: 1, duration: 0.42, ease: "elastic.out(1, 0.45)" });
}

applyTheme(currentTheme);
applyLanguage(currentLang);

window.addEventListener("load", () => {
  initMotion();
  initParticles();
});

function initMotion() {
  if (!window.gsap) {
    document.querySelectorAll(".reveal").forEach((item) => {
      item.style.opacity = 1;
    });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".site-header", {
    y: -30,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  });

  gsap.utils.toArray(".reveal").forEach((item, index) => {
    gsap.fromTo(item, {
      y: 44,
      opacity: 0,
      filter: "blur(16px)"
    }, {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration: 0.95,
      delay: index < 6 ? index * 0.08 : 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: item,
        start: "top 86%",
        once: true
      }
    });
  });

  gsap.to(".portrait", {
    rotateY: 14,
    rotateX: -6,
    y: -18,
    duration: 3.8,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  gsap.to(".floating-card", {
    y: -18,
    duration: 2.4,
    stagger: 0.35,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  gsap.utils.toArray("[data-count]").forEach((counter) => {
    const target = Number(counter.dataset.count);
    gsap.to(counter, {
      textContent: target,
      duration: 1.8,
      snap: { textContent: 1 },
      ease: "power2.out",
      scrollTrigger: {
        trigger: counter,
        start: "top 86%",
        once: true
      }
    });
  });

  gsap.to(".mini-window", {
    x: "random(-18, 18)",
    y: "random(-16, 16)",
    duration: 2,
    stagger: 0.22,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
}

function initParticles() {
  const canvas = document.querySelector("#particleCanvas");
  const ctx = canvas.getContext("2d");
  const particles = [];
  const count = window.matchMedia("(max-width: 700px)").matches ? 42 : 82;
  let width = 0;
  let height = 0;
  let mouseX = 0.5;
  let mouseY = 0.5;

  function resize() {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  function seed() {
    particles.length = 0;
    for (let i = 0; i < count; i += 1) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 2.4 + 0.7,
        vx: (Math.random() - 0.5) * 0.55,
        vy: (Math.random() - 0.5) * 0.55,
        hue: Math.random() > 0.5 ? 190 : 294
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach((p, index) => {
      p.x += p.vx + (mouseX - 0.5) * 0.28;
      p.y += p.vy + (mouseY - 0.5) * 0.28;

      if (p.x < -20) p.x = width + 20;
      if (p.x > width + 20) p.x = -20;
      if (p.y < -20) p.y = height + 20;
      if (p.y > height + 20) p.y = -20;

      ctx.beginPath();
      ctx.fillStyle = `hsla(${p.hue}, 96%, 64%, 0.55)`;
      ctx.shadowBlur = 16;
      ctx.shadowColor = `hsla(${p.hue}, 96%, 64%, 0.8)`;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();

      for (let j = index + 1; j < particles.length; j += 1) {
        const q = particles[j];
        const distance = Math.hypot(p.x - q.x, p.y - q.y);
        if (distance < 118) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.12 - distance / 1200})`;
          ctx.lineWidth = 1;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.stroke();
        }
      }
    });
    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", () => {
    resize();
    seed();
  });

  window.addEventListener("pointermove", (event) => {
    mouseX = event.clientX / width;
    mouseY = event.clientY / height;
  });

  resize();
  seed();
  draw();
}
