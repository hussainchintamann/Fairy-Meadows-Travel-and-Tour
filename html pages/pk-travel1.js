const pakistanPackages = [
    {
     heading1 :'World Wide Tours',
     text1 : 'Our goal is to make adventure travel accessible and stress-free for travelers',
     heading2:"Tour",
     text2:"Malam Jabba",
     heading3:"Jeep Trips",
     text3:"Experience the thrill of off-road adventures with our jeep trips. Explore the rugged terrains, valleys,and mountains with our experienced drivers and expert guides. Our jeep trips are designed to offer youan unforgettable experience of the natural beauty of Malam Jabba.",
     heading4:"Train Ticket Booking",
     text4:"At Fairy Meadows Travel And Tour, we understand the importance of convenience when it comes to traveling. We offertrain ticket booking services that are fast, reliable, and affordable. You can rest assured that youwill get the best deals on train fare to Swat when you book with us.",
    },
    {
      heading1 :'World Wide Tours',
      text1 : 'Our goal is to make adventure travel accessible and stress-free for travelers',
      heading2:"Tour",
      text2:"Shogran",
      heading3:"Jeep Trips",
      text3:"Experience the thrill of off-road adventures with our jeep trips. Explore the rugged terrains, valleys,and mountains with our experienced drivers and expert guides. Our jeep trips are designed to offer youan unforgettable experience of the natural beauty of Malam Jabba.",
      heading4:"Train Ticket Booking",
      text4:"At Fairy Meadows Travel And Tour, we understand the importance of convenience when it comes to traveling. We offertrain ticket booking services that are fast, reliable, and affordable. You can rest assured that youwill get the best deals on train fare to Swat when you book with us.",
     },
     {
      heading1 :'World Wide Tours',
      text1 : 'Our goal is to make adventure travel accessible and stress-free for travelers',
      heading2:"Tour",
      text2:"Hunza Skardu Gilgit",
      heading3:"Jeep Trips",
      text3:"Experience the thrill of off-road adventures with our jeep trips. Explore the rugged terrains, valleys,and mountains with our experienced drivers and expert guides. Our jeep trips are designed to offer youan unforgettable experience of the natural beauty of Malam Jabba.",
      heading4:"Train Ticket Booking",
      text4:"At Fairy Meadows Travel And Tour, we understand the importance of convenience when it comes to traveling. We offertrain ticket booking services that are fast, reliable, and affordable. You can rest assured that youwill get the best deals on train fare to Swat when you book with us.",
     },
     {
      heading1 :'World Wide Tours',
      text1 : 'Our goal is to make adventure travel accessible and stress-free for travelers',
      heading2:"Tour",
      text2:"Swat",
      heading3:"Jeep Trips",
      text3:"Experience the thrill of off-road adventures with our jeep trips. Explore the rugged terrains, valleys,and mountains with our experienced drivers and expert guides. Our jeep trips are designed to offer youan unforgettable experience of the natural beauty of Malam Jabba.",
      heading4:"Train Ticket Booking",
      text4:"At Fairy Meadows Travel And Tour, we understand the importance of convenience when it comes to traveling. We offertrain ticket booking services that are fast, reliable, and affordable. You can rest assured that youwill get the best deals on train fare to Swat when you book with us.",
     },
]


const displayCards = ()=>{

    const params = new URLSearchParams(document.location.search)
    const index = params.get ("index")

    if (index !== null && pakistanPackages[index])
    {
        const package = pakistanPackages[index]
        const cardDetailed = document.getElementById('cardDetailed');
        
        cardDetailed.innerHTML = `
        <div class="col-lg-6 col-sm-6">
          <div class="service-item rounded pt-3">
            <div class="p-4">
              <i class="fa-solid fa-3x text-primary   fa-globe  mb-4"></i>
              <h3>${package.heading1}</h3>
              <p>${package.text1}</p>
            </div>
          </div>
        </div>

        <div class="col-lg-6 col-sm-6">
          <div class="service-item rounded pt-3">
            <div class="p-4">
              <i class="fa-solid fa-person-walking-luggage  fa-4x text-primary mb-4 "></i>
              <h3> ${package.heading2} </h3>
              <p> ${package.text2}</p>

            </div>
          </div>
        </div>
        <div class="col-lg-6 col-sm-6">
          <div class="service-item rounded pt-3">
            <div class="p-4">
              <i class="fa-solid fa-car fa-3x text-primary   mb-4"></i>
              <h3> ${package.heading3}</h3>
              <p>${package.text3}</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-sm-6">
          <div class="service-item rounded pt-3">
            <div class="p-4">

              <i class=" fa-solid fa-train fa-3x text-primary    mb-4"></i>
              <h3>${package.heading4}</h3>
              <p>${package.text4}</p>
            </div>
          </div>
        </div>
        `
    }
    else {
        document.getElementById('cardDetailed').innerHTML `<p>Page Is not Found </p>`
    }
}

displayCards()