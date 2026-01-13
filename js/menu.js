document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            card.style.transition = '0.3s';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
        card.addEventListener('click', () => {
            const dishName = card.querySelector('h3').innerText;
            alert(`${dishName} добавлено в корзину!`);
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.querySelector('h3').innerText;
            

            card.style.backgroundColor = '#333';
            setTimeout(() => {
                card.style.backgroundColor = '#252525';
            }, 200);

            console.log(`Выбрано блюдо: ${title}`);
        
        });
    });
});