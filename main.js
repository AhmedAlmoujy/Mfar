/**
 * MFAR (مَفَر) Digital Growth Agency — Web Application Logic
 * 8-Service Interactive Engine, Dropdown Navigation, Service Details Modal, Portfolio Filters & Canvas Particles
 */

document.addEventListener('DOMContentLoaded', () => {

  // --------------------------------------------------------------------------
  // 1. Data Store: The 8 Main Services of MFAR (أقسام خدمات مَفَر الثمانية)
  // --------------------------------------------------------------------------
  const servicesData = {
    'uiux': {
      title: 'تصميم UI/UX',
      subtitle: 'تصميم واجهات وتجارب مستخدم مبتكرة للمتاجر والتطبيقات',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>`,
      description: 'نبتكر واجهات مستخدم متميزة وتجارب سهلة ترفع من معدل التحويلات وإكمال الطلبات للمتاجر والتطبيقات الإلكترونية، مع التركيز على فهم سلوك المستفيد وتصميم رحلة العميل المثالية.',
      deliverables: [
        'تحليل سلوك المستفيد ودراسة رحلة العميل (User Journey)',
        'تخطيط وااختبار النماذج الأولية الهيكلية (Wireframing & Prototyping)',
        'تصميم الواجهات البصرية التفاعلية عبر أفضل الأدوات (Figma)',
        'اختبارات تجربة المستخدم والتجاوب التام مع كافة الشاشات'
      ]
    },
    'seo': {
      title: 'تحسين SEO',
      subtitle: 'تصدر نتائج محركات البحث في جوجل وزيادة الزيارات المجانية المستهدفة',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
      description: 'استراتيجية سيو متكاملة تهدف إلى تصدر موقعك في الكلمات المفتاحية الأكثر ربحية وحجز المكانة الأولى في جوجل لضمان تدفق عملاء مستمر بدون تكاليف إعلانية مكررة.',
      deliverables: [
        'فحص السيو التقني للموقع وإصلاح أخطاء الأرشفة والسرعة',
        'دراسة وبحث الكلمات المفتاحية الأكثر بحثاً وربحية',
        'تحسين المحتوى الداخلي On-Page SEO والعناوين والوسوم',
        'ربط وأتمتة أدوات GA4 و Google Search Console و Clarity'
      ]
    },
    'graphic': {
      title: 'تصميم جرافيك',
      subtitle: 'تصاميم إبداعية تعزز هوية علامتك التجارية وتصنع الانطباع الأول',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
      description: 'نصمم هويات بصرية متميزة ومحتوى إعلاني جذّاب يعكس احترافية علامتك التجارية ويجذب أنظار عملائك عبر منصات التواصل والمتاجر الإلكترونية.',
      deliverables: [
        'بناء وتطوير الهوية التجارية ودليل الاستخدام البصري',
        'تصاميم السوشيال ميديا والحملات الترويجية والافتتاحية',
        'تصميم البنرات الإعلانية المخصصة للمتاجر والتطبيقات',
        'تصميم الملفات التعريفية المطبوعة والرقمية (Company Profile)'
      ]
    },
    'motion': {
      title: 'موشن جرافيك',
      subtitle: 'فيديوهات تفاعلية تشرح منتجاتك وتزيد من معدل المبيعات والانتشار',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
      description: 'إنتاج فيديوهات موشن جرافيك احترافية 2D/3D تعبر عن خدماتك بأسلوب بصري ممتع ومؤثر يزيد من تفاعل المتابعين ويحفزهم على اتخاذ قرار الشراء.',
      deliverables: [
        'كتابة نصوص وسيناريوهات إبداعية جذابة (Scriptwriting)',
        'تسجيل تعليق صوتي احترافي بأصوات عربية مميزة (Voiceover)',
        'رسم وتحريك المشاهد بدقة عالية وتردد ناعم',
        'إضافة المؤثرات الصوتية والبصرية لتضخيم التأثير'
      ]
    },
    'programming': {
      title: 'البرمجة والتطوير',
      subtitle: 'حلول برمجة وتطوير مواقع ومتاجر إلكترونية سريعة وآمنة',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
      description: 'تطوير منصات رقمية ومواقع تعريفية ومتاجر سريعة ومبنية على أحدث تقنيات الويب مع مراعاة أعلى معايير الأمان والتوافق مع محركات البحث.',
      deliverables: [
        'تطوير وتصميم مواقع ومتاجر إلكترونية مخصصة',
        'ربط بوابات الدفع الإلكتروني وشركات الشحن والـ APIs',
        'تحسين السرعة الفائقة وحماية البيانات والأمان',
        'دعم فني وتحديثات مستمرة وتطوير الميزات الحصرية'
      ]
    },
    'content': {
      title: 'صناعة المحتوى',
      subtitle: 'صياغة نصوص إعلانية ومحتوى إبداعي يؤثر ويقنع المستهدفين',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
      description: 'صناعة نصوص إعلانية مقنعة (Copywriting) وكتابة استراتيجيات محتوى تناسب جمهورك المستهدف وتحول القراء والمشاهدين إلى عملاء دائمين.',
      deliverables: [
        'صياغة النصوص الإعلانية (Ad Copies) المشجعة على الشراء',
        'إعداد الخطط الشهرية ورزنامة المحتوى التسويقي',
        'كتابة مقالات مدونات متوافقة مع قواعد السيو SEO',
        'صياغة وصف المنتجات والملفات التعريفية للشركات'
      ]
    },
    'mediabuyer': {
      title: 'ميديا باير',
      subtitle: 'إدارة حملات إعلانية مدفوعة تضمن أقصى عائد على الاستثمار ROAS',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>`,
      description: 'استراتيجيات ممولة احترافية عبر منصات الإعلانات المختلفة (Meta, Snap, TikTok, Google Ads) بهدف الوصول للجمهور المستهدف بدقة وضمان تحقيق أرباح عالية.',
      deliverables: [
        'إدارة وتوجيه ميزانيات الحملات الإعلانية المدفوعة',
        'إعداد استراتيجيات إعادة الاستهداف Retargeting والجماهير المشابهة',
        'حملات جوجل البحثية وإعلانات التسوق Google Shopping',
        'تحليل يومي وتحسين مستمر لخفض تكلفة اكتساب العميل (CPA)'
      ]
    },
    'socialmedia': {
      title: 'سوشيال ميديا',
      subtitle: 'إدارة وتفعيل حسابات التواصل الاجتماعي لبناء حضور قوي وتفاعلي',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>`,
      description: 'إدارة شاملة لكافة حسابات التواصل الاجتماعي من تحسين الواجهات والتفاعل اليومي مع المتابعين إلى النشر المستمر والتقارير الشهرية.',
      deliverables: [
        'تجهيز البايو والهيدرات وتنسيق ألوان وأغلفة الحسابات',
        'إعداد جدول النشر المستمر والردود اليومية والتفاعل',
        'نشر تصاميم وريلز قصيرة جذابة شهرياً',
        'تقديم تقارير تحليل الأداء ونسب التفاعل والانتشار'
      ]
    }
  };

  // Helper function to fetch element by ID
  function id(str) {
    return document.getElementById(str);
  }

  // --------------------------------------------------------------------------
  // 2. Theme Switcher Toggle (Dark / Light)
  // --------------------------------------------------------------------------
  const themeToggleBtn = id('theme-toggle');
  const htmlEl = document.documentElement;
  const sunIcon = document.querySelector('.sun-icon');
  const moonIcon = document.querySelector('.moon-icon');

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isDark = htmlEl.classList.contains('dark');
      if (isDark) {
        htmlEl.classList.remove('dark');
        htmlEl.classList.add('light');
        if (sunIcon && moonIcon) {
          sunIcon.classList.add('hidden');
          moonIcon.classList.remove('hidden');
        }
      } else {
        htmlEl.classList.remove('light');
        htmlEl.classList.add('dark');
        if (sunIcon && moonIcon) {
          sunIcon.classList.remove('hidden');
          moonIcon.classList.add('hidden');
        }
      }
    });
  }

  // --------------------------------------------------------------------------
  // 3. Mobile Navigation Drawer
  // --------------------------------------------------------------------------
  const mobileTrigger = id('mobile-menu-trigger');
  const closeDrawerBtn = id('close-drawer');
  const mobileDrawer = id('mobile-drawer');
  const drawerOverlay = document.querySelector('.drawer-overlay');
  const drawerItems = document.querySelectorAll('.drawer-item, .drawer-sublink, .drawer-service-card');

  function openDrawer() {
    if (mobileDrawer) {
      mobileDrawer.classList.add('active');
      mobileDrawer.setAttribute('aria-hidden', 'false');
    }
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (mobileDrawer) {
      mobileDrawer.classList.remove('active');
      mobileDrawer.setAttribute('aria-hidden', 'true');
    }
    document.body.style.overflow = '';
  }

  if (mobileTrigger) mobileTrigger.addEventListener('click', openDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

  drawerItems.forEach(item => {
    item.addEventListener('click', (e) => {
      const href = item.getAttribute('href');
      closeDrawer();
      if (href && href.startsWith('#')) {
        const targetSec = document.querySelector(href);
        if (targetSec) {
          e.preventDefault();
          setTimeout(() => {
            targetSec.scrollIntoView({ behavior: 'smooth' });
          }, 180);
        }
      }
    });
  });

  // --------------------------------------------------------------------------
  // 4. Navbar Scroll Effect & ScrollSpy Highlighting
  // --------------------------------------------------------------------------
  const header = id('main-header');
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      if (header) header.classList.add('nav-scrolled');
    } else {
      if (header) header.classList.remove('nav-scrolled');
    }

    let current = '';
    sections.forEach(sec => {
      const secTop = sec.offsetTop - 120;
      const secHeight = sec.offsetHeight;
      if (window.scrollY >= secTop && window.scrollY < secTop + secHeight) {
        current = sec.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      if (!item.classList.contains('dropdown-trigger')) {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
          item.classList.add('active');
        }
      }
    });
  });

  // --------------------------------------------------------------------------
  // 5. Interactive Service Details Modal Engine
  // --------------------------------------------------------------------------
  const serviceDetailModal = id('service-detail-modal');
  const closeServiceModalBtns = document.querySelectorAll('.close-service-modal');
  const serviceTriggers = document.querySelectorAll('.service-trigger, .service-modal-open');

  const modalIconWrap = id('modal-service-icon');
  const modalTitle = id('modal-service-title');
  const modalSubtitle = id('modal-service-subtitle');
  const modalDesc = id('modal-service-desc');
  const modalDeliverables = id('modal-service-deliverables');
  const modalOrderBtn = id('modal-service-order-btn');

  let activeServiceKey = 'uiux';

  function openServiceModal(serviceKey) {
    const data = servicesData[serviceKey];
    if (!data) return;

    activeServiceKey = serviceKey;

    if (modalIconWrap) modalIconWrap.innerHTML = data.icon;
    if (modalTitle) modalTitle.textContent = data.title;
    if (modalSubtitle) modalSubtitle.textContent = data.subtitle;
    if (modalDesc) modalDesc.textContent = data.description;

    if (modalDeliverables) {
      modalDeliverables.innerHTML = '';
      data.deliverables.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        modalDeliverables.appendChild(li);
      });
    }

    if (serviceDetailModal) {
      serviceDetailModal.classList.add('active');
    }
  }

  function closeServiceModal() {
    if (serviceDetailModal) {
      serviceDetailModal.classList.remove('active');
    }
  }

  serviceTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const key = btn.getAttribute('data-service');
      if (key) {
        openServiceModal(key);
      }
    });
  });

  closeServiceModalBtns.forEach(btn => btn.addEventListener('click', closeServiceModal));

  if (serviceDetailModal) {
    serviceDetailModal.addEventListener('click', (e) => {
      if (e.target === serviceDetailModal) closeServiceModal();
    });
  }

  if (modalOrderBtn) {
    modalOrderBtn.addEventListener('click', () => {
      const serviceName = servicesData[activeServiceKey] ? servicesData[activeServiceKey].title : 'إحدى الخدمات';
      const waMsg = encodeURIComponent(`مرحباً وكالة مَفَر، أود الاستفسار وطلب خدمة: (${serviceName}).`);
      window.open(`https://wa.me/201036076768?text=${waMsg}`, '_blank');
      closeServiceModal();
    });
  }

  // --------------------------------------------------------------------------
  // 6. Portfolio Category Filter Logic
  // --------------------------------------------------------------------------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioCards = document.querySelectorAll('.portfolio-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      portfolioCards.forEach(card => {
        const categories = card.getAttribute('data-category') || '';
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // --------------------------------------------------------------------------
  // 7. Verified Statistics Counter Animation
  // --------------------------------------------------------------------------
  const counters = document.querySelectorAll('.counter-num');
  let animatedStats = false;

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animatedStats) {
        animatedStats = true;
        counters.forEach(counter => {
          const target = parseFloat(counter.getAttribute('data-target'));
          const isDecimal = target % 1 !== 0;
          const duration = 1800;
          const startTime = performance.now();

          function step(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const currentVal = (target * progress);
            
            counter.textContent = isDecimal ? currentVal.toFixed(1) : Math.floor(currentVal);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              counter.textContent = isDecimal ? target.toFixed(1) : target;
            }
          }
          requestAnimationFrame(step);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsBar = document.querySelector('.hero-stats-bar');
  if (statsBar) statsObserver.observe(statsBar);

  // --------------------------------------------------------------------------
  // 8. FAQ Accordion Toggle Logic
  // --------------------------------------------------------------------------
  const faqTriggers = document.querySelectorAll('.faq-trigger');

  faqTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.parentElement;
      const isActive = item.classList.contains('active');

      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // --------------------------------------------------------------------------
  // 9. Consultation Request & Contact Forms Logic
  // --------------------------------------------------------------------------
  const consultModal = id('consult-modal');
  const openConsultBtns = document.querySelectorAll('.open-consult-modal');
  const closeConsultBtns = document.querySelectorAll('.close-consult-modal');
  const consultForm = id('consultation-form');
  const consultSuccess = id('consult-success');
  const mainContactForm = id('main-contact-form');

  function openConsultModal() {
    if (consultModal) {
      consultModal.classList.add('active');
      if (consultForm) consultForm.classList.remove('hidden');
      if (consultSuccess) consultSuccess.classList.add('hidden');
    }
  }

  function closeConsultModal() {
    if (consultModal) consultModal.classList.remove('active');
  }

  openConsultBtns.forEach(btn => btn.addEventListener('click', openConsultModal));
  closeConsultBtns.forEach(btn => btn.addEventListener('click', closeConsultModal));

  if (consultModal) {
    consultModal.addEventListener('click', (e) => {
      if (e.target === consultModal) closeConsultModal();
    });
  }

  if (consultForm) {
    consultForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = id('c-name') ? id('c-name').value : '';
      const phone = id('c-phone') ? id('c-phone').value : '';
      const company = id('c-company') ? id('c-company').value : '';
      const service = id('c-service') ? id('c-service').value : '';

      consultForm.classList.add('hidden');
      if (consultSuccess) consultSuccess.classList.remove('hidden');

      const waMsg = encodeURIComponent(`مرحباً مَفَر، أنا ${name} من (${company}). أرغب في البدء واستشارة بخصوص خدمة: ${service}. رقمي: ${phone}`);
      setTimeout(() => {
        window.open(`https://wa.me/201036076768?text=${waMsg}`, '_blank');
      }, 800);
    });
  }

  if (mainContactForm) {
    mainContactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = id('form-name') ? id('form-name').value : '';
      const phone = id('form-phone') ? id('form-phone').value : '';
      const service = id('form-service') ? id('form-service').value : '';
      const msg = id('form-message') ? id('form-message').value : '';

      const waMsg = encodeURIComponent(`مرحباً وكالة مَفَر، أنا ${name}. رقمي: ${phone}. الخدمة المطلوبة: ${service}. التفاصيل: ${msg}`);
      window.open(`https://wa.me/201036076768?text=${waMsg}`, '_blank');
    });
  }

  // --------------------------------------------------------------------------
  // 10. Upward Arrow Particle Engine (Canvas Background)
  // --------------------------------------------------------------------------
  const canvas = id('arrow-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resizeCanvas() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('orientationchange', () => setTimeout(resizeCanvas, 150));

    class ArrowParticle {
      constructor(initial = false) {
        this.reset(initial);
      }

      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : height + Math.random() * 50;
        this.size = Math.random() * 16 + 14;
        this.speedY = Math.random() * 1.4 + 0.6;
        this.speedX = (Math.random() - 0.48) * 0.4;
        this.opacity = Math.random() * 0.5 + 0.25;
        this.color = Math.random() > 0.45 ? '#00D2FF' : (Math.random() > 0.5 ? '#0084FF' : '#FF9E00');
      }

      update() {
        this.y -= this.speedY;
        this.x += this.speedX;

        if (this.y < -40 || this.x < -30 || this.x > width + 30) {
          this.reset(false);
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.font = `700 ${this.size}px 'Thmanyah', 'Segoe UI', system-ui, -apple-system, sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('↗', this.x, this.y);
        ctx.restore();
      }
    }

    const particleCount = window.innerWidth < 768 ? 55 : 80;
    const particles = Array.from({ length: particleCount }, () => new ArrowParticle(true));

    function animateParticles() {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animateParticles);
    }

    animateParticles();
  }

});
