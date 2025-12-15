/**
 * SURLY.FR - Main JavaScript
 * Swiss Style: Linear, precise micro-interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initMobileMenu();
    initScrollAnimations();
    initCounters();
    initSmoothScroll();
    initFormHandling();
    initParallaxEffects();
    initContinuousCounters();
});

/**
 * Navigation Scroll Effect
 */
function initNavigation() {
    const nav = document.getElementById('nav');
    if (!nav) return;
    
    const scrollThreshold = 50;
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > scrollThreshold) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }, { passive: true });
}

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
    const toggle = document.getElementById('navToggle');
    const menu = document.getElementById('mobileMenu');
    const links = menu?.querySelectorAll('a');
    
    if (!toggle || !menu) return;
    
    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
        toggle.classList.toggle('active');
        document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
    });
    
    links?.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            toggle.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

/**
 * Scroll Animations - Linear, fast
 */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-animate]');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -5% 0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = parseInt(entry.target.dataset.delay) || 0;
                
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(el => observer.observe(el));
}

/**
 * Animated Counters - Ticker style (vertical scroll effect)
 */
function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    
    const observerOptions = {
        root: null,
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.dataset.count);
                const duration = 1500; // Faster, more precise
                const startTime = performance.now();
                
                function updateCounter(currentTime) {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    
                    // Linear easing for Swiss style precision
                    const current = Math.floor(progress * target);
                    
                    counter.textContent = current;
                    
                    if (progress < 1) {
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                }
                
                requestAnimationFrame(updateCounter);
                observer.unobserve(counter);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => observer.observe(counter));
}

/**
 * Smooth Scroll for Anchor Links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (!target) return;
            
            const navHeight = document.getElementById('nav')?.offsetHeight || 0;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
}

/**
 * Form Handling - Minimal feedback
 */
function initFormHandling() {
    const form = document.querySelector('.contact-form');
    if (!form) return;
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        // Loading state - minimal
        submitBtn.innerHTML = '<span>Envoi...</span>';
        submitBtn.disabled = true;
        
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Success state
        submitBtn.innerHTML = '<span>Envoyé</span>';
        
        // Reset form
        form.reset();
        
        // Reset button after delay
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

/**
 * Utility: Throttle function
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Utility: Debounce function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Parallax Effects - Subtle background movement
 */
function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.hero-bg-image, .stats-bg-image, .testimonials-bg-image, .process-bg');
    
    if (parallaxElements.length === 0) return;
    
    let ticking = false;
    
    const handleScroll = () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                
                parallaxElements.forEach(el => {
                    const rect = el.parentElement.getBoundingClientRect();
                    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
                    
                    if (isVisible) {
                        const speed = 0.3;
                        const yPos = -(scrolled * speed);
                        el.style.transform = `translate3d(0, ${yPos}px, 0)`;
                    }
                });
                
                ticking = false;
            });
            
            ticking = true;
        }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
}

/**
 * Continuous Counters - Numbers that keep incrementing subtly
 */
function initContinuousCounters() {
    const tickerValues = document.querySelectorAll('.ticker-value');
    
    tickerValues.forEach(ticker => {
        const baseValue = parseInt(ticker.dataset.count) || 0;
        let currentValue = 0;
        let hasAnimated = false;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasAnimated) {
                    hasAnimated = true;
                    
                    // Initial count up animation
                    const duration = 2000;
                    const startTime = performance.now();
                    
                    const animateCount = (currentTime) => {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        
                        // Ease out cubic for smooth landing
                        const easeOut = 1 - Math.pow(1 - progress, 3);
                        currentValue = Math.floor(easeOut * baseValue);
                        
                        ticker.textContent = currentValue.toLocaleString();
                        
                        if (progress < 1) {
                            requestAnimationFrame(animateCount);
                        } else {
                            ticker.textContent = baseValue.toLocaleString();
                            // Start subtle continuous increment
                            startContinuousIncrement(ticker, baseValue);
                        }
                    };
                    
                    requestAnimationFrame(animateCount);
                    observer.unobserve(ticker);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(ticker);
    });
}

/**
 * Subtle continuous increment after initial animation
 */
function startContinuousIncrement(element, baseValue) {
    let displayValue = baseValue;
    
    // Every few seconds, increment by 1 with a subtle animation
    setInterval(() => {
        displayValue++;
        
        // Add a subtle scale pulse effect
        element.style.transition = 'transform 0.15s ease';
        element.style.transform = 'scale(1.02)';
        
        setTimeout(() => {
            element.textContent = displayValue.toLocaleString();
            element.style.transform = 'scale(1)';
        }, 150);
        
    }, 8000 + Math.random() * 4000); // Random interval between 8-12 seconds
}
