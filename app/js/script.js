const form = document.getElementById('form');
const submitBtn = document.getElementById('submitBtn');
const dismissBtn = document.getElementById('dismissBtn');
const signup = document.getElementById('signup');
const confirmation = document.getElementById('confirmation');
const addressField = document.getElementById('address');

const error = document.getElementById('address-error');
const emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

dismissBtn.addEventListener('click', function () {
    form.reset();
    signup.style.display = 'flex';
    confirmation.style.display = 'none';

});

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const address = data.address.toString();

    if (!emailRegex.test(address)) {
        addressField.classList.add('error');
        error.style.display = 'block';
        submitBtn.disabled = true;
    } else {
        addressField.classList.remove('error');
        error.style.display = 'none';
        submitBtn.disabled = false;

        const email = document.getElementById('email');
        email.innerText = address;
        signup.style.display = 'none';
        confirmation.style.display = 'flex';
    }
});

addressField.addEventListener('input', function () {
    // Data Validation
    if (emailRegex.test(addressField.value)) {
        addressField.classList.remove('error');
        error.style.display = 'none';
        submitBtn.disabled= false;
    }
})