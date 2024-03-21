        function showPage(page, selectedButton) {
            hideAllPages();
            page.style.display = 'block';
            
            // Remove the style from all menu buttons
            const menuButtons = document.querySelectorAll('.menu-buttons');
            menuButtons.forEach(button => {
                button.style.color = '';
            });
    
            // Apply the style to the selected button
            selectedButton.style.color = 'rgba(0, 0, 0, 0.44)';
        }
    
        const myItemsButton = document.querySelector('.myItems-button');
        const myServicesButton = document.querySelector('.myServices-button');
        const myItemsPage = document.querySelector('.myAccount-page2');
        const myServicesPage = document.querySelector('.myAccount-page3');
    
        myItemsButton.addEventListener('click', () => {
            showPage(myItemsPage, myItemsButton);
        });
    
        myServicesButton.addEventListener('click', () => {
            showPage(myServicesPage, myServicesButton);
        });
    
        const profileButton = document.getElementById('profile-menuButton');
        const myRentalsButton = document.getElementById('myRentals-menuButton');
        const myOfferingsButton = document.getElementById('myOfferings-menuButton');
        const myBookingsButton = document.getElementById('myBookings-menuButton');
        const messagesButton = document.getElementById('messages-menuButton');
        const myEarningsButton = document.getElementById('myEarnings-menuButton');
        
        const profilePage = document.querySelector('.myAccount-page1');
        const myRentalsPage = document.querySelector('.myAccount-page4');
        const myOfferingsPage = document.querySelector('.myAccount-page2');
        const myBookingsPage = document.querySelector('.myAccount-page5');
        const messagesPage = document.querySelector('.myAccount-page6');
        const myEarningsPage = document.querySelector('.myAccount-page7');
        const myServicesPagedemo = document.querySelector('.myAccount-page3');

        
        function hideAllPages() {
            profilePage.style.display = 'none';
            myRentalsPage.style.display = 'none';
            myOfferingsPage.style.display = 'none';
            messagesPage.style.display = 'none';
            myEarningsPage.style.display = 'none';
            myBookingsPage.style.display = 'none';
            myServicesPagedemo.style.display = 'none';

        }
    
        profileButton.addEventListener('click', () => {
            showPage(profilePage, profileButton);
        });
    
        myRentalsButton.addEventListener('click', () => {
            showPage(myRentalsPage, myRentalsButton);
        });
    
        myOfferingsButton.addEventListener('click', () => {
            showPage(myOfferingsPage, myOfferingsButton);
        });
    
        myBookingsButton.addEventListener('click', () => {
            showPage(myBookingsPage, myBookingsButton);
        });
    
        messagesButton.addEventListener('click', () => {
            showPage(messagesPage, messagesButton);
        });
    
        myEarningsButton.addEventListener('click', () => {
            showPage(myEarningsPage, myEarningsButton);
        });
    
        // Initialize the color for the initial selected button (e.g., Profile)
        profileButton.style.color = 'rgba(0, 0, 0, 0.44)';

        document.addEventListener('DOMContentLoaded', () => {
            // Retrieve user details from local storage
            const userDetails = JSON.parse(localStorage.getItem('userDetails'));
        
            // Update the user details on the display page
            const userFullNameElement = document.getElementById('userFullName');
            userFullNameElement.textContent = `${userDetails.firstName} ${userDetails.lastName}`;
        });
        


        document.addEventListener('DOMContentLoaded', () => {
            const purchasedItemsElement = document.getElementById('myPurchasedItems');
        
            // Retrieve purchased items from local storage
            let purchasedItems = JSON.parse(localStorage.getItem('purchasedItems')) || [];
        
            function updatePurchasedItems() {
                purchasedItemsElement.innerHTML = ''; // Clear previous items
        
                if (purchasedItems.length > 0) {
                    // Loop through the purchased items and generate HTML for each item
                    purchasedItems.forEach((item, index) => {
                        // Create HTML structure for purchased item
                        const itemElement = document.createElement('div');
                        itemElement.classList.add('myOfferings-product1-next'); // Use the correct class name
                        itemElement.innerHTML = `
                            <img src="${item.imageSrc}" class="myOfferings-product-next"> 
                            <button class="myRentals-button-next">Rent Again</button>
                            <p class="p1-next">${item.productName}</p> 
                            <p class="p2" style="color: rgb(37, 196, 37);">Available Now</p>
                            <button class="close-button-next" data-index="${index}">Close</button>
                            <br><br><br>
                            <hr class="hr-next">
                            <p class="p5-next" style="margin-left: 500px;"><u>Contact rentee</u></p>
                        `;
        
                        // Handle the close button click to remove the purchased item
                        const closeButton = itemElement.querySelector('.close-button-next');
                        closeButton.addEventListener('click', () => {
                            purchasedItems.splice(index, 1);
                            localStorage.setItem('purchasedItems', JSON.stringify(purchasedItems));
                            updatePurchasedItems();
                        });
        
                        purchasedItemsElement.appendChild(itemElement);
                    });
                }
            }
        
            updatePurchasedItems(); // Initial update
        });


        //my offerings - items
        document.addEventListener("DOMContentLoaded", function() {
            const myOfferingsContainer = document.querySelector(".myOfferings-container");
        
            // Retrieve user-added item details from localStorage
            const imageUpload = localStorage.getItem("imageUpload");
            const titleBox = localStorage.getItem("titleBox");
            const priceBox = localStorage.getItem("priceBox");
            const desBox = localStorage.getItem("desBox");
        
            // Create and populate the user-added item element
            const userAddedItemElement = document.createElement('div');
            userAddedItemElement.classList.add('myOfferings-product1-myRentals');
            userAddedItemElement.innerHTML = `
                <img src="${imageUpload}" class="myOfferings-product-myRentals">
                <p class="p1-myRentals" >${titleBox}</p>
                <p class="p2-myRentals">Price:</p><p class="p3-myRentals">Rs ${priceBox}</p>
                <p class="p4-myRentals">${desBox}</p>
                <hr class="hr-myRentals">
                <p class="p5-myRentals">Edit price</p>
                <p class="p6-myRentals">Edit description</p>
                <div class="icon-container">
                    <i class="bi bi-pencil-square icon"></i>
                    <i class="bi bi-share icon"></i>
                    <i class="bi bi-three-dots-vertical icon"></i>
                </div>
            `;
        
            // Append the user-added item element to the myOfferingsContainer
            myOfferingsContainer.appendChild(userAddedItemElement);
        });
                
        //my offerings - services
        document.addEventListener("DOMContentLoaded", function() {
            const myServicesContainer = document.getElementById("myServices-container");
        
            // Retrieve user-added service item details from localStorage
            const imageUploadServices = localStorage.getItem("imageUpload-services"); // Updated key name
            const serviceBoxServices = localStorage.getItem("serviceBox-services");
            const priceBoxServices = localStorage.getItem("priceBox-services");
            const desBoxServices = localStorage.getItem("desBox-services");
        
            // Create and populate the user-added service item element
            const userAddedServiceElement = document.createElement('div');
            userAddedServiceElement.classList.add('myOfferings-product1');
            userAddedServiceElement.innerHTML = `
                <img src="${imageUploadServices}" class="myOfferings-product-myRentals">
                <p class="p1-myRentals">${serviceBoxServices}</p>
                <p class="p2-myRentals">Price:</p><p class="p3-myRentals">Rs ${priceBoxServices}</p>
                <p class="p4-myRentals">${desBoxServices}</p>
                <hr class="hr-myRentals">
                <p class="p5-myRentals">Edit price</p>
                <p class="p6-myRentals">Edit description</p>
                <div class="icon-container">
                    <i class="bi bi-pencil-square icon"></i>
                    <i class="bi bi-share icon"></i>
                    <i class="bi bi-three-dots-vertical icon"></i>
                </div>
            `;
        
            // Append the user-added service item element to the myServicesContainer
            myServicesContainer.appendChild(userAddedServiceElement);
        });
        
        

        
        