module.exports = function (grunt) {

//    grunt.initConfig({
//        pkg: grunt.file.readJSON('package.json'),
//        concat: {
//            options: {
//                separator: ';'
//            },
//            dist: {
//                src: ['src/**/*.js'],
//                dest: 'dist/<%= pkg.name %>.js'
//            }
//        },
//        uglify: {
//            options: {
//                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
//            },
//            buildall:{
//              options:{
//                  mangle:true,
//                  compress:{
//                      drop_console:true
//                  },
//                  report:"min"
//              },
//                files:[{
//                    expand:true,
//                    cwd:'src',
//                    src:"**/*.js",
//                    dest:'dist'
//                }]
//            },
//            dist: {
//                files: {
//                    'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
//                }
//            }
//        },
////        qunit: {
////            files: ['test/**/*.html']
////        },
////        jshint: {
////            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
////            options: {
////                // options here to override JSHint defaults
////                globals: {
////                    jQuery: true,
////                    console: true,
////                    module: true,
////                    document: true
////                }
////            }
////        },
//        watch: {
//            files: ['**/*.js'],
//            tasks: ['uglify']
//        }
//    });
//
//    grunt.loadNpmTasks('grunt-contrib-uglify');
//    /*grunt.loadNpmTasks('grunt-contrib-jshint');*/
//    /*grunt.loadNpmTasks('grunt-contrib-qunit');*/
//    grunt.loadNpmTasks('grunt-contrib-watch');
//    grunt.loadNpmTasks('grunt-contrib-concat');
//
//   /* grunt.registerTask('test', ['jshint', 'qunit']);*/
//    grunt.registerTask('dist', ['concat:dist', 'uglify:dist']);
//    grunt.registerTask('default', [ 'concat', 'uglify']);

    // 任务配置
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            buildall: {
                options: {
                    mangle: true,
                    compress: {
                        drop_console: true
                    },
                    report: "min"
                },
                files: [
                    {
                        expand: true,
                        cwd: 'src',
                        src: "**/*.js",
                        dest: 'dist'
                    }
                ]
            }
        }
    });

    // 任务加载
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // 自定义任务
    grunt.registerTask('default', ['uglify']);

};