/**
 * Require.js configuration
 */
requirejs.config({
    baseUrl: "js/libs",
    paths: {
        app: "../app",
        balance: "../balance"
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
        
    }
});

requirejs(["balance/view", "balance/autoplay"], function(view, autoplay){
   view.render();
   autoplay.play();
});

