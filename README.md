# Hasil_eksperimen
## Eksperimen Cross-Site Scripting (XSS) - Tugas UTS Pemrograman Web 2

- **Nama:** Putri Melati Ramadhaniati
- **NIM:** 312410194
- **Kelas:** I241B
- **Program Studi:** Teknik Informatika
- **Universitas:** Pelita Bangsa
- **Mata Kuliah:** Pemrograman Web 2



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

### Screenshot Hasil Eksperimen

#### Eksperimen 1 - Serangan XSS Berhasil
<img width="1566" height="784" alt="image" src="https://github.com/user-attachments/assets/ca75e537-0603-46f0-bb22-f44d87adad27" />

#### Eksperimen 2 - Mitigasi Berhasil
<img width="1566" height="784" alt="image" src="https://github.com/user-attachments/assets/4c43900b-111e-4db3-b301-740514b40a9a" />


---

### Teknologi
- Node.js v24.15.0
- Express.js
- Windows 10
- Microsoft Edge
