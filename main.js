$(document).ready(function() {
 
    $(".owl-carousel").owlCarousel({
   
        autoPlay: 3000,
        items : 4,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3],
        center: true,
        nav:true,
        loop:true,
        responsive: {
          600: {
            items: 4
          }
        }

   
    });
   
  });

  const readMoreBtn = document.querySelector('.read-more-btn');
  const text = document.querySelector('.btntext');

  readMoreBtn.addEventListener('click',(e)=>{
    text.classList.toggle('show-more');
    if(readMoreBtn.innerText === 'Read More'){
      readMoreBtn.innerText = 'Read Less';
    }else{
      readMoreBtn.innerText = 'Read More';
    }
  })