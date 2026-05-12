/**
 * VERIVA INSIGHTS - APP CORE
 * Handles UI interactions and global state
 */

document.addEventListener('DOMContentLoaded', () => {
    // Header Scroll Effect
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu Logic
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuClose = document.getElementById('menuClose');
    const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

    if (hamburger && mobileMenu && menuClose) {
        hamburger.addEventListener('click', () => {
            mobileMenu.classList.add('open');
            hamburger.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        const closeMenu = () => {
            mobileMenu.classList.remove('open');
            hamburger.classList.remove('active');
            document.body.style.overflow = '';
        };

        menuClose.addEventListener('click', closeMenu);

        mobileLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }

    // Bottom Navigation Active State (Mobile)
    const bnItems = document.querySelectorAll('.bn-item');
    bnItems.forEach(item => {
        item.addEventListener('click', () => {
            bnItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // Initialize reveal animations
    initRevealAnimations();
    
    // Initialize Particles
    if (document.getElementById('particles-canvas')) {
        initParticles();
    }

    // Initialize Typewriter
    if (document.querySelector('.typewriter')) {
        initTypewriter();
    }

    // Initialize Announcement Bar
    if (document.querySelector('.announcement-bar')) {
        initAnnouncementBar();
    }
});

function initRevealAnimations() {
    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
                
                // If it's the dashboard card, trigger bar animation
                if (entry.target.classList.contains('dashboard-card')) {
                    animateDashboardBars();
                }
            }
        });
    }, revealOptions);

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
    
    // Also init FAQ and Filters
    initFAQ();
    initFilters();
}

function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    const particleCount = window.innerWidth < 768 ? 20 : 40;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);
    resize();

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.radius = Math.random() * 2 + 1;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(0, 229, 255, 0.4)';
            ctx.fill();
        }
    }

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach((p, i) => {
            p.update();
            p.draw();

            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
                if (dist < 150) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = `rgba(30, 111, 255, ${0.1 * (1 - dist / 150)})`;
                    ctx.stroke();
                }
            }
        });
        requestAnimationFrame(animate);
    }
    animate();
}

function initTypewriter() {
    const element = document.querySelector('.typewriter');
    if (!element) return;
    const text = element.getAttribute('data-text');
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 30);
        } else {
            element.innerHTML += '<span class="cursor"></span>';
        }
    }
    
    setTimeout(type, 1200);
}

function initAnnouncementBar() {
    const texts = document.querySelectorAll('.announcement-text');
    if (texts.length === 0) return;
    let current = 0;
    
    setInterval(() => {
        texts[current].classList.remove('active');
        current = (current + 1) % texts.length;
        texts[current].classList.add('active');
    }, 4000);
}

function animateDashboardBars() {
    const bars = document.querySelectorAll('.bar');
    const heights = [60, 85, 45, 95, 70, 80];
    bars.forEach((bar, i) => {
        setTimeout(() => {
            bar.style.height = heights[i] + '%';
        }, i * 100);
    });
}

function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.onclick = () => {
            const isActive = item.classList.contains('active');
            faqItems.forEach(i => i.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        };
    });
}

function initFilters() {
    const tabs = document.querySelectorAll('.filter-tab');
    const cards = document.querySelectorAll('.sample-card');
    
    tabs.forEach(tab => {
        tab.onclick = () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const filter = tab.getAttribute('data-filter');
            cards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        };
    });
}
