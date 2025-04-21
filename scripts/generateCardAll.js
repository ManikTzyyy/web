document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.getElementById("all-project-wrapper");

  fetch("../scripts/data.json")
    .then((res) => res.json())
    .then((projects) => {
      projects.forEach((project) => {
        const cardHTML = `
            <div class="swiper-slide">
          <div class="text-card">
            <div class="title-card">${project.name}</div>
            <div class="desc-card">${project.desc}</div>
          
            <div class="tech-card column">
              <span><b>Tech</b></span>
              <span>${project.tech}</span>
            </div>
            <br />

            <div class="link-wrapper row">
               ${
                 project.github !== "#"
                   ? `<a href="${project.github}" target="_blank"><i class="fa-brands fa-github"></i></a>`
                   : ""
               }
              ${
                project.live !== "#"
                  ? `<a href="${project.live}" target="_blank"><i class="fa-solid fa-link"></i></a>`
                  : ""
              }
            </div>
          </div>
          <div class="img-wrapper" data-swiper-parallax="-65">
            <img src="../assets/project-img/${project.image}" alt="" />
          </div>
        </div>
          `;
        wrapper.innerHTML += cardHTML;
      });
    })
    .catch((err) => console.error("Gagal load all projects", err));
});
