var app_header = document.getElementById('app-header'), round_anim = document.getElementById('round-anim'), down_arrow = document.getElementById('down-arrow'), top_name = document.createElement('div');
var round_div, top_text, scroll_count = 0, count = 0;
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
down_arrow === null || down_arrow === void 0 ? void 0 : down_arrow.style.bottom = '-50px';
setTimeout(function () {
    down_arrow === null || down_arrow === void 0 ? void 0 : down_arrow.style.bottom = '10px';
}, 5000);
down_arrow.onclick = function () {
    window.scrollTo(0, 100);
};
/* Round Loader Animation */
var intvl = setInterval(function () {
    if (count < 3) {
        round_div = document.createElement('div');
        round_div === null || round_div === void 0 ? void 0 : round_div.className = 'round';
        round_anim === null || round_anim === void 0 ? void 0 : round_anim.appendChild(round_div);
        count++;
    }
    else {
        clearInterval(intvl);
    }
}, 500);
/* Background Color Animation */
setTimeout(function () {
    var body_anim_intvl = setInterval(function () {
        var color_rand = Math.floor(Math.random() * 999999);
        document.body.style.backgroundColor = "#".concat(color_rand);
    }, 800);
    /* Top Name Animation */
    var i = 0;
    var text = 'Dave Conco';
    top_name === null || top_name === void 0 ? void 0 : top_name.id = 'top-name';
    setTimeout(function () {
        var intvl2 = setInterval(function () {
            if (i < text.length) {
                top_text = document.createElement('span');
                top_text === null || top_text === void 0 ? void 0 : top_text.innerText = text[i];
                top_name === null || top_name === void 0 ? void 0 : top_name.appendChild(top_text);
                i++;
            }
            else {
                clearInterval(intvl2);
            }
        }, 200);
    }, 1500);
    setInterval(function () { return top_text === null || top_text === void 0 ? void 0 : top_text.style.animation = 'text_dance_anim 0.8s 1s ease-in-out infinite'; }, 200);
}, 9000);
round_anim === null || round_anim === void 0 ? void 0 : round_anim.innerHTML = '';
round_anim === null || round_anim === void 0 ? void 0 : round_anim.appendChild(top_name);
