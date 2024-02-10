var code = "\n   (async function battery() {\n      let battery = await window.navigator.getBattery()\n      console.log(battery)\n   }())\n"(function () {
    var code = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        code[_i] = arguments[_i];
    }
    code.forEach(function (code) {
        try {
            eval(code);
        }
        catch (err) {
            console.error(err);
        }
        finally {
            console.info("Code Executed");
        }
    });
})(code, code);
