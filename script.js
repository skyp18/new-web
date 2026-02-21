// Particles.js - Green in light mode, yellow in dark mode (live animated background)
function initParticles() {
  const container = document.getElementById('particles-js');
  if (!container) return;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    container.innerHTML = '';
    return;
  }
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  const particleColor = isLight ? '#16a34a' : '#ffd700';
  const isMobile = window.innerWidth < 768;
  const particleCount = isMobile ? 18 : 28; // Fewer = smoother on low refresh rate
  container.innerHTML = '';
  particlesJS('particles-js', {
    particles: {
      number: { value: particleCount, density: { enable: true, value_area: 900 } },
      color: { value: particleColor },
      shape: { type: 'circle' },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 120,
        color: particleColor,
        opacity: 0.25,
        width: 1
      },
      move: {
        enable: true,
        speed: 1.2,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: { enable: true, mode: 'repulse' },
        onclick: { enable: true, mode: 'push' }
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
        push: { particles_nb: 4 }
      }
    },
    retina_detect: false // Smoother on low-end / low refresh rate devices
  });
}

// Init on load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initParticles);
} else {
  initParticles();
}

// Smooth scroll to section
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({
    behavior: 'smooth'
  });
  // Close mobile menu when navigating
  document.getElementById('navbar-menu')?.classList.remove('active');
  document.querySelector('.navbar-toggle')?.setAttribute('aria-expanded', 'false');
}

// Light/Dark mode toggle
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  // Reinit particles with new color (green in light, yellow in dark)
  initParticles();
}

// Toggle mobile menu
function toggleMenu() {
  const menu = document.getElementById('navbar-menu');
  const toggle = document.querySelector('.navbar-toggle');
  menu?.classList.toggle('active');
  const isOpen = menu?.classList.contains('active');
  toggle?.setAttribute('aria-expanded', isOpen);
}

// Close mobile menu when nav link is clicked
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.navbar-menu a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('navbar-menu')?.classList.remove('active');
      document.querySelector('.navbar-toggle')?.setAttribute('aria-expanded', 'false');
    });
  });

  // Render projects, blogs, achievements from data.js
  if (typeof portfolioData !== 'undefined') {
    renderProjects();
    renderBlogs();
    renderAchievements();
  }

  // Create project modal overlay (renders project details in popup)
  if (document.getElementById('projects-grid') && !document.getElementById('project-modal')) {
    const modal = document.createElement('div');
    modal.id = 'project-modal';
    modal.className = 'project-modal';
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML = `
      <div class="project-modal-backdrop" onclick="closeProjectModal()" aria-label="Close modal"></div>
      <div class="project-modal-box">
        <button type="button" class="project-modal-close" onclick="closeProjectModal()" aria-label="Close">×</button>
        <div id="project-modal-content" class="project-modal-scroll"></div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  // Update page title based on hash - shows description of chosen section in tab
  const sectionTitles = {
    home: 'Home - Shashank Kumar',
    skills: 'Skills & Technologies - Shashank Kumar',
    projects: 'Featured Projects - Shashank Kumar',
    blogs: 'Blogs - Shashank Kumar',
    achievements: 'Achievements - Shashank Kumar',
    contact: 'Contact - Shashank Kumar'
  };
  const hash = window.location.hash.slice(1);
  if (hash && sectionTitles[hash]) {
    document.title = sectionTitles[hash];
  }
});

// Render content from portfolioData - add entries in data.js to see them here
function renderProjects() {
  const container = document.getElementById('projects-grid');
  if (!container || !portfolioData.projects) return;
  container.innerHTML = portfolioData.projects.map((p, i) => `
    <div class="project-card">
      <img src="${p.image}" alt="${p.alt || p.title}" loading="lazy" width="300" height="200" onerror="this.style.display='none'" />
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <button type="button" class="project-link" title="View ${p.title} project" onclick="openProjectModal(${i})">View Project →</button>
    </div>
  `).join('');
}

function openProjectModal(index) {
  const modal = document.getElementById('project-modal');
  const content = document.getElementById('project-modal-content');
  if (!modal || !content || !portfolioData.projects[index]) return;
  const p = portfolioData.projects[index];
  const d = p.details || {};
  const techs = (d.technologies || []).map(t => `<li>${t}</li>`).join('');
  const feats = (d.features || []).map(f => `<li>${f}</li>`).join('');
  const contribs = (d.contribution || []).map(c => `<li>${c}</li>`).join('');
  content.innerHTML = `
    <div class="project-modal-body">
      <h2 class="project-modal-title">${p.title}</h2>
      <p class="project-modal-desc">${d.fullContent || p.description}</p>
      ${techs ? `<h3 class="project-modal-heading">Technologies Used</h3><ul class="project-modal-list">${techs}</ul>` : ''}
      ${feats ? `<h3 class="project-modal-heading">Key Features</h3><ul class="project-modal-list">${feats}</ul>` : ''}
      ${contribs ? `<h3 class="project-modal-heading">My Contribution</h3><ul class="project-modal-list">${contribs}</ul>` : ''}
      <a href="${p.link}" class="project-modal-full-link" target="_blank" rel="noopener noreferrer">View full page →</a>
    </div>
  `;
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

function renderBlogs() {
  const container = document.getElementById('blogs-grid');
  if (!container || !portfolioData.blogs) return;
  container.innerHTML = portfolioData.blogs.map(b => `
    <div class="blog-card">
      <h3>${b.title}</h3>
      <p class="blog-meta">${b.meta}</p>
      <p>${b.description}</p>
      <a href="${b.link}" class="blog-link" target="_blank" rel="noopener noreferrer">Read More →</a>
    </div>
  `).join('');
}

function renderAchievements() {
  const container = document.getElementById('achievements-grid');
  if (!container || !portfolioData.achievements) return;
  container.innerHTML = portfolioData.achievements.map(a => `
    <div class="achievement-card">
      <div class="achievement-icon"><i class="fas ${a.icon || 'fa-award'}"></i></div>
      <h3>${a.title}</h3>
      <p>${a.description}</p>
    </div>
  `).join('');
}

// Modal for contact info
function showModal(title, content, link) {
  if (link) {
    window.location.href = link;
  }
}

// Click ripple effect - throttled to prevent lag on rapid clicks
let rippleCooldown = false;
document.addEventListener('click', (e) => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (rippleCooldown) return;
  rippleCooldown = true;
  setTimeout(() => { rippleCooldown = false; }, 150);
  const ripple = document.createElement('span');
  ripple.className = 'click-ripple';
  ripple.style.left = e.clientX + 'px';
  ripple.style.top = e.clientY + 'px';
  document.body.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
});
