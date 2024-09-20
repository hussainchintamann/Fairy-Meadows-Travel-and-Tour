
let evisas = [
    {
        img1 : ('../images/sharjah.webp'),
        text1 : 'Sharjah 30 Days',
       
    },

    {
      img1 : ('../images/sharjah2.webp'),
      text1 : 'Sharjah 60 Days',
     
  },

  {
    img1 : ('../images/malaysia.webp'),
    text1 : 'Malaysia e-Visa',
    
},

    {
        img1 : ('../images/singapore.webp'),
        text1 : 'Singapore Consulate visa',

    },

   
  {
    img1 : ('../images/azerbaijan.webp'),
    text1 : 'Azerbaijan e-Visa Normal',
    
},
{
  img1 : ('../images/azerbaijan2.webp'),
  text1 : 'Azerbaijan e-Visa Urgent ',
},

    {
        img1 : ('../images/america.webp'),
        text1 : 'Kenya e-Visa ',
    },

    {
      img1 : ('../images/srilanka.webp'),
      text1 : 'Srilanka e-Visa',
  },
    {
      img1 : ('../images/combodia.webp'),
     
      text1 : 'Cambodia e-Visa ',
     
  },
  {
    img1 : ('../images/morocco.webp'),
   
    text1 : ' Moroco e-Visa  ',
   
},

{
  img1 : ('../images/indonesia.webp'),
 
  text1 : ' Indonesia e-Visa ',
 
},
{
  img1 : ('../images/nepal.webp'),
 
  text1 : 'Nepal e-Visa  ',
 
},
{
  img1 : ('../images/turkey.webp'),
 
  text1 : 'Turkey e-Visa ',
 
},
{
  img1 : ('../images/morocco.webp'),
 
  text1 : 'Bahrain 1 Year Multiple eVisa   ',
 
},

{
  img1 : ('../images/america.webp'),
 
  text1 : '   ',
 
},
  
    
]

let evisa = [...new Set(evisas.map((card)=>{return card}))];
let b = 0 ;
let visaRow = document.getElementById('post-wrapper')
visaRow.innerHTML = evisa.map((card) => {
    var {img1,text1} = card
    return (
      
        ` <div class="post">
                    <img src= ${img1} alt="" class="slider-img">
                  <div class="post-info1">
                      <h5 class=" text-dark"><a href="#">${text1}</a></h5>
                     
                  </div>
              </div>
        `  
    )
})

let stickerVisa = [
  {
       img2 : ('../images/thailand.webp'),
       text2:' Thailand Visa'
  },
  {
      text2:' Egypt Visa ',
      img2 : ('../images/Egypt.webp'),
  },
  {
    text2:'Turkey Visa ',
    img2 : ('../images/turkey.webp'),
  },
  {
    text2:'Malaysia Visa ',
    img2 : ('../images/malaysiavisa.webp'),
  },
  {
    text2:'Philippine Visa',
    img2 : ('../images/philppinse.webp'),
  },
]

let stickyvisa  = [...new Set(stickerVisa.map((card)=>{return card}))];
let c = 0 ;
let visaRows = document.getElementById('post-wrapper2')
visaRows.innerHTML = stickyvisa.map((card) => {
    var {img2,text2 } = card
    return (
        ` <div class="post ">
                  <img src= ${img2} alt="" class="slider-img">
                  <div class="post-info1">
                      <h5 class=" text-dark"><a href="#">${text2}</a></h5>
                     
                  </div>
              </div>
        `  
    )
})

let visaArr = [
  {
    text3:'USA',
    img3 : ('../images/USA.webp'),
  },
  {
    text3:'UK ',
    img3 : ('../images/UK.webp'),
  },
  {
    text3:' Europe / Schengen',
    img3 : ('../images/Europe.webp'),
  },
]

let visa = [...new Set (visaArr.map((card)=>{return card }))]
let d = 0;
let visaRows1 = document.getElementById('post-wrapper3')
visaRows1.innerHTML = visa.map ((card)=>{
  var {img3,text3} = card
  return (
    ` <div class="post ">
    <img src= ${img3} alt="" class="slider-img">
    <div class="post-info1">
        <h5 class=" text-dark"><a href="#">${text3}</a></h5>
       
    </div>
</div>
`  
  )
})


// var wrapper = document.querySelectorAll('.wrapper')
// var btn = document.querySelector('.btn');
// var currentime=2;
// btn.addEventListener('click',
//   function(e){
//    for(var i=currentime; i<currentime+2;i++)
//    {
//     if (wrapper[i]){
//       wrapper[i].style.display='block'
//     }
//    }
//    currentime+=2;
//    if(currentime>=wrapper.length) {
//    e.target.style.display='none'
//    }
//   }
// )

$('.post-wrapper').slick({
  dots: true,
  // infinite: false,
  speed: 1000,
  slidesToShow: 5,
  slidesToScroll: 3,
  // arrows :false ,
  autoplay: true,
  autoplaySpeed: 3000,
  // nextArrow : $('.next'),
  // prevArrow : $('.prev'),
  
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      //   infinite: true,
        dots: true,
        

      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
        
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

