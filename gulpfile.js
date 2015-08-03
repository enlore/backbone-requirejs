/* jshint asi: true, laxcomma: true */
var gulp            = require("gulp")

var commonGulp      = require("./common-gulp")

// Default run list
var taskList = [
    "vendorJS",
    "vendorCSS",
    "componentStylus",
    "appTemplatesJade",
    "appJS",
    "apiJS",
    "api"
]


gulp.task("default", taskList, function () {
  gulp.watch(["vendor/js/**/*.js", "bower_components/**/*.js"], ["vendorJS"]);
  gulp.watch(["vendor/css/**/*.css", "bower_components/**/*.css"], ["vendorCSS"]);
  //gulp.watch("src/client/layouts/**/*.jade", ["layouts"]);
  gulp.watch(["src/client/**/*.js"], ["appJS"]);
  gulp.watch(["src/client/**/*.styl"], ["componentStylus"]);
  //gulp.watch("assets/**", ["assets"]);
  gulp.watch("src/client/**/*.jade", ["appTemplatesJade"]);
  gulp.watch("src/client/index.js", ["appJS"])
})

gulp.task("api", commonGulp.nodemonAPI)
gulp.task("vendorJS", commonGulp.vendorJS)
gulp.task("vendorCSS", commonGulp.vendorCSS)
gulp.task("componentStylus", commonGulp.componentStylus(stylusConfig))
gulp.task("appTemplatesJade", commonGulp.appTemplatesJade)
gulp.task("appJS", commonGulp.appJS)
gulp.task("apiJS", commonGulp.apiJS)

var stylusConfig = {}

var jadeConfig = {
    pretty: true,
    client: true
}
