document.getElementById('bookNowButton').addEventListener('click', function() {
  // 1. Close the modal
  $('#signatureFacialModal').modal('hide');
  // 2. Trigger the booking modal (assuming you have a separate booking modal)
  $('#bookingModal').modal('show'); 
  // 3. You might want to pre-fill some fields in the booking modal with "Signature Facial"
});
