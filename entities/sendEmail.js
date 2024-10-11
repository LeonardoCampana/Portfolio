const contactForm = document.getElementById('contactForm')
const script = document.createElement('script');

contactForm.addEventListener('submit', (ev) =>{
    ev.preventDefault()

    let params = {
        fullname: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    }

    emailjs.send('service_e32w0km', 'template_ogmrsmr', params)
    .then(function(response) {
        console.log('Sucesso!', response.status, response.text);
        alert("mensagem enviada com sucesso")

        document.getElementById('fullName').value = ''
        document.getElementById('email').value = ''
        document.getElementById('message').value = ''
    }, function(error) {
        console.error('Falha no envio...', error);
        alert("Erro ao enviar mensagem")
    });
})

script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
script.type = "text/javascript";
document.head.appendChild(script);

script.onload = function() {
    emailjs.init({
        publicKey: "pGb2uuYVADzrCmmFu",
    });
};