requirejs.config({
    baseUrl: "/js/vendor",

    paths: {
      app: "../app"
    },

    shim: {
      Backbone: {
        deps: ["jquery", "underscore"],
        exports: "Backbone"
      },

      underscore: {
        exports: "_"
      },

      jQuery: {
        exports: "jQuery"
      }
    }
});

