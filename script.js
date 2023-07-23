
let cross = document.querySelector('.cross');
let header =document.querySelector('header');
cross.addEventListener("click",()=>{
  header.classList.add('remove')
});

    const nav = document.querySelector("nav");

    window.onscroll = function () {
      var top = window.scrollY;

      if (top >= 150) {
        nav.classList.add("nav-active");
        header.classList.add("remove")
      } else {
        nav.classList.remove("nav-active");
        header.classList.remove("remove");
      }
    };

     

       