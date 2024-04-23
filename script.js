function ageCalculate() {
  var birthdate = new Date(document.getElementById('date-input').value);
  var now = new Date();

  if (birthdate > now) {
    Toastify({
      text: "Please enter a valid birthdate",
      duration: 2000, // 3 seconds
      // close: true,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      backgroundColor: "linear-gradient(to right, #ff416c, #ff4b2b)",
    }).showToast();
    return; // Exit the function early
  }
  var ageInMilliseconds = now - birthdate;
  var ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
  var ageInMonths = Math.floor((ageInMilliseconds % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * (365.25 / 12)));
  var ageInDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));
  
  document.getElementById('years').innerText = ageInYears;
  document.getElementById('months').innerText = ageInMonths;
  document.getElementById('days').innerText = ageInDays;
}
