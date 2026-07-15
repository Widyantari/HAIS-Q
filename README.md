# HAIS-Q — Pengukur Kesadaran Keamanan Informasi

Aplikasi web sederhana untuk mengukur tingkat kesadaran keamanan informasi
menggunakan instrumen HAIS-Q (9 fokus area, 34 sub area, 102 pertanyaan)
dengan kategorisasi Nilai Jenjang Interval (NJI).

Tidak butuh backend, tidak butuh database, tidak butuh install apa-apa.
Cukup HTML + CSS + JavaScript.

---

## 📁 Struktur file

```
haisq-app/
├── index.html   ← halaman utama
├── styles.css   ← styling
├── data.js      ← semua pertanyaan & konfigurasi (ini yang paling sering diedit)
├── app.js       ← logic aplikasi (navigasi, scoring, hasil)
└── README.md    ← file ini
```

---

## 🚀 Cara menjalankan (2 opsi)

### Opsi A — Paling cepat: buka langsung di browser

1. Extract semua file ke satu folder (misal `haisq-app/`).
2. Klik dua kali `index.html` → langsung buka di browser default kamu.

Selesai. Ga perlu install apa-apa.

### Opsi B — Pakai VS Code + Live Server (recommended untuk development)

Kelebihan: browser auto-reload setiap kali kamu save file — enak buat editing.

1. **Install VS Code** kalau belum: <https://code.visualstudio.com/>

2. **Install extension "Live Server"**:
   - Buka VS Code
   - Klik icon Extensions di sidebar (atau tekan `Ctrl+Shift+X`)
   - Cari `Live Server` (author: Ritwick Dey)
   - Klik **Install**

3. **Buka folder projectnya di VS Code**:
   - `File` → `Open Folder…` → pilih folder `haisq-app/`

4. **Jalankan**:
   - Klik kanan pada `index.html` di file explorer sidebar
   - Pilih **"Open with Live Server"**
   - Browser akan otomatis kebuka di `http://127.0.0.1:5500/index.html`

   Alternatif: tekan tombol **"Go Live"** di pojok kanan bawah VS Code.

Setiap kali kamu edit file dan save (`Ctrl+S`), browser reload otomatis.

---

## 🧮 Bagaimana skor dihitung

**Skala Likert**: 1 (Sangat Tidak Setuju) → 5 (Sangat Setuju)

**Reverse-scored questions**: Beberapa pertanyaan dibalik penilaiannya (ditandai
`reverse: true` di `data.js`). Misalnya pertanyaan _"Saya boleh membagi password
dengan rekan kerja"_ — jawaban "Sangat Setuju" (5) justru menandakan kesadaran
rendah, jadi diubah menjadi skor 1 (rumus: `skor = 6 - jawaban`).

**Skor per Fokus Area** = rata-rata skor efektif semua pertanyaan (K + A + B)
di fokus area tersebut.

**Skor Total** = rata-rata skor efektif seluruh 102 pertanyaan.

**Kategorisasi (NJI, Sugiyono 2013)**:

| Rentang Skor | Kategori |
|---|---|
| 4,21 – 5,00 | Sangat Baik |
| 3,41 – 4,20 | Baik |
| 2,61 – 3,40 | Kurang Baik |
| 1,81 – 2,60 | Tidak Baik |
| 1,00 – 1,80 | Sangat Tidak Baik |

---

## ✏️ Cara edit pertanyaan

Buka `data.js`. Strukturnya:

```javascript
{
  code: "PM",                    // kode singkat fokus area
  name: "Manajemen Password",    // nama fokus area
  subAreas: [
    {
      name: "Menggunakan password yang sama",
      questions: [
        { dim: "K", text: "…", reverse: true },   // Pengetahuan
        { dim: "A", text: "…", reverse: true },   // Sikap
        { dim: "B", text: "…", reverse: false }   // Perilaku
      ]
    },
    // …sub area lain
  ]
}
```

- `dim`: `K` (Knowledge/Pengetahuan), `A` (Attitude/Sikap), `B` (Behaviour/Perilaku)
- `reverse`: `true` untuk pertanyaan yang dibalik penilaiannya, `false` jika normal

Kalau nambah/ubah pertanyaan, cukup save file dan reload browser. Ga perlu build.

---

## 💾 Ekspor hasil

Di halaman hasil ada tiga tombol:

- **🖨️ Cetak / Simpan PDF** — buka print dialog browser, bisa disimpan sebagai PDF
- **💾 Simpan Hasil (JSON)** — download file `.json` berisi data lengkap responden,
  skor total, skor per fokus area, skor per dimensi K/A/B, dan semua jawaban mentah
- **Ulangi Kuesioner** — reset semua data dan mulai dari awal

---

## 🌐 Deploy ke internet (opsional)

Kalau nanti mau hosting biar bisa diakses orang lain, gratis pakai:

- **GitHub Pages**: push ke repo GitHub, aktifkan Pages di Settings
- **Netlify Drop**: drag folder-nya ke <https://app.netlify.com/drop>
- **Vercel**: `vercel deploy` dari terminal

---

## 📖 Catatan

- Data responden **tidak disimpan di server** — semua tetap di browser mereka.
  Kalau butuh mengumpulkan data banyak responden, mereka harus kirim JSON hasilnya
  ke kamu, atau kamu perlu tambah backend (misalnya Google Form untuk demografi
  + tombol submit ke Google Sheet).
- Instrumen HAIS-Q berdasarkan Parsons et al. (2017), dengan kategorisasi NJI
  merujuk pada Sugiyono (2013).
