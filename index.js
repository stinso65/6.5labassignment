// Add JavaScript below
window.onload = function() {
    ScrollReveal().reveal('.photo1', {delay: 600});
    ScrollReveal().reveal('.photo2', { delay: 800, origin: 'top', distance: '70px' });
    ScrollReveal().reveal('.photo3', { delay: 700, origin: 'right', distance: '70px' });
    ScrollReveal().reveal('.photo4', { delay: 700, origin: 'left', distance: '60px' });
    ScrollReveal().reveal('.photo5', {
        rotate: {
            x: 50,
            z: 50
        }
    });
}
