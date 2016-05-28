### Cordova-React Starter Kit 
---
##### Prerequisite:
1. NodeJs
2. Cordova
3. Java
4. Ant
5. Android SDK

Instructions for all above tools can be found [here](https://evothings.com/doc/build/cordova-install-windows.html)

##### 1. Install Dependencies:
```
npm install
```
##### 2. Add android platform to Cordova:
```
cordova platform add android
```
##### 3. Build App for your platform
```
cordova build
```
##### 4. Run the app:
```
gulp serve
```

When any change is made in **app** folder gulp:
1. re-transpiles
2. Webpackages
3. Replaces js in www/js
4. Imports the replaced file in the html. (todo: update so that user can pick a name for the file)

**After gulp finishes it's task refresh the browser by clicking on the address bar and pressing enter.**

Project structure after following the steps
```
Cordeact
├───app
├───hooks
├───node_modules
├───platforms
│   └───android
├───plugins
├───www
│	  ├───css
│	  ├───img
│	  ├───js
│	  └───index.html
├───config.xml
├───gulpfile.js
├───package.json
└───webpack.config.js
```
