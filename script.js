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
function checkPassword() {
  const pass = document.getElementById("password").value;
  if (pass === "1250978841") {
    document.getElementById("login").style.display = "none";
    document.getElementById("admin-panel").style.display = "block";
  } else {
    alert("رمز اشتباه است");
  }
}

function updateBio() {
  const bio = document.getElementById("bio-edit").value;
  localStorage.setItem("bio", bio);
  alert("ذخیره شد");
}

function addPhoto() {
  const url = document.getElementById("photo-url").value;
  let photos = JSON.parse(localStorage.getItem("photos") || "[]");
  photos.push(url);
  localStorage.setItem("photos", JSON.stringify(photos));
  alert("افزوده شد");
}

function addSong() {
  const url = document.getElementById("song-url").value;
  let songs = JSON.parse(localStorage.getItem("songs") || "[]");
  songs.push(url);
  localStorage.setItem("songs", JSON.stringify(songs));
  alert("افزوده شد");
}

function addVideo() {
  const url = document.getElementById("video-url").value;
  let videos = JSON.parse(localStorage.getItem("videos") || "[]");
  videos.push(url);
  localStorage.setItem("videos", JSON.stringify(videos));
  alert("افزوده شد");
}

function addAd() {
  const img = document.getElementById("ad-img").value;
  const link = document.getElementById("ad-link").value;
  let ads = JSON.parse(localStorage.getItem("ads") || "[]");
  ads.push({ img, link });
  localStorage.setItem("ads", JSON.stringify(ads));
  alert("تبلیغ افزوده شد");
}

window.onload = () => {
  const bio = localStorage.getItem("bio");
  if (bio && document.getElementById("bio-text")) {
    document.getElementById("bio-text").textContent = bio;
  }

  const photos = JSON.parse(localStorage.getItem("photos") || "[]");
  if (document.getElementById("photos")) {
    photos.forEach(url => {
      const img = document.createElement("img");
      img.src = url;
      document.getElementById("photos").appendChild(img);
    });
  }

  const songs = JSON.parse(localStorage.getItem("songs") || "[]");
  if (document.getElementById("songs")) {
    songs.forEach(url => {
      const audio = document.createElement("audio");
      audio.controls = true;
      audio.src = url;
      document.getElementById("songs").appendChild(audio);
    });
  }

  const videos = JSON.parse(localStorage.getItem("videos") || "[]");
  if (document.getElementById("videos-list")) {
    videos.forEach(url => {
      const video = document.createElement("video");
      video.controls = true;
      video.src = url;
      document.getElementById("videos-list").appendChild(video);
    });
  }

  const ads = JSON.parse(localStorage.getItem("ads") || "[]");
  if (document.getElementById("ads-container")) {
    ads.forEach(ad => {
      const a = document.createElement("a");
      a.href = ad.link;
      a.target = "_blank";
      const img = document.createElement("img");
      img.src = ad.img;
      img.alt = "تبلیغ";
      a.appendChild(img);
      document.getElementById("ads-container").appendChild(a);
    });
  }

  let views = parseInt(localStorage.getItem("views") || "0") + 1;
  localStorage.setItem("views", views);
  const vc = document.getElementById("view-count");
  if (vc) vc.textContent = views;
};
