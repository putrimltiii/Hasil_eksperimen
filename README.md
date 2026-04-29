# Hasil_eksperimen
## Eksperimen Cross-Site Scripting (XSS) - Tugas UTS Pemrograman Web 2

### Identitas
- **Nama:** Putri Melati Ramadhaniati
- **NIM:** 3124410194
- **Kelas:** I241B
- **Program Studi:** Teknik Informatika
- **Universitas:** Pelita Bangsa
- **Mata Kuliah:** Pemrograman Web 2

---

### Deskripsi
Repository ini berisi hasil eksperimen Cross-Site Scripting (XSS) yang dilakukan secara langsung menggunakan Node.js dan Express.js sebagai bagian dari Tugas UTS Mata Kuliah Pemrograman Web 2.

---

### Struktur File
| File | Keterangan |
|---|---|
| `server-rentan.js` | Aplikasi dengan kerentanan XSS (tanpa sanitasi) |
| `server-aman.js` | Aplikasi yang sudah diperbaiki (dengan escapeHtml) |
| `README.md` | Dokumentasi eksperimen |

---

### Hasil Eksperimen

#### Eksperimen 1 - Serangan XSS Berhasil
Payload yang digunakan:
```html
<script>alert('SERANGAN XSS BERHASIL! Cookie: ' + document.cookie)</script>
```
**Hasil:** Browser menampilkan pop-up dengan cookie sesi terbaca

#### Eksperimen 2 - Mitigasi Berhasil  
Setelah menambahkan fungsi `escapeHtml`, payload yang sama tampil sebagai teks biasa. Tidak ada pop-up, script tidak dieksekusi.

---

### Teknologi
- Node.js v24.15.0
- Express.js
- Windows 10
- Microsoft Edge
