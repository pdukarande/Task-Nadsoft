function toggleNav() {
    var sidepanel = document.getElementById("mySidepanel");
    sidepanel.classList.toggle('open');  
  }
 
 document.querySelector('.hamburger').addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('is-active');
  })