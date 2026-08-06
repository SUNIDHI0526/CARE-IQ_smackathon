/* ==========================================
   CAREIQ Login JavaScript
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const loginForm = document.querySelector("form");
    const passwordInput = document.getElementById("password");
    const togglePassword = document.getElementById("togglePassword");
    const loginButton = document.querySelector(".login-btn");

    /* ==========================================
       Show / Hide Password
    ========================================== */

    togglePassword.addEventListener("click", () => {

        if(passwordInput.type === "password"){

            passwordInput.type = "text";

            togglePassword.classList.remove("fa-eye");

            togglePassword.classList.add("fa-eye-slash");

        }

        else{

            passwordInput.type = "password";

            togglePassword.classList.remove("fa-eye-slash");

            togglePassword.classList.add("fa-eye");

        }

    });

    /* ==========================================
       Login Validation
    ========================================== */

    loginForm.addEventListener("submit", function(e){

        e.preventDefault();

        const email = document.querySelector("input[type='email']").value.trim();

        const password = passwordInput.value.trim();

        if(email === ""){

            alert("Please enter your email.");

            return;

        }

        if(!validateEmail(email)){

            alert("Please enter a valid email address.");

            return;

        }

        if(password === ""){

            alert("Please enter your password.");

            return;

        }

        if(password.length < 6){

            alert("Password must contain at least 6 characters.");

            return;

        }

        loginButton.disabled = true;

        loginButton.innerHTML = "Logging In...";

        setTimeout(() => {

            window.location.href = "dashboard.html";

        },1500);

    });

});

/* ==========================================
   Email Validation
========================================== */

function validateEmail(email){

    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    return pattern.test(email);

}