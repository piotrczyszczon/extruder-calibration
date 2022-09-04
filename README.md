# Extruder calibration

Calculator app helpful in calibration of ender 3d printers. 
When setting up 3d printer it is required to calibrate E-Step value because otherwise printer may print too thick or to tight. 

The working example is available under: http://piotrczyszczon.com/tools/extruder-calibration

## Dev info

### Requirements
- NodeJs
- npm

### App Management

#### Running the app
```
npm start
```
It will start webpack-dev-server listenning on localhost:8080

#### Building the app
```
npm build:dist
```
It will produce output files into dist/ directory. These files can be then deployed to the remote server.