# 🌟 Portofolio UI/UX Designer & Front-End Web Developer
### Azzahra Atika — Mahasiswa Sistem Informasi, Universitas Komputama

Website portofolio modern, interaktif, dan responsif yang berfokus pada perancangan antarmuka pengguna (**UI/UX Design**) serta pengembangan web front-end (**React, TypeScript & Tailwind CSS**) dengan pendekatan *Human-Centered Design*.

---

## 🚀 Fitur Utama

- 🎨 **Hero Section Eksklusif**: Desain dinamis dengan *organic blob shapes*, lencana *WOW!*, tipografi berkarakter, dan floating collaborator testimonials.
- 📸 **Dukungan Foto Asli & Pas Foto KTM**: Tombol interaktif untuk mengunggah foto asli langsung dari perangkat dengan penyimpanan lokal otomatis (*localStorage*).
- 🧭 **Sinergi Sistem Informasi & UI/UX**: Dokumentasi alur kerja 5 tahap (SRS, Wireframe, Design Tokens, Front-End Slicing, hingga Usability Testing SUS).
- 💼 **Portofolio Proyek Interaktif**: Filter kategori (*All, Web & Dashboard, Mobile UI/UX, Front-End React*) dengan Modal Studi Kasus mendalam (Problem Statement, Solution, Metrik, Tools).
- 🧪 **Interactive UI/UX & Responsive Playground**: Lab interaktif untuk menguji *viewport simulator* (Mobile 375px, Tablet 640px, Desktop Full) serta penggantian token palet warna desain secara *real-time*.
- 📩 **Formulir Kontak & Unduh CV**: Formulir kontak interaktif, tombol salin email instan, dan modal resume dengan fitur unduh dokumen CV.

---

## 🛠️ Tech Stack

- **Framework**: React 19 (SPA) + Vite
- **Bahasa**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animasi & Interaktivitas**: Motion (Framer Motion)
- **Ikon**: Lucide React
- **Tipografi**: Outfit & Plus Jakarta Sans (Google Fonts)

---

## 📦 Menjalankan Proyek Secara Lokal

Pastikan Anda telah menginstal [Node.js](https://nodejs.org/) (versi 18 atau lebih baru).

1. **Clone repository ini** (atau unduh zip dan ekstrak):
   ```bash
   git clone https://github.com/USERNAME-ANDA/NAMA-REPO-ANDA.git
   cd NAMA-REPO-ANDA
   ```

2. **Instal dependensi**:
   ```bash
   npm install
   ```

3. **Jalankan development server**:
   ```bash
   npm run dev
   ```
   Buka browser di `http://localhost:3000` (atau port yang tertera di terminal).

4. **Build untuk produksi**:
   ```bash
   npm run build
   ```
   File hasil build yang siap dipublikasikan akan tersimpan di folder `dist/`.

---

## 🌐 Cara Publikasi ke GitHub & GitHub Pages

### Langkah 1: Inisialisasi Git di Komputer Anda
Buka terminal di dalam folder proyek ini, lalu jalankan:

```bash
git init
git add .
git commit -m "feat: inisialisasi portofolio UI/UX & front-end"
git branch -M main
```

### Langkah 2: Buat Repository Baru di GitHub
1. Masuk ke akun [GitHub](https://github.com/).
2. Klik tombol **New** (Buat Repository Baru).
3. Beri nama repository, misalnya: `portofolio` atau `portofolio-uiux`.
4. Pilih **Public**, lalu klik **Create repository** (jangan centang Add README karena sudah ada).

### Langkah 3: Hubungkan dan Push ke GitHub
Salin URL repository Anda dari GitHub, lalu jalankan di terminal:

```bash
git remote add origin https://github.com/USERNAME-ANDA/NAMA-REPO-ANDA.git
git push -u origin main
```

---

### Langkah 4: Mengaktifkan GitHub Pages Otomatis (GitHub Actions)
Repository ini sudah dilengkapi file workflow otomatis di `.github/workflows/deploy.yml`.

1. Di halaman repository GitHub Anda, buka tab **Settings**.
2. Di menu sebelah kiri, klik **Pages**.
3. Pada bagian **Build and deployment** > **Source**, ganti pilihan dari *Deploy from a branch* menjadi:
   👉 **GitHub Actions**
4. Selesai! GitHub Actions akan otomatis melakukan build dan menerbitkan website portofolio Anda.
5. Dalam 1–2 menit, link website aktif Anda akan muncul di halaman tersebut (misalnya: `https://username-anda.github.io/nama-repo/`).

---

## 📂 Struktur Folder Proyek

```text
├── .github/
│   └── workflows/
│       └── deploy.yml          # Otomatisasi deploy ke GitHub Pages
├── src/
│   ├── assets/
│   │   └── images/             # Gambar proyek & foto potret
│   ├── components/
│   │   ├── Navbar.tsx          # Navigasi utama
│   │   ├── HeroSection.tsx     # Hero section sesuai gambar referensi
│   │   ├── AboutSection.tsx    # Bagian tentang saya & sinergi Sistem Informasi
│   │   ├── ProjectsSection.tsx # Galeri proyek terpilih dengan filter
│   │   ├── CaseStudyModal.tsx  # Modal detail studi kasus
│   │   ├── PlaygroundSection.tsx # Lab simulasi responsif & token desain
│   │   ├── ServicesSection.tsx # Daftar layanan & deliverables
│   │   ├── ContactSection.tsx  # Formulir kontak & salin email
│   │   ├── CollaboratorModal.tsx # Modal ulasan testimoni
│   │   ├── ResumeModal.tsx     # Modal CV & unduh ringkasan
│   │   └── Footer.tsx          # Footer website
│   ├── data/
│   │   └── portfolioData.ts    # Seluruh data profil, proyek, keahlian, & testimoni
│   ├── types.ts                # TypeScript interfaces
│   ├── App.tsx                 # Komponen utama aplikasi
│   ├── main.tsx                # Entry point React
│   └── index.css               # Konfigurasi Tailwind CSS v4 & animasi
├── index.html                  # File HTML utama & meta tag SEO
├── vite.config.ts              # Konfigurasi Vite (base path relative './')
└── package.json                # Dependensi & script proyek
```

---

## ✏️ Panduan Kustomisasi Data Portofolio

Semua data teks, proyek, kontak, dan tautan sosial dapat Anda ubah dengan sangat mudah di satu file:
👉 **`src/data/portfolioData.ts`**

- **Mengubah Nama & Informasi Pribadi**: Edit objek `PERSONAL_INFO`.
- **Menambah / Mengubah Proyek**: Edit array `PROJECTS`.
- **Menyesuaikan Keahlian**: Edit array `SKILL_CATEGORIES`.
- **Mengubah Testimoni Rekan/Mentor**: Edit array `COLLABORATORS`.

---

## 📄 Lisensi
Hak Cipta © 2026 Azzahra Atika. Dibuat dengan dedikasi untuk portofolio Sistem Informasi, UI/UX, dan Front-End Development.
