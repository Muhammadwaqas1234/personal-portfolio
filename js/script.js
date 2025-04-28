var typed = new Typed(".multiple-text", {
    strings: ["Full-Stack Developer", "ML Engineer", "API Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


document.addEventListener('DOMContentLoaded', function() {
    const skillsSection = document.querySelector('.skills');
    const skillBars = document.querySelectorAll('.skill-progress');
    let animationDone = false;

    function animateSkills() {
        let sectionTop = skillsSection.offsetTop;
        let scrollTop = window.scrollY;

        if (scrollTop > sectionTop - window.innerHeight + 100) {
            if (!animationDone) {
                skillBars.forEach(bar => {
                    let target = bar.getAttribute('data-target');
                    bar.style.width = target + '%';
                    bar.textContent = target + '%';
                });
                animationDone = true;
            }
        } else {
            skillBars.forEach(bar => {
                bar.style.width = '0%';
                bar.textContent = '0%';
            });
            animationDone = false;
        }
    }

    window.addEventListener('scroll', animateSkills);
});


const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = (e) => {
    e.stopPropagation(); 
    navbar.classList.toggle('active');
};

document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && !menuIcon.contains(e.target)) {
        navbar.classList.remove('active');
    }
});
