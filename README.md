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
href="mailto:sadeghkhodaei@example.com">تماس با من</a></p>
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
<!DOCTYPE html>
<html lang="fa">
<head>
    <meta charset="UTF-8">
    <title>صادق خدایی - خواننده</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>صادق خدایی</h1>
        <p>خواننده و هنرمند</p>
        <a href="https://instagram.com/87sadegh.kh" target="_blank">اینستاگرام من</a>
    </header>

    <section>
        <h2>آهنگ‌ها</h2>
        <audio controls src="songs/sample.mp3"></audio>
        <a href="songs/sample.mp3" download>دانلود آهنگ</a>
    </section>

    <section>
        <h2>ویدیوها</h2>
        <video controls width="320">
            <source src="videos/sample.mp4" type="video/mp4">
        </video>
        <a href="videos/sample.mp4" download>دانلود ویدیو</a>
    </section>

    <section>
        <h2>عکس‌ها</h2>
        <img src="images/sample.jpg" alt="Sample" width="200">
    </section>

    <footer>
        <a href="panel.html">ورود به پنل مدیریت</a>
    </footer>
</body>
</html>
body {
    font-family: sans-serif;
    direction: rtl;
    background: #f2f2f2;
    padding: 20px;
    color: #333;
}
header, footer {
    background: #222;
    color: #fff;
    padding: 10px;
    text-align: center;
}
section {
    margin: 20px 0;
}
<!DOCTYPE html>
<html lang="fa">
<head>
    <meta charset="UTF-8">
    <title>پنل مدیریت</title>
</head>
<body>
    <h2>ورود به پنل مدیریت</h2>
    <form onsubmit="return checkPassword()">
        <input type="password" id="pass" placeholder="رمز عبور را وارد کنید">
        <button type="submit">ورود</button>
    </form>
    <script>
    function checkPassword() {
        var pass = document.getElementById("pass").value;
        if (pass === "1250978841") {
            alert("خوش آمدید صادق!");
            window.location.href = "admin.html";
            return false;
        } else {
            alert("رمز اشتباه است!");
            return false;
        }
    }
    </script>
  <!DOCTYPE html>
<html lang="fa">
<head>
  <meta charset="UTF-8">
  <title>پنل مدیریت - صادق خدایی</title>
  <style>
    body {
      font-family: sans-serif;
      direction: rtl;
      background-color: #f2f2f2;
      padding: 20px;
    }
    input, textarea, select, button {
      display: block;
      margin: 10px 0;
      padding: 10px;
      width: 100%;
    }
    h2 { color: #333; }
  </style>
</head>
<body>

  <h2>پنل مدیریت سایت</h2>

  <h3>افزودن آهنگ جدید</h3>
  <input type="text" placeholder="نام آهنگ">
  <input type="file" accept="audio/*">
  <button onclick="alert('در نسخه رایگان فقط نمایش داده می‌شود')">افزودن آهنگ</button>

  <h3>افزودن ویدیو</h3>
  <input type="text" placeholder="نام ویدیو">
  <input type="file" accept="video/*">
  <button onclick="alert('در نسخه رایگان فقط نمایش داده می‌شود')">افزودن ویدیو</button>

  <h3>افزودن عکس</h3>
  <input type="file" accept="image/*">
  <button onclick="alert('در نسخه رایگان فقط نمایش داده می‌شود')">افزودن عکس</button>

  <h3>ویرایش متن بیوگرافی</h3>
  <textarea rows="4" placeholder="بیوگرافی جدید را وارد کنید"></textarea>
  <button onclick="alert('در نسخه رایگان فقط نمایش داده می‌شود')">ثبت تغییرات</button>

  <h3>تغییر بک‌گراند سایت</h3>
  <input type="color">
  <button onclick="alert('در نسخه رایگان فقط نمایش داده می‌شود')">تغییر بک‌گراند</button>

  <h3>افزودن تبلیغات کلیکی</h3>
  <textarea rows="3" placeholder="کد تبلیغات HTML/JavaScript"></textarea>
  <button onclick="alert('در نسخه رایگان فقط نمایش داده می‌شود')">ثبت تبلیغ</button>

  <h3>تغییر تم سایت</h3>
  <select>
    <option>روشن</option>
    <option>تاریک</option>
  </select>
  <button onclick="alert('در نسخه رایگان فقط نمایش داده می‌شود')">تغییر تم</button>

  <p style="color: red;">در این نسخه فقط شبیه‌سازی انجام می‌شود. برای نسخه واقعی باید سایت را روی هاست حرفه‌ای نصب کنید.</p>

</body>
</html>
</body>
</html>
<!DOCTYPE html>
<html lang="fa">
<head>
    <meta charset="UTF-8">
    <title>پنل مدیریت - صادق خدایی</title>
</head>
<body>
    <h2>به پنل مدیریت خوش آمدید</h2>
    <p>در نسخه رایگان GitHub شما باید فایل‌ها را مستقیماً در گیت‌هاب یا با Acode اضافه/حذف کنید.</p>
</body>
</html>
