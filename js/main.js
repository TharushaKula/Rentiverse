let first = document.getElementById("first");
let last = document.getElementById("last");
let text1 = document.getElementById("text1");
let text2 = document.getElementById("text2");
let text3 = document.getElementById("text3");

window.addEventListener('scroll', function(){
    var value = window.scrollY;

    first.style.top = value * 0.7 + 'px';
    last.style.bottom = value * 0.5 + 'px';
    text1.style.top = value * 1 + 'px';
    text2.style.top = value * 0.8 + 'px';
    text3.style.top = value * 0.8 + 'px';

})




// Get the reference to the span element
const spanElement = document.querySelector('.words span');

// Define an array of words to rotate
const wordsArray = ['items.', 'services.', 'anything.'];

let currentWordIndex = 0;

// Function to update the inner HTML of the span with the next word
function rotateWords() {
    spanElement.textContent = wordsArray[currentWordIndex];
    currentWordIndex = (currentWordIndex + 1) % wordsArray.length;
}

var button = document.getElementById("items");

// Add a click event listener to the element
button.addEventListener("click", function() {
    // Redirect to another HTML page
    window.location.href = "itemForm.html";
});

var button = document.getElementById("services");

// Add a click event listener to the element
button.addEventListener("click", function() {
    // Redirect to another HTML page
    window.location.href = "serviceForm.html";
});


// Initial call to rotateWords
rotateWords();

// Set up the interval to change words every 2 seconds
setInterval(rotateWords, 2000);



ScrollReveal({
    distance: '60px',
    duration: 2000,
    delay: 400
});

ScrollReveal().reveal('.paragraphs-1, .paragraphs-2, .brand-section, .testimonial', { delay: 500 });
ScrollReveal().reveal('.main-3', { delay: 800, origin: 'right' });        
ScrollReveal().reveal('.main-4', { delay: 500, origin: 'left'  });
ScrollReveal().reveal('.middle-bar,.categories-items-heading', { delay: 500  });  
ScrollReveal().reveal('.middle-bar-1', { delay: 700  }); 
ScrollReveal().reveal('.middle-bar-2', { delay: 900  });
ScrollReveal().reveal('.middle-bar-3', { delay: 1000  }); 
ScrollReveal().reveal('.middle-bar-4', { delay: 1100  });   
ScrollReveal().reveal('#card1', { delay: 600  }); 
ScrollReveal().reveal('#card2', { delay: 800  }); 
ScrollReveal().reveal('#card3', { delay: 900  }); 
ScrollReveal().reveal('#card4', { delay: 1000  }); 
ScrollReveal().reveal('#card5', { delay: 1100  }); 
ScrollReveal().reveal('#card6', { delay: 1200  }); 
ScrollReveal().reveal('#card7', { delay: 1300  }); 
ScrollReveal().reveal('#card8', { delay: 1400  }); 


