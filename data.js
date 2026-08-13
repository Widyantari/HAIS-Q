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
            { dim: "K", text: "Saya boleh membagikan password akun kerja ke rekan kerja yang lain.", reverse: true },
            { dim: "A", text: "Berbagi password akun kerja adalah ide yang buruk, bahkan jika rekan kerja memintanya.", reverse: false },
            { dim: "B", text: "Saya berbagi password akun kerja dengan rekan kerja.", reverse: true }
          ]
        },
        {
          name: "Memilih password yang kuat",
          questions: [
            { dim: "K", text: "Password akun kerja jauh lebih aman jika menggunakan kombinasi huruf, angka, dan simbol.", reverse: false },
            { dim: "A", text: "Memiliki password kerja hanya dengan huruf saja adalah hal yang aman.", reverse: true },
            { dim: "B", text: "Saya menggunakan kombinasi huruf, angka, dan simbol dalam password kerja saya.", reverse: false }
          ]
        },
        {
          name: "Menyimpan catatan password",
          questions: [
            { dim: "K", text: "Saya boleh mencatat password akun atau aplikasi agar tidak lupa (contoh: menyimpan password di whatsapp, email, telegram, browser tanpa pengamanan, atau sticky notes di atas meja kantor).", reverse: true },
            { dim: "A", text: "Menyimpan password akun/aplikasi tanpa pengamanan adalah hal yang berisiko (contoh: menyimpan password di whatsapp, email, telegram, browser tanpa pengamanan, atau sticky notes di atas meja kantor).", reverse: false },
            { dim: "B", text: "Saya tidak pernah menyimpan password akun atau aplikasi saya tanpa pengamanan  (contoh: menyimpan password di whatsapp, email, telegram, browser tanpa pengamanan, serta sticky notes di atas meja kantor).", reverse: false }
          ]
        },
        {
          name: "Mengganti password secara berkala",
          questions: [
            { dim: "K", text: "Saya mengganti password akun secara berkala.", reverse: false },
            { dim: "A", text: "Menurut saya tidak masalah tidak mengganti password akun secara berkala.", reverse: true },
            { dim: "B", text: "Saya mengganti password saya secara berkala, misalnya dalam satu bulan sekali atau dua bulan sekali.", reverse: false }
          ]
        }
      ]
    },
    {
      code: "EU",
      name: "Penggunaan Email",
      subAreas: [
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
          name: "Menggunakan akun kantor untuk kepentingan pribadi",
          questions: [
            { dim: "K", text: "Saya tidak diperbolehkan menggunakan akun kerja saya untuk kepentingan pribadi (misal: login media sosial dengan email kantor).", reverse: false },
            { dim: "A", text: "Menurut saya, tidak masalah menggunakan akun milik kantor untuk memudahkan urusan-urusan pribadi saya.", reverse: true },
            { dim: "B", text: "Saya tidak pernah menggunakan akun kerja saya untuk mengerjakan urusan pribadi yang tidak ada hubungannya dengan kantor.", reverse: false }
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
            { dim: "A", text: "Menurut saya, mengunduh file apapun di komputer kerja dapat berisiko.", reverse: false },
            { dim: "B", text: "Saya mengunduh file apa pun ke komputer kerja yang akan membantu menyelesaikan pekerjaan.", reverse: true }
          ]
        },
        {
          name: "Mengakses website yang keamanannya meragukan",
          questions: [
            { dim: "K", text: "Saat bekerja, saya tidak seharusnya mengakses website yang keamanannya meragukan.", reverse: false },
            { dim: "A", text: "Hanya karena saya bisa mengakses website di tempat kerja, bukan berarti website tersebut aman.", reverse: false },
            { dim: "B", text: "Saat mengakses internet di tempat kerja, saya mengunjungi website apa pun yang saya inginkan.", reverse: true }
          ]
        },
        {
          name: "Memasukkan informasi secara online",
          questions: [
            { dim: "K", text: "Saya diperbolehkan memasukkan data apa pun ke website mana pun selama membantu pekerjaan saya.", reverse: true },
            { dim: "A", text: "Jika membantu pekerjaan saya, tidak masalah data apapun yang saya masukkan ke website.", reverse: true },
            { dim: "B", text: "Saya selalu memastikan keamanan website sebelum memasukkan data ke suatu website tertentu.", reverse: false }
          ]
        },
        {
          name: "Menginstall aplikasi bajakan / tidak berlisensi dari internet",
          questions: [
            { dim: "K", text: "Saya diperbolehkan menginstal aplikasi dan OS apa pun di perangkat pribadi selama membantu pekerjaan (tidak peduli bajakan atau tidak).", reverse: true },
            { dim: "A", text: "Menginstal aplikasi dan OS bajakan di perangkat pribadi adalah hal yang berisiko.", reverse: false },
            { dim: "B", text: "Saya hanya menginstal aplikasi dan OS yang sudah berlisensi di perangkat pribadi.", reverse: false }
          ]
        },
        {
          name: "Menggunakan VPN saat bekerja menggunakan perangkat pribadi",
          questions: [
            { dim: "K", text: "Saat bekerja dengan perangkat milik saya pribadi (bukan laptop/komputer kantor), saya tidak perlu menyalakan VPN untuk mengakses aplikasi milik kantor saya.", reverse: true },
            { dim: "A", text: "Penting untuk menyalakan VPN setiap kali mengakses aplikasi atau data konfidensial milik kantor saat menggunakan perangkat pribadi.", reverse: false },
            { dim: "B", text: "Saya selalu menyalakan VPN milik kantor sebelum mengakses aplikasi kantor saat bekerja menggunakan perangkat pribadi.", reverse: false }
          ]
        },
        {
          name: "Mengupload file ke dalam AI",
          questions: [
            { dim: "K", text: "Saya tidak seharusnya memasukkan dokumen seperti foto/data pribadi atau dokumen kantor ke dalam AI (chatgpt, gemini, metaAI).", reverse: false },
            { dim: "A", text: "Mengupload dokumen dan foto apapun ke dalam AI bukan hal yang perlu dipusingkan.", reverse: true },
            { dim: "B", text: "Saya memilih terlebih dahulu informasi/file apa saja yang dapat dimasukkan ke dalam AI.", reverse: false }
          ]
        },
        {
          name: "Memberikan informasi pribadi untuk mendapatkan keuntungan/kemudahan",
          questions: [
            { dim: "K", text: "Memberikan informasi pribadi (nama, nomor telepon, alamat, NIK, email) demi mendapatkan hadiah, diskon, WiFi gratis, atau kemudahan lain berisiko menyebabkan penyalahgunaan data seperti penipuan, spam, atau pencurian identitas.", reverse: false },
            { dim: "A", text: "Memberikan data pribadi kepada aplikasi, undian, atau layanan tertentu tidak menjadi masalah selama saya mendapatkan keuntungan atau kemudahan dari layanan tersebut.", reverse: true },
            { dim: "B", text: "Saya selalu memeriksa kredibilitas pihak penerima dan kejelasan tujuan penggunaan data sebelum memberikan informasi pribadi saya di aplikasi, formulir, atau undian.", reverse: false }
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
            { dim: "K", text: "Saya boleh memposting apapun yang saya inginkan termasuk pekerjaan di media sosial (contoh: memposting/membahas pekerjaan secara publik dan melalui pesan dm (direct message)).", reverse: true },
            { dim: "A", text: "Memposting informasi tertentu tentang pekerjaan saya di media sosial adalah hal yang berisiko.", reverse: false },
            { dim: "B", text: "Saya sering memposting apa pun yang saya inginkan termasuk pekerjaan saya di media sosial (memposting/membahas pekerjaan secara publik dan melalui pesan dm (direct message)).", reverse: true }
          ]
        },
        {
          name: "Social Engineering",
          questions: [
            { dim: "K", text: "Saya boleh mengikuti instruksi dari seseorang tanpa memastikan identitasnya (mengikuti instruksi Pimpinan/Instansi/Lembaga tanpa memverifikasi keasliannya).", reverse: true },
            { dim: "A", text: "Memberikan informasi sensitif kepada orang lain (seperti NIK, password aplikasi, pin ATM, email, nomor HP pribadi, serta dokumen pekerjaan) adalah hal yang berbahaya.", reverse: false },
            { dim: "B", text: "Saya selalu memastikan identitas siapa pun yang meminta informasi pribadi (seperti NIK, password aplikasi, pin ATM, email, nomor HP pribadi, serta dokumen pekerjaan) sebelum memenuhinya.", reverse: false }
          ]
        },
        {
          name: "Mengunggah dokumen ke dalam cloud publik",
          questions: [
            { dim: "K", text: "Saya tidak boleh mengupload file yang pribadi dan rahasia ke dalam penyimpanan cloud publik (Google Drive dan Dropbox sharing).", reverse: false },
            { dim: "A", text: "Meninjau dahulu dokumen yang akan diupload ke dalam cloud publik (Google Drive dan DropBox sharing) adalah hal yang baik.", reverse: false },
            { dim: "B", text: "Selama ini saya sering mengupload dokumen apapun ke dalam cloud sharing (Google Drive dan Drop Box sharing).", reverse: true }
          ]
        },
        {
          name: "Mengikuti tren viral",
          questions: [
            { dim: "K", text: "Mengikuti tren viral di media sosial (seperti challenge, filter AI, kuis kepribadian, atau face-swap) yang meminta akses data pribadi dapat menyebabkan kebocoran informasi sensitif.", reverse: false },
            { dim: "A", text: "Mengikuti tren viral di media sosial yang berpotensi mengekspos data pribadi maupun informasi kedinasan adalah hal yang harus dihindari.", reverse: false },
            { dim: "B", text: "Saya sering mengikuti tren viral di media sosial tanpa memeriksa dahulu apakah tren tersebut berpotensi menyebarkan data pribadi/sensitif.", reverse: true }
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
            { dim: "B", text: "Saat bekerja di tempat umum, saya sering meninggalkan laptop saya tanpa pengawasan.", reverse: true }
          ]
        },
        {
          name: "Mengirim informasi sensitif melalui jaringan Wi-Fi",
          questions: [
            { dim: "K", text: "Saya diperbolehkan mengirim file kerja sensitif melalui jaringan Wi-Fi publik.", reverse: true },
            { dim: "A", text: "Mengirim file kerja sensitif menggunakan jaringan Wi-Fi publik adalah hal yang berisiko.", reverse: false },
            { dim: "B", text: "Saya biasa mengirim file kerja sensitif menggunakan jaringan Wi-Fi publik.", reverse: true }
          ]
        },
        {
          name: "Shoulder Surfing",
          questions: [
            { dim: "K", text: "Saat mengerjakan dokumen sensitif, saya harus memastikan orang asing tidak dapat melihat layar laptop/handphone saya.", reverse: false },
            { dim: "A", text: "Mengakses file kerja sensitif di laptop jika orang asing bisa melihat layar saya adalah hal yang berisiko.", reverse: false },
            { dim: "B", text: "Saya selalu memastikan bahwa orang asing tidak dapat melihat layar laptop/handphone saya saat saya mengerjakan dokumen sensitif.", reverse: false }
          ]
        },
        {
          name: "Meminjamkan perangkat digital",
          questions: [
            { dim: "K", text: "Saya boleh meminjamkan akun atau perangkat komputer kantor (komputer, laptop, tablet, handphone) kepada orang lain (seperti teman/anak/saudara).", reverse: true },
            { dim: "A", text: "Meminjamkan akun atau perangkat komputer kantor (komputer, laptop, tablet, handphone) kepada orang lain (seperti teman/anak/saudara) adalah hal yang berisiko.", reverse: false },
            { dim: "B", text: "Saya sering meminjamkan akun atau perangkat komputer milik kantor (komputer, laptop, tablet, handphone)  kepada orang lain (seperti teman/anak/saudara).", reverse: true }
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
          name: "Membatasi izin aplikasi atau website dalam mengakses media",
          questions: [
            { dim: "K", text: "Saya boleh memberikan izin aplikasi atau website untuk mengakses semua file dan media di perangkat saya, meskipun tidak berkaitan dengan fungsi aplikasi tersebut.", reverse: true },
            { dim: "A", text: "Mengizinkan aplikasi atau website untuk mengakses semua file dan media di perangkat saya adalah hal yang berbahaya.", reverse: false },
            { dim: "B", text: "Saya selalu meninjau dan membatasi izin yang saya berikan untuk setiap aplikasi yang saya install atau website yang saya akses.", reverse: false }
          ]
        },
        {
          name: "Mengaktifkan screen lock",
          questions: [
            { dim: "K", text: "Saya harus memastikan layar komputer kerja saya telah dikunci dengan menggunakan password.", reverse: false },
            { dim: "A", text: "Menon-aktifkan fitur kunci layar pada komputer kerja adalah hal yang aman.", reverse: true },
            { dim: "B", text: "Saya selalu menggunakan fitur kunci layar untuk komputer kerja saya agar aman.", reverse: false }
          ]
        }
      ]
    },
    {
      code: "PS",
      name: "Keamanan Fisik",
      subAreas: [
        {
          name: "Menempati area yang aman saat bekerja",
          questions: [
            { dim: "K", text: "Saya boleh mendiskusikan/mengerjakan pekerjaan yang sensitif/rahasia di area mana pun saat di kantor maupun di luar kantor.", reverse: true },
            { dim: "A", text: "Memilih area bekerja yang sesuai dengan tingkat sensitifitas/kerahasiaan pekerjaan adalah hal yang baik untuk dikerjakan.", reverse: false },
            { dim: "B", text: "Saya tidak pernah mendiskusikan/mengerjakan pekerjaan yang sensitif/rahasia di area publik.", reverse: false }
          ]
        },
        {
          name: "Memberikan akses untuk masuk kepada orang yang tidak dikenal",
          adminOnly: true,
          questions: [
            { dim: "K", text: "Sebagai admin, memberikan akses masuk ke sistem/jaringan/server kepada orang yang tidak dikenal atau tanpa verifikasi identitas dan otorisasi resmi dapat menyebabkan penyusupan, kebocoran data, atau serangan siber.", reverse: false },
            { dim: "A", text: "Memberikan akses masuk kepada orang yang mengaku dari pihak internal maupun eksternal tanpa verifikasi identitas adalah hal yang wajar dilakukan demi kecepatan pekerjaan.", reverse: true },
            { dim: "B", text: "Saya selalu memverifikasi identitas terlebih dahulu sebelum memberikan akses masuk ke sistem/jaringan/server yang saya kelola.", reverse: false }
          ]
        },
        {
          name: "Memantau keamanan melalui CCTV",
          adminOnly: true,
          questions: [
            { dim: "K", text: "Area tanpa kamera pengawas (cctv) atau tidak memasang alat deteksi penyusup bukanlah risiko keamanan bagi sistem/lingkungan saya.", reverse: true },
            { dim: "A", text: "Memasang dan selalu memantau CCTV dan alat deteksi penyusup di sistem/lingkungan yang menjadi tanggung-jawab saya adalah hal yang harus saya lakukan sebagai admin sistem.", reverse: false },
            { dim: "B", text: "Saya selalu memantau CCTV dan alat deteksi penyusup di sistem/lingkungan saya.", reverse: false }
          ]
        },
        {
          name: "Menggunakan antivirus",
          questions: [
            { dim: "K", text: "Mengaktifkan antivirus dan selalu memperbaruinya pada perangkat kerja penting untuk melindungi data dari malware, ransomware, dan program berbahaya lainnya.", reverse: false },
            { dim: "A", text: "Selalu mengaktifkan Antivirus pada perangkat kerja adalah hal yang lebih baik, meskipun kadang memperlambat kinerja komputer.", reverse: false },
            { dim: "B", text: "Saya selalu menonaktifkan antivirus di perangkat kerja ketika dirasa mengganggu kinerja komputer.", reverse: true }
          ]
        },
        {
          name: "Mengaktifkan update/patch keamanan",
          adminOnly: true,
          questions: [
            { dim: "K", text: "Memasang pembaruan (update/patch) keamanan sistem operasi dan aplikasi penting untuk menutup celah keamanan yang dapat dimanfaatkan penyerang.", reverse: false },
            { dim: "A", text: "Pembaruan keamanan sistem dan aplikasi harus segera dipasang meskipun mengganggu pekerjaan untuk sementara waktu.", reverse: false },
            { dim: "B", text: "Selama ini saya sering menunda atau mengabaikan notifikasi pembaruan (update/patch) keamanan pada perangkat kerja saya.", reverse: true }
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
            { dim: "K", text: "Dokumen fisik yang berisikan informasi sensitif boleh dibuang dengan cara yang sama seperti dokumen tidak sensitif.", reverse: true },
            { dim: "A", text: "Membuang dokumen cetak sensitif ke tempat sampah adalah hal yang aman.", reverse: true },
            { dim: "B", text: "Saat dokumen cetak sensitif perlu dibuang, saya selalu memastikan bahwa dokumen tersebut dirobek atau dihancurkan.", reverse: false }
          ]
        },
        {
          name: "Menghubungkan peralatan USB",
          questions: [
            { dim: "K", text: "Jika saya menemukan USB di tempat umum, saya tidak seharusnya mencolokkannya ke perangkat milik saya.", reverse: false },
            { dim: "A", text: "Jika saya menemukan USB di tempat umum, tidak akan terjadi hal buruk jika mencolokkannya ke perangkat saya.", reverse: true },
            { dim: "B", text: "Saya tidak pernah mencolokkan USB yang ditemukan di tempat umum ke perangkat saya.", reverse: false }
          ]
        },
        {
          name: "Meninggalkan bahan sensitif dengan tidak aman",
          questions: [
            { dim: "K", text: "Saya diperbolehkan meninggalkan dokumen cetak yang berisi informasi sensitif di meja saya untuk waktu yang lama.", reverse: true },
            { dim: "A", text: "Meninggalkan dokumen cetak yang berisi informasi sensitif di meja adalah hal yang berisiko.", reverse: false },
            { dim: "B", text: "Saya sering meninggalkan dokumen fisik yang berisi informasi sensitif di meja saya untuk waktu yang lama.", reverse: true }
          ]
        },
        {
          name: "Mengirimkan file yang berisi informasi sensitif",
          questions: [
            { dim: "K", text: "Saya boleh mengirim informasi kerja yang sensitif melalui email pribadi atau aplikasi pengirim pesan.", reverse: true },
            { dim: "A", text: "Mengirimkan file kerja yang berisi informasi sensitif menggunakan saluran komunikasi pribadi adalah hal yang berisiko.", reverse: false },
            { dim: "B", text: "Saya hanya mengirimkan file yang berisi informasi kerja sensitif melalui aplikasi pengirim pesan milik kantor.", reverse: false }
          ]
        },
        {
          name: "Menghapus data secara permanen",
          questions: [
            { dim: "K", text: "Menghapus data secara permanen saat perangkat akan dibuang atau diganti adalah hal yang harus dilakukan.", reverse: false },
            { dim: "A", text: "Saat akan mengganti perangkat, sebaiknya data dihapus secara permanen terlebih dahulu.", reverse: false },
            { dim: "B", text: "Selama ini saya tidak menghapus data secara permanen saat perangkat akan dibuang atau diganti.", reverse: true }
          ]
        },
        {
          name: "Menyimpan dokumen kerja di perangkat pribadi",
          questions: [
            { dim: "K", text: "Menyimpan dokumen rahasia milik kantor di perangkat pribadi (HP pribadi, laptop pribadi, atau flashdisk pribadi) dapat meningkatkan risiko kebocoran data instansi.", reverse: false },
            { dim: "A", text: "Menyimpan dokumen rahasia kantor di perangkat pribadi adalah hal yang wajar selama tujuannya untuk memudahkan pekerjaan.", reverse: true },
            { dim: "B", text: "Saya menghindari menyimpan dokumen rahasia kantor di perangkat pribadi saya.", reverse: false }
          ]
        },
        {
          name: "Perlindungan data pribadi",
          questions: [
            { dim: "K", text: "Data pribadi (alamat, nomor telepon, biometrik) wajib dilindungi dan tidak boleh disebarkan sembarangan.", reverse: false },
            { dim: "A", text: "Membagikan data pribadi (baik milik saya, keluarga, maupun warga) di media sosial atau grup WhatsApp adalah hal yang wajar selama tidak berniat merugikan.", reverse: true },
            { dim: "B", text: "Saya mempertimbangkan jenis dan sensitivitas data pribadi sebelum membagikan atau mengunggahnya di media sosial maupun kanal komunikasi lain.", reverse: false }
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
            { dim: "B", text: "Jika saya melihat seseorang berperilaku mencurigakan di tempat kerja, saya biasanya melakukan sesuatu tentang hal itu.", reverse: false }
          ]
        },
        {
          name: "Tidak memperdulikan perilaku keamanan yang buruk",
          questions: [
            { dim: "K", text: "Saya tidak boleh mengabaikan perilaku keamanan yang buruk dari rekan kerja saya.", reverse: false },
            { dim: "A", text: "Tidak akan terjadi hal buruk jika saya mengabaikan perilaku keamanan yang buruk dari rekan kerja.", reverse: true },
            { dim: "B", text: "Jika saya menyadari rekan kerja mengabaikan aturan keamanan, selama ini saya tidak mengambil tindakan apa pun.", reverse: true }
          ]
        },
        {
          name: "Melaporkan semua insiden keamanan",
          questions: [
            { dim: "K", text: "Melaporkan insiden keamanan adalah hal yang bersifat opsional.", reverse: true },
            { dim: "A", text: "Mengabaikan insiden keamanan sekecil apapun merupakan hal yang berisiko.", reverse: false },
            { dim: "B", text: "Selama ini saya selalu melaporkan segala jenis insiden keamanan.", reverse: false }
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
            { dim: "K", text: "Saya tidak perlu meninjau ulang apa yang terjadi setiap insiden keamanan informasi  di kantor saya.", reverse: true },
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
        },
        {
          name: "Memahami peraturan tentang kebijakan keamanan informasi",
          questions: [
            { dim: "K", text: "Memahami kebijakan keamanan informasi yang berlaku di instansi (seperti SOP keamanan, Pergub/Kepgub SMKI, dan regulasi Pelindungan Data Pribadi) wajib bagi setiap ASN.", reverse: false },
            { dim: "A", text: "Sebagai ASN, mempelajari dan mematuhi kebijakan keamanan informasi yang ditetapkan instansi adalah hal yang baik..", reverse: false },
            { dim: "B", text: "Saya selalu berupaya memahami kebijakan keamanan informasi (SOP, Pergub/Kepgub SMKI, aturan PDP) yang berlaku di instansi tempat saya bekerja.", reverse: false }
          ]
        }
      ]
    }
  ]
};