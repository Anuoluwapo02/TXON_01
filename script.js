
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    try {
        const response = await fetch('/send-message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
        });

        console.log('Server status:', response.status);

        const result = await response.json();

        console.log('Server response:', result);

        document.getElementById('response').textContent = result.message;

        if (result.success) {
            contactForm.reset();
        }

    } catch (error) {
        console.error('Connection error:', error);

        document.getElementById('response').textContent =
            'Connection failed. Check the server and try again.';
    }
});
