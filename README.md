# backbone-requirejs
## Boilerplates are nice to have around

So this is my Backbone and RequireJS project boilerplate, build process included.

## Needfuls

* Watch the `src` dir and, on filechanges, does any transcompilation needed
  * stylus, but working in other, configurable options would be cool
  * there's also this thing where RequireJS apps can be, like, bundled or something
* Watch the `vendor` dir and copy over vendor libs when added/updated
* RequireJS all wired up into the template
* Arbirtrarily structured app files in `src` deposited into `dist`, maintaining that structure

## Structure and How to do the Hax to It

One thing I like about Meteor is how the app is all kept in one place, served out of the same
dir.  I dig it.  The client and server are two halves of the same whole.

    appRoot
    |- src
       |- client // client side app code goes here, including componenty styles, templates, etc
       |  |- someEntity
       |     |- view.js
       |     |- model.js
       |     |- collection.js
       |     |- component.styl
       |
       |- server // this is where the api entry point, models, util functions, etc live
          |- someEntity
             |- model.js
             |- helper.js
             |- router.js
