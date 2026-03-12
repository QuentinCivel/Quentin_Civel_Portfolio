
document.addEventListener("DOMContentLoaded", () => {
    

    const elementsToFadeIn = document.querySelectorAll('.fade-in');

    
    const observerOptions = {
        root: null, 
        threshold: 0.15, 
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    elementsToFadeIn.forEach(element => {
        observer.observe(element);
    });
});