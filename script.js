/* =====================================================
   ADVANCED TECHNOLOGY - JS v9.0 (Full Language & Animation)
===================================================== */

// 1. ÇEVİRİ SÖZLÜĞÜ (Tüm index.html anahtarlarını kapsar)
const translations = {
    tr: {
        "logo-sub": "Teknoloji & Mühendislik",
        "nav-home": "Anasayfa",
        "nav-about": "Hakkımızda",
        "nav-expertise": "Uzmanlık",
        "nav-projects": "Projeler",
        "nav-flagship": "Amİral Gemİsİ",
        "nav-contact": "İletİşİm",
        "hero-tag": "SAVUNMA • HAVACILIK • OTONOMİ",
        "hero-title": "ADVANCED TEKNOLOJİ MÜHENDİSLİK ve TİC. LTD. ŞTİ.",
        "hero-subtitle": "Yüksek Performanslı Ataletsel Seyrüsefer ve Sistem Tasarım Çözümleri",
        "hero-btn-exp": "Deneyimimiz",
        "hero-btn-cont": "Bize Ulaşın",
        "stat-founded": "Kuruluş",
        "stat-projects": "Proje",
        "stat-customers": "Ana Müşteri",
        "stat-focus": "Müh. Odağı",
        "about-title": "Hakkımızda",
        "about-p1": "Advanced Teknoloji & Mühendislik; savunma ve havacılık uygulamaları için ataletsel seyrüsefer sistemleri, MEMS ataletsel sensör entegrasyonu ve otonom teknolojiler konusunda uzmanlaşmış bir Türk mühendislik şirketidir.",
        "about-p2": "Savunma sanayii projeleri ve TÜBİTAK destekli Ar-Ge programlarındaki kanıtlanmış deneyimimizle, yeni nesil otonom platformlar için yenilikçi, yüksek performanslı çözümler geliştiriyoruz.",
        "info-founded-label": "Kuruluş",
        "info-head-label": "Merkez",
        "info-head-val": "Ankara, Türkiye",
        "info-ind-label": "Sektör",
        "info-ind-val": "Savunma ve Havacılık",
        "info-status-label": "Durum",
        "info-status-val": "ASELSAN ve HAVELSAN Onaylı",
        "expertise-title": "Temel Yetkİnlİkler",
        "exp-1-title": "Navigasyon Teknolojileri",
        "exp-1-i1": "INS/GNSS Entegrasyonu",
        "exp-1-i2": "Sensör Füzyonu (EKF/UKF)",
        "exp-1-i3": "Fiber Optik Cayrolar",
        "exp-1-i4": "Navigasyon Filtreleri",
        "exp-2-title": "Gömülü Sistemler",
        "exp-2-i1": "Gömülü C/C++ Geliştirme",
        "exp-2-i2": "Gerçek Zamanlı Sistemler (RTOS)",
        "exp-2-i3": "Firmware Tasarımı",
        "exp-2-i4": "PCB Tasarımı",
        "exp-3-title": "Mühendislik",
        "exp-3-i1": "İHA Aviyonikleri",
        "exp-3-i2": "Uçuş Kontrol Bilgisayarları",
        "exp-3-i3": "Sensör Kalibrasyonu",
        "exp-3-i4": "MATLAB Modelleme",
        "projects-title": "Proje Deneyİmİ",
        "cat-1-title": "ASELSAN ve TÜBİTAK",
        "proj-udoks": "GNSS olmayan ve karıştırma uygulanan ortamlarda platform konumlandırma algoritmaları.",
        "proj-ynhks": "Yüksek hassasiyetli hareket kontrol algoritmaları ve sistem entegrasyonu.",
        "cat-2-title": "Sistem Teslimatları",
        "proj-gps-rot-title": "GPS Tabanlı Rotasyon Ölçme Sistemi",
        "proj-gps-rot-desc": "Yüksek dinamikli platformlar için yüksek hassasiyetli dönüş ölçüm sistemi.",
        "proj-landing-title": "Otonom İniş Sistemi",
        "proj-landing-desc": "Otonom iniş için lazer tabanlı rotasyon, irtifa ve dikey hız kestirimi.",
        "cat-3-title": "Dahili Ar-Ge",
        "proj-mag-title": "Referanssız Manyetometre Kalibrasyonu",
        "proj-mag-desc": "Harici manyetik referans ihtiyacını ortadan kaldıran özgün metodoloji.",
        "proj-imu-title": "Özgün IMU Kalibrasyonu",
        "proj-imu-desc": "Navigasyon hassasiyetini artırmak için tescilli kalibrasyon yaklaşımı.",
        "badge-flagship": "AMİRAL GEMİSİ TEKNOLOJİ",
        "flag-1-title": "UYDU DESTEKSİZ ONBOARD İNİŞ BİLGİ SİSTEMİ",
        "flag-1-desc": "Zorlu ortamlarda otonom iniş için gelişmiş sensör füzyonu (LiDAR ve IMU).",
        "spec-nav-out": "Yenileme hızı",
        "spec-alt-acc": "İrtifa Hassasiyeti",
        "spec-att-acc": "Yönelim Hassasiyeti",
        "spec-platform": "Platform Desteği",
        "spec-platform-val": "İHA, Helikopter, Otonom Sistemler",
        "badge-vision": "TEKNOLOJİ VİZYONU",
        "flag-2-title": "ARAZİ REFERANSLI SEYRÜSEFER NAVİGASYON SİSTEMİ (TRN)",
        "flag-2-desc": "Radar ve Dijital Yükseklik Haritaları (DEM) kullanarak elektronik harp ortamlarında konumlandırma.",
        "spec-sensors": "Birincil Sensörler",
        "spec-sensors-val": "Radar, INS, Barometre",
        "spec-mapping": "Haritalama Yöntemi",
        "spec-mapping-val": "DEM Eşleştirme",
        "spec-integration": "Temel Entegrasyon",
        "spec-env": "Ortam",
        "spec-env-val": "GNSS Olmayan / Karıştırma Altındaki Alanlar",
        "why-title": "Neden BİZİMLE Çalışmalısınız?",
        "why-1-title": "Kanıtlanmış Projeler",
        "why-1-desc": "Aselsan ve Tübitak gibi sektör liderleriyle kritik görev algoritmaları konusunda güçlü iş geçmişi.",
        "why-2-title": "Yerel Destek",
        "why-2-desc": "Ankara merkezli ekibimizle yerinde mühendislik entegrasyonu ve hızlı teknik yanıt.",
        "why-3-title": "Derin Uzmanlık",
        "why-3-desc": "INS/GNSS, sensör füzyonu ve gerçek zamanlı gömülü C/C++ geliştirme konularında uzmanlık.",
        "why-4-title": "Hızlı Prototİpleme",
        "why-4-desc": "Konseptten uçuşa hazır donanıma hızlı geliştirme döngüleri.",
        "contact-role": "Genel Müdür",
        "footer-text": "© 2026 Advanced Teknoloji ve Mühendislik | Tüm Hakları Saklıdır."
    },
    en: {
        "logo-sub": "Technology & Engineering",
        "nav-home": "Home",
        "nav-about": "About",
        "nav-expertise": "Expertise",
        "nav-projects": "Projects",
        "nav-flagship": "Flagship Tech",
        "nav-contact": "Contact",
        "hero-tag": "DEFENSE • AEROSPACE • AUTONOMY",
        "hero-title": "ADVANCED TECHNOLOGY ENGINEERING & TRADE LTD. CO.",
        "hero-subtitle": "High-Performance Inertial Navigation and System Design Solutions",
        "hero-btn-exp": "Our Experience",
        "hero-btn-cont": "Contact Us",
        "stat-founded": "Founded",
        "stat-projects": "Projects",
        "stat-customers": "Major Customers",
        "stat-focus": "Eng. Focus",
        "about-title": "About Us",
        "about-p1": "Advanced Technology & Engineering is a Turkish engineering company specializing in inertial navigation systems, MEMS inertial sensor integration, and autonomous technologies for defense and aerospace applications.",
        "about-p2": "With proven experience in defense industry projects and TÜBİTAK-funded R&D programs, we develop innovative, high-performance solutions for next-generation autonomous platforms.",
        "info-founded-label": "Founded",
        "info-head-label": "Headquarters",
        "info-head-val": "Ankara, Türkiye",
        "info-ind-label": "Industry",
        "info-ind-val": "Defense & Aerospace",
        "info-status-label": "Status",
        "info-status-val": "ASELSAN & HAVELSAN Approved",
        "expertise-title": "Core Competencies",
        "exp-1-title": "Navigation Tech",
        "exp-1-i1": "INS/GNSS Integration",
        "exp-1-i2": "Sensor Fusion (EKF/UKF)",
        "exp-1-i3": "Fiber Optic Gyros",
        "exp-1-i4": "Navigation Filters",
        "exp-2-title": "Embedded Systems",
        "exp-2-i1": "Embedded C/C++ Dev.",
        "exp-2-i2": "Real-Time Systems (RTOS)",
        "exp-2-i3": "Firmware Design",
        "exp-2-i4": "PCB Design",
        "exp-3-title": "Engineering",
        "exp-3-i1": "UAV Avionics",
        "exp-3-i2": "Flight Control Computers",
        "exp-3-i3": "Sensor Calibration",
        "exp-3-i4": "MATLAB Modeling",
        "projects-title": "Project Experience",
        "cat-1-title": "ASELSAN & TÜBİTAK",
        "proj-udoks": "Proprietary algorithms for platform positioning in GNSS-denied and jammed environments.",
        "proj-ynhks": "High-precision motion control algorithms and system integration.",
        "cat-2-title": "System Deliveries",
        "proj-gps-rot-title": "GPS Rotation System",
        "proj-gps-rot-desc": "High-accuracy rotational measurement for high-dynamic platforms.",
        "proj-landing-title": "Onboard Landing",
        "proj-landing-desc": "Laser-based altitude and velocity estimation for autonomous flight.",
        "cat-3-title": "Internal R&D",
        "proj-mag-title": "Magnetometer-Free Calib.",
        "proj-mag-desc": "Novel methodology eliminating external magnetic references.",
        "proj-imu-title": "Novel IMU Calibration",
        "proj-imu-desc": "Proprietary calibration approach to improve accuracy.",
        "badge-flagship": "FLAGSHIP TECHNOLOGY",
        "flag-1-title": "GPS-Denied Landing System",
        "flag-1-desc": "Advanced sensor fusion (LiDAR & IMU) for autonomous landing in contested environments.",
        "spec-nav-out": "Navigation Output",
        "spec-alt-acc": "Altitude Accuracy",
        "spec-att-acc": "Attitude Accuracy",
        "spec-platform": "Platform Support",
        "spec-platform-val": "UAV, Helicopter, Autonomous",
        "badge-vision": "TECHNOLOGY VISION",
        "flag-2-title": "Terrain Referenced Navigation (TRN)",
        "flag-2-desc": "Next-generation positioning in contested EW environments using Radar and Digital Elevation Maps (DEM).",
        "spec-sensors": "Primary Sensors",
        "spec-sensors-val": "Radar, INS, Barometer",
        "spec-mapping": "Mapping Method",
        "spec-mapping-val": "DEM Matching",
        "spec-integration": "Core Integration",
        "spec-env": "Environment",
        "spec-env-val": "GNSS-Denied / Jammed",
        "why-title": "Why Partner With Us?",
        "why-1-title": "Proven Projects",
        "why-1-desc": "Strong track record with industry leaders like Aselsan and Tübitak, delivering mission-critical navigation algorithms.",
        "why-2-title": "Local Support",
        "why-2-desc": "Based in Ankara, providing dedicated on-site engineering integration and rapid technical response for your systems.",
        "why-3-title": "Deep Expertise",
        "why-3-desc": "Specialized knowledge in INS/GNSS, sensor fusion (EKF/UKF), and real-time embedded C/C++ development.",
        "why-4-title": "Rapid Prototyping",
        "why-4-desc": "Quick development cycles from concept to flight-ready hardware, ensuring your project stays ahead of schedule.",
        "contact-role": "General Manager",
        "footer-text": "© 2026 Advanced Technology & Engineering | All Rights Reserved."
    }
};

// 2. DİL DEĞİŞTİRME FONKSİYONU
function changeLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    // Aktif buton görselini güncelle
    document.getElementById('btn-tr').classList.toggle('active', lang === 'tr');
    document.getElementById('btn-en').classList.toggle('active', lang === 'en');

    // Seçimi kaydet
    localStorage.setItem('preferredLang', lang);
}

// 3. SAYFA YÜKLENDİĞİNDE ÇALIŞACAKLAR
document.addEventListener("DOMContentLoaded", () => {
    // Kayıtlı dili yükle
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    changeLanguage(savedLang);

    // Animasyon Gözlemcisi
    const appearanceObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                if (entry.target.classList.contains('counter')) startCounter(entry.target);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.glass-card, .project-card-v2, .stat, .counter, .spec-row, .why-card, .contact-card-final, .info-card').forEach(el => {
        el.classList.add('hidden');
        appearanceObserver.observe(el);
    });

    // Sayaç Fonksiyonu
    function startCounter(el) {
        if (el.dataset.started === "true") return;
        const target = parseInt(el.getAttribute("data-target"));
        el.dataset.started = "true";
        let count = 0;
        const timer = setInterval(() => {
            count += target / 60;
            if (count >= target) {
                el.innerText = target + (target === 10 ? "+" : (target === 100 ? "%" : ""));
                clearInterval(timer);
            } else {
                el.innerText = Math.floor(count);
            }
        }, 30);
    }

    // Yumuşak Kaydırma (Logo Dahil)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute("href"));
            if (targetElement) {
                window.scrollTo({ top: targetElement.offsetTop - 120, behavior: "smooth" });
            }
        });
    });
});
