module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
		
		bem: {
			bundles: {
				command: "make",
				TARGETS: [ "desktop.bundles", "touch.bundles" ],
				verbosity: "warn"
			},
			// Clean .bem/cache
			clean: {
				command: "make",
				method: "clean",
				TARGETS: [ "desktop.bundles", "touch.bundles" ],
			},
			deps: {
				command: "decl",
				sub: "merge",
				declaration: [ "desktop.bundles/index/index.deps.js",
							   "touch.bundles/index/index.deps.js" ],
				output: "<%= project.dist %>/pages.deps.js"
			}
		},

        // kompilace sass
        compass: {
            compile: {
                options: {
                    httpPath: "/",
                    sassDir: "css",
                    cssDir: "css",
                    imagesDir: "img",
                    javascriptsDir: "js",
                    outputStyle: "compressed",      // nested, expanded, compact, compressed
                    relativeAssets: true
                }
            }
        },

        // slouceni souboru
        concat: {
            options: {
                separator: "",
            },
            scripts: {
                src: [
                    "js/vendor/jquery.min.js",
                    "js/custom.js"
                ],
                dest: "js/scripts.min.js",
            },
        },

        // pravidla pro automatickou kompilaci
        watch: {
            css: {
                files: ["**/*.scss", "gruntfile.js"],
                tasks: ["compass:compile"],
                options: { atBegin: true }
            },
            scripts: {
                files: ["js/custom.js", "gruntfile.js"],
                tasks: ["concat:scripts"],
                options: { atBegin: true }
            }
        }
    });

	grunt.loadNpmTasks('grunt-bem-revised');
    grunt.loadNpmTasks("grunt-contrib-compass");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.registerTask("default", ["watch"]);
}