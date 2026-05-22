
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

// --- VÉRIFICATION DU CAPTCHA AVANT L'ENVOI ---
    const contactForm = document.getElementById("contact-form");
    
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            // hCaptcha crée automatiquement un champ caché appelé 'h-captcha-response'
            const hcaptchaResponse = contactForm.querySelector('[name=h-captcha-response]');
            
            // Si le champ existe mais qu'il est vide (non coché)
            if (hcaptchaResponse && hcaptchaResponse.value === "") {
                event.preventDefault(); // On bloque l'envoi du formulaire
                alert("Veuillez valider le Captcha (Je suis un humain) avant d'envoyer le message.");
            }
        });
    }