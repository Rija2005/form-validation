function validateForm(){
    let isValid = true;
    // Full Name Validation
    const naMe = document.getElementById('fname').value;
    const nameErr = document.getElementById('nameErr');
    nameErr.innerHTML = '';

if (naMe === '') {
    nameErr.innerHTML = '*Full Name is required.';
    isValid = false;
}
  // Phone Number Validation
  const phone = document.getElementById('fphone').value;
  const phoneErr = document.getElementById('phoneErr');
  const phoneRegex = /^[0-9]{10}$/; // Only allows 10 digits
  phoneErr.innerHTML = '';

  if (phone === '') {
      phoneErr.innerHTML = '*Phone number is required.';
      isValid = false;
  } else if (!phoneRegex.test(phone)) {
      phoneErr.innerHTML = '*Phone number must be exactly 10 digits.';
      isValid = false;
  }

      // Email Validation
      const email = document.getElementById('femail').value;
      const emailErr = document.getElementById('emailErr');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation
      emailErr.innerHTML = '';
  
      if (email === '') {
          emailErr.innerHTML = 'Email is required.';
          isValid = false;
      } else if (!emailRegex.test(email)) {
          emailErr.innerHTML = '*Please enter a valid email address.';
          isValid = false;
      }
 // Password Validation
 const password = document.getElementById('fpass').value;
 const passErr = document.getElementById('passErr');
 passErr.innerHTML = '';

 if (password === '') {
     passErr.innerHTML = '*Password is required.';
     isValid = false;
 } else if (password.length < 6) {
     passErr.innerHTML = '*Password must be at least 6 characters long.';
     isValid = false;
 }

 // Confirm Password Validation
 const confirmPassword = document.getElementById('fcpass').value;
 const cPassErr = document.getElementById('cPassErr');
 cPassErr.innerHTML = '';

 if (confirmPassword === '') {
     cPassErr.innerHTML = '*Please confirm your password.';
     isValid = false;
 } else if (password !== confirmPassword) {
     cPassErr.innerHTML = '*Passwords do not match.';
     isValid = false;
 }
    // Birth Date Validation
    const birthDate = document.getElementById('fdate').value;
    const dateErr = document.getElementById('dateErr');
    dateErr.innerHTML = '';

    if (birthDate === '') {
        dateErr.innerHTML = '*Birth Date is required.';
        isValid = false;
    }

    // Gender Validation
    const gender = document.getElementById('gender').value;
    const genderErr = document.getElementById('genderErr');
    genderErr.innerHTML = '';

    if (gender === '') {
        genderErr.innerHTML = '*Gender is required.';
        isValid = false;
    }

    // Return the overall validity of the form
    return isValid;
}

// Toggle Password Visibility
function togglePasswordVisibility(fieldId, toggleIconId) {
    const passwordField = document.getElementById(fieldId);
    const toggleIcon = document.getElementById(toggleIconId);

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    } else {
        passwordField.type = 'password';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    }
}
