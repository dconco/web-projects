let code: string = `
   (async function battery() {
      let battery = await window.navigator.getBattery()
      console.log(battery)
   }())
`

const exec = (function (...code: string[]): void {
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