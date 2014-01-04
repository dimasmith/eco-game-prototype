module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: ['public_html/js/app/**/*.js']
        },
        watch: {
        	balance: {
        		files: ["public_html/balance.html", 
        		"public_html/js/balance/*.js",
        		"public_html/js/app/cards.js" ],
        		options: {
        			livereload: true
        		}
        	}
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
};