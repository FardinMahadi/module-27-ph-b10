document
  .getElementById("button-login")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("login button clicked");

    const phoneNumber = document.getElementById("phone-number");
    console.log(phoneNumber);
  });
