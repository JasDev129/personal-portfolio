// FOR NAVIGATION BAR
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

// FOR HERO CONTENT

    const ctaButton = document.querySelector(".cta-btn");
    const heroContainer = document.querySelector('.hero-container');
    const mediaQueryM = window.matchMedia("(min-width: 768px)");
    const profileDiv = document.querySelector(".myprofile-pic");
    const heroContent = document.querySelector(".hero-content");
    const ctaDiv = document.querySelector(".cta");
    const profileBg = document.querySelector('.profile-background');
    const heroPara = document.querySelector(".hero-para");
    const heroHeader = document.querySelector(".hero-header");
    let showAbout = true;
            ctaButton.addEventListener("click", () => {
                if (showAbout == true) {
                  if (mediaQueryM.matches) {
                    console.log("min-width: 768px / TRUE");
                    heroContainer.style.display = "grid";
                    heroContainer.style.gridTemplateColumns = "repeat(4, 1fr)";
                    heroContainer.style.gridTemplateRows = "repeat(4, 1fr)";
                    heroContainer.style.placeItems = "center";
                   
                    profileBg.style.transform = 'rotate(-130deg)';
                    // hero div's
                    profileDiv.style.gridColumn = "1 / span 2";
                    profileDiv.style.gridRow = "2";
                    heroContent.style.gridColumn = '1 / span 2'
                    heroContent.style.gridRow = "3";
                    heroPara.style.fontSize = "1.2rem";
                    heroHeader.style.fontSize = "1.5rem";
                    ctaDiv.style.gridColumn = "1 / span 2";
                    ctaDiv.style.gridRow = "4";
                    showAbout = false;
                  }
                }else if(showAbout == false){
                    console.log("min-width: 768px / FALSE");
                    heroContainer.style.display = "flex";
                     profileBg.style.transform = "rotate(130deg)";
                     // hero div's
                     heroPara.style.fontSize = "1.7rem";
                     heroHeader.style.fontSize = "2rem";
                     ctaDiv.style.gridColumn = "1 / span 2";
                     ctaDiv.style.gridRow = "4";
                    showAbout = true;
                }
            });
      
