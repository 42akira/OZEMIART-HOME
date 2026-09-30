

//projects page and about page


// Jedem Bild eine leichte, gestaffelte Verzögerung geben,
// damit sie "nacheinander" statt alle gleichzeitig erscheinen.
const bubbles = document.querySelectorAll('.project-bubble');

bubbles.forEach((bubble, index) => {
    bubble.style.transitionDelay = index * 0.1 + 's';
    // % 4, weil bei column-count:3 z.B. Item 0,3,6... eh in derselben Spalte
    // starten und dadurch nicht ewig aufeinander warten
});

// IntersectionObserver: beobachtet, wann ein Element in den Viewport scrollt
const bubbleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            bubbleObserver.unobserve(entry.target); // Animation nur einmal abspielen
        }
    });
}, {
    threshold: 0.15 // löst aus, sobald 15% des Elements sichtbar sind
});

bubbles.forEach(bubble => bubbleObserver.observe(bubble));
