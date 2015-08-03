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
    |  |- client // client side app code goes here, including componenty styles, templates, etc
    |  |  |- someEntity
    |  |     |- view.js
    |  |     |- model.js
    |  |     |- collection.js
    |  |     |- component.styl
    |  |
    |  |- server // this is where the api entry point, models, util functions, etc live
    |     |- api.js
    |     |- someEntity
    |        |- model.js
    |        |- helper.js
    |        |- router.js
    |
    |- dist  // here's where all this crap gets copied, transcompiled, what all
       |- js
       |  |- app  // this is where the js and template functions from the client dir end up
       |  |- vendor
       |
       |- css
          |- main.css  // all the styles just get gobbled up and crapped out here
          |- vendor

In development and testing, the server side code will just get run rout out of src. For now.

Probably what oughta happen is that the server side code gets copied over to the dist folder
for ease of shipment. The idea is that the whole dist folder just gets bundled up and sent
off.  Granted that makes some assumptions about how the app will be run in deployment.

Further, this directory structure for the server side code may or may not support a distributed
arch very well. Or it may.  I dunno yet.
