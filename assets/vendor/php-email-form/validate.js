(function() {
    "use strict";

    let forms = document.querySelectorAll('.php-email-form');

    forms.forEach(function(form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            // Show loading indicator
            form.querySelector('.loading').classList.add('d-block');
            form.querySelector('.sent-message').classList.remove('d-block');
            form.querySelector('.error-message').classList.remove('d-block');

            // Validate fields
            let name = form.querySelector('#name').value.trim();
            let email = form.querySelector('#email').value.trim();
            let subject = form.querySelector('#subject').value.trim();
            let message = form.querySelector('[name="message"]').value.trim();

            if (!name || !email || !subject || !message) {
                displayError(form, "All fields are required.");
                return;
            }

            if (!validateEmail(email)) {
                displayError(form, "Please enter a valid email address.");
                return;
            }

            // Simulate Netlify form submission
            form.submit();  // Netlify will handle the submission process
        });
    });

    function displayError(form, message) {
        form.querySelector('.loading').classList.remove('d-block');
        let errorMessage = form.querySelector('.error-message');
        errorMessage.innerHTML = message;
        errorMessage.classList.add('d-block');
    }

    function displaySuccess(form) {
        form.querySelector('.loading').classList.remove('d-block');
        form.querySelector('.sent-message').classList.add('d-block');
        form.reset();
    }

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }
})();
