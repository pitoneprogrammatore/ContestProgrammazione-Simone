const jimp = require('jimp');
const canvas = require('canvas');
const faceapi = require('face-api.js');
const faceDetectionNet = faceapi.nets.ssdMobilenetv1;
const {Canvas, Image, ImageData} = canvas;
faceapi.env.monkeyPatch({Canvas, Image, ImageData});
const tesseract = require('tesseract.js');
const tesseractWorker = tesseract.createWorker();
const fileToRead = 'https://www.bitmat.it/wp-content/uploads/2018/12/carta_identit%C3%A0_elettronica-696x391.jpg';
const fileToProcess = 'processed.jpg';
let documentText, faceData;
const log = (text) => console.log(`@@@@@@@@@@@@ ${text} @@@@@@@@@@@@`)
const _init = async () => {
    await tesseractWorker.load();
    await tesseractWorker.loadLanguage('ita');
    await tesseractWorker.initialize('ita');
    //
    await faceDetectionNet.loadFromDisk('models');
    await faceapi.nets.faceLandmark68Net.loadFromDisk('models');
    await faceapi.nets.ageGenderNet.loadFromDisk('models');

    documentText = await processOCR();
    faceData = await processFaceAPI();
    console.log(`${documentText.toLowerCase().indexOf('paten') > -1 ? log('PATENTE') : documentText.toLowerCase().indexOf('pass') > -1 ? log('PASSAPORTO') : ''}\n${documentText}`);
    console.log(parseInt(faceData.age), faceData.gender);
    process.exit(1);
}
const processOCR = async () => {
    const { data: { text } } = await tesseractWorker.recognize(fileToProcess);
    await tesseractWorker.terminate();
    return text;
}
const processFaceAPI = async () => {
    const img = await canvas.loadImage(fileToProcess);
    const faceDetectionOptions = new faceapi.SsdMobilenetv1Options({minConfidence: 0.5}); // getFaceDetectorOptions(faceDetectionNet);
    const face = await faceapi.detectSingleFace(img, faceDetectionOptions).withFaceLandmarks().withAgeAndGender();
    return face;
}
jimp.read(fileToRead, (err, img) => {
    if (err) throw err;
    if (img.bitmap.width > 2000 || img.bitmap.height > 2000) {
        img.resize(1000, jimp.AUTO).threshold({ max: 200 }).write(fileToProcess);
    } else {
        img.threshold({ max: 200 }).write(fileToProcess);
    }
    _init();
});




