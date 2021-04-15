const tesseract = require('tesseract.js'); // https://github.com/naptha/tesseract.js#tesseractjs
// https://js.libhunt.com/tesseract-js-alternatives
const kerasJS = require('keras-js'); //
const model = new kerasJS.Model({
    filepath: 'patente.jpg',
    gpu: true
})
/*const scriptJs = require('scriptjs');
scriptJs('https://cdn.jsdelivr.net/npm/gpu.js@2.11.3/dist/gpu-browser-core.js', (data) => {
    console.log(data);
})*/
// const { GPU } = import('https://cdn.jsdelivr.net/npm/gpu.js@latest/dist/gpu-browser.min.js'); // https://github.com/gpujs/gpu.js/#readme

const tesseractWorker = tesseract.createWorker({
    logger: m => console.log(m)
});

const _initTesseract = async () => {
    await tesseractWorker.load();
    await tesseractWorker.loadLanguage('ita');
    await tesseractWorker.initialize('ita');
    const { data: { text } } = await tesseractWorker.recognize('patente.jpg');
    console.log(text);
    await tesseractWorker.terminate();
};

// _initTesseract();

