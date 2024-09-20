$(document).ready(function()
{
    $('.menu-toggle').on('click',function(){
        $('.nav').toggleClass('showing') 
         })
    });
    


    let box = [
        {
            id : 0,
            img : "./blog1 (1).jpg" ,
            img1 : './beach1.jpg',
            text1 : 'MALDIVES – 5 DAY SPECIAL FROM KARACHI',
            text2 : 'UMRAH – MAKKAH and MADINA',
            text3 : 'TRUELY ASIA MALAYSIA – KUALA LUMPUR ',
            text4 : 'MALAYSIA SINGAPORE – KUALA LUMPUR | SINGAPORE',
            text5 : 'THAILAND – BANGKOK | PATTAYA LAHORE SPECIAL',
            text6: '𝗔𝗺𝗮𝘇𝗶𝗻𝗴 𝗧𝗵𝗮𝗶𝗹𝗮𝗻𝗱 – 𝟬8 𝗗𝗮𝘆𝘀',
            text7: '𝗔𝗺𝗮𝘇𝗶𝗻𝗴 𝟯 𝗜𝗻 𝗢𝗻𝗲',
            text8: '𝐖𝐨𝐖 𝐄𝐮𝐫𝐨𝐩𝐞 – 𝟏𝟐 𝐃𝐚𝐲𝐬',
            text9: '𝗢𝘂𝗿 𝗘𝗶𝗱 𝗦𝗽𝗲𝗰𝗶𝗮𝗹 𝗣𝗮𝗸𝗶𝘀𝘁𝗮𝗻 𝗧𝗼𝘂𝗿 𝗚𝗿𝗼𝘂𝗽𝘀',
            text10: '𝐏𝐚𝐤𝐢𝐬𝐭𝐚𝐧 𝟐 𝐈𝐧 𝟏 𝐆𝐫𝐨𝐮𝐩',
            text11: '𝐓𝐮𝐫𝐤𝐞𝐲 𝐀𝐥𝐥 𝐈𝐧 𝐎𝐧𝐞 | 𝟏𝟏 𝐃𝐚𝐲𝐬',
            text12: '𝗟𝗲𝘁𝘀 𝗚𝗼 𝗧𝗼 𝗟𝗼𝗻𝗱𝗼𝗻',
            text13: '𝗛𝗮𝗽𝗽𝘆 𝗘𝗶𝗱 𝗠𝘂𝗯𝗮𝗿𝗮𝗸𝗵 𝗗𝘂𝗯𝗮𝗶 – 𝟰 𝗗𝗮𝘆𝘀',
            text14: '𝗛𝗮𝗽𝗽𝘆 𝗘𝗶𝗱 𝗠𝘂𝗯𝗮𝗿𝗮𝗸𝗵',
        }
        
    ]

    let catagories = [...new Set(box.map((item)=>{return item}))];
    let i = 0 ;
    let row = document.getElementById('row')
    row.innerHTML = catagories.map((item) => {
        var {img1,text1,text2 ,text3 ,text4,text5,text6,text7,text8,text9,text10,text11,text12,text13,text14} = item 
        return (
            `
              <div class=" col-xl-2  col-lg-4 col-md-4 col-sm-12">
               <a href="./tourplane.html"> <div class="img-area">
                    <img src= "${img1}" alt="">
                    <div class="img-text">
                        <h3>${text1}</h3>
                    </div> 
                </div> </a>
            </div>
       

        <div class=" col-xl-2  col-lg-4 col-md-4 col-sm-6">
          <a href="./tourplane2.html"><div class="img-area">
                <img src="${img1}" alt="">
                <div class="img-text">
                    <h3>${text2}</h3>
                </div>
            </div> </a>
        </div>
        <div class="col-xl-2  col-lg-4 col-md-4 col-sm-6">
          <a href="./tourplane3.html">  <div class="img-area">
                <img src="${img1}" alt="">
                <div class="img-text">
                    <h3>${text3}</h3>
                </div>
            </div> </a>
        </div>
        <div class="col-xl-2  col-lg-4 col-md-4 col-sm-6">
          <a href="./tourplane4.html">  <div class="img-area">
                <img src="${img1}" alt="">
                <div class="img-text">
                    <h3>${text4}</h3>
                </div>
            </div> </a>
        </div>
        <div class="col-xl-2  col-lg-4 col-md-4 col-sm-6">
          <a href="./tourplane4.html">  <div class="img-area">
                <img src="${img1}" alt="">
                <div class="img-text">
                    <h3>${text5}</h3>
                </div>
            </div> </a>
        </div>
        <div class="col-xl-2  col-lg-4 col-md-4 col-sm-6">
          <a href="./tourplane5.html">  <div class="img-area">
                 <img src="${img1}" alt="">
                <div class="img-text">
                    <h3>${text6}</h3>
                </div>
            </div> </a>
        </div>

        <div class="col-xl-2  col-lg-4 col-md-4 col-sm-6">
          <a href="./tourplane6.html">  <div class="img-area">
                 <img src="${img1}" alt="">
                <div class="img-text">
                    <h3>${text7}</h3>
                </div>
            </div></a>
        </div>

         <div class="col-xl-2  col-lg-4 col-md-4 col-sm-6">
          <a href="./tourplane7.html">  <div class="img-area">
                 <img src="${img1}" alt="">
                <div class="img-text">
                    <h3>${text8}</h3>
                </div>
            </div> </a>
        </div>
         <div class="col-xl-2  col-lg-4 col-md-4 col-sm-6">
          <a href="./tourplane8.html">  <div class="img-area">
                 <img src="${img1}" alt="">
                <div class="img-text">
                    <h3>${text9}</h3>
                </div>
            </div> </a>
        </div>
         <div class="col-xl-2  col-lg-4 col-md-4 col-sm-6">
          <a href="./tourplane9.html">  <div class="img-area">
                 <img src="${img1}" alt="">
                <div class="img-text">
                    <h3>${text10}</h3>
                </div>
            </div> </a>
        </div>
         <div class="col-xl-2  col-lg-4 col-md-4 col-sm-6">
          <a href="./tourplane10.html">  <div class="img-area">
                 <img src="${img1}" alt="">
                <div class="img-text">
                    <h3>${text11}</h3>
                </div>
            </div>  </a>
        </div>
         <div class="col-xl-2  col-lg-4 col-md-4 col-sm-6">
          <a href="./tourplane11.html">  <div class="img-area">
                 <img src="${img1}" alt="">
                <div class="img-text">
                    <h3>${text12}</h3>
                </div>
            </div>  </a>
        </div>
         <div class="col-xl-2  col-lg-4 col-md-4 col-sm-6">
          <a href="">  <div class="img-area">
                 <img src="${img1}" alt="">
                <div class="img-text">
                    <h3>${text13}</h3>
                </div>
            </div> </a>
        </div>

         <div class="col-xl-2  col-lg-4 col-md-4 col-sm-6">
          <a href="">  <div class="img-area">
                 <img src="${img1}" alt="">
                <div class="img-text">
                    <h3>${text14}</h3>
                </div>
            </div>  </a>
        </div>
   
        
    `
        )
    })

let posts = [
    {
        id :1,
        img1 : './europes.jpeg',
        img2 : './europe.jpeg',
        img3 : './asia4.jpg',
        img4 : './asia.jpg',
        img5 : './america.jpg',

    }
]

    let post = [...new Set(posts.map((items)=>{return items}))];
    let a = 0 ;
    let row1 = document.getElementById('nine-cards')
    row1.innerHTML = post.map((items) => {
        var {img1, img2, img3,img4,img5} = items
        return (`
<div class="col1 col-xl-4  col-lg-4 col-md-12 col-sm-12">
                <div class="img-areas">
                    <img src="${img1}" alt=""> 

                </div> 
            </div>         

              

            <div class=" col-xl-4  col-lg-4 col-md-12 col-sm-12">
                <div class="img-areas">
                    <img src="${img2}" alt="">

                </div>
            </div>

            <div class=" col col-xl-4  col-lg-4 col-md-12 col-sm-12">
                <div class="img-texts img-text1">

                    <span class="one">Original </span>
                    <span class="two">Experience</span>
                    <p class="three ">Bean The Beauty Recently?</p>
                    <p>
                        Europe offers a one-of-a-kind experience with its rich history, diverse cultures, stunning
                        landscapes, and mouth-watering cuisines. Have you recently visited this captivating continent?
                        Share your original experiences with us and inspire others to explore the beauty of Europe.

                    </p>
                </div>
            </div>

            <div class=" col col-xl-4  col-lg-4 col-md-12 col-sm-12">
                <div class="img-texts img-text2">
                    <span class="one">Original </span>
                    <span class="two">Experience</span>
                    <p class="three ">Bean The Beauty Recently?</p>
                    <p>
                        Asia is a continent of fascinating diversity, offering a unique blend of ancient traditions,
                        modern marvels, and breathtaking natural wonders. Have you recently explored the vibrant cities,
                        scenic landscapes, and culinary delights of Asia? Share your original experiences with us and
                        inspire others to discover the wonders of this enchanting continent.

                    </p>
                </div>
            </div>
            <div class="col-xl-4  col-lg-4 col-md-12 col-sm-12">
                <div class="img-areas">
                    <img src="${img3}" alt="">

                </div>
            </div>
            <div class="col2 col-xl-4  col-lg-4 col-md-12 col-sm-12">
                <div class="img-areas">
                    <img src="${img4}" alt="">

                </div>
            </div>



            <div class="col-xl-4  col-lg-4 col-md-12 col-sm-12">
                <div class="img-areas">
                    <img src="${img4}" alt="">

                </div>
            </div>
            <div class=" col col-xl-4  col-lg-4 col-md-12 col-sm-12">
                <div class="img-texts img-text3">

                    <span class="one">Original </span>
                    <span class="two">Experience</span>
                    <p class="three ">Bean The Beauty Recently?</p>
                    <p>
                        The Americas offer a wealth of experiences, from the cosmopolitan cities of North America to the
                        tropical landscapes of Central and South America. Have you recently explored the diverse
                        cultures, stunning natural beauty, and vibrant energy of the Americas? Share your original
                        experiences with us and inspire others to embark on their own adventures in the New World.
                    </p>
                </div>
            </div>
            <div class="col2 col-xl-4  col-lg-4 col-md-12 col-sm-12">
                <div class="img-areas">
                    <img src="${img5}" alt="">

                </div>
            </div>
            
            
            `)
    })


let visas = [
    {
        img1 : ('./asia1.jpeg'),
    }
]


    // let visa = [...new Set(visas.map((card)=>{return card}))];
    // let b = 0 ;
    // let visaRow = document.getElementById('visaCard')
    // row1.innerHTML = visa.map((card) => {
    //     var {img1} = card
    //     return (
    //         `  
            
    //         <div class="col wrapper  col-lg-3 col-md-6  ">
    //             <a href="">
    //           <div class="card parent ">
    //             <img src="${img1}" class="card-img-top slider-img slider-img" alt="...">
    //             <div class="card-body">
    //               <h5 class="card-text card-texts">Sharjah 30 Days</h5>
    //             </div>
    //           </div>
    //         </a>
    //         </div>`)



    // })







    $('.post-wrapper').slick({
        dots: true,
        // infinite: false,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 3 ,
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