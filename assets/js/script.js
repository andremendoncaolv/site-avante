document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const data = {
        name: name,
        email: email,
        message: message
    };

    fetch('sendEmail.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Mensagem enviada com sucesso!');
            document.getElementById('contactForm').reset();
        } else {
            alert('Erro ao enviar a mensagem.');
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao enviar a mensagem.');
    });
});
