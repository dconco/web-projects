var app_header = document.getElementById('app-header'), round_anim = document.getElementById('round-anim'), down_arrow = document.getElementById('down-arrow');
var scroll_count = 0;
/* Window Scroll Event */
window.addEventListener('scroll', function () {
    /* Bottom Arrow Scroll Animation */
    if (window.scrollY > 9)
        down_arrow === null || down_arrow === void 0 ? void 0 : down_arrow.style.bottom = '-50px';
    else
        down_arrow === null || down_arrow === void 0 ? void 0 : down_arrow.style.bottom = '10px';
    /* Header Scroll Animation */
    if (window.scrollY > scroll_count)
        app_header === null || app_header === void 0 ? void 0 : app_header.style.animationName = 'header_anim_up';
    else
        app_header === null || app_header === void 0 ? void 0 : app_header.style.animationName = 'header_anim_down';
    scroll_count = window.scrollY;
});
down_arrow.onclick = function () {
    window.scrollTo(0, 100);
};
