document.addEventListener('DOMContentLoaded', () => {
    const heroBtn = document.querySelector('.btn');
    const heroTitle = document.querySelector('.hero h1');
    heroTitle.style.opacity = '0';
    heroTitle.style.transition = 'opacity 1.5s ease-in-out';
    
    setTimeout(() => {
        heroTitle.style.opacity = '1';
    }, 100);

    heroBtn.addEventListener('click', () => {
        console.log("Пользователь переходит в меню");
    });
});