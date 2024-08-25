


let tour = [
    {
        headText: "Package Inclusions",
        p1 :  '. Meet & Greet At Airport',
        p2 :  '. Aalishaan Travels 24/7 Assistance',
        p3 :  '. Pre Travel Guidelines',

    },

    {
        headText: " Accommodation Details",
        p1 :  '.  3 &4 Star Hotels',
        p2 :  '. Complementary Water Bottle In Hotel',
        p3 :  '. Double/Twin Bedding',

    },

    {
        headText: "Visa Details",
        p1 :  '.  Malaysia E-Visa',
        p2 : '',
        p3: '',
       

    },
    {
        headText: " Flight Details",
        p1 :  '.  All Flight Available',
        p2 :  '',
        p3 :  '',

    },
    {
        headText: " Transportation Details",
        p1 :  ' . All Transportation Included From Airports ',
        p2 :  '',
        p3 :  '',

    }


]



let tourPlane = [...new Set(tour.map((service)=>{return service}))];
let z = 0 ;
let tourPlanes = document.getElementById('cards')
tourPlanes.innerHTML = tourPlane.map((service) => {
    var {headText,p1,p2,p3} = service
    return (

        `
        <div class="card" >
                
                <h2> ${headText} </h4>
                <p> ${p1}</p>
                <p>  ${p2}</p>
                <p> ${p3}</p>
              </div>
        `
    ) 


})







