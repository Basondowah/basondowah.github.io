/**
 * Asianline - Main JavaScript
 * Educational Consultancy Website
 */

document.addEventListener('DOMContentLoaded', function() {
    // ====================
    // Mobile Menu
    // ====================
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenuClose = document.getElementById('mobileMenuClose');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');

    function openMobileMenu() {
        if (mobileMenu) mobileMenu.classList.add('active');
        if (mobileMenuOverlay) mobileMenuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
        if (mobileMenu) mobileMenu.classList.remove('active');
        if (mobileMenuOverlay) mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileMenu);
    if (mobileMenuClose) mobileMenuClose.addEventListener('click', closeMobileMenu);
    if (mobileMenuOverlay) mobileMenuOverlay.addEventListener('click', closeMobileMenu);

    // ====================
    // Navbar Scroll Effect
    // ====================
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (navbar) {
            if (currentScroll > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        lastScroll = currentScroll;
    });

    // ====================
    // Scroll to Top Button
    // ====================
    const scrollTopBtn = document.getElementById('scrollTop');

    window.addEventListener('scroll', function() {
        if (scrollTopBtn) {
            if (window.pageYOffset > 500) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        }
    });

    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ====================
    // Fade In Animation on Scroll
    // ====================
    const fadeElements = document.querySelectorAll('.fade-in');

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    fadeElements.forEach(el => fadeObserver.observe(el));

    // ====================
    // Programs Filter
    // ====================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const programCards = document.querySelectorAll('.program-card[data-category]');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');

            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Filter cards
            programCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // ====================
    // Form Handling - All forms submit via Formspree
    // ====================
    // NOTE: Make sure to replace YOUR_FORM_ID in the HTML form action
    // with your actual Formspree form ID from https://formspree.io

    function handleFormSubmit(form, alertId, successMsg) {
        if (!form) return;

        const action = form.getAttribute('action');

        // If Formspree is configured (not the placeholder)
        if (action && !action.includes('YOUR_FORM_ID')) {
            // Let the form submit normally to Formspree
            // Show loading state
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري الإرسال...';
            submitBtn.disabled = true;

            // Formspree handles the actual submission
            // The page will redirect to Formspree thank you page
            // or you can set _next parameter for custom redirect
            return; // Let default form submission happen
        }

        // Fallback: Formspree not configured yet
        e.preventDefault();
        showAlert('error', 'الرجاء إعداد Formspree أولاً. انظر ملف README.md للتعليمات.', form, alertId);
    }

    const quickInquiryForm = document.getElementById('quickInquiryForm');
    if (quickInquiryForm) {
        quickInquiryForm.addEventListener('submit', function(e) {
            const action = this.getAttribute('action');
            if (action && action.includes('YOUR_FORM_ID')) {
                e.preventDefault();
                showAlert('error', '⚠️ الرجاء إعداد Formspree أولاً. افتح ملف README.md واتبع خطوات الإعداد.', this);
            }
            // Otherwise let Formspree handle it
        });
    }

    const applicationForm = document.getElementById('applicationForm');
    if (applicationForm) {
        applicationForm.addEventListener('submit', function(e) {
            const action = this.getAttribute('action');
            if (action && action.includes('YOUR_FORM_ID')) {
                e.preventDefault();
                showAlert('error', '⚠️ الرجاء إعداد Formspree أولاً. افتح ملف README.md واتبع خطوات الإعداد.', this, 'formAlert');
            }
            // Otherwise let Formspree handle it
        });
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const action = this.getAttribute('action');
            if (action && action.includes('YOUR_FORM_ID')) {
                e.preventDefault();
                showAlert('error', '⚠️ الرجاء إعداد Formspree أولاً. افتح ملف README.md واتبع خطوات الإعداد.', this, 'contactAlert');
            }
            // Otherwise let Formspree handle it
        });
    }

        // ====================
    // Smooth Scroll for Anchor Links
    // ====================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ====================
    // Active Nav Link on Scroll
    // ====================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', function() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // ====================
    // WhatsApp Link Generator (Optional Enhancement)
    // ====================
    const whatsappLinks = document.querySelectorAll('a[href^="https://wa.me/"]');
    whatsappLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // You can add analytics tracking here
            console.log('WhatsApp clicked');
        });
    });

    
    console.log('🎓 Asianline website loaded successfully!');
});
