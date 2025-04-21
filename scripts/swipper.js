var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 10,
  parallax: true,
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  
  },
  navigation: {
    nextEl: ".swiper-next", // tombol ke kanan
    prevEl: ".swiper-prev", // tombol ke kiri
  },
});
