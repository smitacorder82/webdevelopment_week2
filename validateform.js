<script>
function validateForm() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm_password").value;
    var email = document.getElementById("email").value;

    // Password strength check
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!password.match(passwordRegex)) {
        alert("Password must be at least 8 characters and include at least one uppercase letter, one lowercase letter, one number, and one special character.");
        return false;
    }

    // Email format validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
        alert("Invalid email format. Please enter a valid email address.");
        return false;
    }

    // Check if password and confirm_password match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }
}
</script>
