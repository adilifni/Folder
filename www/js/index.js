// التحكم في القائمة الجانبية (Sidebar)
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

function toggleSidebar() {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

menuBtn.addEventListener('click', toggleSidebar);
closeBtn.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', toggleSidebar);

// التحكم في السلايد شو الاحترافي (Slideshow)
const slides = document.querySelectorAll('.slide');
const nextSlideBtn = document.getElementById('nextSlide');
const prevSlideBtn = document.getElementById('prevSlide');
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    
    slides[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

nextSlideBtn.addEventListener('click', () => {
    nextSlide();
    resetInterval();
});

prevSlideBtn.addEventListener('click', () => {
    prevSlide();
    resetInterval();
});

// التشغيل التلقائي للسلايدر كل 4 ثوانٍ
function startSlideShow() {
    slideInterval = setInterval(nextSlide, 4000);
}

function resetInterval() {
    clearInterval(slideInterval);
    startSlideShow();
}

startSlideShow();

// تفاعل بسيط لأزرار "أضف للسلة"
const cartButtons = document.querySelectorAll('.btn-cart');
const badge = document.querySelector('.badge');
let cartCount = 3;

cartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        badge.textContent = cartCount;
        
        // تأثير بصري بسيط عند الإضافة
        button.textContent = "تمت الإضافة ✓";
        button.style.backgroundColor = "#27ae60";
        
        setTimeout(() => {
            button.textContent = "أضف للسلة";
            button.style.backgroundColor = "#2c3e50";
        }, 1500);
    });
});
