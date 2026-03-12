
document.addEventListener("DOMContentLoaded", () => {
    
   
    const modal = document.getElementById("lightbox-modal");
    const modalImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close-lightbox");
    const images = document.querySelectorAll(".gallery-item img");

    
    images.forEach(img => {
        img.addEventListener("click", function() {
            modal.style.display = "block"; 
            modalImg.src = this.src; 
        });
    });

    
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
    
    
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.style.display === "block") {
            modal.style.display = "none";
        }
    });
});