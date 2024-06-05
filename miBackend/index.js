// index.js
const express = require('express');
const bodyParser = require('body-parser');
const PDFDocument = require('pdfkit');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

let saldo = 0;

// Ruta para inicializar la alcancía
app.post('/iniciar-alcancia', (req, res) => {
    try {
        const { montoInicial } = req.body;
        if (montoInicial < 1000) {
            return res.status(400).json({ error: 'El saldo inicial debe ser al menos $1000 COP' });
        }
        saldo = montoInicial;
        res.status(200).json({ message: 'Alcancía iniciada correctamente', saldo });
    } catch (error) {
        res.status(500).json({ error: 'Ocurrió un error al iniciar la alcancía' });
    }
});

// Ruta para agregar dinero a la alcancía
app.post('/agregar-dinero', (req, res) => {
    try {
        const { monto } = req.body;
        saldo += monto;
        res.status(200).json({ message: 'Dinero agregado correctamente', saldo });
    } catch (error) {
        res.status(500).json({ error: 'Ocurrió un error al agregar dinero' });
    }
});

// Ruta para generar PDF con el valor ingresado
app.post('/generar-pdf', (req, res) => {
    try {
        const { monto } = req.body;
        const doc = new PDFDocument();
        const filePath = `./recibo_${Date.now()}.pdf`;

        doc.pipe(fs.createWriteStream(filePath));
        doc.text(`Se ha ingresado un monto de $${monto} COP a la alcancía.`);
        doc.end();

        res.status(200).json({ message: 'PDF generado correctamente', filePath });
    } catch (error) {
        res.status(500).json({ error: 'Ocurrió un error al generar el PDF' });
    }
});


// Nuevo endpoint para obtener el saldo total de la alcancía
app.get('/saldo-total', (req, res) => {
    try {
        res.status(200).json({ saldo });
    } catch (error) {
        res.status(500).json({ error: 'Ocurrió un error al obtener el saldo total' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
