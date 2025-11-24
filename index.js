const $ = (name1) => {
    return document.querySelector(name1);
}
const $$ = (name2) => {
    return document.querySelectorAll(name2);
}

const slidesItems =[
    {
       
        review : "Working with Zen Digital transformed our online presence. Our website traffic increased by 200% in just three months!",
        person: "- Sarah Johnson, Marketing Director"
    },
      {
        
        review : "The team delivered exactly what we needed on time and within budget. I would highly recommend their services.",
        person: "- Michael Chen, Startup Founder"
    },
      {
       
        review : "Their attention to detail and creative approach helped us stand out in a crowded market. Excellent work!",
        person: "- Emily Rodriguez, Business Owner"
    },
    
]

/*to the top of the page*/

const toTheTop = $(".to-top");
const whyus = $(".why-choose-us");
const proToFile2 = $(".our-portfolio");

// console.log(totop);


// })

window.addEventListener("scroll" , () =>{

    // console.log(whyus.getBoundingClientRect().top);
    
    if(whyus.getBoundingClientRect().top <=200 || proToFile2.getBoundingClientRect().top <=300){
    //  show the to the top button 
     toTheTop.style.opacity = "100%";
    }

      if(whyus.getBoundingClientRect().top > 200 || proToFile2.getBoundingClientRect().top > 300){
         //  hide the to the top button 
     toTheTop.style.opacity = "0";
    }

    
});

const slider = $(".slideres");
const slidesContainer = $(".slides-cont");
const dotCont = $(".dots-cont");

slidesItems.forEach((element , i ) =>{
   const { person , review} = element;

    let cardSlide = `<div class="slide hidden flex-col text-center mx-[100px] mb-[100px]  ${i==0 ? "active " :""}" ` + `slide-id="${i}">
        <p class="person-rev text-[20px] text-grey mb-[30px] text-center max-w-[800px]">"${review}"</p>
        <p class="person-rev-name text-[18px] text-primary font-medium">"${person}"</p>            
    </div>`;

    slidesContainer.innerHTML += cardSlide ;
    // console.log(slidesContainer);

    let oneDot = `<div class="dot min-w-2.5 h-2.5 rounded-[50%] bg-grey duration-300 ${i==0 ? "active" :""}" slide-id="${i}"></div>`;
    dotCont.innerHTML += oneDot;
    // console.log(oneDot1);

    });

    const dots =$$(".dot");
    const slidess = $$(".slide");
   
    dots.forEach((el , i) => {
        el.addEventListener("click" , (oq)=> {
            const targetElement = oq.currentTarget;

            // for dts
            // remove class active
            dots.forEach(item => item.classList.remove("active"));
            dots.forEach(item => item.classList.remove("bg-primary"));

            // add class active
            targetElement.classList.add("active");
             targetElement.classList.add("bg-primary");


            //for slide 

            // remove class active for target slide
            slidess.forEach(item => item.classList.remove("active"));

            // add class active for target slide
            // targetElement.classList.add("active"); 

            // get index value
            const index = targetElement.getAttribute("slide-id") ;
            console.log(index);
                        
            // const targetSlide =  slidesItems[index];

           const targetSlide = slidess[index];

        //   const thatSlide = slidess.filter(e => e.getAttribute("slide-id") === index);
        //   thatSlide.classList.add("active")


            console.log(targetSlide);
        

            targetSlide.classList.add("active");
        });
    })
/*color changing*/
    const moon = $("#moon-icon");
    const sun = $("#sun-icon");
    const body = $("#theBody")

    moon.addEventListener("click" , e => {
        body.classList.add("dark-theem");

        moon.classList.add("hide-it");
        moon.classList.remove("show-it");

        sun.classList.remove("hide-it");
        sun.classList.add("show-it");

    });    

    sun.addEventListener("click" , e => {
        body.classList.remove("dark-theem");

        moon.classList.add("show-it");
        moon.classList.remove("hide-it");

        sun.classList.remove("show-it");
        sun.classList.add("hide-it")
        
    });   
/*color changing*/


// ******************************************************************
const service = $$(".services-btn");
const home = $$(".home-btn")
const main1 = $("#main-1");
const main2 = $("#main-2");

console.log(service);
console.log(home);


service.forEach(e => {
    e.addEventListener("click" , (e) => {

    /* show : main 2 (serice) hide : main 1 (home) */
    main2.classList.remove("hide-it");
    main2.classList.add("show-it");
   

    main1.classList.remove("show-it");
    main1.classList.add("hide-it");

    /* add style for service btn */
    service.forEach(ele => {ele.classList.add("bton");})
    home.forEach(ele => {ele.classList.remove("bton");})
});
}) 

home.forEach(homeEl => {
    homeEl.addEventListener("click" , (e) => {
        /* hide : main 2 (serice) show : main 1 (home) */

        main1.classList.remove("hide-it");
        main2.classList.remove("show-it");

        main2.classList.add("hide-it");
        main1.classList.add("show-it");

        /* add style for home btn */
        home.forEach(ele => {ele.classList.add("bton");})
        service.forEach(ele => {ele.classList.remove("bton");})

    });
})

// ******************************************************************
/* page changing*/

/* protofile section  */
const cardItems = [
            { title: 'E-Commerce Website',
                description: 'Web Development',
                 icon: '<i class="fas fa-shopping-cart text-[25px] text-primary"></i>' 
            },
            { title: 'Mobile App UI',
                 description: 'UI/UX Design',
                 icon: '<i class="fas fa-mobile-alt text-[25px] text-primary"> </i>' 
            },
            { title: 'Brand Identity',
                 description: 'Branding',
                 icon: '<i class="fas fa-palette text-[25px] text-primary"> </i>' 
            },
            { title: 'SEO Campaign',
                 description: 'Digital Marketing',
                 icon: '<i class="fas fa-chart-line text-[25px] text-primary"> </i>' 
            },
            { title: 'Business Platform',
                 description: 'Web Development',
                 icon: '<i class="fas fa-briefcase text-[25px] text-primary"> </i>' 
            },
            { title: 'Social Media Strategy',
                 description: 'Digital Marketing',
                 icon: '<i class="fas fa-hashtag text-[25px] text-primary"> </i>' 
            }
        ];
 
        const cardscont = $(".cardes-cont");

        cardItems.forEach((element , i ) =>{
            const { title , icon , description } = element;
            const card = `
                    <div class="cards-serv shadow-1 bg-wihet-1  flex flex-col rounded-[10px] duration-300 overflow-hidden " card-id=${i}>

                        <div class="card-profile-icon bg-light-grey flex justify-center items-center  h-[200px]">
                           ${icon}
                        </div>
                        
                        <div class="profile-contant p-[25px]  bg-back">
                            <div class="" >
                                <h3 class="text-secondry-tex text-[24px] mb-[20px] font-bold">${title}</h3>
                                <p class="text-[18px] text-grey Zen Digital | Professional SPA">${description}</p>
                            </div>
                            <div class="flex justify-between gap-[10px] pb-[10px]">
                                <a href=""  class=" a-button px-[18px] py-[12px] rounded-[6px] text-texte-pri bg-primary inline-block duration-300">Learn More</a>
                                <span card-id=${i} class="delete-btn a-button px-[30px] py-[12px] rounded-[6px] text-texte-pri bg-lavander inline-block duration-300">Delete</span>
                            </div>
                        </div>
                    </div>
            `;
                    
                    cardscont.innerHTML +=card ; 
        })
        const deletebtn = $$(".delete-btn");

        const card12 = $$(".cards-serv");

        deletebtn.forEach(element =>{
            element.addEventListener("click",(delBtn) => {

               const targetedId= delBtn.currentTarget.getAttribute("card-id");

               const targetCard =  card12[targetedId];
               console.log(targetCard);

               targetCard.classList.add("hide-it");
               

            })
        })
        
/* protofile section  */

/* nav bar */
 const bar = $("#bar-3");
 const barPage = $("#bar-page")
 bar.addEventListener("click" , (oq) =>{
    barPage.classList.add("show-it");
 
    service.forEach(serviceEl => {
    serviceEl.addEventListener("click" , (e) => {
    /* show : main 2 (serice) hide : main 1 (home) */
    main2.classList.remove("hide-it");
    main2.classList.add("show-it");

    main1.classList.remove("show-it");
    main1.classList.add("hide-it");

    /* add style for service btn */
    service.forEach(ele => {ele.classList.add("bton");})
    home.forEach(ele => {ele.classList.remove("bton");})

         barPage.classList.remove("show-it");
          barPage.classList.add("hide-it");
});
}) 
})

// 
bar.addEventListener("click" , (oq) =>{
    barPage.classList.add("show-it");
 
    service.forEach(serviceEl => {
        serviceEl.addEventListener("click" , (e) => {
            /* show : main 2 (serice) hide : main 1 (home) */
            main2.classList.remove("hide-it");
            main2.classList.add("show-it");

            main1.classList.remove("show-it");
            main1.classList.add("hide-it");

            /* add style for service btn */
            service.forEach(ele => {ele.classList.add("bton");})
            home.forEach(ele => {ele.classList.remove("bton");})

                barPage.classList.remove("show-it");
                barPage.classList.add("hide-it");
                 
        });
    }) 

    home.forEach(homeEl => {
        homeEl.addEventListener("click" , (e) => {
            /* hide : main 2 (serice) show : main 1 (home) */
            // console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkk")

            main1.classList.remove("hide-it");
            main2.classList.remove("show-it");

            main2.classList.add("hide-it");
            main1.classList.add("show-it");

            /* add style for home btn */
            home.forEach(ele => {ele.classList.add("bton");})
            service.forEach(ele => {ele.classList.remove("bton");})
            barPage.classList.remove("show-it");
                barPage.classList.add("hide-it");

            // console.log("oooooooooooooooooooooooooooooooooo")

        });
    });
 })

//  bar.addEventListener("click" , (oq) =>{
//     barPage.classList.add("show-it");
    
//  });
