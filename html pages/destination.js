const worldPacakge = [
    {
        text: "Baku Azerbaijan",
        
    },
    {
        text : "Maldives",
    },
    {
        text : "Malaysia",
    },
    {
        text : "Sharm El Sheikh Egypt "
    },
    {
        text : "Singapore "
    },
    {
        text : "Thailand"
    },
]

const generateCardHTMLWorld = (package,index)=>{

    return `
    <div class="   col-lg-3 col-md-6 " id="col">
        <div class="wrappers" id="wrappers">
          <div class="parents">
            <div class="child bg-one">
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