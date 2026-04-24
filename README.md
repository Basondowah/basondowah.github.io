# 🎓 Asianline | Asianline

> بوابتك إلى الجامعات والمعاهد الماليزية

موقع احترافي متجاوب لخدمات الاستشارات التعليمية والتقديم للجامعات والمعاهد في ماليزيا. يهدف الموقع إلى مساعدة الطلاب الدوليين (خاصة الناطقين بالعربية) على تحقيق أحلامهم الدراسية في ماليزيا.

---

## ✨ المميزات

- **تصميم عصري ومتجاوب** - يعمل بشكل مثالي على جميع الأجهزة (موبايل، تابلت، ديسكتوب)
- **واجهة مستخدم عربية** - دعم كامل للغة العربية مع اتجاه RTL
- **أربع صفحات رئيسية**:
  - 🏠 **الرئيسية** - نبذة عن الخدمات، آراء العملاء، وإحصائيات
  - 📚 **البرامج الدراسية** - قائمة البرامج مع خيارات التصفية
  - 📝 **التقديم** - استمارة تسجيل شاملة للطلاب
  - 📞 **تواصل معنا** - معلومات التواصل ونموذج المراسلة
- **نموذج استفسار سريع** في الصفحة الرئيسية
- **زر واتساب ثابت** للتواصل السريع
- **تأثيرات حركية** عند التمرير (Scroll Animations)
- **قائمة متنقلة** للشاشات الصغيرة
- **جاهز للنشر على GitHub Pages**

---

## 🛠️ التقنيات المستخدمة

| التقنية | الاستخدام |
|---------|----------|
| HTML5 | هيكل الصفحات |
| CSS3 | التصميم والتأثيرات (بدون إطارات عمل) |
| JavaScript | التفاعل والتصفية والتحقق من النماذج |
| Font Awesome | الأيقونات |
| Google Fonts (Cairo, Tajawal) | الخطوط العربية |

---

## 📁 هيكل المشروع

```
asianline/
├── .github/
│   └── workflows/
│       └── static.yml          # إعدادات GitHub Actions للنشر التلقائي
├── css/
│   └── style.css               # ملف الأنماط الرئيسي
├── js/
│   └── main.js                 # ملف الجافاسكربت الرئيسي
├── index.html                  # الصفحة الرئيسية
├── programs.html               # صفحة البرامج الدراسية
├── apply.html                  # صفحة التقديم
├── contact.html                # صفحة التواصل
└── README.md                   # هذا الملف
```

---

## 🚀 طريقة التشغيل محلياً

### الخيار 1: فتح الملفات مباشرة

1. قم بتحميل المشروع أو استنساخه:
   ```bash
   git clone https://github.com/username/asianline.git
   ```
2. افتح ملف `index.html` في أي متصفح حديث.

### الخيار 2: استخدام خادم محلي (مستحسن)

باستخدام Python:
```bash
cd asianline
python -m http.server 8000
```
ثم افتح: `http://localhost:8000`

باستخدام Node.js (live-server):
```bash
npm install -g live-server
cd asianline
live-server
```

باستخدام VS Code:
- ثبت إضافة **Live Server**
- اضغط زر "Go Live" في أسفل النافذة

---

## 🌐 النشر على GitHub Pages

### الطريقة الأولى: النشر التلقائي (GitHub Actions)

1. أنشئ مستودعاً جديداً على GitHub
2. ارفع الملفات إلى الفرع `main`:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/asianline.git
   git push -u origin main
   ```
3. اذهب إلى **Settings > Pages** في المستودع
4. اختر **Source: GitHub Actions**
5. سيتم النشر التلقائي عند كل `push` جديد
6. الموقع سيكون متاحاً على: `https://username.github.io/asianline/`

### الطريقة الثانية: النشر من الفرع main مباشرة

1. اذهب إلى **Settings > Pages**
2. اختر **Deploy from a branch**
3. اختر الفرع `main` والمجلد `/ (root)`
4. اضغط **Save**

---

## ⚙️ التخصيص

### تغيير رقم الواتساب
ابحث عن `60123456789` في جميع ملفات HTML واستبدله برقمك.

### تغيير معلومات التواصل
- البريد الإلكتروني: ابحث عن `asialine.company@gmail.com`
- العنوان: عدّل في `contact.html`

### تغيير الألوان
عدّل متغيرات CSS في ملف `css/style.css`:
```css
:root {
    --primary: #1e40af;      /* الأزرق الرئيسي */
    --secondary: #059669;    /* الأخضر الثانوي */
    --accent: #d97706;       /* الذهبي للتأكيد */
}
```

### إضافة برامج دراسية جديدة
عدّل ملف `programs.html` وأضف بطاقات جديدة ضمن `programs-grid`.

---

## 🔒 ملاحظات أمنية

- النماذج الحالية تعمل على الواجهة الأمامية فقط (Frontend Only)
- **✅ تم الربط**: النماذج جاهزة للعمل مع Formspree (اتبع خطوات الإعداد أدناه)
  - [Formspree](https://formspree.io/) - مجاني للاستخدام الأساسي
  - [Netlify Forms](https://docs.netlify.com/forms/setup/) - مجاني مع Netlify
  - [Google Sheets + Apps Script](https://github.com/levinunnink/html-form-to-google-sheet) - مجاني
  - خادم Node.js/PHP خاص

## 📧 إعداد استقبال البريد الإلكتروني (مهم جداً)

النماذج الحالية مربوطة بخدمة **Formspree** لإرسال الرسائل مباشرة إلى بريدك `asialine.company@gmail.com`.

### الخطوات (5 دقائق فقط):

1. **سجل في Formspree** مجاناً:
   - ادخل على [formspree.io/register](https://formspree.io/register)
   - سجل باستخدام بريدك: `asialine.company@gmail.com`

2. **أنشئ نموذجاً جديداً**:
   - اضغط "New Form"
   - اسم النموذج: `Asianline Website`

3. **احصل على معرف النموذج (Form ID)**:
   - سيكون شكله مثل: `xnqkvnzy` أو `xeqkvnzy`
   - الرابط الكامل: `https://formspree.io/f/xnqkvnzy`

4. **استبدل المعرف في الملفات**:
   افتح هذه الملفات وابحث عن `YOUR_FORM_ID` واستبدله:

   | الملف | عدد الاستبدالات |
   |-------|----------------|
   | `index.html` | 1 |
   | `apply.html` | 1 |
   | `contact.html` | 1 |

   مثال:
   ```html
   <!-- قبل -->
   action="https://formspree.io/f/YOUR_FORM_ID"

   <!-- بعد -->
   action="https://formspree.io/f/xnqkvnzy"
   ```

5. **ارفع التغييرات إلى GitHub**:
   ```bash
   git add .
   git commit -m "Setup Formspree email integration"
   git push
   ```

✅ **مبروك!** الآن كل رسالة تُرسل من الموقع ستصل مباشرة إلى `asialine.company@gmail.com`

### الباقة المجانية في Formspree:
- 50 رسالة/شهر
- تكفي للمواقع الصغيرة والمتوسطة
- لا تحتاج بطاقة ائتمان

---

## 📱 معاينة

| الصفحة | الوصف |
|--------|-------|
| الرئيسية | Hero section، خدمات، برامج مختارة، آراء، CTA |
| البرامج | تصفية حسب المرحلة، 9 برامج افتراضية |
| التقديم | استمارة شاملة مع 12 حقل إدخال |
| التواصل | معلومات، نموذج مراسلة، أسئلة شائعة |

---

## 📄 الترخيص

هذا المشروع مفتوح المصدر تحت ترخيص MIT. يمكنك استخدامه وتعديله ونشره بحرية.

---

## 🤝 الدعم

إذا واجهت أي مشكلة أو لديك اقتراحات، لا تتردد في التواصل معنا عبر:
- 📧 asialine.company@gmail.com
- 💬 واتساب: +60 12-345 6789

---

<p align="center">
  صُنع بـ ❤️ لطلابنا في ماليزيا
</p>
