const fs = require("fs");
const PDFDocument = require('pdfkit');

const doc = new PDFDocument();;
const creaTxt = async (data) => {

  let total2 = 0;
  let detalle2 = `\n| Producto           | Precio  | Cantidad | Subtotal   |\n`;

console.log('txtCreate ',data)

for (const [id, item] of Object.entries(data.compra)) {
  const subtotal = item.precio * item.cantidad;
  const nombreProducto = item.nombre.padEnd(15);
  const precio = `$${item.precio.toFixed(2)}`.padEnd(8);
  const cantidad = item.cantidad.toString().padEnd(8);
  const subtotalStr = `$${subtotal.toFixed(2)}`.padEnd(10);
  detalle2 += `| ${nombreProducto} | ${precio} | ${cantidad} | ${subtotalStr} |\n`;
  total2 += subtotal;
}

let endLine = '';
if(data.efectivo) { 
  endLine = `Muchas gracias por su compra, el despacho se efectuará previo acuerdo entregándole el cambio justo de ${data.cambio}.`
}else{
  endLine = `Muchas gracias por su compra, por favor, envíenos su Comprobante de Transferencia para coordinar su despacho`
}

// let padding = " ".repeat(Math.floor((consoleWidth - detalle2Length) / 2));
// let centeredDetalle2 = `${padding}${detalle2}`;
      // const lineOfData = `${detalle} \n TOTAL\t\t${total}`;
      const lineOfData2 = `${detalle2}
       TOTAL  ${total2}
       
       
       ${endLine}`;
      // fs.appendFile('dataResponse/responses.txt', lineOfData, { encoding: 'utf8', flag: 'a' }, (error) => {
      //   if (error) throw error;
      //   console.log('Nueva linea añadida correctamente');
      // });
      // // doc.text(lineOfData);
      // generateHeader(doc); // Invoke `generateHeader` function.
      // generateFooter(doc);
      // doc.font('Times-Roman');
      // doc.fontSize(13).text(lineOfData2, 50, 308, { width: 514 });
      // doc.rect(50, 100, 500, 400).stroke();
      // doc.pipe(fs.createWriteStream('dataResponse/documento.pdf'));
      // doc.end();
      // https://www.brcline.com/blog/generating-pdf-in-nodejs
try {
  doc
      .image('public/assets/img/504-Clean2.png', 50, 50, { width: 150})
      .fillColor('#000')
      .fontSize(20)
      .text('COMPROBANTE DE COMPRA', 275, 50, {align: 'right'})
      .fontSize(10)
      .text(`Pedido N°: ${data.idPed}`, {align: 'right'})
      .text(`Due: ${data.fechaPed}`, {align: 'right'})
      .text(`Saldo: ${data.total}`, {align: 'right'})
      .moveDown()
      .text(`Dir. despacho:\n ${data.direccion}\nDepto. ${data.departamento}`, {align: 'right'})


      // doc.image('public/assets/img/504-Clean2.png', { fit: [250,250] })

      doc.moveDown(5);
      // doc.moveUp(1, {relative: true});
      const beginningOfPage = 50
      const endOfPage = 550
      doc.moveTo(beginningOfPage,200)
            .lineTo(endOfPage,200)
            .stroke()
            
      doc.text(`Detalle de compra: `, 50, 210)
      doc.moveDown(2);
      doc.text(lineOfData2, {
        bold: true,
        underline: false,
        align: 'justify',
      });

    doc.pipe(fs.createWriteStream(`dataResponse/documento.pdf`));
    // write out file
    doc.end()
      return 'Comprobante creado exitosamente';
} catch ({ error, message }) {
  return { error, message };
}

};


module.exports = { creaTxt };