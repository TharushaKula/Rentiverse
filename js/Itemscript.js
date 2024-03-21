document.getElementById("userForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  const imageUpload = document.getElementById("imageUpload").value;
  const titleBox = document.getElementById("titleBox").value;
  const categoryBox = document.getElementById("categoryBox").value;
  const sizeBox = document.getElementById("sizeBox").value;
  const brandBox = document.getElementById("brandBox").value;
  const themeBox = document.getElementById("themeBox").value;
  const countryBox = document.getElementById("countryBox").value;
  const materialBox = document.getElementById("materialBox").value;
  const conditionBox = document.getElementById("conditionBox").value;
  const desBox = document.getElementById("desBox").value;
  const priceBox = document.getElementById("priceBox").value;
  const quantityBox = document.getElementById("quantityBox").value;
  const provinceBox = document.getElementById("provinceBox").value;
  const districtBox = document.getElementById("districtBox").value;
  const cityBox = document.getElementById("cityBox").value;
  const addressBox = document.getElementById("addressBox").value;

  // Save data to localStorage (or backend server)
  localStorage.setItem("imageUpload", imageUpload);
  localStorage.setItem("titleBox", titleBox);
  localStorage.setItem("categoryBox", categoryBox);
  localStorage.setItem("sizeBox", sizeBox);
  localStorage.setItem("brandBox", brandBox);
  localStorage.setItem("themeBox", themeBox);
  localStorage.setItem("countryBox", countryBox);
  localStorage.setItem("materialBox", materialBox);
  localStorage.setItem("conditionBox", conditionBox);
  localStorage.setItem("desBox", desBox);
  localStorage.setItem("priceBox", priceBox);
  localStorage.setItem("quantityBox", quantityBox);
  localStorage.setItem("provinceBox", provinceBox);
  localStorage.setItem("districtBox", districtBox);
  localStorage.setItem("cityBox", cityBox);
  localStorage.setItem("addressBox", addressBox);

  // Redirect to the profile page
  window.location.href = "Itemprofile.html";
});
