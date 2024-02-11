const app_header: HTMLElement = document.getElementById('app-header'),
      round_anim: HTMLElement = document.getElementById('round-anim'),
      down_arrow: HTMLElement = document.getElementById('down-arrow')

let scroll_count: number = 0

/* Window Scroll Event */
window.addEventListener('scroll', (): void => {
   /* Bottom Arrow Scroll Animation */
   if (window.scrollY > 9)
      down_arrow?.style.bottom = '-50px';
   else
      down_arrow?.style.bottom = '10px';
   
   /* Header Scroll Animation */
   if (window.scrollY > scroll_count)
      app_header?.style.animationName = 'header_anim_up';
   else
      app_header?.style.animationName = 'header_anim_down';
   
   scroll_count = window.scrollY
})

down_arrow?.style.bottom = '-50px'
setTimeout((): void => {
   down_arrow?.style.bottom = '10px'
}, 3000)

down_arrow.onclick = function(): void {
   window.scrollTo(0, 100)
}