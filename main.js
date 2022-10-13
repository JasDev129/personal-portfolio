const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
let navStatus = true;
    navToggle.addEventListener('click', () => {
        
        if (navStatus == true) {
          navList.style.opacity = "1";
          navList.style.visibility = "visible";
          navToggle.style.transform = "rotate(180deg)";
          navStatus = false;
        } else if (navStatus == false) {
          navList.style.opacity = "0";
          navList.style.visibility = "hidden";
          navToggle.style.transform = "rotate(0deg)";
          navStatus = true;
        }
    });