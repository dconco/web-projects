let code = `
   (async function battery() {
      let battery = await window.navigator.getBattery()
      console.log(battery)
   }())
`

var exec = (function (...code) {
   code.forEach(code => {
      try {
         eval(code)
      } catch (err) {
         console.error(err)
      } finally {
         console.info("Code Executed")
      }
   })
})(code, code);