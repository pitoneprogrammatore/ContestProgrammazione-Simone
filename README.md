# document-analyzer 

> Codice JavaScript fatto per:
> - trasformare l'immagine del fronte di un documento personale in testo tramite [Tesseract OCR](https://tesseract.projectnaptha.com/)
> - analizzare la foto del documento stesso e riconoscere Genere ed Età della persona tramite [face-api.js](https://justadudewhohacks.github.io/face-api.js/docs/index.html)

## Requisiti
[Node.js](https://nodejs.org/it/)

## Installazione
Comando da lanciare dal terminale all'interno della cartella del progetto (dove si trova il file package.json)
```console
npm install
```

## Utilizzo
Cambiare il valore della costante `fileToRead` con l'URL o la path locale del file che vogliamo analizzare, di seguito 2 esempi:

```js
const fileToRead = 'https://www.bitmat.it/wp-content/uploads/2018/12/carta_identit%C3%A0_elettronica-696x391.jpg';
```
```js
const fileToRead = './patente.jpg';
```
ed infine lanciare il comando
```console
node analyze.js
```

## Riflessione
Ho scritto questo codice per cercare di trasmettere la mia idea di programmazione.<br><br>
Oggi giorno abbiamo librerie Open Source che ci sonsentono di fare qualsiasi cosa con poche righe di codice e si possono adattare ad ogni caso d'uso.<br><br>
In particolare le librerie che ho usato io si basano su algoritmi di Machine Learning già allenati che ovviamente non sono perfetti ma hanno un buon livello di feedback.
> Di solito si tende a utilizzare la GPU per questo tipo di elaborazioni ma avendo 50 righe a disposizione non ho potuto implementarlo. 
> Lascio comunque i riferimenti: 
> - [Tensorflow-GPU](https://www.npmjs.com/package/@tensorflow/tfjs-node-gpu)
> - [GPU.js](https://gpu.rocks/#/)
