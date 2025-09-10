/* =========================
   ULTRA ADVANCED JS PORTFOLIO
============================ */

/* =========================
   DOM ELEMENTS
============================ */
const body = document.body;
const themeToggleBtn = document.getElementById('theme-toggle');
const iconMoon = document.getElementById('icon-moon');
const iconSun = document.getElementById('icon-sun');
const navMenu = document.querySelector('.nav-menu');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-menu li a');
const skillBars = document.querySelectorAll('.skill-bar .progress');
const typedRole = document.getElementById('typed-role');
const projectCards = document.querySelectorAll('.project-card');
const aiCards = document.querySelectorAll('.ai-card');
const contactForm = document.getElementById('contact-form');

/* =========================
   DARK/LIGHT MODE TOGGLE
============================ */
themeToggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  if(body.classList.contains('dark')){
    iconMoon.style.display = 'none';
    iconSun.style.display = 'block';
  } else {
    iconMoon.style.display = 'block';
    iconSun.style.display = 'none';
  }
});

/* =========================
   NAVBAR TOGGLE MOBILE
============================ */
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

/* =========================
   NAV LINK SCROLL ACTIVE
============================ */
window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + 150;
  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if(section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos){
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
});

/* =========================
   TYPED.JS HERO ROLE ANIMATION
============================ */
if(typedRole){
  var typed = new Typed('#typed-role', {
    strings: ['Machine Learning Engineer', 'AI Enthusiast', 'Full Stack Developer', 'Data Scientist'],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
  });
}

/* =========================
   SKILL BAR ANIMATION
============================ */
function animateSkills() {
  skillBars.forEach(bar => {
    const parent = bar.parentElement;
    const percent = parent.getAttribute('data-percent');
    bar.style.width = percent + '%';
  });
}

window.addEventListener('load', animateSkills);

/* =========================
   PROJECT CARD HOVER EFFECTS
============================ */
projectCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)';
    card.style.background = 'linear-gradient(135deg, #4f46e5, #6366f1)';
    card.style.color = '#fff';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
    card.style.background = '';
    card.style.color = '';
  });
});

/* =========================
   AI CARDS HOVER ANIMATIONS
============================ */
aiCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-10px) scale(1.05)';
    card.style.background = 'linear-gradient(135deg, #4f46e5, #f59e0b)';
    card.style.color = '#fff';
    card.style.boxShadow = '0 15px 40px rgba(0,0,0,0.3)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) scale(1)';
    card.style.background = '';
    card.style.color = '';
    card.style.boxShadow = '';
  });
});

/* =========================
   CONTACT FORM SUBMIT WITH VALIDATION
============================ */
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const phone = contactForm.phone.value.trim();
  const message = contactForm.message.value.trim();
  const formMsg = contactForm.querySelector('.form-msg');

  if(name === '' || email === '' || phone === '' || message === ''){
    formMsg.textContent = 'Please fill all fields';
    formMsg.style.color = 'red';
    formMsg.style.opacity = '1';
    setTimeout(() => formMsg.style.opacity = '0', 3000);
    return;
  }

  // Simulate form submission
  formMsg.textContent = 'Message sent successfully!';
  formMsg.style.color = 'green';
  formMsg.style.opacity = '1';
  contactForm.reset();
  setTimeout(() => formMsg.style.opacity = '0', 4000);
});

/* =========================
   SMOOTH SCROLL FOR ANCHORS
============================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

/* =========================
   AI FEATURE PLACEHOLDER FUNCTIONS
============================ */
function aiCardHoverEffect(card){
  // Placeholder for future AI logic
  let colors = ['#6366f1','#4f46e5','#fbbf24','#10b981','#f43f5e'];
  let index = 0;
  setInterval(() => {
    if(card.matches(':hover')){
      card.style.background = colors[index % colors.length];
      index++;
    }
  }, 500);
}

// Apply to all AI cards
aiCards.forEach(card => aiCardHoverEffect(card));

/* =========================
   RANDOM FLOATING ANIMATION FOR AI CARDS
============================ */
aiCards.forEach(card => {
  let pos = 0;
  let direction = 1;
  setInterval(() => {
    pos += direction * 0.2;
    if(pos > 5 || pos < -5) direction *= -1;
    card.style.transform = `translateY(${pos}px)`;
  }, 50);
});

/* =========================
   ADDITIONAL INTERACTIVE EFFECTS
============================ */
projectCards.forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.background = `radial-gradient(circle at ${x}px ${y}px, #4f46e5, #6366f1)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.background = '';
  });
});

/* =========================
   WINDOW RESIZE ADJUSTMENTS
============================ */
window.addEventListener('resize', () => {
  if(window.innerWidth > 1024){
    navMenu.classList.remove('active');
  }
});

/* =========================
   FUTURE AI INTERACTION PLACEHOLDER
============================ */
function aiRecommendationSystem(){
  // This is a placeholder for future AI-powered recommendations
  aiCards.forEach(card => {
    card.addEventListener('click', () => {
      card.textContent = "AI Suggestion: Explore ML Project #"+Math.floor(Math.random()*10);
    });
  });
}

aiRecommendationSystem();

/* =========================
   ADDITIONAL FLOATING TEXT EFFECT
============================ */
const floatingTexts = ['AI', 'ML', 'Python', 'React', 'Java'];
floatingTexts.forEach(text => {
  let span = document.createElement('span');
  span.textContent = text;
  span.style.position = 'absolute';
  span.style.top = Math.random()*window.innerHeight + 'px';
  span.style.left = Math.random()*window.innerWidth + 'px';
  span.style.opacity = 0.2;
  span.style.fontSize = '2rem';
  span.style.fontWeight = '700';
  span.style.color = '#4f46e5';
  span.style.transition = 'all 1s ease-in-out';
  body.appendChild(span);
  setInterval(() => {
    span.style.top = Math.random()*window.innerHeight + 'px';
    span.style.left = Math.random()*window.innerWidth + 'px';
  }, 5000);
});

/* =========================
   EXTRA AI INTERACTIVE FEATURE PLACEHOLDER
============================ */
function aiChatBotPlaceholder(){
  // Simulate chatbot hover effect
  aiCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.textContent = "💬 Ask me anything about AI!";
    });
    card.addEventListener('mouseleave', () => {
      card.textContent = card.getAttribute('data-title') || "AI Widget";
    });
  });
}
aiChatBotPlaceholder();

/* =========================
   END OF ADVANCED JS
============================ */
