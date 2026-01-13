document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = form.querySelector('input').value;
        const message = form.querySelector('textarea').value;

        if (name.length < 2) {
            alert("Пожалуйста, введите корректное имя.");
            return;
        }

        if (message.length < 5) {
            alert("Сообщение слишком короткое.");
            return;
        }

        alert(`Спасибо, ${name}! Ваше сообщение отправлено.`);
        form.reset();
    });
});