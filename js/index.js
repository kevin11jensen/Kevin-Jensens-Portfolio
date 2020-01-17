var splash = document.querySelector('.splash');

splash.addEventListener('click', () => {
    splash.style.display = 'none';
})

splash.addEventListener('touchstart', () => {
    splash.style.display = 'none';
})

splash.addEventListener('scroll', () => {
    splash.style.display = 'none';
})

splash.addEventListener('touchmove', () => {
    splash.style.display = 'none';
})

//navigation js
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  
  window.touchstart = (event) => {
    if (!event.target.matches('.dropbtn img')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  } 
