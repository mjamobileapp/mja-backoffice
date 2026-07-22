# Rencana Refactoring Codebase MJA Backoffice

Refactoring ini bertujuan untuk meningkatkan kualitas kode (_Clean Code_), menerapkan prinsip **DRY (Don't Repeat Yourself)**, menyederhanakan komunikasi API dan pagination, serta menghapus file/fitur sisa starter kit template yang tidak digunakan.

---

## User Review Required

> [!IMPORTANT]
> **Penghapusan File Demo & Template Unused**
> Pembersihan ini akan menghapus file-file demo dari starter-kit `shadcn-dashboard` yang tidak dipakai di MJA Backoffice, seperti:
>
> - `pages/components/` (50 file demo UI component)
> - `pages/settings/` (7 file demo settings kecuali profile dan change-password.)
> - `pages/email.vue` & `components/mail/`
> - `pages/tasks.vue` & `components/tasks/`
> - `pages/(auth)/login-basic.vue`
> - `components/navigation-menu/` & `components/ahs/`

> [!NOTE]
> Pembersihan ini **tidak akan merusak** fungsi bisnis utama MJA Backoffice (Master Data, Monitoring Mesin, Settings, Auth & Dashboard).

---

## Proposed Changes

### 1. Reusable Composables & Utilities (DRY & Clean Code)

#### [NEW] [useApiFetch.ts](file:///d:/Project/MJAProject/Backoffice-frontend/mja-backoffice/composables/useApiFetch.ts)

- Membuat composable terpusat `useApiFetch()` yang otomatis:
  - Mengambil `baseUrl` dari `useRuntimeConfig().public.apiBase`.
  - Mengambil token JWT dari cookie `accessToken`.
  - Menyiapkan header `Authorization: Bearer ${token}` & `Content-Type: application/json`.
  - Menyediakan pembungkus universal `$apiFetch` dan `useApiFetch`.

#### [NEW] [usePagination.ts](file:///d:/Project/MJAProject/Backoffice-frontend/mja-backoffice/composables/usePagination.ts)

- Membuat composable terpusat `usePagination()` untuk mengabstraksi state pencarian dan penomoran halaman:
  - `searchQuery`, `currentPage`, `itemsPerPage`.
  - Filter otomatis `filteredData`, `paginatedData`, `totalPages`, `nextPage`, `prevPage`.

#### [MODIFY] [utils.ts](file:///d:/Project/MJAProject/Backoffice-frontend/mja-backoffice/lib/utils.ts)

- Menambahkan utility `formatDate` / `formatTanggal` terpusat menggunakan `date-fns` agar tidak menduplikasi fungsi format tanggal di setiap komponen.

---

### 2. Refactoring Components & Pages Utama

#### [MODIFY] [SignIn.vue](file:///d:/Project/MJAProject/Backoffice-frontend/mja-backoffice/components/auth/SignIn.vue)

- Menggunakan `useApiFetch()` dan menyederhanakan penanganan cookie & error login.

#### [MODIFY] [AppSidebar.vue](file:///d:/Project/MJAProject/Backoffice-frontend/mja-backoffice/components/layout/AppSidebar.vue)

- Menggunakan `useApiFetch()`, menghapus _commented-out code_ dan menyederhanakan fetching menu navigasi.

#### [MODIFY] [index.vue](file:///d:/Project/MJAProject/Backoffice-frontend/mja-backoffice/pages/index.vue)

- Menggunakan `useApiFetch()` untuk fetching data dashboard (`getmitra`, `getcabang`, `getmesin`).

#### [MODIFY] [auth.global.ts](file:///d:/Project/MJAProject/Backoffice-frontend/mja-backoffice/middleware/auth.global.ts)

- Membersihkan kode lama yang dikomentari (_dead code_).

#### [MODIFY] [menus.ts](file:///d:/Project/MJAProject/Backoffice-frontend/mja-backoffice/constants/menus.ts)

- Membersihkan ratusan baris _commented-out code_ dari menu demo lama.

#### [MODIFY] [nuxt.config.ts](file:///d:/Project/MJAProject/Backoffice-frontend/mja-backoffice/nuxt.config.ts)

- Memperbarui `routeRules` untuk meredirect rute yang relevan dan menghapus aturan rute demo `/components`.

---

### 3. Modul Master Data Refactoring (Penerapan Composables)

#### [MODIFY] `components/master-cabang/ListData.vue`, `AddData.vue`, `EditData.vue`, `DeleteData.vue`

#### [MODIFY] `components/master-mesin/ListData.vue`, `AddData.vue`, `EditData.vue`, `DeleteData.vue`

#### [MODIFY] `components/master-mitra/ListData.vue`, `EditData.vue`, `DeleteData.vue`

#### [MODIFY] `components/master-proyek/ListData.vue`, `EditData.vue`, `DeleteData.vue`

#### [MODIFY] `components/master-user/ListData.vue`, `AddData.vue`, `EditData.vue`, `DeleteData.vue`

#### [MODIFY] `components/master-role/ListData.vue`, `AddData.vue`, `EditData.vue`, `DeleteData.vue`

#### [MODIFY] `components/master-menu/ListData.vue`, `EditData.vue`, `DeleteData.vue`

#### [MODIFY] `components/tagihan-subkon/ListData.vue`, `AddData.vue`, `EditData.vue`, `DeleteData.vue`

- Menggantikan kode boilerplate `config.public.apiBase`, `useCookie('accessToken')`, dan logika pagination manual dengan `useApiFetch()` & `usePagination()`.

---

### 4. Pembersihan File/Fitur Unused (Dead Code Cleanup)

#### [DELETE] Halaman & Komponen Demo Unused:

- [DELETE] `pages/components/` (seluruh 50 file .vue demo)
- [DELETE] `pages/settings/` (7 file demo settings)
- [DELETE] `pages/email.vue` & `components/mail/`
- [DELETE] `pages/tasks.vue` & `components/tasks/`
- [DELETE] `pages/(auth)/login-basic.vue`
- [DELETE] `components/navigation-menu/`
- [DELETE] `components/ahs/`

---

## Verification Plan

### Automated Tests

- Menjalankan linting dan type checking:
  ```powershell
  npx vue-tsc --noEmit
  ```

### Manual Verification

- Memastikan server dev `npm run dev` berjalan tanpa error.
- Menguji fitur Login, Navigasi Sidebar, Dashboard Metrik, halaman Settings (Profile, Change Password, Role, Menu, dan User Backoffice), serta CRUD pada Master Data untuk memastikan fungsionalitas aplikasi tetap normal.
- Tagihan Subkon tidak lagi diverifikasi karena halaman dan komponennya telah dihapus sesuai requirement.
