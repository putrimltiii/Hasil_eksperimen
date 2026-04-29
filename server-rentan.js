const express = require('express');
const app = express();
let comments = [];

app.use(express.urlencoded({ extended: true }));

// ✅ FUNGSI SANITASI - mencegah XSS
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

// HALAMAN UTAMA - SUDAH AMAN
app.get('/', (req, res) => {
  const commentHtml = comments
    .map(c => `<li>${escapeHtml(c)}</li>`)  // ✅ PAKAI SANITASI
    .join('');

  res.send(`
    <html>
    <head><title>Eksperimen XSS - VERSI AMAN</title></head>
    <body style="font-family:sans-serif; max-width:600px; margin:40px auto;">
      <h2>✅ Kolom Komentar (SUDAH AMAN)</h2>
      <form method="POST" action="/comment">
        <input name="comment" placeholder="Tulis komentar..." 
               style="width:70%; padding:8px;">
        <button type="submit" style="padding:8px 16px;">Kirim</button>
      </form>
      <hr>
      <h3>Komentar:</h3>
      <ul>${commentHtml}</ul>
    </body>
    </html>
  `);
});

app.post('/comment', (req, res) => {
  comments.push(req.body.comment);
  res.redirect('/');
});

app.listen(3000, () => {
  console.log('Server AMAN berjalan di http://localhost:3000');
});