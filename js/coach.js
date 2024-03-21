// Function to show the pop-up box
function showPopup() {
    const popupBox = document.getElementById('popupBox');
    popupBox.style.display = 'flex';

    // Close the popup when the close icon is clicked
    const closePopup = document.getElementById('closePopup');
    closePopup.addEventListener('click', () => {
        popupBox.style.display = 'none';
    });
}


function addToCart() {
    
    // Create an object for the selected item
    const selectedItem = {
        imageSrc: 'Images/train.png',
        productName: 'Professional Coaching',
        price: 20000
        // Add other details as needed
    };

     // Get the existing cart items from local storage
  const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  // Add the new item to the existing cart items
  existingCartItems.push(selectedItem);

  // Get the existing purchased items from local storage
  const existingPurchasedItems = JSON.parse(localStorage.getItem('purchasedItems')) || [];

  // Add the new item to the existing purchased items
  existingPurchasedItems.push(selectedItem);

  // Store the updated cart items back in local storage
  localStorage.setItem('cartItems', JSON.stringify(existingCartItems));

   // Store the updated purchased items back in local storage
   localStorage.setItem('purchasedItems', JSON.stringify(existingPurchasedItems));
   showPopup();

 
  };

