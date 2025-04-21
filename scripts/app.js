// document.querySelectorAll('.hamburger').forEach(item => {
//     item.addEventListener('click', () => {
//       item.classList.toggle('is-active');
//     });
//   });

const menuToggle = document.querySelector("#navbar .button-wrapper");
const navList = document.getElementById("nav-list");
const hamburgerIcon = document.querySelector(".hamburger");
const logoText = document.querySelector(".logo-text");
const lineIcon = document.querySelectorAll("#navbar .hamburger .line");

menuToggle.addEventListener("click", () => {
    console.log("clicked");
    navList.classList.toggle("active");
    hamburgerIcon.classList.toggle("is-active");
    menuToggle.classList.toggle("active");
    logoText.classList.toggle("active");
    
    lineIcon.forEach(line => {
      line.classList.toggle("active");
    });
  });


  const navLinks = document.querySelectorAll("#nav-list a");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navList.classList.remove("active");
      hamburgerIcon.classList.remove("is-active");
      menuToggle.classList.remove("active");
      logoText.classList.remove("active");
  
      lineIcon.forEach(line => {
        line.classList.remove("active");
      });
    });
  });
  
