document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Verificar si el reCAPTCHA fue completado
        const recaptchaResponse = grecaptcha.getResponse();
        
        if (!recaptchaResponse) {
            alert('Por favor, verifica el reCAPTCHA.');
            return;
        }

        // Obtener valores del formulario
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;
        const consulta = document.getElementById('consulta').value;

        // Crear mensaje para WhatsApp
        const mensaje = `Hola, soy ${nombre} ${apellido}. 
Email: ${email}
Teléfono: ${telefono}
Consulta: ${consulta}`;

        // Redirigir a WhatsApp
        const whatsappLink = `https://wa.me/5492634405810?text=${encodeURIComponent(mensaje)}`;
        window.open(whatsappLink, '_blank');

        // Limpiar formulario
        contactForm.reset();
        grecaptcha.reset();

        // Mostrar confirmación
        alert('Formulario enviado. Se abrirá WhatsApp para continuar con tu consulta.');
    });
});