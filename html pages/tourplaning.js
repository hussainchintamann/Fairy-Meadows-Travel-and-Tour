const worldPackage = [
    {
        heading1 :'World Wide Tours',
        text1 : 'Our goal is to make adventure travel accessible and stress-free for travelers',
        heading2:"Hotel Reservation",
        text2:"4 Star Hotels,Complementary Water Bottles ,Double/Twin Beddings",
        heading3:"Travel Guides",
        text3:" Pre Travel Guidelines,Fairy Mewdows Travel And Tour 24/7 Assistance",
        heading4:"VISA DETAILS",
        text4:"Baku Azerbaijan Visa",
        heading5:"Transport",
        text5:"Comfortable and reliable transport services throughout your journey.",
        heading6:"Flight",
        text6:"All Flights Available",
       },
       {
        heading1 :'World Wide Tours',
        text1 : 'Our goal is to make adventure travel accessible and stress-free for travelers',
        heading2:"Hotel Reservation",
        text2:"4 Star Hotels,Complementary Water Bottles ,Double/Twin Beddings",
        heading3:"Travel Guides",
        text3:" Pre Travel Guidelines,Fairy Mewdows Travel And Tour 24/7 Assistance",
        heading4:"VISA DETAILS",
        text4:"Maldives Visa On Arrival",
        heading5:"Transport",
        text5:"Comfortable and reliable transport services throughout your journey.",
        heading6:"Flight",
        text6:"All Flights Available",
        
       },
       {
        heading1 :'World Wide Tours',
        text1 : 'Our goal is to make adventure travel accessible and stress-free for travelers',
        heading2:"Hotel Reservation",
        text2:"4 Star Hotels,Complementary Water Bottles ,Double/Twin Beddings",
        heading3:"Travel Guides",
        text3:" Pre Travel Guidelines,Fairy Mewdows Travel And Tour 24/7 Assistance",
        heading4:"VISA DETAILS",
        text4:"Malaysia Visa",
        heading5:"Transport",
        text5:"Comfortable and reliable transport services throughout your journey.",
        heading6:"Flight",
        text6:"All Flights Available",
       },
       {
        heading1 :'World Wide Tours',
        text1 : 'Our goal is to make adventure travel accessible and stress-free for travelers',
        heading2:"Hotel Reservation",
        text2:"4 Star Hotels,Complementary Water Bottles ,Double/Twin Beddings",
        heading3:"Travel Guides",
        text3:" Pre Travel Guidelines,Fairy Mewdows Travel And Tour 24/7 Assistance",
        heading4:"VISA DETAILS",
        text4:"Egypt Visa",
        heading5:"Transport",
        text5:"Comfortable and reliable transport services throughout your journey.",
        heading6:"Flight",
        text6:"All Flights Available",
       },
       {
        heading1 :'World Wide Tours',
        text1 : 'Our goal is to make adventure travel accessible and stress-free for travelers',
        heading2:"Hotel Reservation",
        text2:"4 Star Hotels,Complementary Water Bottles ,Double/Twin Beddings",
        heading3:"Travel Guides",
        text3:" Pre Travel Guidelines,Fairy Mewdows Travel And Tour 24/7 Assistance",
        heading4:"VISA DETAILS",
        text4:"Singapore Visa",
        heading5:"Transport",
        text5:"Comfortable and reliable transport services throughout your journey.",
        heading6:"Flight",
        text6:"All Flights Available",
       },
       {
        heading1 :'World Wide Tours',
        text1 : 'Our goal is to make adventure travel accessible and stress-free for travelers',
        heading2:"Hotel Reservation",
        text2:"4 Star Hotels,Complementary Water Bottles ,Double/Twin Beddings",
        heading3:"Travel Guides",
        text3:" Pre Travel Guidelines,Fairy Mewdows Travel And Tour 24/7 Assistance",
        heading4:"VISA DETAILS",
        text4:"Thailand Visa",
        heading5:"Transport",
        text5:"Comfortable and reliable transport services throughout your journey.",
        heading6:"Flight",
        text6:"All Flights Available",
       },
]

const displayCardss = ()=>{
    const params = new URLSearchParams(document.location.search)
    const index = params.get ("index")
    if (index !== null && worldPackage[index])
    {
        const package = worldPackage[index]
        const cardDetailed1 = document.getElementById('cardDetailed1')
        cardDetailed1.innerHTML = `
         <div class="col-lg-4 col-sm-6">
          <div class="service-item rounded pt-3">
            <div class="p-4">
              <i class="fa-solid fa-3x  fa-globe text-primary mb-4"></i>
              <h3>${package.heading1}</h3>
              <p>
              ${package.text1}
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="service-item rounded pt-3">
            <div class="p-4 ">
              <i class="fa-solid fa-3x fa-hotel text-primary mb-4"></i>
              <h3>${package.heading2}</h3>
              <p>${package.text2}</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="service-item rounded pt-3">
            <div class="p-4">
              <i class="fa-solid fa-3x  fa-user text-primary mb-4"></i>
              <h3>${package.heading3}</h3>
              <p>${package.text3}</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="service-item rounded pt-3">
            <div class="p-4">
              <i class="fa-brands fa-cc-visa fa-3x  text-primary mb-4"></i>
              <h3>${package.heading4} </h3>
              <p> ${package.text4}</p>

            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="service-item rounded pt-3">
            <div class="p-4">
              <i class="fa-solid fa-car fa-3x  text-primary mb-4"></i>
              <h3>${package.heading5}</h3>
              <p>${package.text5}</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="service-item rounded pt-3">
            <div class="p-4">

              <i class=" fa-solid fa-plane fa-3x  text-primary mb-4"></i>
              <h3>${package.heading6}</h3>
              <p>${package.text6}</p>
            </div>
          </div>
        </div>
        `
    }
    else {
        document.getElementById('cardDetailed1').innerHTML = `<p>Page is note found</p>`
    }
}

displayCardss()