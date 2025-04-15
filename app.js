// Set the date for the event (March 15, 2024 at 09:00:00)
const eventDate = new Date('2025-04-25T09:00:00').getTime();

// Update the countdown every second
const countdown = setInterval(function() {
    // Get today's date and time
    const now = new Date().getTime();
    
    // Find the distance between now and the event date
    const distance = eventDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the results with animation
    updateCountdownValue('days', days);
    updateCountdownValue('hours', hours);
    updateCountdownValue('minutes', minutes);
    updateCountdownValue('seconds', seconds);
    
    // If the countdown is finished, display expired message
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById('countdown').innerHTML = '<div class="text-4xl font-bold animate-pulse">Event Has Started!</div>';
    }
}, 1000);

// Function to update countdown values with animation
function updateCountdownValue(id, value) {
    const element = document.getElementById(id);
    const currentValue = parseInt(element.textContent);
    const newValue = String(value).padStart(2, '0');
    
    if (currentValue !== value) {
        element.style.transform = 'translateY(-20px)';
        element.style.opacity = '0';
        
        setTimeout(() => {
            element.textContent = newValue;
            element.style.transform = 'translateY(20px)';
            
            requestAnimationFrame(() => {
                element.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out';
                element.style.transform = 'translateY(0)';
                element.style.opacity = '1';
            });
        }, 250);
    }
}

// Theme toggle functionality with smooth transition
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference, otherwise use system preference
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark');
} else {
    html.classList.remove('dark');
}

// Toggle theme on button click with animation
themeToggle.addEventListener('click', () => {
    const sunIcon = themeToggle.querySelector('.fa-sun');
    const moonIcon = themeToggle.querySelector('.fa-moon');
    
    // Add rotation animation
    themeToggle.style.transform = 'rotate(360deg)';
    themeToggle.style.transition = 'transform 0.5s ease-in-out';
    
    setTimeout(() => {
        themeToggle.style.transform = 'rotate(0deg)';
        html.classList.toggle('dark');
        
        // Save preference to localStorage
        if (html.classList.contains('dark')) {
            localStorage.theme = 'dark';
        } else {
            localStorage.theme = 'light';
        }
    }, 250);
});

// Smooth scroll for navigation links
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

// Intersection Observer for revealing elements on scroll
const revealOnScroll = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('motion-safe:animate-fadeIn');
                revealOnScroll.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.1
    }
);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    revealOnScroll.observe(section);
}); 