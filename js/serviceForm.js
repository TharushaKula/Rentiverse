// Retrieve data from localStorage
const storedImage = localStorage.getItem("imageUpload-services");
const storedTitle = localStorage.getItem("serviceBox-services");
const storedCategory = localStorage.getItem("categoryBox-services");
const storedExperience = localStorage.getItem("experienceBox-services");
const storedQualification = localStorage.getItem("qualificationBox-services");
const storedDescription = localStorage.getItem("desBox-services");
const storedPrice = localStorage.getItem("priceBox-services");
const storedProvince = localStorage.getItem("provinceBox-services");
const storedDistrict = localStorage.getItem("districtBox-services");
const storedCity = localStorage.getItem("cityBox-services");
const storedAddress = localStorage.getItem("addressBox-services");

// Set retrieved data to corresponding span elements
document.getElementById("displayTITLE").textContent = storedTitle;
document.getElementById("displayCATEGORY").textContent = storedCategory;
document.getElementById("displayExperience").textContent = storedExperience;
document.getElementById("displayQualification").textContent = storedQualification;
document.getElementById("displayDescription").textContent = storedDescription;
document.getElementById("displayPrice").textContent = storedPrice;
document.getElementById("displayProvince").textContent = storedProvince;
document.getElementById("displayDistrict").textContent = storedDistrict;
document.getElementById("displayCity").textContent = storedCity;
document.getElementById("displayAddress").textContent = storedAddress;
