const worldPacakge = [
    {
        text: "Baku Azerbaijan",
        img: "../images/baku1.webp"
    },
    {
        text : "Maldives",
        img: "../images/maldives1.webp"
    },
    {
        text : "Malaysia",
        img: "../images/malaysia1.webp"
    },
    {
        text : "Sharm El Sheikh Egypt ",
        img: "../images/egypt4.webp"
    },
    {
        text : "Singapore ",
        img: "../images/singapore.webp"
    },
    {
        text : "Thailand",
        img: "../images/thailand2.webp"
    },
]

const generateCardHTMLWorld = (package,index)=>{

    return `
    <div class="   col-lg-3 col-md-6 " id="col">
        <div class="wrappers" id="wrappers">
          <div class="parents">
            <div class="child bg-one"  style=" background-image: url(${package.img});">
            </div>

          </div>
          <div class="card-info card-body ">
            <h3 style=" margin: 0 0 10px;font-size: 1.5rem;color: #333;" class="card-text">${package.text}</h3>
            <button class="btn btn-primary" onclick="viewDetaileWorld(${index})">More Info</button>
          </div>
        </div>
      </div>
    `

} 

const displayCardsWorld =()=>{
const cardContainer2 = document.getElementById('cardContainer2')
cardContainer2.innerHTML=worldPacakge.map(generateCardHTMLWorld).join('')
}

const viewDetaileWorld = (index)=>{
window.location.href = `toursplane.html?index=${index}`
}

displayCardsWorld()