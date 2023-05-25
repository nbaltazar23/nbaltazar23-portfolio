let projectForm = document.getElementById('contactme-form');

projectForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let firstName = document.getElementById('fname').value;
    console.log(firstName);

    let lastName = document.getElementById('lname').value;
    console.log(lastName);
    let email = document.getElementById('email').value;
    console.log(email);

    let description = document.getElementById('description').value;
    console.log(description);

    if (!firstName|| !lastName|| !email || !description) {
        alert("Please enter your name, email and a description of your project!");
    } else {
        alert("Your form has been successfully submitted! I will get back to you as soon as I can.");
        console.log(`${firstName} ${lastName} has submitted an interest form to include you in
        their project. Here is their email: ${email} and a brief description of their project: 
        ${description}.`);
    }
})