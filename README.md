# Analizzatore Documenti in formato immagine

> Codice Javascript fatto per:
> - trasformare l'immagine di un documento in testo tramite [Tesseract OCR](https://tesseract.projectnaptha.com/)
> - analizzare l'eventuale foto del documento stesso facendo un Face Recognition per riconoscere Genere ed Età della persona tramite [face-api.js](https://justadudewhohacks.github.io/face-api.js/docs/index.html)
> > Ho importato [Bootstrap](https://getbootstrap.com/) solo per avere un minino di classi CSS da poter usare.

## Utilizzo
La pagina index.html deve essere aperta da un qualsiasi Web Server.
Una volta aperta la pagina possiamo caricare il documento che vogliamo analizzare (documento di testo generico, documento d'identità o altro, vedi "image/example.jpg" e "image/lorem.png") e lo script partità in automatico.

## Riflessione
Ho scritto questo codice per cercare di comunicare la mia idea di programmazione.<br><br>
Ho scritto volutamente tutto in vanilla Javascript per trasmettere la semplicità con cui oggi giorno possiamo usare librerie Open Source che ci consentono di fare qualsiasi cosa con poche righe di codice e si possono adattare ad ogni caso d'uso.<br><br>
In particolare le librerie che ho usato io si basano su algoritmi di Machine Learning già allenati che ovviamente non sono perfetti ma hanno un buon livello di feedback.
> Di solito si tende a utilizzare l'accellerazione GPU per questo tipo di elaborazioni ma avendo 50 righe a disposizione non ho potuto implementarlo. 
> Lascio comunque i riferimenti: 
> - [Tensorflow-GPU](https://www.npmjs.com/package/@tensorflow/tfjs-node-gpu)
> - [GPU.js](https://gpu.rocks/#/)

## Bonus
Mi sono preso la libertà di implementare lo stesso esempio anche in NodeJS (NodeJS/analyze.js) ma lo script ufficiale per il contenst sta tutto in index.html.
