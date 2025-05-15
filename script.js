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
