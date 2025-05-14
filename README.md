# sadeghkhodaei.github.io<!DOCTYPE html>
<html lang="fa">
<head>
  <meta charset="UTF-8">
  <title>صادق خدایی - سایت رسمی</title>
  <style>
    body {
      font-family: sans-serif;
      background: #fafafa;
      text-align: center;
      padding: 50px;
      direction: rtl;
    }
    h1 { color: #222; }
    p { color: #555; }
    a {
      color: #1976d2;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <h1>سلام! من صادق خدایی هستم</h1>
  <p>این وب‌سایت رسمی منه برای معرفی خوانندگی، عکس‌ها، آهنگ‌ها، و ویدیوها.</p>
  <p>به‌زودی همه‌ی کارهام اینجا قرار می‌گیره.</p>
  <p><a href="mailto:sadeghkhodaei@example.com">تماس با من</a></p>
</body>
</html>
<!DOCTYPE html>
<html lang="fa">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>صادق خدایی - خواننده</title>
  <style>
    body {
      font-family: Tahoma, sans-serif;
      direction: rtl;
      background: #111;
      color: #fff;
      margin: 0;
      padding: 0;
    }
    header {
      background: #222;
      padding: 20px;
      text-align: center;
    }
    header h1 {
      margin: 0;
      font-size: 28px;
    }
    section {
      padding: 20px;
    }
    .gallery img, .videos video {
      width: 100%;
      max-width: 300px;
      margin: 10px;
    }
    .music-item {
      margin: 10px 0;
    }
    .music-item audio {
      width: 100%;
    }
    .admin-panel {
      display: none;
      background: #333;
      padding: 20px;
      margin-top: 20px;
    }
    .visitor-counter {
      margin-top: 30px;
      text-align: center;
    }
    button {
      background: #444;
      color: white;
      border: none;
      padding: 10px;
      cursor: pointer;
    }
  </style>
</head>
<body>

  <header>
    <h1>سایت رسمی صادق خدایی</h1>
    <p>خواننده سبک پاپ و تلفیقی</p>
  </header>

  <section>
    <h2>بیوگرافی</h2>
    <p>صادق خدایی هستم، خواننده‌ی سبک پاپ و تلفیقی. این سایت رسمی من است که در آن آهنگ‌ها، ویدیوها، عکس‌ها و اخبار من را می‌توانید دنبال کنید.</p>
  </section>

  <section>
    <h2>آهنگ‌ها</h2>
    <div class="music-item">
      <p>آهنگ ۱</p>
      <audio controls src="songs/song1.mp3"></audio>
      <br>
      <a href="songs/song1.mp3" download>دانلود</a>
    </div>
    <!-- آهنگ‌های بیشتر اضافه کن -->
  </section>

  <section class="gallery">
    <h2>گالری عکس</h2>
    <img src="images/photo1.jpg" alt="عکس 1">
    <!-- عکس‌های بیشتر اضافه کن -->
  </section>

  <section class="videos">
    <h2>ویدیوها</h2>
    <video controls src="videos/video1.mp4"></video>
    <!-- ویدیوهای بیشتر اضافه کن -->
  </section>

  <section>
    <h2>تماس با من</h2>
    <p>ایمیل: <a href="mailto:S6789649@gmail.com" style="color: lightblue;">S6789649@gmail.com</a></p>
    <p>اینستاگرام: <a href="https://instagram.com/yourprofile" target="_blank" style="color: lightblue;">@yourprofile</a></p>
  </section>

  <section>
    <h2>ورود به پنل مدیریت</h2>
    <input type="password" id="adminPass" placeholder="رمز عبور را وارد کنید">
    <button onclick="checkPassword()">ورود</button>

    <div class="admin-panel" id="adminPanel">
      <h3>پنل مدیریت (آزمایشی)</h3>
      <p>در این نسخه می‌تونی کدها یا فایل‌ها رو دستی در GitHub تغییر بدی. برای نسخه حرفه‌ای باید سیستم CMS جدا ساخته بشه.</p>
    </div>
  </section>

  <div class="visitor-counter">
    <h3>تعداد بازدید</h3>
    <img src="https://www.freecounterstat.com/count/yourcountercode/" alt="counter">
  </div>

  <script>
    function checkPassword() {
      const pass = document.getElementById("adminPass").value;
      if (pass === "1250978841") {
        document.getElementById("adminPanel").style.display = "block";
      } else {
        alert("رمز اشتباه است");
      }
    }
  </script>

</body>
</html>
