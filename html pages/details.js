// details.js

// Umrah package data array (same data as in scripts.js)
const umrahPackages = [
    {
        title: "Economy Umrah Package",
        price: "$900",
        duration: "7 Days",
        description: "A budget-friendly Umrah package with basic amenities.",
        imgSrc: "https://via.placeholder.com/300x200?text=Economy+Umrah",
        info: "7 days Umrah package including accommodation in a 3-star hotel, guided tours, and transport to holy sites.",
        button:"Book Now"
    },
    {
        title: "Standard Umrah Package",
        price: "$1300",
        duration: "10 Days",
        description: "A standard Umrah package offering a comfortable stay.",
        imgSrc: "https://via.placeholder.com/300x200?text=Standard+Umrah",
        info: "10 days Umrah package with 4-star accommodation, guided tours, transportation.",
         button:"Book Now"
    },
    {
        title: "Luxury Umrah Package",
        price: "$2500",
        duration: "14 Days",
        description: "Experience Umrah with luxury accommodation and services.",
        imgSrc: "https://via.placeholder.com/300x200?text=Luxury+Umrah",
        info: "14 days luxury Umrah package including 5-star accommodation, private transport, guided tours.",
         button:"Book Now"
    },
    {
        title: "Family Umrah Package",
        price: "$2000",
        duration: "12 Days",
        description: "Special Umrah package designed for families.",
        imgSrc: "https://via.placeholder.com/300x200?text=Family+Umrah",
        info: "12 days family-friendly Umrah package with accommodation, transport, and activities suitable for all ages.",
         button:"Book Now"
    },
    {
        title: "VIP Umrah Experience",
        price: "$5000",
        duration: "7 Days",
        description: "A premium Umrah package with personalized services.",
        imgSrc: "https://via.placeholder.com/300x200?text=VIP+Umrah",
        info: "7 days VIP Umrah experience with 5-star accommodation, private guides, exclusive tours, and luxury transport.",
         button:"Book Now"
    },
    {
        title: "VIP Umrah Experience",
        price: "$5000",
        duration: "7 Days",
        description: "A premium Umrah package with personalized services.",
        imgSrc: "https://via.placeholder.com/300x200?text=VIP+Umrah",
        info: "7 days VIP Umrah experience with 5-star accommodation, private guides, exclusive tours, and luxury transport.",
         button:"Book Now"
    }

    
];

// Function to display package details
function displayDetails() {
    const params = new URLSearchParams(document.location.search);
    const index = params.get("index");
    
    if (index !== null && umrahPackages[index]) {
        const package = umrahPackages[index];
        const detailsContainer = document.getElementById('detailsContainer');
        detailsContainer.innerHTML = `
       
            <div class="details-img">
                <img src="${package.imgSrc}" alt="${package.title}">
            </div>
            <div class="details-content">
                <h2>${package.title}</h2>
                
                <p><strong>Duration:</strong> ${package.duration}</p>
                <p>${package.info}</p>
                <p>${package.description}</p>
                 <a href="./booking.html"> <button class="btn btn-danger" id="showLogin">${package.button}</button></a>
            </div>
        `;
    } else {
        // Handle case where index is invalid or not found
        document.getElementById('detailsContainer').innerHTML = `<p>Package not found.</p>`;
    }
}

// Display the details when the page loads
displayDetails();


