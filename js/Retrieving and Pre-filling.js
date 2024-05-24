document.addEventListener('DOMContentLoaded', function() {
  const name = localStorage.getItem('bookingName');
  const email = localStorage.getItem('bookingEmail');
  // ... other form fields

  if (name) {
    document.getElementById('name').value = name;
  }
  if (email) {
    document.getElementById('email').value = email;
  }
  // ... pre-fill other form fields
});
