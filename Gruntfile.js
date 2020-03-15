
/**
 * Based on:
 * @url https://github.com/usemodj/grunt-browserify-babel
 */
module.exports = function (grunt) {
  // Load grunt tasks automatically, when needed
  require('jit-grunt')(grunt, {
    newer: 'grunt-newer',
    eslint: 'grunt-eslint',
    browserify: 'grunt-browserify',
    sass: 'grunt-contrib-sass',
    autoprefixer: 'grunt-autoprefixer',
    cssmin: 'grunt-contrib-cssmin',
    imagemin: 'grunt-contrib-imagemin',
    assets_versioning: 'grunt-assets-versioning'
  })
  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt)

  grunt.initConfig({
    // Project settings
    pkg: grunt.file.readJSON('package.json'),
    app: {
      // configurable paths
      client: require('./package.json').appPath || '.',
      server: '.',
      dist: '.'
    },

    eslint: {
      options: {
        fix: true,
        configFile: '.eslintrc.json'
        // rulePaths: ['conf/rules']
      }
      // target: ['file.js']
    },

    browserify: {
      development: {
        src: [
          './src/js/main.js',
          //'./src/js/carousel-page.js',
          //'./src/js/side-selector.js'
        ],
        dest: './assets/js/common.js',
        options: {
          browserifyOptions: {
            debug: true,
            global: true
          },
          transform: [
            ['babelify', {
              'presets': ['env']
            }]
          ],
        }
      },
      production: {
        src: [
          './src/js/main.js',
        ],
        dest: './assets/js/common.min.js',
        options: {
          browserifyOptions: {
            debug: false,
            global: true
          },
          transform: [
            ['babelify', {
              'presets': ['env']
            }]
          ],
          plugin: [
            ['minifyify', {
              map: false
            }]
          ]
        }
      }
    },
    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            './assets/js/!(.git*|.openshift|Procfile)**',
            './assets/css/!(.git*|.openshift|Procfile)**',
          ]
        }]
      }
    },
    // sass
    sass: {
      options: {
        sourcemap: 'inline'
      },
      dist: {
        files: {
          // Main CSS file
          './assets/css/main.css': './src/scss/main.scss',
          // Inline & additional files (other)
          './assets/css/preloader.css': './src/scss/preloader.scss',
        }
      }
    },
    // autoprefixer
    autoprefixer: {
      options: {
        map: false
      },
      dist: {
        files: {
          './assets/css/main.css': './assets/css/main.css',
          './assets/css/preloader.css': './src/scss/preloader.css'
        }
      }
    },
    // cssmin
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1,
        sourceMap: true
      },
      target: {
        files: {
          // Main CSS
          './assets/css/main.min.css': './assets/css/main.css',
          './assets/css/preloader.min.css': './assets/css/preloader.css'
        }
      }
    },
    // imagemin
    imagemin: {
      dist: {
        options: {
          optimizationLevel: 3,
          svgoPlugins: [{ removeViewBox: false }]
        },
        files: [{
          expand: true,
          cwd: 'src/images/',
          src: ['**/*.{png,jpg,gif,svg}'],
          dest: 'assets/images/'
        }]
      }
    },

    // assets_versioning
    assets_versioning: {
      dist: {
        options: {
          // Task-specific options go here.
          versionsMapFile: './rev-manifest.json',
          versionsMapTemplate: './rev-manifest.template'
        },
        files: {
          // JS
          'assets/js/common.min.js': 'assets/js/common.min.js',
          // CSS
          'assets/css/main.min.css': 'assets/css/main.min.css'
        }
      }
    }
  })

  // grunt.loadNpmTasks('grunt-browserify'); // Instead, use `jit-grunt` plugin

  grunt.registerTask('init', function () {
    console.log('> app.client = ', grunt.config('app.client'))
    console.log('> app.dist = ', grunt.config('app.dist'))
    console.log('> app.server = ', grunt.config.process('<%= app.server %>'))

    let dist = grunt.config('app.dist')
    let server = grunt.config('app.server')
    // Like the Node.js `path.join` method,
    if (!grunt.file.exists(dist)) {
      // Works like `mkdir -p`. Create a directory along with any intermediate directories.
      grunt.file.mkdir(dist)
    }
    if (!grunt.file.exists(server)) {
      grunt.file.mkdir(server)
    }
  })

  // build development
  grunt.registerTask('buildDev', [
    'clean:dist',
    'init',
    'browserify:development',
    'sass',
  ])

  // build production
  grunt.registerTask('buildProd', [
    'init',
    'autoprefixer',
    'cssmin',
    'browserify:production',
    'imagemin',
    'assets_versioning'
  ])

  // build default
  grunt.registerTask('default', [
    'newer:eslint',
    'buildDev',
    'buildProd'
  ])
}