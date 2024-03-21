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
  
  // Handle "Add to Cart" button click event
  function addToCart() {
    // Validate input fields
    const numItems = document.querySelector('.p8 input').value;
    const bookingDate = document.querySelector('.p9 input').value;
    const returnDate = document.querySelector('.p10 input').value;
    const agreeCheckbox = document.querySelector('.p11 input');
  
    if (!numItems || !bookingDate || !returnDate || !agreeCheckbox.checked) {
        alert('Please fill in all the required fields.');
        return; // Prevent further execution
    }
    showPopup();
    
    //Methana wenas karanna
  const selectedItem = {
      imageSrc: 'Images/Home and Life Style/mop.png', // Example image source
      productName: 'Steam Mop Cleaner 10-in-1 with Convenient Detachable Handheld Unit', // Example product name
      price: 990, 
      numItems: numItems,
      bookingDate: bookingDate,
      returnDate: returnDate
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
  
  };
  
      // Set min attribute of date input fields to today's date
      const today = new Date();
      const bookingDateInput = document.getElementById('bookingDate');
      const returnDateInput = document.getElementById('returnDate');
  
      const formattedToday = today.toISOString().split('T')[0];
      bookingDateInput.min = formattedToday;
      returnDateInput.min = formattedToday;