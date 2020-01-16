
$(window).scroll(function () {
    var screenheight = $(this).height(); // 抓取視窗高度
    var scrolledpx = $(this).scrollTop(); // 抓取當前視窗距離最上方的距離(滾動距離)
    // 當滾動超過視窗高度的一半
    if (scrolledpx >= screenheight / 7 - 100) {
        $('.navbar').addClass('active'); // 選取導覽列加上 active
    } else {
        $('.navbar').removeClass('active'); // 選取導覽列清除 active
    }
})