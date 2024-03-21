document.addEventListener('DOMContentLoaded', () => {
    const userForm = document.getElementById('userForm');
    const submitButton = document.getElementById('submit-btn');

    submitButton.addEventListener('click', (event) => {
        event.preventDefault();

        const firstName = document.getElementById('fname').value;
        const lastName = document.getElementById('lname').value;

        const userDetails = {
            firstName: firstName,
            lastName: lastName,
        };

        // Store user details in local storage
        localStorage.setItem('userDetails', JSON.stringify(userDetails));

    });
});
