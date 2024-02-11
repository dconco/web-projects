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
}, 5000)

down_arrow.onclick = function(): void {
   window.scrollTo(0, 100)
}


/* Round Loader Animation */
let count: number = 0
let round_div: HTMLDivElement

var intvl = setInterval((): void => {
   if (count < 3) {
      round_div = document.createElement('div')
      round_div?.className = 'round'
      //round_anim?.appendChild(round_div)
      
      count++
   } else {
      clearInterval(intvl)
   }
}, 500)

setTimeout((): void => {
   var body_anim_intvl = setInterval((): void => {
      let color_rand = Math.floor(Math.random() * 999999)
      document.body.style.backgroundColor = `#${color_rand}`
   }, 800)
}, 9000)

let top_name: HTMLDivElement = document.createElement('div')
let top_text: HTMLSpanElement

let i = 0;
let text = 'Dave Conco'
top_name?.id = 'top-name'

var intvl2 = setInterval((): void => {
   if (i < text.length) {
      top_text = document.createElement('span')
      top_text?.innerText = text[i]
      top_text?.className = 'top-text'
      
      top_name?.appendChild(top_text)
      i++
   } else {
      clearInterval(intvl2)
   }
}, 200)

round_anim?.innerHTML = ''
round_anim?.appendChild(top_name)