/**
 * Require.js configuration
 */
requirejs.config({
    baseUrl: "js/libs",
    paths: {
        app: "../app",
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

requirejs(["app/i18n/ua","app/i18n/ru","app/app", "bootstrap"], function(uk, ru, app, bs){
    
});

