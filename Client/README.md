## GIS - client side

## Installation
####0. Download and Install [NodeJS](https://nodejs.org)
####1.  Make sure you have [bower](http://bower.io/), [grunt-cli](https://www.npmjs.com/package/grunt-cli) and  [npm](https://www.npmjs.org/) installed globally
 
 
```sh
// Linux users
$ sudo apt-get install npm
$ sudo npm install -g grunt-cli
$ sudo npm install -g bower

// Windows users
apt-get install npm
npm install -g grunt-cli
npm install -g bower
```
####3. On the command prompt run the following commands

- bower install is ran from the postinstall
```sh
$ npm install 
```
- a shortcut for `grunt serve`
```sh
$ npm start
```
- a shortcut for `grunt serve:dist` to minify the files for deployment
```sh
$ npm run dist 
```
