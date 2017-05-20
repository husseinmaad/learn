Part 1

## What is webpack? What is babel?

**webpack: build tool is to take all of your files (JavaScript, CSS, etc), then combine and minify those files into a single JavaScript file and a single CSS file. When files are combined and minified, the user of your application can download the website faster.

**bable: Babel is a essentially an ES6 to ECS5 compiler. It allows you to use ES6 features in your projects and then compiles ES5 for you to use in production.


## What is a loader? Give three examples of different kinds of loaders.

Loaders are transformations that are applied on a resource file of your app. They are functions (running in node.js) that take the source of a resource file as the parameter and return the new source.

## What is the difference between path and publicPath when used as keys in the output object?

## What is a babel preset?

 it specifies which babel "presets" or plugins we want to use. The one we will be using is for ES2015. This allows us to use ES2015 modules

## What does test:/\.jsx?$/ mean inside of webpack.config.js?

this is telling the compiler to run bothe type jsx or js.

## What is the webpack-dev-server?

The webpack-dev-server is a little Node.js Express server, which uses the webpack-dev-middleware to serve a webpack bundle.

## What does the default keyword do when exporting?
export


## How can you enable your webpack.config.js to do certain things in production versus development?

The easiest way to minify and compress files for production is to run webpack -p
