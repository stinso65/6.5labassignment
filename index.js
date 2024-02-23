// Add JavaScript below
window.onload = function() {
    ScrollReveal().reveal('.photo1', {delay: 700});
    ScrollReveal().reveal('.photo2', { delay: 700, origin: 'left' });
    ScrollReveal().reveal('.photo5', {
        rotate: {
            x: 50,
            z: 50
        }
    });
}
