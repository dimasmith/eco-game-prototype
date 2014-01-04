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
        }
        
    }
});

requirejs(["balance/view"], function(view){
   view.render();
});

