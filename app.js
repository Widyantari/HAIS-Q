const DATA = window.HAISQ_DATA;
const STORAGE_KEY = "haisq_progress_v1";

const state = {
  demographics: {},
  answers: {},
  currentFocus: 0
};

/* ============================================
   Konten: penjelasan dimensi K/A/B
   ============================================ */
const DIMENSION_INFO = {
  K: {
    name: "Pengetahuan",
    description: "Mengukur pemahaman Anda mengenai ancaman siber, phishing, keamanan data, dan konsep keamanan informasi lainnya."
  },
  A: {
    name: "Sikap",
    description: "Mengukur tingkat kepedulian dan kesadaran Anda terhadap pentingnya keamanan informasi."
  },
  B: {
    name: "Perilaku",
    description: "Mengukur implementasi dan penerapan praktik keamanan informasi dalam aktivitas sehari-hari."
  }
};

const DIMENSION_IMPROVEMENT_TIPS = {
  K: "pembelajaran materi keamanan informasi seperti mengikuti pelatihan, membaca sumber terpercaya, dan mempelajari kebijakan keamanan yang berlaku",
  A: "pembiasaan penerapan kebijakan keamanan informasi dan kepatuhan terhadap prosedur keamanan",
  B: "praktik langsung dalam aktivitas sehari-hari dan penerapan konsisten dari aturan keamanan yang telah diketahui"
};

/* ============================================
   Konten: rekomendasi per fokus area
   ============================================ */
const RECOMMENDATIONS = {
  PM: {
    title: "Manajemen Password",
    tips: [
      "Gunakan password unik untuk setiap akun — jangan pakai password yang sama di media sosial dan akun kerja",
      "Buat password minimal 12 karakter dengan kombinasi huruf besar, kecil, angka, dan simbol",
      "Gunakan password manager (Bitwarden, 1Password) agar tidak perlu mengingat semua password",
      "Aktifkan Multi-Factor Authentication (MFA/2FA) di semua akun penting",
      "Ganti password bawaan sistem segera dengan password baru yang lebih kuat"
    ]
  },
  EU: {
    title: "Penggunaan Email",
    tips: [
      "Verifikasi identitas pengirim dengan hati-hati sebelum mengklik link atau membuka lampiran",
      "Waspada tanda-tanda phishing: alamat email mencurigakan, urgensi berlebihan, atau permintaan data sensitif",
      "Jangan buka lampiran dari pengirim tidak dikenal",
      "Selalu logout dari akun email di perangkat bersama atau publik",
      "Pisahkan akun email pribadi dan email kantor"
    ]
  },
  IU: {
    title: "Penggunaan Internet",
    tips: [
      "Cek keamanan website (URL berawalan https) sebelum memasukkan data pribadi",
      "Hanya download dan install aplikasi berlisensi dari sumber resmi",
      "Gunakan VPN kantor saat mengakses aplikasi kerja dari jaringan publik",
      "Hati-hati dengan tawaran menggiurkan yang meminta data pribadi",
      "Batasi informasi yang Anda upload ke platform AI (ChatGPT, Gemini, dll)"
    ]
  },
  SMU: {
    title: "Penggunaan Sosial Media",
    tips: [
      "Review pengaturan privasi akun media sosial secara berkala",
      "Pikirkan konsekuensi jangka panjang sebelum posting apapun terkait pekerjaan",
      "Verifikasi identitas orang yang meminta informasi pribadi",
      "Jangan ikuti tren viral yang meminta akses data pribadi (challenge, kuis, filter AI)",
      "Batasi informasi sensitif kantor di cloud publik (Google Drive sharing, dll)"
    ]
  },
  MD: {
    title: "Perangkat Bergerak",
    tips: [
      "Jangan tinggalkan perangkat tanpa pengawasan di tempat umum",
      "Aktifkan screen lock dengan password/PIN/biometrik",
      "Update sistem operasi dan aplikasi secara rutin",
      "Jangan pinjamkan perangkat kerja ke pihak yang tidak berkepentingan",
      "Batasi izin aplikasi hanya yang benar-benar diperlukan untuk fungsinya"
    ]
  },
  PS: {
    title: "Keamanan Fisik",
    tips: [
      "Jangan diskusikan informasi sensitif di area publik yang dapat terdengar orang lain",
      "Verifikasi identitas sebelum memberikan akses masuk ke sistem/ruangan kerja",
      "Aktifkan antivirus di perangkat kerja dan update secara rutin",
      "Segera pasang update/patch keamanan sistem — jangan ditunda",
      "Laporkan aktivitas mencurigakan di area kerja"
    ]
  },
  IH: {
    title: "Penanganan Informasi",
    tips: [
      "Hancurkan (shredder) dokumen sensitif sebelum dibuang, jangan dibuang begitu saja",
      "Jangan colokkan USB tak dikenal ke perangkat Anda",
      "Backup data penting secara rutin ke lokasi yang aman",
      "Hapus data secara permanen sebelum membuang atau mengganti perangkat",
      "Hindari menyimpan dokumen kantor yang bersifat rahasia di perangkat pribadi"
    ]
  },
  IR: {
    title: "Pelaporan Insiden",
    tips: [
      "Laporkan segera aktivitas mencurigakan di tempat kerja",
      "Jangan abaikan pelanggaran keamanan sekecil apapun",
      "Ambil tindakan saat menyadari rekan kerja mengabaikan aturan keamanan",
      "Pelajari saluran pelaporan insiden yang tersedia di instansi Anda"
    ]
  },
  SL: {
    title: "Pengetahuan Keamanan Informasi",
    tips: [
      "Aktif ikuti pelatihan kesadaran keamanan informasi",
      "Pelajari dari insiden keamanan yang terjadi (di institusi maupun umum)",
      "Pahami kebijakan keamanan informasi instansi (SOP, Pergub SMKI, aturan PDP)",
      "Ikuti perkembangan ancaman siber terkini"
    ]
  }
};

/* ============================================
   Navigation
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
}

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

  const prevBtn = document.getElementById("q-prev-btn");
  const nextBtn = document.getElementById("q-next-btn");
  prevBtn.disabled = state.currentFocus === 0;

  if (state.currentFocus === DATA.focusAreas.length - 1) {
    nextBtn.innerHTML = 'Lihat Hasil <span class="arrow">→</span>';
  } else {
    nextBtn.innerHTML = 'Selanjutnya <span class="arrow">→</span>';
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setAnswer(key, value) {
  state.answers[key] = value;
  const el = document.querySelector(`.question[data-key="${key}"]`);
  if (el) el.classList.remove("unanswered");
  saveProgress();
}

function nextFocus() {
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
    const firstEl = document.querySelector(`.question[data-key="${missing[0]}"]`);
    if (firstEl) {
      firstEl.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    alert(`Masih ada ${missing.length} pertanyaan yang belum dijawab pada fokus area ini.`);
    return;
  }

  if (state.currentFocus === DATA.focusAreas.length - 1) {
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
  const subAreaScores = []; // NEW
  const dimSums = { K: { sum: 0, n: 0 }, A: { sum: 0, n: 0 }, B: { sum: 0, n: 0 } };
  let allSum = 0, allN = 0;

  DATA.focusAreas.forEach((fa, faIdx) => {
    let faSum = 0, faN = 0;
    fa.subAreas.forEach((sa, saIdx) => {
      let saSum = 0, saN = 0;
      sa.questions.forEach((q, qIdx) => {
        const key = `${faIdx}-${saIdx}-${qIdx}`;
        const answer = state.answers[key];
        if (answer === undefined) return;

        const eff = effectiveScore(q, answer);
        saSum += eff; saN++;
        faSum += eff; faN++;
        allSum += eff; allN++;
        dimSums[q.dim].sum += eff;
        dimSums[q.dim].n++;
      });
      subAreaScores.push({
        faCode: fa.code,
        faName: fa.name,
        saName: sa.name,
        score: saN > 0 ? saSum / saN : 0
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
    subAreas: subAreaScores,
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

/**
 * Generate ringkasan otomatis berdasarkan skor
 */
function generateAutoSummary(results) {
  const totalCat = getCategory(results.total);
  const percent = (results.total / 5 * 100).toFixed(1);

  // Find highest and lowest dimensions
  const dims = Object.entries(results.dimensions).map(([k, s]) => ({ code: k, score: s }));
  dims.sort((a, b) => b.score - a.score);
  const highest = dims[0];
  const lowest = dims[dims.length - 1];

  const highName = DIMENSION_INFO[highest.code].name;
  const lowName = DIMENSION_INFO[lowest.code].name;
  const lowTip = DIMENSION_IMPROVEMENT_TIPS[lowest.code];

  // Frasing based on category
  const categoryPhrase = {
    "Sangat Baik": "sangat baik",
    "Baik": "baik",
    "Kurang Baik": "masih perlu ditingkatkan",
    "Tidak Baik": "masih rendah",
    "Sangat Tidak Baik": "sangat rendah"
  }[totalCat.label] || totalCat.label.toLowerCase();

  return `Tingkat kesadaran keamanan informasi Anda ${categoryPhrase} (${percent}%). ` +
         `Kekuatan utama berada pada aspek <strong>${highName}</strong> (${highest.score.toFixed(2)}), ` +
         `sedangkan aspek <strong>${lowName}</strong> (${lowest.score.toFixed(2)}) masih dapat ditingkatkan ` +
         `melalui ${lowTip}.`;
}

function computeAndShowResults() {
  const results = computeResults();

  // Greeting
  const nama = state.demographics.nama || "";
  const firstName = nama.split(" ")[0] || "Terima kasih";
  document.getElementById("result-name-greeting").innerHTML =
    `Terima kasih, <em>${escapeHtml(firstName)}</em>`;

  // Total score card
  const totalCat = getCategory(results.total);
  document.getElementById("total-score").textContent = results.total.toFixed(2);
  const catBadge = document.getElementById("total-category");
  catBadge.textContent = totalCat.label;
  document.getElementById("total-card").style.setProperty("--total-color", totalCat.color);
  document.getElementById("total-desc").textContent = categoryDescription(totalCat.label);

  // Auto summary (NEW)
  const summaryEl = document.getElementById("auto-summary");
  if (summaryEl) summaryEl.innerHTML = generateAutoSummary(results);

  // Focus area breakdown with highlight for min/max
  const focusContainer = document.getElementById("focus-results");
  focusContainer.innerHTML = "";
  const focusSorted = [...results.focus].sort((a, b) => b.score - a.score);
  const highestFocus = focusSorted[0];
  const lowestFocus = focusSorted[focusSorted.length - 1];

  results.focus.forEach(f => {
    const cat = getCategory(f.score);
    const pct = ((f.score - 1) / 4 * 100).toFixed(1);
    const row = document.createElement("div");
    row.className = "focus-row";
    let indicator = "";
    if (f === highestFocus) indicator = '<span class="focus-indicator best" title="Skor tertinggi">🏆</span>';
    else if (f === lowestFocus) indicator = '<span class="focus-indicator worst" title="Skor terendah">⚠️</span>';
    row.innerHTML = `
      <div class="focus-row-code">${indicator}${f.code}</div>
      <div class="focus-row-name">${escapeHtml(f.name)}</div>
      <div class="focus-row-bar">
        <div class="focus-row-bar-fill" style="width: ${pct}%; background: ${cat.color};"></div>
      </div>
      <div class="focus-row-score">${f.score.toFixed(2)}</div>
      <div class="focus-row-cat" style="background: ${cat.color};">${cat.label}</div>
    `;
    focusContainer.appendChild(row);
  });

  // Sub-area highlights (NEW) — Kekuatan & Perlu Perhatian
  renderSubAreaHighlights(results.subAreas);

  // KAB dimensions with descriptions
  const kabGrid = document.getElementById("kab-grid");
  kabGrid.innerHTML = "";
  ["K", "A", "B"].forEach(d => {
    const score = results.dimensions[d];
    const cat = getCategory(score);
    const info = DIMENSION_INFO[d];
    const cell = document.createElement("div");
    cell.className = "kab-cell";
    cell.innerHTML = `
      <div class="kab-cell-label">${d}</div>
      <div class="kab-cell-dim">${info.name}</div>
      <div class="kab-cell-score">${score.toFixed(2)}</div>
      <div class="kab-cell-cat" style="background: ${cat.color};">${cat.label}</div>
      <div class="kab-cell-desc">${info.description}</div>
    `;
    kabGrid.appendChild(cell);
  });

  // Recommendations (NEW)
  renderRecommendations(results.focus);

  clearProgress();
  goToSection("results");
}

/**
 * Render sub-area strengths & weaknesses
 */
function renderSubAreaHighlights(subAreas) {
  const container = document.getElementById("sub-area-highlights");
  if (!container) return;

  const sorted = [...subAreas].sort((a, b) => b.score - a.score);
  const topN = Math.min(5, Math.floor(sorted.length / 2));
  const strengths = sorted.slice(0, topN);
  const weaknesses = sorted.slice(-topN).reverse();

  const renderList = (items, isStrength) => {
    return items.map(sa => {
      const cat = getCategory(sa.score);
      const icon = isStrength ? "✅" : "⚠️";
      return `
        <li class="highlight-item">
          <span class="highlight-icon">${icon}</span>
          <div class="highlight-content">
            <div class="highlight-name">${escapeHtml(sa.saName)}</div>
            <div class="highlight-meta">
              <span class="highlight-fa">${sa.faCode}</span>
              <span class="highlight-score" style="color: ${cat.color};">${sa.score.toFixed(2)} · ${cat.label}</span>
            </div>
          </div>
        </li>
      `;
    }).join("");
  };

  container.innerHTML = `
    <div class="highlight-column">
      <div class="highlight-column-title strength">
        <span>💪 Kekuatan Anda</span>
        <span class="highlight-column-sub">5 sub-area dengan skor tertinggi</span>
      </div>
      <ul class="highlight-list">${renderList(strengths, true)}</ul>
    </div>
    <div class="highlight-column">
      <div class="highlight-column-title weakness">
        <span>🎯 Perlu Perhatian</span>
        <span class="highlight-column-sub">5 sub-area dengan skor terendah</span>
      </div>
      <ul class="highlight-list">${renderList(weaknesses, false)}</ul>
    </div>
  `;
}

/**
 * Render recommendations for the lowest 3 focus areas
 */
function renderRecommendations(focusScores) {
  const container = document.getElementById("recommendations");
  if (!container) return;

  // Sort focus areas by score (ascending — weakest first)
  const sorted = [...focusScores].sort((a, b) => a.score - b.score);

  // Show recommendations for the lowest 3
  const weakest = sorted.slice(0, 3);

  container.innerHTML = weakest.map(f => {
    const rec = RECOMMENDATIONS[f.code];
    if (!rec) return "";
    const cat = getCategory(f.score);
    return `
      <div class="rec-card">
        <div class="rec-card-header">
          <div class="rec-card-title">
            <span class="rec-card-code">${f.code}</span>
            ${escapeHtml(rec.title)}
          </div>
          <div class="rec-card-score" style="background: ${cat.color};">
            ${f.score.toFixed(2)} · ${cat.label}
          </div>
        </div>
        <ul class="rec-card-tips">
          ${rec.tips.map(t => `<li>${escapeHtml(t)}</li>`).join("")}
        </ul>
      </div>
    `;
  }).join("");
}

/* ============================================
   Restart
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

/* ============================================
   CSV Export
   ============================================ */
function downloadCSV() {
  const results = computeResults();
  const headers = [];
  const values = [];

  headers.push("waktu_ekspor");
  values.push(new Date().toISOString());

  const demoCols = [
    ["nama", "nama"],
    ["email", "email"],
    ["gender", "jenis_kelamin"],
    ["usia", "usia"],
    ["profesi", "profesi"],
    ["provinsi", "provinsi"],
    ["kota", "kota_kabupaten"],
    ["pendidikan", "pendidikan_terakhir"]
  ];
  demoCols.forEach(([key, col]) => {
    headers.push(col);
    values.push(state.demographics[key] || "");
  });

  const totalCat = getCategory(results.total);
  headers.push("skor_total", "kategori_total", "persen_total");
  values.push(results.total.toFixed(4), totalCat.label, (results.total / 5 * 100).toFixed(2));

  results.focus.forEach(f => {
    const cat = getCategory(f.score);
    headers.push(`skor_${f.code}`, `kategori_${f.code}`);
    values.push(f.score.toFixed(4), cat.label);
  });

  ["K", "A", "B"].forEach(d => {
    const score = results.dimensions[d];
    const cat = getCategory(score);
    headers.push(`skor_dim_${d}`, `kategori_dim_${d}`);
    values.push(score.toFixed(4), cat.label);
  });

  DATA.focusAreas.forEach((fa, faIdx) => {
    fa.subAreas.forEach((sa, saIdx) => {
      sa.questions.forEach((q, qIdx) => {
        const key = `${faIdx}-${saIdx}-${qIdx}`;
        const answer = state.answers[key];
        headers.push(`jawaban_${fa.code}_sub${saIdx + 1}_${q.dim}`);
        values.push(answer !== undefined ? answer : "");
      });
    });
  });

  const csvContent = csvRow(headers) + "\r\n" + csvRow(values) + "\r\n";
  const blob = new Blob(["\uFEFF" + csvContent], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const safeName = (state.demographics.nama || "responden").replace(/[^a-zA-Z0-9]+/g, "_");
  a.href = url;
  a.download = `HAISQ_${safeName}_${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function csvRow(fields) {
  return fields.map(f => {
    const s = String(f);
    if (/[",\r\n]/.test(s)) return '"' + s.replace(/"/g, '""') + '"';
    return s;
  }).join(",");
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
  try { localStorage.removeItem(STORAGE_KEY); }
  catch (e) { console.warn("Gagal menghapus progress:", e); }
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    const savedAt = new Date(data.savedAt);
    const daysSince = (Date.now() - savedAt.getTime()) / (1000 * 60 * 60 * 24);
    if (daysSince > 7) { clearProgress(); return null; }
    return data;
  } catch (e) { return null; }
}

function checkAndResumeProgress() {
  const saved = loadProgress();
  if (!saved) return;
  if (!saved.demographics.nama || Object.keys(saved.answers).length === 0) return;

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

window.addEventListener("DOMContentLoaded", checkAndResumeProgress);

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