// scripts.js

// Umrah package data array
const umrahPackages = [
    {
        title: "Economy Umrah Package",
        price: "$900",
        duration: "7 Days",
        description: "A budget-friendly Umrah package with basic amenities.",
        imgSrc: "https://via.placeholder.com/300x200?text=Economy+Umrah",
        info: "7 days Umrah package including accommodation in a 3-star hotel, guided tours, and transport to holy sites."
    },
    {
        title: "Standard Umrah Package",
        price: "$1300",
        duration: "10 Days",
        description: "A standard Umrah package offering a comfortable stay.",
        imgSrc: "https://via.placeholder.com/300x200?text=Standard+Umrah",
        info: "10 days Umrah package with 4-star accommodation, guided tours, transportation, and meals included."
    },
    {
        title: "Luxury Umrah Package",
        price: "$2500",
        duration: "14 Days",
        description: "Experience Umrah with luxury accommodation and services.",
        imgSrc: "https://via.placeholder.com/300x200?text=Luxury+Umrah",
        info: "14 days luxury Umrah package including 5-star accommodation, private transport, guided tours, and gourmet meals."
    },
    {
        title: "Family Umrah Package",
        price: "$2000",
        duration: "12 Days",
        description: "Special Umrah package designed for families.",
        imgSrc: "https://via.placeholder.com/300x200?text=Family+Umrah",
        info: "12 days family-friendly Umrah package with accommodation, transport, and activities suitable for all ages."
    },
    {
        title: "VIP Umrah Experience",
        price: "$5000",
        duration: "7 Days",
        description: "A premium Umrah package with personalized services.",
        imgSrc: "https://via.placeholder.com/300x200?text=VIP+Umrah",
        info: "7 days VIP Umrah experience with 5-star accommodation, private guides, exclusive tours, and luxury transport."
    },
    {
        title: "VIP Umrah Experience",
        price: "$5000",
        duration: "7 Days",
        description: "A premium Umrah package with personalized services.",
        imgSrc: "https://via.placeholder.com/300x200?text=VIP+Umrah",
        info: "7 days VIP Umrah experience with 5-star accommodation, private guides, exclusive tours, and luxury transport."
    }
    
];

// Function to generate card HTML
function generateCardHTML(package, index) {
    return `
        <div class="card">
            <div class="card-content">
            <img src="${package.imgSrc}"/>
                <h3>${package.title}</h3>
                <button onclick="viewDetails(${index})">More Info</button>
            </div>
        </div>
    `;
}

// Function to display all cards
function displayCards() {
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = umrahPackages.map(generateCardHTML).join('');
}

// Function to navigate to details page with package index
function viewDetails(index) {
    // Navigate to details page with index as a query parameter
    window.location.href = `cardDetailed.html?index=${index}`;
}

// Display the cards when the page loads
displayCards();
