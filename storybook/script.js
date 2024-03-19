document.addEventListener('DOMContentLoaded', function () {
    var pages = document.querySelectorAll('.page');
    var currentPage = 0;
    function showPage(pageIndex) {
        pages.forEach(function (page, index) {
            if (index === pageIndex) {
                page.classList.add('active');
            }
            else {
                page.classList.remove('active');
            }
        });
    }
    function nextPage() {
        console.log("sankar")
        if (currentPage < pages.length - 1) {
            currentPage++;
            showPage(currentPage);
        }
    }
    var nextBtns = document.querySelectorAll('.next-page-btn');
    nextBtns.forEach(btn => btn.addEventListener('click', nextPage));
    showPage(currentPage);
});
