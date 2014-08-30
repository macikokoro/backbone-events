# Backbone events
==========================

## Mean Median Mode
-----------------------
### Modules
----------------------
To test for a valid module in the terminal
```
    $ node
    > require("./app/main")
    [Function]
    > require("./app/main")()
    { VERSION: '1.1.2', ... ]
```

### Set up Browserify
----------------------------
```npm install -g browserify```


To build the bundle with browserify use
--------------------------------------------
```browserify -r ./app/main:app > static/bundle.js```

To check if the server is running

curl 0.0.0.0:3000

To build a Gruntfile.js
-------------------------------------

Create a Gruntfile.js that

uses grunt-contrib-copy to copy html and css to /dist (from app)
use grunt-browserify to bundle instead of using watchify from the command line
use grunt-express to launch the express server

```npm -g install bowerify watchify```

```npm install && bower install```

```watchify app/app.js -t debowerify -o dist/bundle.js -v -d```
