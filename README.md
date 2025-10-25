## 🚀 Project Monitoring Application

Project Monitoring Application adalah sebuah sistem terintegrasi yang dirancang untuk memfasilitasi pemantauan, pelacakan, dan manajemen menyeluruh terhadap perkembangan setiap proyek yang sedang berjalan. Aplikasi ini bertujuan memberikan visibilitas real-time terhadap berbagai aspek keuangan dan administratif proyek.

## ✨ Fitur Utama

Aplikasi ini dibangun di atas beberapa modul utama yang saling terhubung untuk memberikan gambaran proyek yang komprehensif:

1. Modul Transaksi Proyek
   -Modul ini berfungsi sebagai pusat pencatatan seluruh aktivitas finansial dan administratif proyek, meliputi:
   -Nilai Proyek (Project Value): Pencatatan nilai total awal dari setiap proyek.
   -Kas Masuk (Cash Inflow): Pencatatan penerimaan dana secara berkala dari klien atau sumber terkait.
   -Kontrak Subkontraktor (Subcontractor Contracts): Manajemen dan pelacakan detail kontrak dengan pihak ketiga.
   -Kontrak Adendum (Addendum Contracts): Pencatatan setiap perubahan atau penambahan lingkup proyek yang memengaruhi nilai atau jadwal.
   -Purchase Order (PO): Manajemen pemesanan barang dan jasa yang dibutuhkan untuk pelaksanaan proyek.
   dll

2. Dashboard Monitoring
   -Menyajikan visualisasi data kunci (KPIs) proyek secara real-time sehingga manajemen dapat mengambil keputusan berdasarkan data yang akurat dan terkini. Dasbor mencakup:
   -Perkembangan Proyek: Status kemajuan proyek (misalnya: On Schedule, At Risk, Complete).
   -Analisis Keuangan: Visualisasi arus kas (Kas Masuk vs. Pengeluaran).
   -Status Administrasi: Tinjauan cepat terhadap status Kontrak Subkon, Adendum, dan PO yang belum/sudah disetujui.

## 🛠️ Teknologi yang Digunakan

- Backend: express.js (Framework Node.JS)
- Frontend: Nuxt.js (Framework Vue.Js)
- Database: MySQL

## ⚙️ Cara Menjalankan Proyek

Langkah-langkah berikut akan membantu Anda menjalankan aplikasi ini secara lokal:

```bash [Terminal]
git clone https://github.com/gitshandy/monitoring-project-apps.git
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```

## Contributing

1. Clone this repository.
2. Install dependencies `pnpm install`.
3. Use `pnpm run dev` to start dev server.

## Credits

- [Nuxt.js](https://nuxtjs.org/)
- [Shadcn Vue](https://shadcn-vue.com/)
- [UnoCSS](https://unocss.com/)

## License

MIT

[nuxt-src]: https://img.shields.io/badge/Built%20With%20Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com/
