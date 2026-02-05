document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(e) {
        // Verificar si el reCAPTCHA fue completado
        const recaptchaResponse = grecaptcha.getResponse();
        
        if (!recaptchaResponse) {
            e.preventDefault();
            alert('Por favor, verifica el reCAPTCHA.');
            return;
        }

        // Si reCAPTCHA está verificado, permitir que FormSubmit procese el formulario
        // El formulario será enviado a través del atributo action de FormSubmit
    });

    // Manejar la respuesta después de envío (opcional)
    contactForm.addEventListener('submit', function(e) {
        setTimeout(() => {
            alert('Consulta enviada exitosamente. Te contactaremos pronto.');
            contactForm.reset();
            grecaptcha.reset();
        }, 100);
    });
});