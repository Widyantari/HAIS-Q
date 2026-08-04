/**
 * HAIS-Q Application Logic
 *
 * State:
 *   - demographics: {}
 *   - answers: {}  keyed by "faIdx-saIdx-qIdx" -> Number 1..5
 *   - currentFocus: index of focus area currently displayed
 *
 * Scoring:
 *   effective = q.reverse ? (6 - answer) : answer
 *   focusScore = mean of all effective scores in that focus area
 *   totalScore = mean of ALL effective scores across the questionnaire
 */

const DATA = window.HAISQ_DATA;
const STORAGE_KEY = "haisq_progress_v1";

const state = {
  demographics: {},
  answers: {},
  currentFocus: 0
};

/* ============================================
   Navigation between sections
   ============================================ */
function goToSection(name) {
  document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
  document.getElementById("section-" + name).classList.add("active");
  window.scrollTo({ top: 0, behavior: "instant" });
}

/* ============================================
   Demographics
   ============================================ */
function submitDemographics() {
  const fields = [
    ["nama", "Nama Lengkap"],
    ["email", "Email"],
    ["gender", "Jenis Kelamin"],
    ["usia", "Usia"],
    ["profesi", "Profesi"],
    ["provinsi", "Provinsi"],
    ["kota", "Kota/Kabupaten"],
    ["pendidikan", "Pendidikan Terakhir"]
  ];

  const data = {};
  const missing = [];
  for (const [id, label] of fields) {
    const el = document.getElementById("dg-" + id);
    const value = el.value.trim();
    if (!value) missing.push(label);
    data[id] = value;
  }

  if (missing.length > 0) {
    alert("Mohon lengkapi: " + missing.join(", "));
    return;
  }

  // Basic email validation
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    alert("Format email tidak valid.");
    document.getElementById("dg-email").focus();
    return;
  }

state.demographics = data;
state.currentFocus = 0;
saveProgress();
renderFocus();
goToSection("questionnaire");

/* ============================================
   Questionnaire rendering
   ============================================ */
function renderFocus() {
  const fa = DATA.focusAreas[state.currentFocus];
  const total = DATA.focusAreas.length;
  const cur = state.currentFocus + 1;

  document.getElementById("q-focus-code").textContent = "Fokus Area · " + fa.code;
  document.getElementById("q-focus-name").textContent = fa.name;
  document.getElementById("q-current-idx").textContent = cur;
  document.getElementById("q-total-idx").textContent = total;
  document.getElementById("q-progress-fill").style.width = (cur / total * 100) + "%";

  const container = document.getElementById("q-focus-container");
  container.innerHTML = "";

  fa.subAreas.forEach((sa, saIdx) => {
    const card = document.createElement("div");
    card.className = "sub-area";

    const header = document.createElement("div");
    header.className = "sub-area-header";
    header.innerHTML = `
      <div class="sub-area-index">${(saIdx + 1).toString().padStart(2, "0")}</div>
      <h3 class="sub-area-name">${escapeHtml(sa.name)}</h3>
    `;
    card.appendChild(header);

    sa.questions.forEach((q, qIdx) => {
      const key = `${state.currentFocus}-${saIdx}-${qIdx}`;
      const currentValue = state.answers[key];

      const dimLabels = { K: "Pengetahuan", A: "Sikap", B: "Perilaku" };

      const qEl = document.createElement("div");
      qEl.className = "question";
      qEl.dataset.key = key;

      qEl.innerHTML = `
        <div class="q-dim">
          <span class="q-dim-badge">${q.dim}</span>
          <span>${dimLabels[q.dim]}</span>
        </div>
        <div class="q-text">${escapeHtml(q.text)}</div>
        <div class="likert" role="radiogroup" aria-label="${escapeHtml(q.text)}">
          ${[1, 2, 3, 4, 5].map(v => `
            <div>
              <input type="radio"
                     id="q-${key}-${v}"
                     name="q-${key}"
                     value="${v}"
                     ${currentValue === v ? "checked" : ""}
                     onchange="setAnswer('${key}', ${v})">
              <label for="q-${key}-${v}">${v}</label>
            </div>
          `).join("")}
        </div>
      `;

      card.appendChild(qEl);
    });

    container.appendChild(card);
  });

  // Update prev/next buttons
  const prevBtn = document.getElementById("q-prev-btn");
  const nextBtn = document.getElementById("q-next-btn");
  prevBtn.disabled = state.currentFocus === 0;

  if (state.currentFocus === DATA.focusAreas.length - 1) {
    nextBtn.innerHTML = 'Lihat Hasil <span class="arrow">→</span>';
  } else {
    nextBtn.innerHTML = 'Selanjutnya <span class="arrow">→</span>';
  }
}

function setAnswer(key, value) {
  state.answers[key] = value;
  // Remove "unanswered" highlight if it was there
  const el = document.querySelector(`.question[data-key="${key}"]`);
  if (el) el.classList.remove("unanswered");
  saveProgress();
}

function nextFocus() {
  // Check that all questions in current focus area are answered
  const fa = DATA.focusAreas[state.currentFocus];
  const missing = [];

  fa.subAreas.forEach((sa, saIdx) => {
    sa.questions.forEach((q, qIdx) => {
      const key = `${state.currentFocus}-${saIdx}-${qIdx}`;
      if (state.answers[key] === undefined) {
        missing.push(key);
      }
    });
  });

  if (missing.length > 0) {
    missing.forEach(key => {
      const el = document.querySelector(`.question[data-key="${key}"]`);
      if (el) el.classList.add("unanswered");
    });
    // Scroll to first missing
    const firstEl = document.querySelector(`.question[data-key="${missing[0]}"]`);
    if (firstEl) {
      firstEl.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    alert(`Masih ada ${missing.length} pertanyaan yang belum dijawab pada fokus area ini.`);
    return;
  }

  if (state.currentFocus === DATA.focusAreas.length - 1) {
    // Last focus — go to results
    computeAndShowResults();
    return;
  }

state.currentFocus++;
saveProgress();
renderFocus();
}

function prevFocus() {
  if (state.currentFocus === 0) return;
  state.currentFocus--;
  saveProgress();
  renderFocus();
}

/* ============================================
   Scoring
   ============================================ */
function effectiveScore(q, answer) {
  return q.reverse ? (6 - answer) : answer;
}

function getCategory(score) {
  for (const cat of DATA.categories) {
    if (score >= cat.min && score <= cat.max + 0.0001) return cat;
  }
  return DATA.categories[DATA.categories.length - 1];
}

function computeResults() {
  const focusScores = [];
  const dimSums = { K: { sum: 0, n: 0 }, A: { sum: 0, n: 0 }, B: { sum: 0, n: 0 } };
  let allSum = 0, allN = 0;

  DATA.focusAreas.forEach((fa, faIdx) => {
    let faSum = 0, faN = 0;
    fa.subAreas.forEach((sa, saIdx) => {
      sa.questions.forEach((q, qIdx) => {
        const key = `${faIdx}-${saIdx}-${qIdx}`;
        const answer = state.answers[key];
        if (answer === undefined) return;

        const eff = effectiveScore(q, answer);
        faSum += eff; faN++;
        allSum += eff; allN++;
        dimSums[q.dim].sum += eff;
        dimSums[q.dim].n++;
      });
    });
    focusScores.push({
      code: fa.code,
      name: fa.name,
      score: faN > 0 ? faSum / faN : 0
    });
  });

  return {
    total: allN > 0 ? allSum / allN : 0,
    focus: focusScores,
    dimensions: {
      K: dimSums.K.n > 0 ? dimSums.K.sum / dimSums.K.n : 0,
      A: dimSums.A.n > 0 ? dimSums.A.sum / dimSums.A.n : 0,
      B: dimSums.B.n > 0 ? dimSums.B.sum / dimSums.B.n : 0
    }
  };
}

/* ============================================
   Results rendering
   ============================================ */
function categoryDescription(cat) {
  const map = {
    "Sangat Baik": "Kesadaran keamanan informasi Anda sudah sangat baik. Pertahankan kebiasaan positif ini dan jadilah teladan bagi lingkungan sekitar.",
    "Baik": "Kesadaran keamanan informasi Anda sudah baik. Masih ada ruang untuk peningkatan pada beberapa aspek — perhatikan area dengan skor lebih rendah.",
    "Kurang Baik": "Kesadaran keamanan informasi Anda masih perlu ditingkatkan. Fokus pada pemahaman risiko dan praktik keamanan dasar.",
    "Tidak Baik": "Kesadaran keamanan informasi Anda rendah. Sangat disarankan mengikuti pelatihan dan mempraktikkan langkah-langkah keamanan digital dasar.",
    "Sangat Tidak Baik": "Kesadaran keamanan informasi Anda sangat rendah. Ada risiko signifikan terhadap keamanan data Anda; edukasi menyeluruh sangat diperlukan."
  };
  return map[cat] || "";
}

function computeAndShowResults() {
  const results = computeResults();

  // Greeting
  const nama = state.demographics.nama || "";
  const firstName = nama.split(" ")[0] || "Terima kasih";
  document.getElementById("result-name-greeting").innerHTML =
    `Terima kasih, <em>${escapeHtml(firstName)}</em>`;

  // Total
  const totalCat = getCategory(results.total);
  document.getElementById("total-score").textContent = results.total.toFixed(2);
  const catBadge = document.getElementById("total-category");
  catBadge.textContent = totalCat.label;
  document.getElementById("total-card").style.setProperty("--total-color", totalCat.color);
  document.getElementById("total-desc").textContent = categoryDescription(totalCat.label);

  // Focus areas
  const focusContainer = document.getElementById("focus-results");
  focusContainer.innerHTML = "";
  results.focus.forEach(f => {
    const cat = getCategory(f.score);
    const pct = ((f.score - 1) / 4 * 100).toFixed(1); // 1..5 mapped to 0..100
    const row = document.createElement("div");
    row.className = "focus-row";
    row.innerHTML = `
      <div class="focus-row-code">${f.code}</div>
      <div class="focus-row-name">${escapeHtml(f.name)}</div>
      <div class="focus-row-bar">
        <div class="focus-row-bar-fill" style="width: ${pct}%; background: ${cat.color};"></div>
      </div>
      <div class="focus-row-score">${f.score.toFixed(2)}</div>
      <div class="focus-row-cat" style="background: ${cat.color};">${cat.label}</div>
    `;
    focusContainer.appendChild(row);
  });

  // KAB dimensions
  const kabGrid = document.getElementById("kab-grid");
  kabGrid.innerHTML = "";
  const dimNames = { K: "Pengetahuan", A: "Sikap", B: "Perilaku" };
  ["K", "A", "B"].forEach(d => {
    const score = results.dimensions[d];
    const cat = getCategory(score);
    const cell = document.createElement("div");
    cell.className = "kab-cell";
    cell.innerHTML = `
      <div class="kab-cell-label">${d}</div>
      <div class="kab-cell-dim">${dimNames[d]}</div>
      <div class="kab-cell-score">${score.toFixed(2)}</div>
      <div class="kab-cell-cat" style="background: ${cat.color};">${cat.label}</div>
    `;
    kabGrid.appendChild(cell);
  });

  clearProgress();
  goToSection("results");
}

/* ============================================
   Restart / Export
   ============================================ */
function restart() {
  if (!confirm("Yakin ingin mengulangi kuesioner? Semua jawaban akan direset.")) return;
  state.demographics = {};
  state.answers = {};
  state.currentFocus = 0;
  clearProgress();
  document.querySelectorAll("input, select").forEach(el => {
    if (el.type === "radio") el.checked = false;
    else el.value = "";
  });
  goToSection("welcome");
}

function downloadJSON() {
  const results = computeResults();
  const payload = {
    exportedAt: new Date().toISOString(),
    demographics: state.demographics,
    scores: {
      total: {
        score: Number(results.total.toFixed(4)),
        category: getCategory(results.total).label
      },
      focusAreas: results.focus.map(f => ({
        code: f.code,
        name: f.name,
        score: Number(f.score.toFixed(4)),
        category: getCategory(f.score).label
      })),
      dimensions: {
        K: { score: Number(results.dimensions.K.toFixed(4)), category: getCategory(results.dimensions.K).label },
        A: { score: Number(results.dimensions.A.toFixed(4)), category: getCategory(results.dimensions.A).label },
        B: { score: Number(results.dimensions.B.toFixed(4)), category: getCategory(results.dimensions.B).label }
      }
    },
    rawAnswers: state.answers
  };

  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const safeName = (state.demographics.nama || "responden").replace(/[^a-zA-Z0-9]+/g, "_");
  a.href = url;
  a.download = `HAISQ_${safeName}_${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/* ============================================
   Utils
   ============================================ */
function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
}
/* ============================================
   Auto-save (localStorage)
   ============================================ */
function saveProgress() {
  try {
    const payload = {
      demographics: state.demographics,
      answers: state.answers,
      currentFocus: state.currentFocus,
      savedAt: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch (e) {
    console.warn("Gagal menyimpan progress:", e);
  }
}

function clearProgress() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.warn("Gagal menghapus progress:", e);
  }
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    // Cek apakah data valid & belum kadaluarsa (7 hari)
    const savedAt = new Date(data.savedAt);
    const daysSince = (Date.now() - savedAt.getTime()) / (1000 * 60 * 60 * 24);
    if (daysSince > 7) {
      clearProgress();
      return null;
    }
    return data;
  } catch (e) {
    return null;
  }
}

function checkAndResumeProgress() {
  const saved = loadProgress();
  if (!saved) return;
  if (!saved.demographics.nama || Object.keys(saved.answers).length === 0) {
    return;
  }

  const nama = saved.demographics.nama.split(" ")[0];
  const answered = Object.keys(saved.answers).length;
  const total = DATA.focusAreas.reduce((sum, fa) =>
    sum + fa.subAreas.reduce((s, sa) => s + sa.questions.length, 0), 0);
  const savedDate = new Date(saved.savedAt).toLocaleString("id-ID");

  const shouldResume = confirm(
    `Ada progress yang belum selesai untuk "${nama}" (${answered} dari ${total} pertanyaan sudah dijawab, disimpan ${savedDate}).\n\n` +
    `Klik OK untuk melanjutkan, atau Cancel untuk memulai dari awal.`
  );

  if (shouldResume) {
    state.demographics = saved.demographics;
    state.answers = saved.answers;
    state.currentFocus = saved.currentFocus || 0;

    // Restore demographics ke form (biar terisi kalau responden kembali ke halaman demografis)
    for (const [key, value] of Object.entries(saved.demographics)) {
      const el = document.getElementById("dg-" + key);
      if (el) el.value = value;
    }

    renderFocus();
    goToSection("questionnaire");
  } else {
    clearProgress();
  }
}

// Panggil saat halaman dimuat
window.addEventListener("DOMContentLoaded", checkAndResumeProgress);