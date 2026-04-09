const translations = {
    tr: {
        nav_features: "Özellikler",
        nav_video: "Tanıtım",
        nav_download: "İndir",
        hero_badge: "Yeni: Android 15 Uyumu!",
        hero_title: "Kelimelerin Gücünü <span class='text-gradient'>Keşfet</span>",
        hero_subtitle: "Türkçenin derinliklerine dalın. Masaüstü ve Rafa Kaldır öğrenme sistemiyle kelime dağarcığınızı geliştirin ve kendinizi günlük testlerle sınayın.",
        btn_get_app: "<i class='fa-brands fa-google-play'></i> Uygulamayı İndir",
        btn_explore: "Daha Fazla Keşfet",
        stat_words_num: "133,000+",
        stat_words_text: "Kelime Bilgisi",
        stat_rating_num: "4.9/5",
        stat_rating_text: "Kullanıcı Puanı",
        stat_size_num: "Sınırsız",
        stat_size_text: "Öğrenme Döngüsü",
        from_creator: "Powered by",
        features_title: "Neden <span class='text-gradient'>Nadir Sözlük?</span>",
        features_subtitle: "Sıradan bir sözlükten fazlası. Hem keyifli bir öğrenme aracı hem de sıkı bir kelime antrenörü.",
        feat1_title: "Öğrenme Döngüsü",
        feat1_desc: "Bilmediğiniz kelimeleri 'Masaüstü'ne taşıyın, öğrendikten sonra 'Rafa Kaldır'ın. Kelimeler sizin kontrolünüzde!",
        feat2_title: "Gelişmiş Widget & Bildirimler",
        feat2_desc: "Günün kelimesini otomatik bildirimler ve zamanlayıcı sayesinde gün içinde size hatırlatalım.",
        feat3_title: "Kelime Testi (Quiz)",
        feat3_desc: "Nadir filtrelere göre testler oluşturun. Kelimeleri ne kadar bildiğinizi puan tablolarıyla ölçün.",
        feat4_title: "Nadir Kelime Filtresi",
        feat4_desc: "Zorluk derecesi 1'den 10'a kadar ayarlanmış nadirlik mekanizmasıyla dilin en gizli kelimelerini bulun.",
        showcase_title: "Tamamen Kişiselleştirilebilir Deneyim",
        showcase_desc: "Karanlık ve aydınlık temalardan yazı tipi boyutlarına, sesli okuma özelliğinden zengin istatistik grafiklerine kadar her şey sizin rahatlığınız için tasarlandı. Nadirlik oranlarını ayarlayın ve sadece bilmek istediklerinize odaklanın.",
        check1: "100% Çevrimdışı Çalışma Kabiliyeti",
        check2: "TTS (Seslendirme) Entegrasyonu",
        check3: "Detaylı Bireysel İstatistik Ekranı",
        video_title: "Uygulamayı <span class='text-gradient'>İş Başında Görün</span>",
        download_title: "Bilgelik Sizinle Olsun",
        download_desc: "Hemen Nadir Sözlük uygulamasını indirin ve kendi dijital kütüphanenizi oluşturmaya bugün başlayın.",
        footer_slogan: "Eksiksiz ve modern kelime asistanınız.",
        footer_legal: "Yasal",
        footer_privacy: "Gizlilik Politikası",
        footer_terms: "Kullanım Şartları",
        footer_contact: "İletişim",
        footer_rights: "Tüm hakları saklıdır.",
        
        // Privacy and Terms
        privacy_title: "Gizlilik Politikası",
        terms_title: "Kullanım Şartları",
    },
    en: {
        nav_features: "Features",
        nav_video: "Showcase",
        nav_download: "Download",
        hero_badge: "New: Android 15 Support!",
        hero_title: "Discover the Power of <span class='text-gradient'>Words</span>",
        hero_subtitle: "Dive deep into the Turkish language. Enhance your vocabulary with the Desktop/Archive learning cycle and challenge yourself with daily quizzes.",
        btn_get_app: "<i class='fa-brands fa-google-play'></i> Get the App",
        btn_explore: "Explore More",
        stat_words_num: "133,000+",
        stat_words_text: "Word Database",
        stat_rating_num: "4.9/5",
        stat_rating_text: "User Rating",
        stat_size_num: "Infinite",
        stat_size_text: "Learning Cycle",
        from_creator: "Powered by",
        features_title: "Why <span class='text-gradient'>Nadir Sözlük?</span>",
        features_subtitle: "More than just a dictionary. It's a delightful learning tool and a rigorous vocabulary trainer.",
        feat1_title: "Learning Cycle",
        feat1_desc: "Move unknown words to your 'Desktop', and 'Archive' them once learned. Words are under your control!",
        feat2_title: "Widgets & Notifications",
        feat2_desc: "Get reminded of the word of the day through intelligent smart notifications during your day.",
        feat3_title: "Word Quiz",
        feat3_desc: "Generate quizzes based on rarity filters. Measure how much you know with scoring leaderboards.",
        feat4_title: "Rarity Filter",
        feat4_desc: "Uncover the most hidden words of the language using the rarity mechanism calibrated from level 1 to 10.",
        showcase_title: "Fully Customizable Experience",
        showcase_desc: "From dark and light themes to font sizes, from text-to-speech capabilities to rich statistical graphs, everything is designed for your comfort. Set your rarity rates and focus only on what you want to know.",
        check1: "100% Offline Capability",
        check2: "Text-To-Speech (TTS) Integration",
        check3: "Detailed Personal Statistics Dashboard",
        video_title: "See the App <span class='text-gradient'>In Action</span>",
        download_title: "May Wisdom Be With You",
        download_desc: "Download the Nadir Sözlük application now and start building your own digital library today.",
        footer_slogan: "Your complete and modern vocabulary assistant.",
        footer_legal: "Legal",
        footer_privacy: "Privacy Policy",
        footer_terms: "Terms of Use",
        footer_contact: "Contact",
        footer_rights: "All rights reserved.",
        
        privacy_title: "Privacy Policy",
        terms_title: "Terms of Use",
    }
};

let currentLang = 'tr';

document.addEventListener("DOMContentLoaded", () => {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Language Toggle
    const langBtn = document.getElementById('lang-toggle');
    if(langBtn) {
        langBtn.addEventListener('click', () => {
            currentLang = currentLang === 'tr' ? 'en' : 'tr';
            updateLanguage();
            // Update button text
            langBtn.innerHTML = currentLang === 'tr' ? 'TR | <span>EN</span>' : '<span>TR</span> | EN';
        });
    }

    // Play Store Links logic
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isMobile = /android/i.test(userAgent) || /iPad|iPhone|iPod/.test(userAgent);
    const storeUrl = isMobile 
        ? "https://play.google.com/store/apps/details?id=com.nadirsozluk" 
        : "https://play.google.com/store/apps/details?id=com.nadirsozluk&pcampaignid=web_share";
        
    // Select both Hero 'Get App' button and the bottom Store Image badge
    const storeLinks = document.querySelectorAll('.get-app-btn, .store-btn');
    storeLinks.forEach(link => {
        link.href = storeUrl;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
    });
});

function updateLanguage() {
    const texts = translations[currentLang];
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (texts[key]) {
            el.innerHTML = texts[key];
        }
    });
}
