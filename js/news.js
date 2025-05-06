document.querySelectorAll('.news-link').forEach(link => {
    link.addEventListener('click', function(e) {
      // div이므로 preventDefault 불필요
      const newsId = this.getAttribute('data-news');
      const detail = document.getElementById('news-detail-' + newsId);

      if (detail.classList.contains('open')) {
        detail.classList.remove('open');
        return;
      }
      document.querySelectorAll('.news-detail.open').forEach(openDetail => {
        openDetail.classList.remove('open');
      });
      detail.classList.add('open');
    });
  });

  // news.html에서 실행
window.addEventListener('DOMContentLoaded', function() {
  // URL에서 open 파라미터 추출
  const params = new URLSearchParams(window.location.search);
  const openId = params.get('open');
  if (openId) {
    // 모든 폴딩(news-detail) 닫기
    document.querySelectorAll('.news-detail.open').forEach(el => el.classList.remove('open'));
    // 해당 id의 폴딩 열기
    const detail = document.getElementById('news-detail-' + openId);
    if (detail) detail.classList.add('open');
    // 필요시 해당 카드로 스크롤
    const item = detail.closest('.news-item');
    if (item) item.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
});
