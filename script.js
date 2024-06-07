document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };

        try {
            const response = await fetch('https://aaaakkkooo.github.io/ako/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                alert('Сообщение отправлено!');
                contactForm.reset();
            } else {
                alert('Ошибка отправки сообщения.');
            }
        } catch (error) {
            alert('Ошибка: ' + error.message);
        }
    });
});
