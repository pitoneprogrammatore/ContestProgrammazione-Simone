const jimp = require('jimp');
const canvas = require('canvas');
const faceapi = require('face-api.js');
const faceDetectionNet = faceapi.nets.ssdMobilenetv1;
const {Canvas, Image, ImageData} = canvas;
faceapi.env.monkeyPatch({Canvas, Image, ImageData});
const tesseract = require('tesseract.js');
const tesseractWorker = tesseract.createWorker();
const fileToRead = 'https://www.fake-id.com/uploads/product/buy-fake-international-boater-license-front.jpg';
const fileToProcess = 'processed.jpg';
let documentText, faceData;
const log = (title, text) => console.log(`@@@@@@@@@@@@ - ${title} - @@@@@@@@@@@@\n${text}\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n`)
const _init = async () => {
    // Inizializzazione OCR e FaceAPI
    await tesseractWorker.load();
    await tesseractWorker.loadLanguage('ita');
    await tesseractWorker.initialize('ita');
    await faceDetectionNet.loadFromDisk('../models');
    await faceapi.nets.faceLandmark68Net.loadFromDisk('../models');
    await faceapi.nets.ageGenderNet.loadFromDisk('../models');
    // Elaborazione
    documentText = await processOCR();
    faceData = await processFaceAPI();
    // Stampa risultato
    log(`       OCR       `,`\n${documentText}`);
    log(`Face Recognition`,`\nEtà: ${parseInt(faceData?.age).toString()} - Sesso: ${faceData?.gender}\n`);
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
    return {...await faceapi.detectSingleFace(img, faceDetectionOptions).withFaceLandmarks().withAgeAndGender()};
}

jimp.read(fileToRead, (err, img) => {
    if (err) throw err;
    if (img.bitmap.width > 2000 || img.bitmap.height > 2000) {
        img.resize(1000, jimp.AUTO).write(fileToProcess);
    } else {
        img.write(fileToProcess);
    }
    _init();
});
