/* jshint asi: true, laxcomma: true */

/**
 * Common gulp task callbacks that I got tired of writing over and over.
 * There are rather specific to the way I structure and build SPA's.
 */

require("colors")

var path            = require("path")

var gulp            = require("gulp")
  , gJade           = require("gulp-jade")
  , gStylus         = require("gulp-stylus")
  , gConcat         = require("gulp-concat")
  , gFilter         = require("gulp-filter")
  , gWrap           = require("gulp-wrap-amd")
  , gChmod          = require("gulp-chmod")
  , gRename         = require("gulp-rename")
  , gNodemon        = require("gulp-nodemon")

module.exports.vendorJS = function vendorJS () {
  gulp.src("vendor/js/**/*.js")
    .pipe(gChmod(664))
    .pipe(gulp.dest("dist/js/vendor"));

  /*
   * Grab all the stuff pulled in via bower.
   * TODO need to filter for js only, handle the vendor css in yonder vendorCSS
   * function
   */
  var bowerConfig = require("./bower.json")
  var deps = bowerConfig.dependencies

  for (var name in deps) {
      var depPath       = path.join("bower_components", name)
      var depConfig     = require(path.resolve(depPath, "bower.json"))
      var mainFileName  = depConfig.main

      var mainFilePath  = path.join(depPath, mainFileName)

      gulp.src(mainFilePath)
        .pipe(gChmod(664))
        .pipe(gulp.dest("dist/js/vendor"))
  }

  /*
   * Grab ye auld jade-runtime, since it's in via npm at this point
   * TODO is the newest jade runtime version maintained in bower? this is a bit of an edge
   * case, since the file is named index.js (necessitating the rename), but I'd
   * like to just have this copied up in that last block
   */
  gulp.src("node_modules/jade-runtime/index.js")
    .pipe(gRename("jade-runtime.js"))
    .pipe(gChmod(664))
    .pipe(gulp.dest("dist/js/vendor"))
}

module.exports.vendorCSS = function vendorCSS () {
  gulp.src("vendor/css/**/*.css")
    .pipe(gChmod(664))
    .pipe(gulp.dest("dist/css/vendor"));
}

module.exports.componentStylus = function componentStylus (stylusConfig) {
    return function () {
      gulp.src("src/app/**/*.styl")
        .pipe(gStylus(stylusConfig))
        .pipe(gConcat("bundle.css"))
        .pipe(gChmod(664))
        .pipe(gulp.dest("dist/css"));
    }
}

module.exports.nodemonAPI = function nodemonAPI () {
  gNodemon({
      script: "src/api.js",
      env: {
        PORT: process.env.PORT || 3000
      }
  }).on("restart", function () {
    console.log("Api restarting".green);
  });
}

module.exports.appTemplatesJade = function appTemplatesJade (jadeConfig) {
    return function () {
      gulp.src("src/app/**/*.jade")
        .pipe(gJade(jadeConfig))
        .pipe(gWrap({
            deps: ["jade-runtime"],
            params: ["jade"]
        }))
        .pipe(gChmod(664))
        .pipe(gulp.dest("dist/js/app/templates"));
    }
}

module.exports.appJS = function appJS () {
  gulp.src("src/app/**/*.js")
    .pipe(gChmod(664))
    .pipe(gulp.dest("dist/js/app"));

  gulp.src("src/loadConfig.js")
    .pipe(gChmod(664))
    .pipe(gulp.dest("dist/js"));
}
