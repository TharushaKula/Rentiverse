const form = document.getElementById("form");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const address = document.getElementById("address");
const city = document.getElementById("city");
const country = document.getElementById("country");
const zipCode = document.getElementById("zipCode");
const nameOnCard = document.getElementById("nameOnCard");
const creditCardNumber = document.getElementById("creditCardNumber");
const expMonth = document.getElementById("expMonth");
const expYear = document.getElementById("expYear");
const cvv = document.getElementById("cvv");
// const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  //get the value of the inputs
  const fullNameValue = fullName.value.trim(); //trim removes all the white space from the string
  const emailValue = email.value.trim();
  const addressValue = address.value.trim();
  const cityValue = city.value.trim();
  const countryValue = country.value.trim();
  const zipCodeValue = zipCode.value.trim();
  const nameOnCardValue = nameOnCard.value.trim();
  const creditCardNumberValue = creditCardNumber.value.trim();
  const expMonthValue = expMonth.value.trim();
  const expYearValue = expYear.value.trim();
  const cvvValue = cvv.value.trim();

  if (fullNameValue === "") {
    //show error
    //add error class
    setErrorFor(fullName, "Full Name cannot be empty");
  } else {
    //add success class
    setSuccessFor(fullName);
  }
  if (emailValue === "") {
    setErrorFor(email, "Email cannot be empty");
  } else {
    setSuccessFor(email);
  }
  if (addressValue === "") {
    setErrorFor(address, "Address cannot be empty");
  } else {
    setSuccessFor(address);
  }
  if (cityValue === "") {
    setErrorFor(city, "City cannot be empty");
  } else {
    setSuccessFor(city);
  }
  if (countryValue === "") {
    setErrorFor(country, "Country cannot be empty");
  } else {
    setSuccessFor(country);
  }
  if (zipCodeValue === "") {
    setErrorFor(zipCode, "Zip code cannot be empty");
  } else {
    setSuccessFor(zipCode);
  }
  if (nameOnCardValue === "") {
    setErrorFor(nameOnCard, "Name cannot be empty");
  } else {
    setSuccessFor(nameOnCard);
  }
  if (creditCardNumberValue === "") {
    setErrorFor(creditCardNumber, "Credit card number cannot be empty");
  } else {
    setSuccessFor(creditCardNumber);
  }
  if (expMonthValue === "") {
    setErrorFor(expMonth, "Exp month cannot be empty");
  } else {
    setSuccessFor(expMonth);
  }
  if (expYearValue === "") {
    setErrorFor(expYear, "Exp year cannot be empty");
  } else {
    setSuccessFor(expYear);
  }
  if (cvvValue === "") {
    setErrorFor(cvv, "CVV cannot be empty");
  } else {
    setSuccessFor(cvv);
  }
}

function setErrorFor(input, message) {
  const inputbox = input.parentElement;
  const p = inputbox.querySelector("p");

  //add error message inside p
  p.innerText = message;

  //add error class
  inputbox.className = "inputbox error";
}

function setSuccessFor(input) {
  const inputbox = input.parentElement;
  inputbox.className = "inputbox success";
}
// Get the button element
var backToTopButton = document.getElementById("back-to-top-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

// When the user clicks on the button, scroll to the top of the document
backToTopButton.onclick = function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

function printInvoice() {
  // Get values from input fields
  var fullName = document.getElementById("fullName").value;
  var email = document.getElementById("email").value;
  var address = document.getElementById("address").value;
  var city = document.getElementById("city").value;
  var country = document.getElementById("country").value;
  var zipCode = document.getElementById("zipCode").value;

  // Check if required fields are filled in
  if (!fullName || !email || !address || !city || !country || !zipCode) {
    alert("Please fill in all required fields before generating the invoice.");
    return;
  }

  // Generate invoice HTML
  var invoiceHTML =
    "<h1>Invoice</h1>" +
    '<img src="Images/Rentiverse logo.png">' +
    "<p><strong>Full Name:</strong> " +
    fullName +
    "</p>" +
    "<p><strong>Email:</strong> " +
    email +
    "</p>" +
    "<p><strong>Address:</strong> " +
    address +
    "</p>" +
    "<p><strong>City:</strong> " +
    city +
    "</p>" +
    "<p><strong>Country:</strong> " +
    country +
    "</p>" +
    "<p><strong>Zip Code:</strong> " +
    zipCode +
    "</p>";

  // Open a new window with the invoice HTML
  var newWindow = window.open("");
  newWindow.document.write(invoiceHTML);

  // Add embedded style sheet
  var style = newWindow.document.createElement("style");
  style.innerHTML = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');
    body {
      background: #ffffff;
      font-family: 'Poppins', sans-serif;
    }
    img {
      width:200px;
      align-items:centre;
      margin-left: 41rem;
    }
    h1 {
      color: #000000;
      font-size: 2.5rem;
      font-weight: bold;
      text-align: center;
      margin-bottom: 1rem;
    }
    p {
      color: #000000;
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
      text-align: center;

    }
    strong {
      font-weight: bold;
    }
  `;
  newWindow.document.head.appendChild(style);

  newWindow.print();
}

/* CART WINDOW OPEN AND CLOSE */

const cartIcon = document.getElementById('cart-icon');
const cartWindow = document.getElementById('cart-window');
const closeButton = document.getElementById('close-button');

cartIcon.addEventListener('click', function() {
  cartWindow.classList.toggle('open');
});

closeButton.addEventListener('click', function() {
  cartWindow.classList.remove('open');
});
document.addEventListener('click', function(event) {
  const target = event.target;
  const cartWindow = document.getElementById('cart-window');

  // Check if the clicked element is within the cart window or its associated elements
  if (!cartWindow.contains(target) && target !== cartIcon) {
    cartWindow.classList.remove('open');
  }
});

