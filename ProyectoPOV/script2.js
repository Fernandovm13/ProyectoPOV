document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('donationForm');
    const confirmationMessage = document.getElementById('confirmationMessage');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const amount = document.getElementById('amount').value;

        if (username && amount) {
            confirmationMessage.textContent = `Gracias, ${username}, por tu donación de $${amount} para plantar un árbol. Hemos enviado los detalles al correo electronico`;
            form.reset();
        } else {
            confirmationMessage.textContent = 'Por favor, complete todos los campos.';
        }
    });
});
