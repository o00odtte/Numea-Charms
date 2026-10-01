/* NAVBAR — SCROLL EFFECT */
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
/* MOBILE MENU */
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");
menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});
/* Close menu when navigation link is clicked */
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("open");
    });
});
/* SCROLL REVEAL */
const revealElements = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right"
);
const revealObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);
revealElements.forEach(element => {
    revealObserver.observe(element);
});
/* ACTIVE NAVIGATION */
const sections = document.querySelectorAll("section[id]");
const sectionObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentId = entry.target.getAttribute("id");
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${currentId}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    },
    {
        threshold: 0.35
    }
);
sections.forEach(section => {
    sectionObserver.observe(section);
});
const heroVisual = document.querySelector(".hero-visual");
if (heroVisual) {
    heroVisual.addEventListener("mousemove", (event) => {
        const rect = heroVisual.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -2;
        const rotateY = ((x - centerX) / centerX) * 2;
        const image = heroVisual.querySelector(".hero-image-wrapper");
        image.style.transform = `
            translateY(-5px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
        `;
    });
    heroVisual.addEventListener("mouseleave", () => {
        const image = heroVisual.querySelector(".hero-image-wrapper");
        image.style.transform = "";
    });
}
/* =========================================
   COLLECTION CARD STAGGER
========================================= */
const collectionCards = document.querySelectorAll(".collection-card");
collectionCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});
/* =========================================
   SMOOTH ANCHOR SCROLL
========================================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (event) {
        const targetId = this.getAttribute("href");
        if (targetId === "#") {
            return;
        }
        const target = document.querySelector(targetId);
        if (!target) {
            return;
        }
        event.preventDefault();
        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});
document.querySelectorAll("img").forEach(image => {
    image.setAttribute("draggable", "false");
});