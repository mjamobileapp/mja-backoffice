# 🚀 Laundry Management System

Laundry Management System adalah aplikasi terintegrasi yang dirancang untuk membantu operasional bisnis laundry secara lebih efisien dan terpusat. Sistem ini mendukung pengelolaan mitra, cabang, mesin laundry, transaksi, serta monitoring operasional secara real-time.

## ✨ Fitur Utama

Aplikasi ini terdiri dari beberapa modul utama yang saling terintegrasi untuk mendukung seluruh proses bisnis laundry.

### 1. Modul Master Data

Mengelola seluruh data utama yang digunakan dalam operasional laundry, meliputi:

- Manajemen Mitra (Partner Management)
- Manajemen Cabang (Branch Management)
- Manajemen Mesin Laundry
- Manajemen Paket Layanan Laundry
- Manajemen Pengguna dan Hak Akses

### 2. Modul Mesin Laundry

Mengelola dan memonitor seluruh mesin laundry yang tersedia di setiap cabang.

Fitur:

- Registrasi Mesin Washer dan Dryer
- Monitoring Status Mesin (Ready, In Use, Error)
- Monitoring IP Address dan MAC Address Mesin
- Pengelompokan Mesin berdasarkan Mitra dan Cabang
- Riwayat Aktivitas Mesin

### 3. Modul Transaksi Laundry

Mencatat seluruh aktivitas transaksi laundry secara terstruktur.

Fitur:

- Pencatatan Order Laundry
- Monitoring Status Pengerjaan Laundry
- Riwayat Transaksi
- Manajemen Pembayaran
- Pelacakan Status Cucian

### 4. Dashboard Monitoring

Menyajikan informasi operasional laundry secara real-time melalui dashboard interaktif.

Dashboard mencakup:

- Total Mitra
- Total Cabang
- Total Mesin Aktif
- Status Mesin Laundry
- Statistik Penggunaan Mesin
- Ringkasan Transaksi Laundry
- Monitoring Operasional Cabang

### 5. Reporting & Analytics

Menyediakan laporan dan analisis untuk membantu pengambilan keputusan bisnis.

Fitur:

- Laporan Transaksi
- Laporan Penggunaan Mesin
- Laporan Performa Cabang
- Statistik Operasional Laundry

## 🛠️ Teknologi yang Digunakan

### Backend

- Express.js (Node.js Framework)

### Frontend

- Nuxt.js (Vue.js Framework)
- Shadcn Vue
- UnoCSS

### Database

- MySQL

## ⚙️ Cara Menjalankan Proyek

Langkah-langkah berikut akan membantu Anda menjalankan aplikasi secara lokal:

```bash
git clone https://github.com/gitshandy/laundry-management-system.git

cd laundry-management-system

pnpm install

pnpm run dev
```

Aplikasi akan berjalan pada:

```bash
http://localhost:3000
```

## 📦 Build Production

```bash
pnpm run build
pnpm run preview
```

## 🤝 Contributing

1. Fork repository ini.
2. Buat branch baru untuk fitur atau perbaikan.
3. Commit perubahan Anda.
4. Push ke branch Anda.
5. Buat Pull Request.

## 📚 Credits

- Nuxt.js
- Vue.js
- Express.js
- Shadcn Vue
- UnoCSS
- MySQL

## 📄 License

MIT License

Copyright (c) 2025 Shandy

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files.
