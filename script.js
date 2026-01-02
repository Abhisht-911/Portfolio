// Safety reset (prevents stuck state on reload)
document.body.classList.remove('menu-open');
document.querySelector('.nav-links')?.classList.remove('active');


// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;
const body = document.body;

function applyTheme(theme) {
    if (theme === 'dark') {
        htmlElement.classList.add('dark-mode');
        body.classList.add('dark-mode');
        themeToggle.textContent = '☀';
    } else {
        htmlElement.classList.remove('dark-mode');
        body.classList.remove('dark-mode');
        themeToggle.textContent = '𖤓';
    }
}

const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
});

// Parallax effect on avatar (inner tilt)
const avatar = document.getElementById('avatar');
document.addEventListener('mousemove', (e) => {
    if (avatar) {
        const avatarRect = avatar.getBoundingClientRect();
        const avatarCenterX = avatarRect.left + avatarRect.width / 2;
        const avatarCenterY = avatarRect.top + avatarRect.height / 2;

        const moveX = (e.clientX - avatarCenterX) / 20;
        const moveY = (e.clientY - avatarCenterY) / 20;

        avatar.style.transform =
            `perspective(1200px) rotateX(${moveY * 0.5}deg) rotateY(${moveX * 0.5}deg)`;
    }
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll(
    '.section-title, .about-text p, .project-card, .education-card, .skill-category, .certification-item'
).forEach((el) => {
    observer.observe(el);
});

// Parallax effect on avatar container (outer tilt)
document.addEventListener('mousemove', (e) => {
    const avatarContainer = document.querySelector('.avatar-container');
    if (avatarContainer) {
        const moveX = (e.clientX / window.innerWidth) * 5;
        const moveY = (e.clientY / window.innerHeight) * 5;
        avatarContainer.style.transform =
            `perspective(1200px) rotateX(${moveY}deg) rotateY(${-moveX}deg)`;
    }
});

// // Split name into letters for shake effect (Coolors style)
// document.addEventListener('DOMContentLoaded', function() {
//     const nameElement = document.getElementById('heroName');
//     if (nameElement) {
//         const nameText = nameElement.textContent.trim();
//         nameElement.innerHTML = nameText.split('').map(char => 
//             char === ' ' ? '<span>&nbsp;</span>' : `<span>${char}</span>`
//         ).join('');
//     }
// });

// Resume Download Button
const resumeToggle = document.getElementById('resumeToggle');
if (resumeToggle) {
    resumeToggle.addEventListener('click', function() {
        const link = document.createElement('a');
        link.href = 'Abhisht.pdf';
        link.download = 'Abhisht-Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}

// lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

document.querySelectorAll(".certification-item img").forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.classList.add("active");
  });
});

// Close on background click
lightbox.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

// Close on ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    lightbox.classList.remove("active");
  }
});

// navigation side bar for mobile
const toggleBtn = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');


toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

function setTheme(mode) {
  if (mode === 'dark') {
    document.body.classList.add('dark');
    document.getElementById('img-light').style.display = 'none';
    document.getElementById('img-dark').style.display = 'block';
  } else {
    document.body.classList.remove('dark');
    document.getElementById('img-light').style.display = 'block';
    document.getElementById('img-dark').style.display = 'none';
  }
}
