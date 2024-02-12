const app_header: HTMLElement = document.getElementById('app-header'),
      round_anim: HTMLElement = document.getElementById('round-anim'),
      down_arrow: HTMLElement = document.getElementById('down-arrow'),
      top_name: HTMLDivElement = document.createElement('div')

let round_div: HTMLDivElement,
    top_text: HTMLSpanElement,
    scroll_count: number = 0,
    count: number = 0


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
}, 5000)

down_arrow.onclick = function(): void {
   window.scrollTo(0, 100)
}

/* Round Loader Animation */
var intvl = setInterval((): void => {
   if (count < 3) {
      round_div = document.createElement('div')
      round_div?.className = 'round'
      round_anim?.appendChild(round_div)
      
      count++
   } else {
      clearInterval(intvl)
   }
}, 500)

/* Background Color Animation */
setTimeout((): void => {
   var body_anim_intvl = setInterval((): void => {
      let color_rand = Math.floor(Math.random() * 999999)
      document.body.style.backgroundColor = `#${color_rand}`
   }, 800)
   
   /* Top Name Animation */
   let i: number = 0;
   let text: string = 'Dave Conco'
   top_name?.id = 'top-name'
   
   setTimeout(() => {
      var intvl2 = setInterval((): void => {
         if (i < text.length) {
            top_text = document.createElement('span')
            top_text?.innerText = text[i]
            
            top_name?.appendChild(top_text)
            i++
         } else {
            clearInterval(intvl2)
         }
      }, 200)
   }, 1500);
   
   setInterval((): void | string => top_text?.style.animation = 'text_dance_anim 0.8s 1s ease-in-out infinite', 200)
}, 9000)


round_anim?.innerHTML = ''
round_anim?.appendChild(top_name)