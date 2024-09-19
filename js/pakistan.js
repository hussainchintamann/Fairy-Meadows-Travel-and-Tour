const pakistanPackages = [
    {
        text : "Malam Jabba",
        img: "../images/malam-jabba.jpg"
    },
    {
        text : "Shogran",
        img: "../images/shogran.jpg"

    },
    {
        text : "Hunza Skardu Gilgit",
        img: "../images/hunza.jpg"

    },
    {
        text : "Swat",
        img: "../images/kumrat.jpg"

    },
]

const generateCardHTML = (package,index)=>{
    return `
     <div class="col-lg-3 col-md-6 " id="col">
        <div class="wrappers" id="wrappers">
          <div class="parents">
           
              <div class="child bg-one" style=" background-image: url(${package.img});">

              </div>

          </div>
          <div class="card-info card-body ">
            <h3  class="card-text" style=" margin: 0 0 10px;font-size: 1.5rem;color: #333;">${package.text} </h3>
            <button class="btn btn-primary" onclick = "viewDetails(${index})">moreInfo</button>
          </div>
        </div>
        
      </div>
`
}
const displayCards = ()=>{
const cardContainer = document.getElementById('cardContainer')
cardContainer.innerHTML = pakistanPackages.map(generateCardHTML).join('')
}

const viewDetails = (index)=>{
 window.location.href = `pk-travel1.html?index=${index}`
}

displayCards()


