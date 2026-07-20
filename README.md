# HAIS-Q — Pengukur Kesadaran Keamanan Informasi

Aplikasi web sederhana untuk mengukur tingkat kesadaran keamanan informasi
menggunakan instrumen HAIS-Q (9 fokus area, 34 sub area, 102 pertanyaan)
dengan kategorisasi Nilai Jenjang Interval (NJI).

---

## 📁 Struktur file

```
haisq-app/
├── index.html   
├── styles.css   
├── data.js      
├── app.js       
└── README.md    
```

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


## 💾 Ekspor hasil

Di halaman hasil ada tiga tombol:

- **🖨️ Cetak / Simpan PDF** — buka print dialog browser, bisa disimpan sebagai PDF
- **💾 Simpan Hasil (JSON)** — download file `.json` berisi data lengkap responden,
  skor total, skor per fokus area, skor per dimensi K/A/B, dan semua jawaban mentah
- **Ulangi Kuesioner** — reset semua data dan mulai dari awal

---

## 📖 Catatan

- Data responden **tidak disimpan di server** 
- Instrumen HAIS-Q berdasarkan Parsons et al. (2017), dengan kategorisasi NJI
  merujuk pada Sugiyono (2013).
