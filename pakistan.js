// let data = [
//     {
//         text:'Malam Jabba',
//     },
//     {
//         text : 'Shogran'
//     },
//     {
//         text:'Skardu Hunza Gilgit'
//     },
//     {
//         text:'Swat'
//     }

// ]

// let tour = [...new Set(data.map((card)=>{return card}))];
// let z = 0 ;
// let tourRow = document.getElementById('rows')
// tourRow.innerHTML = tour.map((card) => {
//     var {text} = card
//     return (
//         ` 
//        <div class="   col-lg-3 col-md-6 ">
//       <div class="wrappers" >
//         <div class="parents">
//           <div class="child bg-one">
//           </div> 
//         </div>
//         <div class="card-info card-body ">
//           <span class="card-text">${text}</span>
//         </div>
//       </div>
//     </div>
//         `  
//     )
// })