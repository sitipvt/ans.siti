// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
}

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
    }
    
    lastScroll = currentScroll;
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', data);
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Newsletter form handling
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = newsletterForm.querySelector('input[type="email"]').value;
        
        // Here you would typically send the email to a server
        console.log('Newsletter subscription:', email);
        
        // Show success message
        alert('Thank you for subscribing to our newsletter!');
        newsletterForm.reset();
    });
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.stat-card, .highlight-card, .project-card, .news-card, .team-card');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add active state to current page in navigation
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});


/* ═══════════════════════════════════════════════════════════════
   LAUNCH SECTION — Scroll animations, counters, quote reveal
════════════════════════════════════════════════════════════════ */
(function initLaunchSection() {
  'use strict';

  /* ── Shared IntersectionObserver factory ── */
  function makeObserver(callback, options) {
    return new IntersectionObserver(callback, Object.assign({
      threshold: 0.15,
      rootMargin: '0px 0px -60px 0px'
    }, options));
  }

  /* ─────────────────────────────────────────
     1. Generic reveal: [data-launch-reveal]
        and slide elements
  ───────────────────────────────────────── */
  var revealEls = document.querySelectorAll(
    '[data-launch-reveal], [data-launch-slide]'
  );

  if (revealEls.length) {
    var revealObs = makeObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObs.unobserve(entry.target);
        }
      });
    });
    revealEls.forEach(function(el) { revealObs.observe(el); });
  }

  /* ─────────────────────────────────────────
     2. Achievement cards — staggered pop-in
  ───────────────────────────────────────── */
  var achieveWrap = document.querySelector('.launch-achieve-wrap');
  if (achieveWrap) {
    var cardObs = makeObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var cards = entry.target.querySelectorAll('.launch-achieve-card');
          cards.forEach(function(card) {
            var delay = parseInt(card.getAttribute('data-delay') || '0', 10);
            setTimeout(function() {
              card.classList.add('is-visible');
            }, delay);
          });
          cardObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    cardObs.observe(achieveWrap);
  }

  /* ─────────────────────────────────────────
     3. Timeline items — staggered slide-in
  ───────────────────────────────────────── */
  var timelineWrap = document.querySelector('.launch-timeline-wrap');
  if (timelineWrap) {
    var tlObs = makeObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var items = entry.target.querySelectorAll('.lt-item');
          items.forEach(function(item) {
            var delay = parseInt(item.getAttribute('data-delay') || '0', 10);
            setTimeout(function() {
              item.classList.add('is-visible');
            }, delay);
          });
          tlObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    tlObs.observe(timelineWrap);
  }

  /* ─────────────────────────────────────────
     4. Count-up animation
        Elements with data-count attribute
  ───────────────────────────────────────── */
  function animateCount(el) {
    var target   = parseInt(el.getAttribute('data-count'), 10);
    var prefix   = el.getAttribute('data-prefix') || '';
    var suffix   = el.getAttribute('data-suffix') || '';
    var duration = 1600; // ms
    var start    = null;

    function step(ts) {
      if (!start) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      // ease-out cubic
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = Math.floor(eased * target);
      el.textContent = prefix + current + suffix;
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = prefix + target + suffix;
    }
    requestAnimationFrame(step);
  }

  var countEls = document.querySelectorAll('[data-count]');
  if (countEls.length) {
    var countObs = makeObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          countObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    countEls.forEach(function(el) { countObs.observe(el); });
  }

  /* ─────────────────────────────────────────
     5. Quote — word-by-word reveal
  ───────────────────────────────────────── */
  var quoteEl = document.getElementById('launchQuoteText');
  var quoteWrap = document.querySelector('.launch-quote-wrap');

  if (quoteEl && quoteWrap) {
    var QUOTE = 'Together, we are committed to shaping a more sustainable, resilient, and innovation-driven infrastructure ecosystem for the future. 🌏';

    var quoteObs = makeObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          revealQuoteWords(QUOTE, quoteEl, 55);
          quoteObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    quoteObs.observe(quoteWrap);
  }

  function revealQuoteWords(text, container, intervalMs) {
    var words = text.split(' ');
    container.textContent = '';
    // Build spans
    var spans = words.map(function(word) {
      var span = document.createElement('span');
      span.textContent = word + ' ';
      span.style.cssText = 'opacity:0;display:inline;transition:opacity 0.35s ease';
      container.appendChild(span);
      return span;
    });
    // Stagger reveal
    spans.forEach(function(span, i) {
      setTimeout(function() {
        span.style.opacity = '1';
      }, i * intervalMs);
    });
  }

})();
