/** 
 * Require.js configuration of tests
 */
var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/-test\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

requirejs.config({
    baseUrl: "/base/public_html/js/libs",
    paths: {
        app: "../../js/app",
        balance: "../../js/balance"
    },
    shim: {
        "jquery": {
            exports: "$"
        },
        "bootstrap": {
            deps: ["jquery"]
        },
        "underscore": {
            exports: "_"
        }
        
    },
    deps: tests,
    callback: window.__karma__.start
});