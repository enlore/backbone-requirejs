/* jshint asi: true, laxcomma: true */
var gulp            = require("gulp")

var commonGulp      = require("./common-gulp")

// Default run list
var taskList = [
    "api",
    "vendorJS",
    "vendorCSS",
    "componentStylus",
    "appTemplatesJade",
    "appJS"
]


gulp.task("default", taskList, function () {})

gulp.task("api", commonGulp.nodemonAPI)
gulp.task("vendorJS", commonGulp.vendorJS)
gulp.task("vendorCSS", commonGulp.vendorCSS)
gulp.task("componentStylus", commonGulp.componentStylus(stylusConfig))
gulp.task("appTemplatesJade", commonGulp.appTemplatesJade)
gulp.task("appJS", commonGulp.appJS)

var stylusConfig = {}

var jadeConfig = {
    pretty: true,
    client: true
}
