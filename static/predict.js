// Loading Pretrained Model in JSON
let model;
(async function () {
    model = await tf.loadLayersModel('http://127.0.0.1:3000/json_model/model.json');
    // model = await tf.loadLayersModel('localstorage://HDR_model_1.keras');
    // model = await tf.loadLayersModel('file:///Users/LEGION/Documents/C.O.D.E/Buildathon-Teams-Work/Handwritten-Digit-Recognition/HDR-canvas-nodejs/static/json_model/model.json');
    console.log('Model Loaded');
})();


var prediction = document.getElementById('prediction');

var tf_img, resized_img, normalized_img, final_img, output, label;

// Starting Prediction Procedure
prediction.addEventListener('click', function () {
    console.log('Predict Click Detected');

    if (typeof imgData === 'undefined') {
        console.log('Empty Canvas Image');
        alert('Empty Canvas!');
    }
    else {
        tf_img = tf.browser.fromPixels(imgData, 1);
        resized_img = tf.image.resizeBilinear(tf_img, [28, 28]);
        resized_img = resized_img.toFloat();

        // Reversing Pixel Values
        // In Model Black - 255, White - 0
        // In canvas Black - 0, White - 255
        resized_img = tf.abs(resized_img.sub(tf.scalar(255)));

        // Normalizing Data
        normalized_img = resized_img.div(tf.scalar(255));

        // Adding a fourth dimension || Batch of 1 image
        final_img = normalized_img.expandDims(0);

        // Feeding Image to Model
        output = model.predict(final_img);
        output = output.reshape([10]);
        output.print();

        // Getting Label from Categorical Output
        label = output.argMax(0);
        label.print();

        prediction.innerHTML = 'Prediction: ' + label.dataSync();
    }
});

// Clearing Canvas By Reloading Page
document.getElementById('clear').addEventListener('click', function () {
    location.reload();
});