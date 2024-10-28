
(function() {
    "use strict";

    document.addEventListener('DOMContentLoaded', function() {
        let forms = document.querySelectorAll('.php-email-form');

        forms.forEach(function(form) {
            form.addEventListener('submit', function(event) {
                // Don't prevent default - let Netlify handle the form
                
                // Show loading indicator
                let loading = form.querySelector('.loading');
                let sentMessage = form.querySelector('.sent-message');
                let errorMessage = form.querySelector('.error-message');
                
                if (loading) loading.classList.add('d-block');
                if (sentMessage) sentMessage.classList.remove('d-block');
                if (errorMessage) errorMessage.classList.remove('d-block');

                // Optional: Additional client-side validation
                let name = form.querySelector('#name').value.trim();
                let email = form.querySelector('#email').value.trim();
                let subject = form.querySelector('#subject').value.trim();
                let message = form.querySelector('[name="message"]').value.trim();

                if (!name || !email || !subject || !message) {
                    event.preventDefault();
                    displayError(form, "All fields are required.");
                    return;
                }

                if (!validateEmail(email)) {
                    event.preventDefault();
                    displayError(form, "Please enter a valid email address.");
                    return;
                }

                // If validation passes, the form will submit naturally to Netlify
            });
        });
    });

    function displayError(form, message) {
        form.querySelector('.loading').classList.remove('d-block');
        let errorMessage = form.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.innerHTML = message;
            errorMessage.classList.add('d-block');
        }
    }

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }
})();