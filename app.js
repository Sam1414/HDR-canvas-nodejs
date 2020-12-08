// const predict = require('./predict.js');
const express = require('express');
const app = express();
// const tf = require('@tensorflow/tfjs-node');
// const cv = require('opencv4nodejs')

app.use(function (req, res, next) {
    console.log(`${new Date()} - ${req.method} requests for ${req.url}`);
    next();
});

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//     next();
// });

app.use(express.static('static'))

// let model;
// (async function () {
//     // model = await tf.loadLayersModel('http://127.0.0.1:1501/tfjs-models/model_1/model.json');
//     // model = await tf.loadLayersModel('localstorage://HDR_model_1.keras');
//     model = await tf.loadLayersModel('file:///Users/LEGION/Documents/C.O.D.E/Buildathon-Teams-Work/Handwritten-Digit-Recognition/HDR-canvas-nodejs/static/json_model/model.json');
//     console.log('Model Loaded');
//     // console.log(model);
// })();

// cv.imread(img);


module.exports = app;

// var path = require('path');

// function tf_load_status() {
//     const status = document.getElementById('status');
//     status.innerText = 'Loaded TensorFlow.js - version: ' + tf.version.tfjs;
//     console.log('Hello TensorFlow');
// }