const express = require('express');
const { creaTxt } = require('./txtCreate.js');
//const { envioMensaje } = require('./whatsappEnvio.js')
const { send } = require("./mailer.js");
const { mostrarProductos, creaVen } = require('./pg.js');
const exphbs = require('express-handlebars');
const { link } = require('pdfkit');
const app = express();

app.listen(process.env.PORT || 3000);

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');

// const listaImg = ['banana', 'cebollas', 'lechuga', 'papas', 'pimenton', 'tomate']

app.use('*/bootstrap', express.static('./node_modules/bootstrap/dist', { root: process.cwd() }));
app.use('*/jquery', express.static('./node_modules/jquery/dist', { root: process.cwd() }));
app.use('*/assets', express.static('./public/assets', { root: process.cwd() }));
app.use(express.json());
// app.get('/', (req, res) => res.render('home', {listaImg}));
app.get('/', async (req, res) => {
  const productos = await mostrarProductos();

  const listaImg = productos.map(producto => producto.urlimg);
  console.log(listaImg)
  res.render('home', { productos })
});

app.get('/policy', async (req, res) => {
  res.render('policy')
});

app.get('/thanks', async (req, res) => {
  res.render('thanks')
});

app.post("/creaVen", async (req, res) => {
console.log(req.body)
const { nombre, direccion, departamento, celular, email, compra, total, efectivo, transferencia, cambio, diferencia, idPed, fechaPed, linkW } = req.body;
const compraJson = {};
for (const [key, value] of Object.entries(compra)) {
  compraJson[key] = {
    id: value.id,
    nombre: value.nombre.replace(/¤/g, 'ño'),
    precio: value.precio,
    cantidad: value.cantidad,
    precio_costo: value.precio_costo,
    existencias: value.existencias
  };
}

try {
    const respuesta = await creaVen([nombre, direccion, departamento, celular, email, compraJson, total, efectivo, transferencia, cambio, diferencia, idPed, fechaPed, linkW]);
    const response = await creaTxt(req.body);

    if (response == 'Comprobante creado exitosamente') { 
      //await envioMensaje([nombre,celular,email,total,efectivo]);
      await send({ email,nombre,celular,total,efectivo,idPed,linkW });
    }
    console.log('resp ',respuesta)
    console.log('compraJson ', compraJson)

    res.status(200).json(JSON.stringify({ nombre, direccion, departamento, celular, email, compraJson, total, efectivo, transferencia, cambio, diferencia, idPed, fechaPed, linkW }));
    //res.send(respuesta);

  } catch (e) {
    res.status(500).send({
      error: `Algo salió mal .. ${e}`,
      code: 500
    })
  }
});


 

// app.post("/subirSkater", async (req, res) => {
//   const { email, nombre, pass, exp, esp } = req.body;
//   const { foto } = req.files;
//   const urlImg = `public/assets/imgs/${foto.name}`;

//   try {
//     await crearSkater([email, nombre, pass, exp, esp, urlImg]);
//     foto.mv(urlImg, (err) => { if (err) return res.status(500).json({ code: 500, message: 'Ha ocurrido un error en el servidor', error: err }) });
//     // res.status(201).send(skater);
//     res.status(201).render("login");
//   } catch (e) {
//     res.status(500).send({
//       error: `Algo salió mal .. ${e}`,
//       code: 500
//     })
//   }
// });




app.all('*', (req, res) => res.status(404).json({ code: 404, message: 'Page not found' }));

module.exports = { app };