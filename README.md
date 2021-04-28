# Analizzatore Documenti 

> Codice Javascript fatto per:
> - trasformare l'immagine del fronte di un documento personale in testo tramite [Tesseract OCR](https://tesseract.projectnaptha.com/)
> - analizzare la foto del documento stesso facendo un Face Recognition per riconoscere Genere ed Età della persona tramite [face-api.js](https://justadudewhohacks.github.io/face-api.js/docs/index.html)

## Utilizzo
Caricare il documento che vogliamo analizzare e lo script partità in automatico.

## Riflessione
Ho scritto questo codice per cercare di trasmettere la mia idea di programmazione.<br><br>
Ho scritto volutamente tutto in vanilla Javascript per trasmettere la mia idea di semplicità.<br><br>
Oggi giorno abbiamo librerie Open Source che ci sonsentono di fare qualsiasi cosa con poche righe di codice e si possono adattare ad ogni caso d'uso.<br><br>
In particolare le librerie che ho usato io si basano su algoritmi di Machine Learning già allenati che ovviamente non sono perfetti ma hanno un buon livello di feedback.
> Di solito si tende a utilizzare la GPU per questo tipo di elaborazioni ma avendo 50 righe a disposizione non ho potuto implementarlo. 
> Lascio comunque i riferimenti: 
> - [Tensorflow-GPU](https://www.npmjs.com/package/@tensorflow/tfjs-node-gpu)
> - [GPU.js](https://gpu.rocks/#/)

## Bonus
Mi sono preso la libertà di implementare lo stesso esempio anche in NodeJS (NodeJS/analyze.js) ma lo script ufficiale per il contenst sta tutto in index.html.
