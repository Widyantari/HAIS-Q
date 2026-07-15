/**
 * HAIS-Q Kuesioner Data
 * 9 Fokus Area, 34 Sub Area, 102 Pertanyaan (K/A/B per sub-area)
 *
 * Field "reverse: true" berarti pertanyaan reverse-scored:
 *   skor sebenarnya = 6 - jawaban_user
 *   (jawab 5 = skor 1, jawab 1 = skor 5)
 *
 * Ditandai dari simbol "^" di dokumen kuesioner asli.
 */

window.HAISQ_DATA = {
  scale: [
    { value: 1, label: "Sangat Tidak Setuju" },
    { value: 2, label: "Tidak Setuju" },
    { value: 3, label: "Netral" },
    { value: 4, label: "Setuju" },
    { value: 5, label: "Sangat Setuju" }
  ],

  categories: [
    { min: 4.21, max: 5.00, label: "Sangat Baik", color: "#4CAF50" },
    { min: 3.41, max: 4.20, label: "Baik", color: "#8BC34A" },
    { min: 2.61, max: 3.40, label: "Kurang Baik", color: "#FFC107" },
    { min: 1.81, max: 2.60, label: "Tidak Baik", color: "#FF9800" },
    { min: 1.00, max: 1.80, label: "Sangat Tidak Baik", color: "#F44336" }
  ],

  focusAreas: [
    {
      code: "PM",
      name: "Manajemen Password",
      subAreas: [
        {
          name: "Menggunakan password yang sama",
          questions: [
            { dim: "K", text: "Saya boleh menggunakan password yang sama untuk media sosial dan akun kerja saya.", reverse: true },
            { dim: "A", text: "Menggunakan password yang sama untuk media sosial dan akun kerja adalah hal yang aman.", reverse: true },
            { dim: "B", text: "Saya menggunakan password yang berbeda untuk akun media sosial dan akun kerja saya.", reverse: false }
          ]
        },
        {
          name: "Berbagi password",
          questions: [
            { dim: "K", text: "Saya boleh membagikan password akun kerja dengan rekan kerja yang lain.", reverse: true },
            { dim: "A", text: "Berbagi password akun kerja adalah ide yang buruk, bahkan jika rekan kerja memintanya.", reverse: false },
            { dim: "B", text: "Saya berbagi password akun kerja dengan rekan kerja.", reverse: true }
          ]
        },
        {
          name: "Memilih password yang kuat",
          questions: [
            { dim: "K", text: "Saya menggunakan kombinasi huruf, angka, dan simbol untuk membuat password akun kerja saya.", reverse: false },
            { dim: "A", text: "Memiliki password kerja hanya dengan huruf saja adalah hal yang aman.", reverse: true },
            { dim: "B", text: "Saya menggunakan kombinasi huruf, angka, dan simbol dalam password kerja saya.", reverse: false }
          ]
        },
        {
          name: "Menggunakan password bawaan dari sistem",
          questions: [
            { dim: "K", text: "Saya boleh menggunakan password bawaan yang diberikan aplikasi tanpa mengubahnya (contoh: password bawaan seperti 123, admin123).", reverse: true },
            { dim: "A", text: "Menggunakan password bawaan yang ditetapkan oleh sistem adalah hal yang berisiko (contoh: password bawaan seperti 123, admin123).", reverse: false },
            { dim: "B", text: "Saya selalu mengganti password bawaan dari aplikasi dengan password baru yang lebih kuat secepat mungkin.", reverse: false }
          ]
        }
      ]
    },
    {
      code: "EU",
      name: "Penggunaan Email",
      subAreas: [
        {
          name: "Mengklik link di email yang pengirimnya dikenal",
          questions: [
            { dim: "K", text: "Saya diperbolehkan mengklik tautan apa pun dalam email dari orang yang saya kenal.", reverse: true },
            { dim: "A", text: "Mengklik tautan dalam email dari orang yang saya kenal adalah hal yang aman.", reverse: true },
            { dim: "B", text: "Saya tidak selalu mengklik tautan dalam email hanya karena berasal dari seseorang yang saya kenal.", reverse: false }
          ]
        },
        {
          name: "Mengklik link di email yang pengirimnya tidak dikenal",
          questions: [
            { dim: "K", text: "Saya tidak diperbolehkan mengklik tautan dalam email dari pengirim yang tidak dikenal.", reverse: false },
            { dim: "A", text: "Tidak akan terjadi hal buruk jika saya mengklik tautan dalam email dari pengirim yang tidak dikenal.", reverse: true },
            { dim: "B", text: "Jika email dari pengirim yang tidak dikenal terlihat menarik, saya mengklik tautan di dalamnya.", reverse: true }
          ]
        },
        {
          name: "Membuka lampiran email dari pengirim yang tidak dikenal",
          questions: [
            { dim: "K", text: "Saya diperbolehkan membuka lampiran email dari pengirim yang tidak dikenal.", reverse: true },
            { dim: "A", text: "Membuka lampiran email dari pengirim yang tidak dikenal adalah hal yang berisiko.", reverse: false },
            { dim: "B", text: "Saya tidak membuka lampiran email jika pengirimnya tidak saya kenal.", reverse: false }
          ]
        },
        {
          name: "Logout akun email dari perangkat bersama",
          questions: [
            { dim: "K", text: "Tidak melogout akun email di perangkat bersama setelah selesai menggunakannya adalah hal yang aman (contoh: tidak logout dari gmail pribadi di komputer milik kantor/kampus saat jam pulang).", reverse: true },
            { dim: "A", text: "Tetap login pada akun email di perangkat bersama atau publik adalah hal yang berisiko (contoh: tetap login gmail pribadi dari komputer milik kantor/kampus ketika saat pulang).", reverse: false },
            { dim: "B", text: "Saya selalu logout dari akun email setelah selesai menggunakan perangkat bersama atau publik (contoh: logout gmail pribadi dari komputer milik kantor/kampus).", reverse: false }
          ]
        }
      ]
    },
    {
      code: "IU",
      name: "Penggunaan Internet",
      subAreas: [
        {
          name: "Mengunduh file",
          questions: [
            { dim: "K", text: "Saya diperbolehkan mengunduh file apa pun ke komputer kerja jika membantu pekerjaan saya.", reverse: true },
            { dim: "A", text: "Mengunduh file di komputer kerja bisa berisiko (mengunduh file di komputer kerja dapat menimbulkan risiko).", reverse: false },
            { dim: "B", text: "Saya mengunduh file apa pun ke komputer kerja yang akan membantu menyelesaikan pekerjaan.", reverse: true }
          ]
        },
        {
          name: "Mengakses website yang keamanannya meragukan",
          questions: [
            { dim: "K", text: "Saat bekerja, saya tidak seharusnya mengakses website tertentu.", reverse: false },
            { dim: "A", text: "Hanya karena saya bisa mengakses website di tempat kerja, bukan berarti website tersebut aman.", reverse: false },
            { dim: "B", text: "Saat mengakses internet di tempat kerja, saya mengunjungi website apa pun yang saya inginkan.", reverse: true }
          ]
        },
        {
          name: "Memasukkan informasi secara online",
          questions: [
            { dim: "K", text: "Saya diperbolehkan memasukkan informasi apa pun ke website mana pun jika membantu pekerjaan saya.", reverse: true },
            { dim: "A", text: "Jika membantu pekerjaan saya, tidak masalah informasi apa yang saya masukkan ke website.", reverse: true },
            { dim: "B", text: "Saya memastikan keamanan website sebelum memasukkan informasi.", reverse: false }
          ]
        },
        {
          name: "Menginstall aplikasi bajakan/tidak berlisensi dari internet",
          questions: [
            { dim: "K", text: "Saya diperbolehkan menginstal aplikasi (software) apa pun di perangkat pribadi selama membantu pekerjaan (tidak peduli bajakan atau tidak).", reverse: true },
            { dim: "A", text: "Menginstal aplikasi (software) bajakan di perangkat pribadi adalah hal yang berisiko.", reverse: false },
            { dim: "B", text: "Saya hanya menginstal aplikasi (software) yang sudah berlisensi di perangkat pribadi.", reverse: false }
          ]
        }
      ]
    },
    {
      code: "SMU",
      name: "Penggunaan Sosial Media",
      subAreas: [
        {
          name: "Setting privasi social media",
          questions: [
            { dim: "K", text: "Saya harus meninjau pengaturan privasi secara berkala akun media sosial saya.", reverse: false },
            { dim: "A", text: "Sebaiknya meninjau pengaturan privasi media sosial dilakukan secara berkala.", reverse: false },
            { dim: "B", text: "Saya tidak meninjau pengaturan privasi media sosial saya secara rutin.", reverse: true }
          ]
        },
        {
          name: "Konsekuensi dari social media",
          questions: [
            { dim: "K", text: "Saya tidak bisa dipecat karena sesuatu yang saya posting di media sosial.", reverse: true },
            { dim: "A", text: "Tidak masalah jika saya memposting hal-hal di media sosial yang biasanya tidak akan saya katakan di depan umum.", reverse: true },
            { dim: "B", text: "Saya tidak memposting apa pun di media sosial sebelum mempertimbangkan konsekuensi negatifnya.", reverse: false }
          ]
        },
        {
          name: "Posting pekerjaan di social media",
          questions: [
            { dim: "K", text: "Saya dapat memposting apa yang saya inginkan tentang pekerjaan di media sosial.", reverse: true },
            { dim: "A", text: "Memposting informasi tertentu tentang pekerjaan saya di media sosial adalah hal yang berisiko.", reverse: false },
            { dim: "B", text: "Saya memposting apa pun yang saya inginkan tentang pekerjaan saya di media sosial.", reverse: true }
          ]
        },
        {
          name: "Memanipulasi orang untuk melakukan sesuatu di social media",
          questions: [
            { dim: "K", text: "Saya boleh mengikuti instruksi dari seseorang tanpa memastikan identitasnya di social media.", reverse: true },
            { dim: "A", text: "Memberikan informasi sensitif kepada orang lain (seperti NIK, password aplikasi, pin atm, email, nomer hp pribadi) di social media adalah hal yang berbahaya.", reverse: false },
            { dim: "B", text: "Saya selalu memastikan identitas siapa pun yang meminta informasi pribadi (seperti NIK, password aplikasi, pin atm, email, nomer hp pribadi) sebelum memenuhinya.", reverse: false }
          ]
        }
      ]
    },
    {
      code: "MD",
      name: "Perangkat Bergerak",
      subAreas: [
        {
          name: "Melindungi peralatan bergerak secara fisik",
          questions: [
            { dim: "K", text: "Saat bekerja di tempat umum, saya harus memastikan laptop saya berada di dekat saya.", reverse: false },
            { dim: "A", text: "Meninggalkan laptop tanpa pengawasan sebentar saat bekerja di kafe adalah hal yang aman.", reverse: true },
            { dim: "B", text: "Saat bekerja di tempat umum, saya meninggalkan laptop saya tanpa pengawasan.", reverse: true }
          ]
        },
        {
          name: "Mengirim informasi sensitif melalui jaringan Wi-Fi",
          questions: [
            { dim: "K", text: "Saya diperbolehkan mengirim file kerja sensitif melalui jaringan Wi-Fi publik.", reverse: true },
            { dim: "A", text: "Mengirim file kerja sensitif menggunakan jaringan Wi-Fi publik adalah hal yang berisiko.", reverse: false },
            { dim: "B", text: "Saya mengirim file kerja sensitif menggunakan jaringan Wi-Fi publik.", reverse: true }
          ]
        },
        {
          name: "Shoulder Surfing",
          questions: [
            { dim: "K", text: "Saat mengerjakan dokumen sensitif, saya harus memastikan orang asing tidak dapat melihat layar laptop saya.", reverse: false },
            { dim: "A", text: "Mengakses file kerja sensitif di laptop jika orang asing bisa melihat layar saya adalah hal yang berisiko.", reverse: false },
            { dim: "B", text: "Saya memastikan bahwa orang asing tidak dapat melihat layar laptop jika saya mengerjakan dokumen sensitif.", reverse: false }
          ]
        },
        {
          name: "Mengupdate aplikasi yang sudah expired",
          questions: [
            { dim: "K", text: "Saya tidak perlu memperbarui sistem operasi (OS) dan aplikasi di perangkat pribadi jika sudah expired.", reverse: true },
            { dim: "A", text: "Memperbarui sistem operasi (OS) dan aplikasi di perangkat pribadi adalah hal yang penting untuk melindungi dari risiko keamanan.", reverse: false },
            { dim: "B", text: "Saya selalu mengupdate sistem operasi (OS) dan aplikasi di perangkat pribadi.", reverse: false }
          ]
        },
        {
          name: "Membatasi izin aplikasi dalam mengakses media",
          questions: [
            { dim: "K", text: "Saya boleh memberikan izin aplikasi untuk mengakses media, meskipun tidak berkaitan dengan fungsi aplikasi tersebut (memperbolehkan aplikasi game untuk mengakses lokasi).", reverse: true },
            { dim: "A", text: "Mengizinkan aplikasi untuk mengakses media yang tidak diperlukan untuk fungsi aplikasi tersebut adalah hal yang berbahaya (memperbolehkan aplikasi game untuk mengakses lokasi).", reverse: false },
            { dim: "B", text: "Saya meninjau dan membatasi izin yang saya berikan kepada aplikasi dan hanya mengizinkan yang diperlukan untuk fungsi aplikasi.", reverse: false }
          ]
        }
      ]
    },
    {
      code: "PS",
      name: "Keamanan Fisik",
      subAreas: [
        {
          name: "Memproteksi perangkat dari ancaman fisik (lingkungan)",
          questions: [
            { dim: "K", text: "Ancaman fisik pada peralatan IT, seperti kebakaran atau banjir, tidak memerlukan tindakan pencegahan khusus.", reverse: true },
            { dim: "A", text: "Ancaman fisik dan lingkungan seperti kebakaran, kerusakan air, dan sebagainya termasuk ke dalam ancaman keamanan informasi.", reverse: false },
            { dim: "B", text: "Saya mengikuti panduan untuk melindungi peralatan (seperti laptop, komputer, tab, dan handphone) dari ancaman fisik dan lingkungan, seperti menjauhkan perangkat dari area berbahaya.", reverse: false }
          ]
        },
        {
          name: "Menempati area yang aman saat bekerja",
          questions: [
            { dim: "K", text: "Saya boleh mendiskusikan mengenai pekerjaan yang sensitif di area mana pun saat di kantor maupun di luar kantor.", reverse: true },
            { dim: "A", text: "Saya mengetahui batasan perilaku (sadar diri untuk tidak membicarakan masalah pekerjaan yang sensitif) saat bekerja di kantor maupun di luar kantor.", reverse: false },
            { dim: "B", text: "Saya mengikuti aturan keamanan di luar maupun di dalam tempat kerja saya untuk tidak mendiskusikan informasi sensitif di area yang dapat terdengar orang lain.", reverse: false }
          ]
        },
        {
          name: "Meletakkan perangkat digital pribadi",
          questions: [
            { dim: "K", text: "Perangkat digital (komputer, laptop, tablet, handphone) dapat diletakkan di mana saja selama terhubung dengan jaringan.", reverse: true },
            { dim: "A", text: "Perangkat digital wajib diletakkan di tempat yang aman sehingga meminimalkan risiko diintip oleh orang lain atau kerusakan fisik.", reverse: false },
            { dim: "B", text: "Saya memastikan perangkat digital (komputer, laptop, tablet, handphone) ditempatkan di posisi yang aman untuk mencegah dibuka atau diintip oleh orang lain.", reverse: false }
          ]
        },
        {
          name: "Memantau keamanan melalui CCTV",
          questions: [
            { dim: "K", text: "Area tanpa kamera pengawas (CCTV) dan semacamnya bukanlah risiko keamanan.", reverse: true },
            { dim: "A", text: "Penting untuk lebih waspada dan melaporkan aktivitas mencurigakan di area yang kurang memiliki pengawasan yang memadai (tidak memiliki CCTV).", reverse: false },
            { dim: "B", text: "Saya melaporkan aktivitas mencurigakan yang dilakukan individu atau kelompok di area terbatas yang tidak memiliki CCTV.", reverse: false }
          ]
        }
      ]
    },
    {
      code: "IH",
      name: "Penanganan Informasi",
      subAreas: [
        {
          name: "Memusnahkan dokumen cetak yang sensitif",
          questions: [
            { dim: "K", text: "Dokumen fisik yang berisikan informasi sensitif dapat dibuang dengan cara yang sama seperti dokumen tidak sensitif.", reverse: true },
            { dim: "A", text: "Membuang dokumen cetak sensitif ke tempat sampah adalah hal yang aman.", reverse: true },
            { dim: "B", text: "Saat dokumen cetak sensitif perlu dibuang, saya memastikan bahwa dokumen tersebut dirobek atau dihancurkan.", reverse: false }
          ]
        },
        {
          name: "Menghubungkan peralatan USB",
          questions: [
            { dim: "K", text: "Jika saya menemukan USB di tempat umum, saya tidak seharusnya mencolokkannya ke perangkat milik saya.", reverse: false },
            { dim: "A", text: "Jika saya menemukan USB di tempat umum, tidak akan terjadi hal buruk jika mencolokkannya ke perangkat saya.", reverse: true },
            { dim: "B", text: "Saya tidak akan mencolokkan USB yang ditemukan di tempat umum ke perangkat saya.", reverse: false }
          ]
        },
        {
          name: "Meninggalkan bahan sensitif dengan tidak aman",
          questions: [
            { dim: "K", text: "Saya diperbolehkan meninggalkan dokumen cetak yang berisi informasi sensitif di meja saya untuk waktu yang lama.", reverse: true },
            { dim: "A", text: "Meninggalkan dokumen cetak yang berisi informasi sensitif di meja adalah hal yang berisiko.", reverse: false },
            { dim: "B", text: "Saya meninggalkan dokumen fisik yang berisi informasi sensitif di meja saya untuk waktu yang lama.", reverse: true }
          ]
        },
        {
          name: "Membackup file secara berkala",
          questions: [
            { dim: "K", text: "Mencadangkan file merupakan hal yang tidak penting untuk dilakukan.", reverse: true },
            { dim: "A", text: "Penting untuk mencadangkan secara rutin file untuk memastikan data tidak hilang saat terjadi insiden keamanan.", reverse: false },
            { dim: "B", text: "Saya secara rutin mencadangkan file untuk mencegah kehilangan data.", reverse: false }
          ]
        }
      ]
    },
    {
      code: "IR",
      name: "Pelaporan Insiden",
      subAreas: [
        {
          name: "Melaporkan perilaku yang mencurigakan",
          questions: [
            { dim: "K", text: "Jika saya melihat seseorang berperilaku mencurigakan di tempat kerja, saya harus melaporkannya.", reverse: false },
            { dim: "A", text: "Tidak akan terjadi hal buruk jika saya mengabaikan seseorang yang berperilaku mencurigakan di tempat kerja.", reverse: true },
            { dim: "B", text: "Jika saya melihat seseorang berperilaku mencurigakan di tempat kerja, saya akan melakukan sesuatu tentang hal itu.", reverse: false }
          ]
        },
        {
          name: "Tidak memperdulikan perilaku keamanan yang buruk",
          questions: [
            { dim: "K", text: "Saya tidak boleh mengabaikan perilaku keamanan yang buruk dari rekan kerja saya.", reverse: false },
            { dim: "A", text: "Tidak akan terjadi hal buruk jika saya mengabaikan perilaku keamanan yang buruk dari rekan kerja.", reverse: true },
            { dim: "B", text: "Jika saya menyadari rekan kerja mengabaikan aturan keamanan, saya tidak akan mengambil tindakan apa pun.", reverse: true }
          ]
        },
        {
          name: "Melaporkan semua insiden keamanan",
          questions: [
            { dim: "K", text: "Melaporkan insiden keamanan adalah hal yang bersifat opsional.", reverse: true },
            { dim: "A", text: "Mengabaikan insiden keamanan sekecil apapun merupakan hal yang berisiko.", reverse: false },
            { dim: "B", text: "Saya akan melaporkan segala jenis insiden keamanan.", reverse: false }
          ]
        }
      ]
    },
    {
      code: "SL",
      name: "Pengetahuan Keamanan Informasi",
      subAreas: [
        {
          name: "Mempelajari insiden keamanan informasi",
          questions: [
            { dim: "K", text: "Tidak perlu meninjau ulang apa yang terjadi setelah terjadi insiden keamanan informasi (tidak perlu berhati-hati ketika mengakses website aneh setelah ada kejadian phishing).", reverse: true },
            { dim: "A", text: "Penting untuk meninjau dan belajar dari insiden keamanan agar kesalahan yang sama tidak terulang.", reverse: false },
            { dim: "B", text: "Setelah insiden keamanan, saya meluangkan waktu untuk memahami apa yang salah dan menerapkan pelajaran yang diperoleh untuk memperbaiki perilaku saya ke depannya.", reverse: false }
          ]
        },
        {
          name: "Menghadiri pelatihan terkait kesadaran keamanan informasi",
          questions: [
            { dim: "K", text: "Menghadiri pelatihan keamanan informasi merupakan kegiatan yang bersifat opsional dan tidak penting.", reverse: true },
            { dim: "A", text: "Rutin berpartisipasi dalam pelatihan kesadaran keamanan informasi agar tetap terupdate dengan ancaman terkini adalah hal yang penting.", reverse: false },
            { dim: "B", text: "Saya secara aktif berpartisipasi dalam semua pelatihan keamanan informasi dan program kesadaran keamanan informasi.", reverse: false }
          ]
        }
      ]
    }
  ]
};
