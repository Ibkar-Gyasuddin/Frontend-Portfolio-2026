// 1. Navbar color change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#081b29';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
    } else {
        navbar.style.background = 'transparent';
        navbar.style.boxShadow = 'none';
    }
});

// 2. Typing Effect for your Designation
const text = document.querySelector(".hero-content span");
const textLoad = () => {
    setTimeout(() => {
        text.textContent = ".NET Developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Python Enthusiast";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Computer Sciences Student";
    }, 8000);
}
textLoad();
setInterval(textLoad, 12000);

// 3. Scroll Reveal Animation (Simple version)
const sections = document.querySelectorAll('section');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if(top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
        }
    });
}