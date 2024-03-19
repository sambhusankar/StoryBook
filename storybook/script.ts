document.addEventListener('DOMContentLoaded', function () {
    const pages = document.querySelectorAll('.page');
    let currentPage = 0;
  
    function showPage(pageIndex: number) {
      pages.forEach((page, index) => {
        if (index === pageIndex) {
          page.classList.add('active');
        } else {
          page.classList.remove('active');
        }
      });
    }
  
    function nextPage() {
      if (currentPage < pages.length - 1) {
        currentPage++;
        showPage(currentPage);
      }
    }
  
    const nextBtns = document.querySelectorAll('.next-page-btn');
    nextBtns.forEach( btn => btn.addEventListener('click', nextPage));
  
    showPage(currentPage);
  });
  