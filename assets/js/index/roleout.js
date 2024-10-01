const roles = [
    'Odoo Database Migration Expert',
    'Odoo Data Migration Specialist',
    'Odoo Functional Consultant',
    'Odoo Integration Specialist',
    'Odoo Customization Expert'
];

let index = 0;
const dynamicText = document.querySelector('#dynamic-text');
function roleOut() {
    // Fade out the current text
    dynamicText.style.opacity = 0;
    
    setTimeout(() => {
        // Change the text after fade-out is done
        dynamicText.textContent = roles[index];
        
        // Fade the new text in
        dynamicText.style.opacity = 1;
        
        // Move to the next role in the list, or reset to the first one
        index = (index + 1) % roles.length;
    }, 500); // This delay should match the CSS transition time
}

// Start the text rotation with an interval of 2 seconds
setInterval(roleOut, 2000);

// Initialize with the first role
roleOut();


/*
Dynami Carousel
*/

// const carousel = document.getElementById('carousel');
// const cardsData = [
//     '<i class="fas fa-shopping-cart"></i>'
// , 'Card 2', 'Card 3', 'Card 4', 'Card 5', 
//     'Card 6', 'Card 7', 'Card 8', 'Card 9', 'Card 10'
// ];

// // Function to create and add cards to the carousel
// function createCards(cards) {    
//     cards.forEach(card => {
//         const cardElement = document.createElement('div');
//         cardElement.classList.add('card');
//         cardElement.textContent = card;
//         carousel.appendChild(cardElement);
//     });
// }

// // Create the initial set of cards
// createCards(cardsData);

// // Duplicate cards for infinite scroll effect
// createCards(cardsData);

