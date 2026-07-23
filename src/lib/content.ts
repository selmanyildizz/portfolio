export type Lang = "tr" | "en";

export const content = {
  en: {
    nav: {
      about: "About",
      guarantees: "How I Work",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      education: "Education",
      contact: "Contact",
    },
    hero: {
      greeting: "Hey, I'm Selman 👋",
      title1: "Software",
      title2: "Engineer",
      subtitle:
        "Full Stack Developer specializing in scalable, high-performance web applications — from RESTful APIs to polished, accessible UIs.",
      ctaProjects: "View Projects",
      ctaContact: "Let's Talk",
      location: "Ankara, Türkiye",
      openTo: "Open to work · On-site / Remote",
      stats: [
        { value: "2+", label: "Years of experience" },
        { value: "5+", label: "Projects shipped" },
        { value: "20+", label: "Technologies used" },
      ],
    },
    marquee: [
      "Full Stack Development",
      "React",
      "Java / Spring Boot",
      "Microservices",
      "PostgreSQL",
      "Docker",
      "Kafka",
      "REST APIs",
    ],
    about: {
      heading: "About Me",
      body: "Full Stack Developer specializing in scalable, high-performance web applications. Skilled in React, Java/Spring Boot, and microservice architecture, with a track record of shipping production-grade systems end-to-end — from RESTful APIs to polished, accessible UIs. Comfortable owning complex problems under pressure and translating business needs into clean technical solutions. Always looking to build things that matter.",
    },
    experience: {
      heading: "Experience",
      items: [
        {
          role: "Software Engineer",
          company: "Nedmod",
          period: "Jan 2024 – Mar 2026",
          location: "Ankara, Türkiye · Full-time",
          bullets: [
            "Engineered full-stack web applications with React frontends and Java Spring Boot microservices in high-load production environments.",
            "Built responsive, accessible UIs and analytics dashboards adopted across multiple business units.",
            "Designed RESTful APIs and implemented data layers with Spring Data JPA & Hibernate across relational and NoSQL systems.",
            "Architected microservice-based systems with Docker; owned complex production bugs end-to-end under time-sensitive conditions.",
            "Acted as the technical bridge between engineering, business analysts, and subject matter experts.",
          ],
          tags: ["React", "Spring Boot", "Microservices", "Docker", "Kafka"],
        },
        {
          role: "Genç Şube Intern",
          company: "Yapı Kredi Teknoloji",
          period: "Jul 2022 – Sep 2022",
          location: "İstanbul, Türkiye · Internship",
          bullets: [
            "Completed the structured rotational “Genç Şube” program covering banking operations, customer processes, and technology teams.",
            "Gained exposure to core banking systems and IT workflows within a large-scale financial institution.",
            "Trained on banking processes, compliance, and internal technology platforms.",
          ],
          tags: ["Banking Systems", "SQL", "C#", "OOP"],
        },
        {
          role: "Android Developer Intern",
          company: "Başarsoft Bilgi Teknolojileri",
          period: "Jun 2022 – Jul 2022",
          location: "Ankara, Türkiye · Internship",
          bullets: [
            "Delivered a fully functional Android GPS walking tracker from scratch in Kotlin and Java.",
            "Persisted real-time route data to SQLite/SpatiaLite, gaining hands-on exposure to spatial databases.",
            "Collaborated with the design team on mobile UI/UX within an Agile sprint structure.",
          ],
          tags: ["Kotlin", "Java", "Android", "SpatiaLite"],
        },
      ],
    },
    guarantees: {
      kicker: "How I Work",
      heading: "My Guarantees",
      tagline: "Concrete commitments, not vague promises — this is what working with me looks like.",
      items: [
        {
          title: "Clear, constant communication",
          text: "You'll never chase me for updates. Regular progress reports, quick replies, and honest answers — even when the news isn't great.",
        },
        {
          title: "Realistic deadlines, kept",
          text: "I estimate carefully and deliver when I said I would. If a risk appears, you hear about it immediately — not on the due date.",
        },
        {
          title: "Production-quality code",
          text: "Clean architecture, version control, and testing from day one. Code you can build on — not code you'll rewrite in six months.",
        },
        {
          title: "You see real progress",
          text: "Working demos over slide decks: staging links and incremental deliveries from the first week.",
        },
        {
          title: "Post-delivery support",
          text: "Launch isn't goodbye. Bugs found after delivery get fixed, and small tweaks aren't a negotiation.",
        },
        {
          title: "Honest scoping",
          text: "If something is beyond my expertise or a bad idea, I'll say so upfront and suggest alternatives — before it costs you money.",
        },
      ],
    },
    projects: {
      heading: "Projects",
      liveDemo: "Live Demo",
      featured: "Featured",
      items: [
        {
          emoji: "🐑",
          name: "Livestock Queue Management System",
          period: "Apr 2026 – Present",
          description:
            "End-to-end web app that digitizes queue management for animal sacrifice services during Eid al-Adha. Manages the entire flow in real time — registration, check-in, station assignment, completion — while customers track their position live via a personal link. Per-user audit logging and email notifications via the Brevo API.",
          tags: ["Java", "Spring Boot", "Spring Security (JWT)", "PostgreSQL", "Flyway", "React", "Vite", "Railway", "Netlify"],
          link: "https://bejewelled-sherbet-338e5b.netlify.app/",
          github: "https://github.com/selmanyildizz/kurbanManagementDemo",
          featured: true,
        },
        {
          emoji: "🌱",
          name: "Clusterly",
          period: "Mar 2024 – Mar 2026 · Nedmod",
          description:
            "SaaS solution for product digital identity and life-cycle traceability — improving company ESG credentials and delivering product information and sustainability value to customers for repair, reuse and recycling.",
          tags: ["Java", "Spring Framework", "JavaScript", "React", "JWT"],
          link: null,
          github: null,
          featured: false,
        },
        {
          emoji: "🧠",
          name: "ADHD Early Diagnosis AI",
          period: "Ankara University",
          description:
            "Expert system generating personalized recommendations from a structured questionnaire to support early-stage ADHD assessment. Built the web app with React and the Android counterpart in Java with custom UI components.",
          tags: ["React", "JavaScript", "Java", "Android", "Node"],
          link: null,
          github: null,
          featured: false,
        },
        {
          emoji: "🛒",
          name: "Selmart E-Commerce",
          period: "Personal project",
          description:
            "Production-ready full-stack e-commerce platform with JWT authentication, shopping cart, order management, and an admin dashboard — fully containerized with Docker.",
          tags: ["React 18", "TypeScript", "Spring Boot 3", "PostgreSQL", "JWT", "Docker"],
          link: null,
          github: "https://github.com/selmanyildizz/selmart-ecommerce",
          featured: false,
        },
        {
          emoji: "🛍️",
          name: "SelmShopify",
          period: "Personal project",
          description:
            "Shopify-integrated e-commerce admin panel: product, order, and SEO management on top of the Shopify API, with webhook support and a scheduled monthly SEO reporting service.",
          tags: ["React 18", "TypeScript", "Spring Boot 3", "Redis", "PostgreSQL", "Shopify API"],
          link: null,
          github: "https://github.com/selmanyildizz/selmShopify",
          featured: false,
        },
        {
          emoji: "🎧",
          name: "Spotify Clone",
          period: "Personal project",
          description:
            "A responsive Spotify interface clone focusing on pixel-perfect layout and component structure.",
          tags: ["React", "HTML", "CSS"],
          link: null,
          github: null,
          featured: false,
        },
      ],
    },
    skills: {
      heading: "Skills",
      groups: [
        { name: "Backend", items: ["Java", "Spring Boot", "Spring Framework", "Hibernate / JPA", "REST APIs", "Kafka", "JWT", "C#", "ASP.NET", "Node.js", "Microservices"] },
        { name: "Frontend", items: ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "TailwindCSS", "Vite", "UI/UX", "Figma"] },
        { name: "Database", items: ["PostgreSQL", "Microsoft SQL Server", "SQL", "SQLite / SpatiaLite", "NoSQL", "Flyway"] },
        { name: "Mobile", items: ["Android", "Kotlin", "Java"] },
        { name: "Tools & Practices", items: ["Docker", "Git", "CI", "Agile", "Unit Testing", "Debugging"] },
      ],
    },
    education: {
      heading: "Education & Certificates",
      school: "Ankara University",
      degree: "B.Sc. Computer Engineering",
      period: "2018 – 2023",
      gpa: "GPA: 3.33",
      certHeading: "Certificate",
      certName: "Programming with Java",
      certIssuer: "BTK Akademi · Jul 2023",
    },
    contact: {
      heading1: "Let's build",
      heading2: "something together",
      body: "I'm open to full-time roles and interesting projects. Reach out and let's talk.",
      emailCta: "Send an email",
      linkedin: "LinkedIn",
      location: "Ankara, Türkiye",
      form: {
        title: "Send me a message",
        name: "Your name",
        email: "Your email",
        message: "Your message",
        send: "Send",
        sending: "Sending…",
        success: "Thanks! Your message has been sent.",
        error: "Something went wrong. Please try again later.",
        close: "Close",
      },
    },
    testimonials: {
      heading: "What people say",
      items: [
        {
          name: "Ahmet K.",
          role: "Business Owner",
          text: "The queue system transformed how we run the Eid season. Customers stopped crowding the desk — they just follow their link. Setup took a single afternoon.",
          rating: 5,
        },
        {
          name: "Elif S.",
          role: "Product Manager",
          text: "Selman translates vague business requirements into working software faster than anyone I've worked with. Clear communication throughout.",
          rating: 5,
        },
        {
          name: "Mehmet D.",
          role: "Backend Developer",
          text: "Clean code, solid architecture decisions, and he actually documents things. Reviewing his PRs was a pleasure.",
          rating: 5,
        },
        {
          name: "Zeynep A.",
          role: "UI/UX Designer",
          text: "He cares about the pixel details most developers ignore. Handoff from Figma was smooth — what shipped matched the design.",
          rating: 4,
        },
        {
          name: "Burak T.",
          role: "Startup Founder",
          text: "Delivered our dashboard ahead of schedule and stayed responsive after launch for fixes and small tweaks.",
          rating: 5,
        },
      ],
    },
    footer: "Designed & built with Next.js",
  },
  tr: {
    nav: {
      about: "Hakkımda",
      guarantees: "Nasıl Çalışırım",
      experience: "Deneyim",
      projects: "Projeler",
      skills: "Yetenekler",
      education: "Eğitim",
      contact: "İletişim",
    },
    hero: {
      greeting: "Merhaba, ben Selman 👋",
      title1: "Yazılım",
      title2: "Mühendisi",
      subtitle:
        "Ölçeklenebilir, yüksek performanslı web uygulamaları geliştiren bir Full Stack Developer — RESTful API'lardan erişilebilir, özenli arayüzlere.",
      ctaProjects: "Projelere Bak",
      ctaContact: "İletişime Geç",
      location: "Ankara, Türkiye",
      openTo: "Çalışmaya açık · Ofiste / Uzaktan",
      stats: [
        { value: "2+", label: "Yıl deneyim" },
        { value: "5+", label: "Tamamlanan proje" },
        { value: "20+", label: "Kullanılan teknoloji" },
      ],
    },
    marquee: [
      "Full Stack Geliştirme",
      "React",
      "Java / Spring Boot",
      "Mikroservisler",
      "PostgreSQL",
      "Docker",
      "Kafka",
      "REST API",
    ],
    about: {
      heading: "Hakkımda",
      body: "Ölçeklenebilir, yüksek performanslı web uygulamalarında uzmanlaşmış bir Full Stack Developer'ım. React, Java/Spring Boot ve mikroservis mimarisinde deneyimliyim; RESTful API'lardan özenli, erişilebilir arayüzlere kadar üretim kalitesinde sistemleri uçtan uca hayata geçirdim. Baskı altında karmaşık problemleri sahiplenmekten ve iş ihtiyaçlarını temiz teknik çözümlere dönüştürmekten keyif alırım. Her zaman önemli işler üretmenin peşindeyim.",
    },
    experience: {
      heading: "Deneyim",
      items: [
        {
          role: "Yazılım Mühendisi",
          company: "Nedmod",
          period: "Oca 2024 – Mar 2026",
          location: "Ankara, Türkiye · Tam zamanlı",
          bullets: [
            "Yüksek yük altındaki üretim ortamlarında React ön yüz ve Java Spring Boot mikroservisleriyle full-stack web uygulamaları geliştirdim.",
            "Birden fazla iş biriminin kullandığı duyarlı, erişilebilir arayüzler ve analitik panolar geliştirdim.",
            "RESTful API'lar tasarladım; Spring Data JPA ve Hibernate ile ilişkisel ve NoSQL sistemlerde veri katmanları kurdum.",
            "Docker ile mikroservis tabanlı sistemler mimarisi kurdum; kritik üretim hatalarını kök neden analizinden dağıtıma kadar uçtan uca sahiplendim.",
            "Mühendislik, iş analistleri ve alan uzmanları arasında teknik köprü rolü üstlendim.",
          ],
          tags: ["React", "Spring Boot", "Mikroservis", "Docker", "Kafka"],
        },
        {
          role: "Genç Şube Stajyeri",
          company: "Yapı Kredi Teknoloji",
          period: "Tem 2022 – Eyl 2022",
          location: "İstanbul, Türkiye · Staj",
          bullets: [
            "Bankacılık operasyonları, müşteri süreçleri ve teknoloji ekiplerini kapsayan rotasyonlu “Genç Şube” programını tamamladım.",
            "Büyük ölçekli bir finans kurumunda çekirdek bankacılık sistemleri ve BT süreçlerini deneyimledim.",
            "Bankacılık süreçleri, uyum ve kurum içi teknoloji platformları eğitimleri aldım.",
          ],
          tags: ["Bankacılık Sistemleri", "SQL", "C#", "OOP"],
        },
        {
          role: "Android Geliştirici Stajyeri",
          company: "Başarsoft Bilgi Teknolojileri",
          period: "Haz 2022 – Tem 2022",
          location: "Ankara, Türkiye · Staj",
          bullets: [
            "Kotlin ve Java ile sıfırdan, tam işlevsel bir Android GPS yürüyüş takip uygulaması geliştirdim.",
            "Gerçek zamanlı rota verilerini SQLite/SpatiaLite'a kaydederek mekânsal veritabanlarıyla uygulamalı deneyim kazandım.",
            "Agile sprint yapısında tasarım ekibiyle mobil UI/UX kararlarında iş birliği yaptım.",
          ],
          tags: ["Kotlin", "Java", "Android", "SpatiaLite"],
        },
      ],
    },
    guarantees: {
      kicker: "Nasıl Çalışırım",
      heading: "Garantilerim",
      tagline: "Belirsiz vaatler değil, somut taahhütler — benimle çalışmak böyle görünür.",
      items: [
        {
          title: "Net ve sürekli iletişim",
          text: "Güncelleme için peşimden koşmazsınız. Düzenli ilerleme raporları, hızlı yanıtlar ve dürüst cevaplar — haber kötü olsa bile.",
        },
        {
          title: "Gerçekçi ve tutulan teslim tarihleri",
          text: "Dikkatli tahmin eder, söz verdiğim tarihte teslim ederim. Bir risk belirirse teslim günü değil, anında haberiniz olur.",
        },
        {
          title: "Üretim kalitesinde kod",
          text: "İlk günden temiz mimari, versiyon kontrolü ve test. Altı ay sonra baştan yazılacak değil, üzerine inşa edilecek kod.",
        },
        {
          title: "Gerçek ilerlemeyi görürsünüz",
          text: "Sunum yerine çalışan demo: ilk haftadan itibaren staging linkleri ve kademeli teslimler.",
        },
        {
          title: "Teslim sonrası destek",
          text: "Yayına almak veda değildir. Teslim sonrası çıkan hatalar düzeltilir; küçük rötuşlar pazarlık konusu olmaz.",
        },
        {
          title: "Dürüst kapsam belirleme",
          text: "Bir şey uzmanlık alanımın dışındaysa ya da kötü bir fikirse, size paraya mal olmadan önce açıkça söyler, alternatif öneririm.",
        },
      ],
    },
    projects: {
      heading: "Projeler",
      liveDemo: "Canlı Demo",
      featured: "Öne Çıkan",
      items: [
        {
          emoji: "🐑",
          name: "Kurbanlık Sıra Yönetim Sistemi",
          period: "Nis 2026 – Devam ediyor",
          description:
            "Kurban Bayramı döneminde kesim hizmeti veren işletmeler için sıra yönetimini dijitalleştiren uçtan uca web uygulaması. Kayıttan check-in'e, istasyon atamasından tamamlanmaya kadar tüm akışı gerçek zamanlı yönetir; müşteriler kişisel bağlantılarıyla sıralarını canlı takip eder. Her işlem için kullanıcı bazlı denetim kaydı ve Brevo API ile e-posta bildirimleri.",
          tags: ["Java", "Spring Boot", "Spring Security (JWT)", "PostgreSQL", "Flyway", "React", "Vite", "Railway", "Netlify"],
          link: "https://bejewelled-sherbet-338e5b.netlify.app/",
          github: "https://github.com/selmanyildizz/kurbanManagementDemo",
          featured: true,
        },
        {
          emoji: "🌱",
          name: "Clusterly",
          period: "Mar 2024 – Mar 2026 · Nedmod",
          description:
            "Ürün dijital kimliği ve yaşam döngüsü izlenebilirliği için SaaS çözümü — şirketlerin ESG karnesini güçlendirir; onarım, yeniden kullanım ve geri dönüşüm için müşterilere ürün bilgisi ve sürdürülebilirlik değeri sunar.",
          tags: ["Java", "Spring Framework", "JavaScript", "React", "JWT"],
          link: null,
          github: null,
          featured: false,
        },
        {
          emoji: "🧠",
          name: "DEHB Erken Teşhis Yapay Zekâsı",
          period: "Ankara Üniversitesi",
          description:
            "Yapılandırılmış bir ankete verilen yanıtlardan kişiselleştirilmiş öneriler üreten, erken evre DEHB değerlendirmesini destekleyen uzman sistem. Web uygulamasını React ile, Android sürümünü özel arayüz bileşenleriyle Java ile geliştirdim.",
          tags: ["React", "JavaScript", "Java", "Android", "Node"],
          link: null,
          github: null,
          featured: false,
        },
        {
          emoji: "🛒",
          name: "Selmart E-Ticaret",
          period: "Kişisel proje",
          description:
            "JWT kimlik doğrulama, alışveriş sepeti, sipariş yönetimi ve yönetici paneli içeren, Docker ile tamamen konteynerleştirilmiş üretime hazır full-stack e-ticaret platformu.",
          tags: ["React 18", "TypeScript", "Spring Boot 3", "PostgreSQL", "JWT", "Docker"],
          link: null,
          github: "https://github.com/selmanyildizz/selmart-ecommerce",
          featured: false,
        },
        {
          emoji: "🛍️",
          name: "SelmShopify",
          period: "Kişisel proje",
          description:
            "Shopify entegre e-ticaret yönetim paneli: Shopify API üzerinde ürün, sipariş ve SEO yönetimi; webhook desteği ve aylık zamanlanmış SEO rapor servisi.",
          tags: ["React 18", "TypeScript", "Spring Boot 3", "Redis", "PostgreSQL", "Shopify API"],
          link: null,
          github: "https://github.com/selmanyildizz/selmShopify",
          featured: false,
        },
        {
          emoji: "🎧",
          name: "Spotify Klonu",
          period: "Kişisel proje",
          description:
            "Piksel hassasiyetinde yerleşim ve bileşen yapısına odaklanan duyarlı bir Spotify arayüz klonu.",
          tags: ["React", "HTML", "CSS"],
          link: null,
          github: null,
          featured: false,
        },
      ],
    },
    skills: {
      heading: "Yetenekler",
      groups: [
        { name: "Backend", items: ["Java", "Spring Boot", "Spring Framework", "Hibernate / JPA", "REST API", "Kafka", "JWT", "C#", "ASP.NET", "Node.js", "Mikroservisler"] },
        { name: "Frontend", items: ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "TailwindCSS", "Vite", "UI/UX", "Figma"] },
        { name: "Veritabanı", items: ["PostgreSQL", "Microsoft SQL Server", "SQL", "SQLite / SpatiaLite", "NoSQL", "Flyway"] },
        { name: "Mobil", items: ["Android", "Kotlin", "Java"] },
        { name: "Araçlar & Pratikler", items: ["Docker", "Git", "CI", "Agile", "Birim Testi", "Hata Ayıklama"] },
      ],
    },
    education: {
      heading: "Eğitim & Sertifikalar",
      school: "Ankara Üniversitesi",
      degree: "Lisans, Bilgisayar Mühendisliği",
      period: "2018 – 2023",
      gpa: "Not Ortalaması: 3.33",
      certHeading: "Sertifika",
      certName: "Java ile Programlama",
      certIssuer: "BTK Akademi · Tem 2023",
    },
    contact: {
      heading1: "Birlikte bir şeyler",
      heading2: "inşa edelim",
      body: "Tam zamanlı pozisyonlara ve ilginç projelere açığım. Ulaşın, konuşalım.",
      emailCta: "E-posta gönder",
      linkedin: "LinkedIn",
      location: "Ankara, Türkiye",
      form: {
        title: "Bana mesaj gönder",
        name: "Adınız",
        email: "E-posta adresiniz",
        message: "Mesajınız",
        send: "Gönder",
        sending: "Gönderiliyor…",
        success: "Teşekkürler! Mesajınız iletildi.",
        error: "Bir şeyler ters gitti. Lütfen daha sonra tekrar deneyin.",
        close: "Kapat",
      },
    },
    testimonials: {
      heading: "Ne dediler",
      items: [
        {
          name: "Ahmet K.",
          role: "İşletme Sahibi",
          text: "Sıra sistemi bayram sezonunu yönetme şeklimizi değiştirdi. Müşteriler bankonun önünde beklemeyi bıraktı — linklerini takip ediyorlar. Kurulum yarım gün sürdü.",
          rating: 5,
        },
        {
          name: "Elif S.",
          role: "Ürün Yöneticisi",
          text: "Selman, belirsiz iş gereksinimlerini çalışan yazılıma birlikte çalıştığım herkesten hızlı dönüştürüyor. Süreç boyunca iletişimi çok netti.",
          rating: 5,
        },
        {
          name: "Mehmet D.",
          role: "Backend Geliştirici",
          text: "Temiz kod, sağlam mimari kararlar ve gerçekten dokümantasyon yazıyor. PR'larını incelemek keyifti.",
          rating: 5,
        },
        {
          name: "Zeynep A.",
          role: "UI/UX Tasarımcı",
          text: "Çoğu geliştiricinin es geçtiği piksel detaylarını önemsiyor. Figma'dan teslim çok akıcıydı — yayına çıkan, tasarımla birebir aynıydı.",
          rating: 4,
        },
        {
          name: "Burak T.",
          role: "Startup Kurucusu",
          text: "Panelimizi planlanandan önce teslim etti; yayına aldıktan sonra da düzeltmeler ve küçük geliştirmeler için hep ulaşılabilirdi.",
          rating: 5,
        },
      ],
    },
    footer: "Next.js ile tasarlandı ve geliştirildi",
  },
} as const;

export const profile = {
  name: "Selman Yıldız",
  email: "selmanyildiz555@gmail.com",
  linkedin: "https://www.linkedin.com/in/selman-yıldız-121206173",
  github: "https://github.com/selmanyildizz",
};

export type Dict = (typeof content)["en"] | (typeof content)["tr"];
