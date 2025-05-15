<!-- index.html --><!DOCTYPE html><html lang="fa">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>صادق خدایی - خواننده</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>صادق خدایی</h1>
    <p>آهنگ‌ها، ویدیوها، عکس‌ها و بیوگرافی</p>
    <a href="admin.html">ورود به پنل مدیریت</a>
  </header>  <main>
    <section id="bio">
      <h2>بیوگرافی</h2>
      <p id="bio-text">اینجا متن بیوگرافی نمایش داده می‌شود.</p>
    </section><section id="gallery">
  <h2>گالری تصاویر</h2>
  <div id="photos"></div>
</section>

<section id="music">
  <h2>آهنگ‌ها</h2>
  <div id="songs"></div>
</section>

<section id="videos">
  <h2>ویدیوها</h2>
  <div id="videos-list"></div>
</section>

<section id="ads">
  <h2>تبلیغات</h2>
  <div id="ads-container"></div>
</section>

<section>
  <h3>بازدید شما: <span id="view-count">0</span></h3>
</section>

  </main>  <script src="script.js"></script></body>
</html><!-- admin.html --><!DOCTYPE html><html lang="fa">
<head>
  <meta charset="UTF-8">
  <title>پنل مدیریت</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div id="login">
    <h2>ورود به پنل</h2>
    <input type="password" id="password" placeholder="رمز عبور">
    <button onclick="checkPassword()">ورود</button>
  </div>  <div id="admin-panel" style="display:none;">
    <h2>خوش آمدید!</h2><textarea id="bio-edit" placeholder="ویرایش بیوگرافی"></textarea>
<button onclick="updateBio()">ذخیره بیوگرافی</button>

<h3>افزودن عکس</h3>
<input type="text" id="photo-url" placeholder="آدرس عکس">
<button onclick="addPhoto()">افزودن</button>

<h3>افزودن آهنگ</h3>
<input type="text" id="song-url" placeholder="آدرس آهنگ mp3">
<button onclick="addSong()">افزودن</button>

<h3>افزودن ویدیو</h3>
<input type="text" id="video-url" placeholder="آدرس ویدیو mp4">
<button onclick="addVideo()">افزودن</button>

<h3>افزودن تبلیغ کلیکی</h3>
<input type="text" id="ad-img" placeholder="آدرس تصویر تبلیغ">
<input type="text" id="ad-link" placeholder="لینک کلیک">
<button onclick="addAd()">افزودن تبلیغ</button>

  </div>  <script src="script.js"></script></body>
</html>/* style.css */ body { font-family: sans-serif; background: #f4f4f4; padding: 20px; direction: rtl; }

header { background: #333; color: #fff; padding: 10px; text-align: center; }

main { margin-top: 20px; }

section { margin-bottom: 30px; }

input, textarea { width: 100%; margin: 5px 0; padding: 8px; }

button { padding: 8px 16px; background: teal; color: #fff; border: none; cursor: pointer; margin-bottom: 10px; }

img, audio, video { display: block; margin: 10px 0; max-width: 100%; }

/* script.js */ function checkPassword() { const pass = document.getElementById("password").value; if (pass === "1250978841") { document.getElementById("login").style.display = "none"; document.getElementById("admin-panel").style.display = "block"; } else { alert("رمز اشتباه است"); } }

function updateBio() { const bio = document.getElementById("bio-edit").value; localStorage.setItem("bio", bio); alert("ذخیره شد"); }

function addPhoto() { const url = document.getElementById("photo-url").value; let photos = JSON.parse(localStorage.getItem("photos") || "[]"); photos.push(url); localStorage.setItem("photos", JSON.stringify(photos)); alert("عکس افزوده شد"); }

function addSong() { const url = document.getElementById("song-url").value; let songs = JSON.parse(localStorage.getItem("songs") || "[]"); songs.push(url); localStorage.setItem("songs", JSON.stringify(songs)); alert("آهنگ افزوده شد"); }

function addVideo() { const url = document.getElementById("video-url").value; let videos = JSON.parse(localStorage.getItem("videos") || "[]"); videos.push(url); localStorage.setItem("videos", JSON.stringify(videos)); alert("ویدیو افزوده شد"); }

function addAd() { const img = document.getElementById("ad-img").value; const link = document.getElementById("ad-link").value; let ads = JSON.parse(localStorage.getItem("ads") || "[]"); ads.push({ img, link }); localStorage.setItem("ads", JSON.stringify(ads)); alert("تبلیغ افزوده شد"); }

window.onload = () => { const bio = localStorage.getItem("bio"); if (bio && document.getElementById("bio-text")) { document.getElementById("bio-text").textContent = bio; }

const photos = JSON.parse(localStorage.getItem("photos") || "[]"); if (document.getElementById("photos")) { photos.forEach(url => { const img = document.createElement("img"); img.src = url; document.getElementById("photos").appendChild(img); }); }

const songs = JSON.parse(localStorage.getItem("songs") || "[]"); if (document.getElementById("songs")) { songs.forEach(url => { const audio = document.createElement("audio"); audio.controls = true; audio.src = url; document.getElementById("songs").appendChild(audio); }); }

const videos = JSON.parse(localStorage.getItem("videos") || "[]"); if (document.getElementById("videos-list")) { videos.forEach(url => { const video = document.createElement("video"); video.controls = true; video.src = url; document.getElementById("videos-list").appendChild(video); }); }

const ads = JSON.parse(localStorage.getItem("ads") || "[]"); if (document.getElementById("ads-container")) { ads.forEach(ad => { const a = document.createElement("a"); a.href = ad.link; a.target = "_blank"; const img = document.createElement("img"); img.src = ad.img; img.alt = "تبلیغ"; a.appendChild(img); document.getElementById("ads-container").appendChild(a); }); }

let views = parseInt(localStorage.getItem("views") || "0") + 1; localStorage.setItem("views", views); const vc = document.getElementById("view-count"); if (vc) vc.textContent = views; };


