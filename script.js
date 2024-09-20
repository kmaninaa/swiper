function initializeSwiper() {
    if (window.innerWidth < 768) {
      if (!window.swiper) { 
        window.swiper = new Swiper('.swiper', {
            slidesPerView: 1,
            spaceBetween: 16,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
      }
    } else {
      if (window.swiper) {
        window.swiper.destroy(); 
        window.swiper = undefined;
      }
    }
  }

  window.addEventListener('resize', initializeSwiper);
  document.addEventListener('DOMContentLoaded', initializeSwiper);

        let hide768 = document.querySelectorAll('.hide--768');
        let hide1120 = document.querySelectorAll('.hide--1120');
        let showClassButton = document.querySelector('.button--show');
        let hideClassButton = document.querySelector('.button--hide');

        for (let i = 0; i < hide768.length; i++) {
            let hide768Element = hide768[i];

            showClassButton.addEventListener('click', function() {
                hide768Element.classList.remove('hide--768');
                showClassButton.classList.add('hide--element-button');
                hideClassButton.classList.remove('hide--element-button');
            });

            hideClassButton.addEventListener('click', function () {
                hide768Element.classList.add('hide--768');
                hideClassButton.classList.add('hide--element-button');
                showClassButton.classList.remove('hide--element-button');
            })
        };

        for (let j = 0; j < hide1120.length; j++) {
            let hide1120Element = hide1120[j];

            showClassButton.addEventListener('click', function() {
                hide1120Element.classList.remove('hide--1120');
                showClassButton.classList.add('hide--element-button');
                hideClassButton.classList.remove('hide--element-button');
            });

            hideClassButton.addEventListener('click', function () {
                hide1120Element.classList.add('hide--1120');
                hideClassButton.classList.add('hide--element-button');
                showClassButton.classList.remove('hide--element-button');
            })
        };