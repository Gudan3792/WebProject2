  window.addEventListener('DOMContentLoaded', function () {
    var openBtn = document.querySelector('.mobile-menu__button');
    var overlay = document.getElementById('mobileOverlay');
    var closeBtn = document.getElementById('closeOverlay');
  
    openBtn.addEventListener('click', function(e) {
      e.preventDefault();
      overlay.style.display = 'block';
      document.body.style.overflow = 'hidden'; // 스크롤 막기
    });
  
    closeBtn.addEventListener('click', function(e) {
      e.preventDefault();
      overlay.style.display = 'none';
      document.body.style.overflow = ''; // 스크롤 복원
    });
  
    // 창이 커지면 오버레이 자동 닫힘
    window.addEventListener('resize', function() {
      if (window.innerWidth > 870) {
        overlay.style.display = 'none';
        document.body.style.overflow = '';
      }
    });
  });
  


  window.addEventListener('scroll', function () {
    var header = document.querySelector('.header_sec01');
    var logo = document.querySelector('.logo');
    var menuLinks  = document.querySelectorAll('.category_menu a');
    var hamburger = document.querySelectorAll('.hamburger span');
    if (!header) return; // header가 없으면 종료
    if (window.scrollY > 60) {
      header.style.backgroundColor = 'rgba(17,17,17,0.98)';
      logo.classList.remove('logoup');
      logo.classList.add('logodown');
      menuLinks.forEach(function(link) {
        link.style.color = '#fff'; // 원하는 색상
      });
      hamburger.forEach(function(span) {
        span.style.background = '#fff'; // 원하는 색상
      });
    } else {
      header.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
      logo.classList.remove('logodown');
      logo.classList.add('logoup');
      menuLinks.forEach(function(link) {
        link.style.color = ''; // 원래 색상(또는 원하는 색상)
      });
      hamburger.forEach(function(span) {
        span.style.background = '#111'; // 원하는 색상
      });
    }
  });

// news-carousel.js
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('newsCarousel');
    const leftBtn = document.getElementById('arrowLeft');
    const rightBtn = document.getElementById('arrowRight');
    const cardWidth = 330; // 카드+gap(px), 필요시 조정
  
    leftBtn.addEventListener('click', function() {
      carousel.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    });
    rightBtn.addEventListener('click', function() {
      carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
    });
  });


  document.addEventListener('DOMContentLoaded', function() {
    const images = [
        'img/main_img.jpg',
        'img/main_img2.jpg',
        'img/main_img3.jpg'
      ];
      let current = 0;
      let isAonTop = true;
      
      const imgA = document.getElementById('imgA');
      const imgB = document.getElementById('imgB');
      
      imgA.style.backgroundImage = `url('${images[0]}')`;
      imgA.classList.add('show');
      
      setInterval(() => {
        const next = (current + 1) % images.length;
        if (isAonTop) {
          imgB.style.backgroundImage = `url('${images[next]}')`;
          imgB.classList.add('show');
          imgA.classList.remove('show');
        } else {
          imgA.style.backgroundImage = `url('${images[next]}')`;
          imgA.classList.add('show');
          imgB.classList.remove('show');
        }
        isAonTop = !isAonTop;
        current = next;
      }, 3000);// 3초마다 이미지 변경
  });
  
  
  
   
  
  
