(function() {
    "use strict";
    
    let forms = document.querySelectorAll('.php-email-form');

    forms.forEach(function(e) {
        e.addEventListener('submit', function(event) {
            event.preventDefault();
            let thisForm = this;
// Skip action validation if using Netlify
if (!thisForm.getAttribute('action') && !thisForm.hasAttribute('data-netlify')) {
    displayError(thisForm, 'The form action property is not set!');
    return;
}           
            thisForm.querySelector('.loading').classList.add('d-block');
            thisForm.querySelector('.error-message').classList.remove('d-block');
            thisForm.querySelector('.sent-message').classList.remove('d-block');
            
            thisForm.submit();
        });
    });

    function displayError(thisForm, error) {
        thisForm.querySelector('.loading').classList.remove('d-block');
        thisForm.querySelector('.error-message').innerHTML = error;
        thisForm.querySelector('.error-message').classList.add('d-block');
    }

})();
