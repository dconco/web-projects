let code: string = `
   (async function battery():void {
      let battery = await window.navigator.getBattery()
      console.log(battery)
   }())
`

const exec: void = (function (...code) {
   code.forEach(code => {
      try {
         eval(code)
      } catch (err) {
         console.error(err)
      } finally {
         console.info("Code Executed")
      }
   })
})(code, code)