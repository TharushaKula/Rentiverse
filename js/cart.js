document.addEventListener('DOMContentLoaded', () => {
    const cartItemsElement = document.getElementById('cart-items');
    const cartItemListElement = document.getElementById('cart-item-list');
    const checkoutButton = document.getElementById('checkoutButton');

    // Retrieve cart items from local storage
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    function updateCartItems() {
        cartItemListElement.innerHTML = ''; // Clear previous items
    
        if (cartItems.length > 0) {
            // Loop through the cart items and generate HTML for each item
            cartItems.forEach(item => {
                // Create HTML structure for cart item
                const itemElement = document.createElement('div');
                itemElement.classList.add('cart-item');
                itemElement.innerHTML = `
                    <div class="cart-item-image">
                        <img src="${item.imageSrc}" alt="${item.productName}">
                    </div>
                    <div class="cart-item-details">
                        <h3>${item.productName}</h3>
                        <div class="cart-item-details">
                            <p>Price: Rs ${item.price}</p>
                            ${
                                // Check if it's a product item
                                item.numItems ? `
                                    <p>Quantity: ${item.numItems}</p>
                                    <p>Booking Date: ${item.bookingDate}</p>
                                    <p>Return Date: ${item.returnDate}</p>
                                    <p>Total Price: Rs ${item.price * item.numItems * calculateNumDays(item.bookingDate, item.returnDate)}</p>
                                ` : ''
                            }
                        </div>
                        <i class="bi bi-trash3-fill trash-icon"></i>
                    </div>
                `;
    
                // Handle the trash icon click to remove the item
                const trashIcon = itemElement.querySelector('.trash-icon');
                trashIcon.addEventListener('click', () => {
                    // Find the index of the clicked item
                    const indexToRemove = cartItems.findIndex(cartItem => cartItem.productName === item.productName);
    
                    if (indexToRemove !== -1) {
                        // Remove the item from the cart items list
                        cartItems.splice(indexToRemove, 1);
                        localStorage.setItem('cartItems', JSON.stringify(cartItems));
                        // Update cart items display
                        updateCartItems();
                    }
                });
    
                cartItemListElement.appendChild(itemElement);
            });
    
            // Calculate and update the total price
        const totalProductPrice = cartItems
        .filter(item => item.numItems)
        .reduce((acc, item) => acc + (item.price * item.numItems * calculateNumDays(item.bookingDate, item.returnDate)), 0);

    const totalServicePrice = cartItems
        .filter(item => !item.numItems)
        .reduce((acc, item) => acc + item.price, 0);

    const totalPrice = totalProductPrice + totalServicePrice;

    const totalPriceSpan = document.getElementById('totalPriceSpan');
    totalPriceSpan.textContent = ` Rs ${totalPrice}`;

        } else {
            // Display empty cart image
            const emptyCartImage = new Image();
            emptyCartImage.src = 'Images/empty-cart.png';
            emptyCartImage.alt = 'Empty Cart';
            emptyCartImage.classList.add('empty-cart-image');
            cartItemsElement.appendChild(emptyCartImage);
    
            // Update total price to 0
            const totalPriceSpan = document.getElementById('totalPriceSpan');
            totalPriceSpan.textContent = ' Rs 0';
        }
    }
    

    updateCartItems(); // Initial update

    checkoutButton.addEventListener('click', (event) => {
        console.log('Checkout button clicked');
        
        if (cartItems.length === 0) {
            alert('Add items to the cart to proceed.');
            event.preventDefault(); // Prevent the default action (navigation)
            return; 
        }
    });

// Update the total price in the <span> element
const totalPriceSpan = document.getElementById('totalPriceSpan');
totalPriceSpan.textContent = ` Rs ${totalPrice}`;

});

// Function to calculate the number of days between two dates
function calculateNumDays(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const timeDiff = end - start;
    const numDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return numDays;
}

