// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("a[href^=\"#\"]");
    
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});

// Add scroll effect to navbar
window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(10, 10, 10, 0.98)";
    } else {
        navbar.style.background = "rgba(10, 10, 10, 0.95)";
    }
});

// Animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll(".benefit-card, .step, .stat, .feature");
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }
    });
}

// Initialize animation styles
document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".benefit-card, .step, .stat, .feature");
    
    elements.forEach(element => {
        element.style.opacity = "0";
        element.style.transform = "translateY(30px)";
        element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    });
    
    // Initial check
    animateOnScroll();
});

// Listen for scroll events
window.addEventListener("scroll", animateOnScroll);

// Add hover effects for interactive elements
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".primary-button, .secondary-button, .cta-button");
    
    buttons.forEach(button => {
        button.addEventListener("mouseenter", function() {
            this.style.transform = "translateY(-2px)";
        });
        
        button.addEventListener("mouseleave", function() {
            this.style.transform = "translateY(0)";
        });
    });
});

// Mobile menu toggle (if needed for smaller screens)
function toggleMobileMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("mobile-active");
}

// Add mobile menu styles dynamically
const mobileStyles = `
    @media (max-width: 768px) {
        .nav-links.mobile-active {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(10, 10, 10, 0.98);
            padding: 1rem;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .nav-links.mobile-active .nav-link {
            display: block;
            padding: 0.5rem 0;
        }
    }
`;

// Add styles to head
const styleSheet = document.createElement("style");
styleSheet.textContent = mobileStyles;
document.head.appendChild(styleSheet);

// Add loading animation
window.addEventListener("load", function() {
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.5s ease";
    
    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 100);
});

// Add particle effect to hero section (optional enhancement)
function createParticles() {
    const hero = document.querySelector(".hero");
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(0, 212, 255, 0.3);
            border-radius: 50%;
            pointer-events: none;
            animation: float ${Math.random() * 3 + 2}s infinite ease-in-out;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 2}s;
        `;
        
        hero.appendChild(particle);
    }
}

// Add particle animation keyframes
const particleAnimation = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
        }
        50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.8;
        }
    }
`;

const animationSheet = document.createElement("style");
animationSheet.textContent = particleAnimation;
document.head.appendChild(animationSheet);

// Initialize particles on load
document.addEventListener("DOMContentLoaded", createParticles);

// Play video function for the hero section
function playVideo() {
    const videoEmbed = document.querySelector('.video-embed');
    if (videoEmbed) {
        // If the video is already playing, pause it
        const currentSrc = videoEmbed.src;
        if (currentSrc.includes('autoplay=1')) {
            videoEmbed.src = currentSrc.replace('autoplay=1', 'autoplay=0');
        } else {
            // Add autoplay parameter to start the video
            const separator = currentSrc.includes('?') ? '&' : '?';
            videoEmbed.src = currentSrc + separator + 'autoplay=1';
        }
    }
}

// Add this to your existing script.js
async function loginUser(email, password) {
  try {
    const response = await fetch('/api/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Login failed');
    }

    // Store token and redirect
    localStorage.setItem('token', data.token);
    window.location.href = '/dashboard.html';
  } catch (error) {
    console.error('Login error:', error);
    alert(error.message);
  }
}

// Example usage with your existing buttons
// document.getElementById('login-btn').addEventListener('click', () => {
//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;
//   loginUser(email, password);
// });

