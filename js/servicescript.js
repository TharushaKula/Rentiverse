document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    const imageUploadServices = document.getElementById("imageUpload-services").value;
    const serviceBoxServices = document.getElementById("serviceBox-services").value;
    const categoryBoxServices = document.getElementById("categoryBox-services").value;
    const experienceBoxServices = document.getElementById("experienceBox-services").value;
    const qualificationBoxServices = document.getElementById("qualificationBox-services").value;
    const desBoxServices = document.getElementById("desBox-services").value;
    const priceBoxServices = document.getElementById("priceBox-services").value;
    const provinceBoxServices = document.getElementById("provinceBox-services").value;
    const districtBoxServices = document.getElementById("districtBox-services").value;
    const cityBoxServices = document.getElementById("cityBox-services").value;
    const addressBoxServices = document.getElementById("addressBox-services").value;
  
    // Save data to localStorage (or backend server)
    localStorage.setItem("imageUpload-services", imageUploadServices);
    localStorage.setItem("serviceBox-services", serviceBoxServices);
    localStorage.setItem("categoryBox-services", categoryBoxServices);
    localStorage.setItem("experienceBox-services", experienceBoxServices);
    localStorage.setItem("qualificationBox-services", qualificationBoxServices);
    localStorage.setItem("desBox-services", desBoxServices);
    localStorage.setItem("priceBox-services", priceBoxServices);
    localStorage.setItem("provinceBox-services", provinceBoxServices);
    localStorage.setItem("districtBox-services", districtBoxServices);
    localStorage.setItem("cityBox-services", cityBoxServices);
    localStorage.setItem("addressBox-services", addressBoxServices);
  
    // Redirect to the profile page
    window.location.href = "serviceprofile.html";
  });
  