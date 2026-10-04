const loginForm = document.getElementById("loginForm");

const message = document.getElementById("message");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const username =
        document.getElementById("username").value;

    const password =
        document.getElementById("password").value;

    if (username === "admin" && password === "admin123") {

        message.innerHTML = `
            <div class="success">
                ✓ Login Successful!<br>
                Welcome, Admin.
            </div>
        `;

        loginForm.reset();

    } else {

        message.innerHTML = `
            <div class="error">
                ✕ Invalid username or password.
            </div>
        `;

    }

});


function togglePassword() {

    const password =
        document.getElementById("password");

    if (password.type === "password") {

        password.type = "text";

    } else {

        password.type = "password";

    }

}


function forgotPassword() {

    document.getElementById("message").innerHTML = `
        <div class="success">
            Password reset instructions will be sent
            to the registered email.
        </div>
    `;

}
