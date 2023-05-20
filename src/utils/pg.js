require("dotenv").config();
const { Pool } = require("pg");
// DB_USER=postgres
// DB_HOST=localhost
// DB_PASS=postgre
// DB_NAME=quinientoscuatroclean
// DB_PORT=5432
const pool = new Pool ({ 
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});
// const pool = new Pool ({ 
//   user: "postgres",
//   host: "localhost",
//   password: "postgre",
//   database: "quinientoscuatroclean",
//   port: 5432
// });
//email, nombre, password, anos_experiencia, especialidad, foto
//email, nombre, pass, exp, esp, foto.name

const mostrarProductos = async() => {
  let client;
  try {
    client = await pool.connect();
    const result = await client.query({
      text: "SELECT * FROM products ORDER BY id;"
    });
    return result.rows;
  } catch ({ error, message }) {
    return { error, message };
  } finally {
    if (client) client.release(pool.end);
  }
}
/*id	nombre_comprador	direccion	departamento	telefono	mail	compra	total	efectivo	transferencia	cambio	diferencia	idped	fechaped	pedpagado	pednopagado	nopagadomas48*/
const creaVen = async(values) => {
  let client;
  try {
    client = await pool.connect();
    const result = await client.query({
      text: 'INSERT INTO ventas (nombre_comprador ,direccion ,departamento ,telefono ,mail ,compra ,total ,efectivo ,transferencia ,cambio ,diferencia, idPed, fechaPed, linkW) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *;',
      values
    });
    return result.rows;
  } catch ({ code, message }) {
    return { code, message };
  } finally {
    if (client) client.release(pool.end);
  }
}

// const obtenerSkater = async(values) => {
//   let client;
//   try {
//     client = await pool.connect();
//     const result = await client.query({
//       text: "SELECT id, email, nombre, anos_experiencia, especialidad, foto, estado FROM skaters WHERE email = $1 AND password = $2;",
//       values
//     });
//     return result.rows[0];
//   } catch ({ error, message }) {
//     return { error, message };
//   } finally {
//     if (client) client.release(pool.end);
//   }
// }

// const modificarInfoSkater = async(values) => {
//   let client;
//   try {
//     client = await pool.connect();
//     const result = await client.query({
//       text: 'UPDATE skaters SET email = $2, nombre = $3, password = $4, anos_experiencia = $5, especialidad = $6 WHERE id = $1 RETURNING *;',
//       values
//     });
//     return result.rows[0];
//   } catch ({ error, message }) {
//     return { error, message };
//   } finally {
//     if (client) client.release(pool.end);
//   }
// }

// const eliminarSkater = async(values) => {
//   let client;
//   try {
//     client = await pool.connect();
//     const result = await client.query({
//       text: 'DELETE FROM skaters WHERE id = $1 RETURNING *;',
//       values
//     });
//     return result.rowCount;
//   } catch ({ error, message }) {
//     return { error, message };
//   } finally {
//     if (client) client.release(pool.end);
//   }
// }

// const mostrarAdmin = async() => {
//   let client;
//   try {
//     client = await pool.connect();
//     const result = await client.query({
//       text: "SELECT * FROM admin;"
//     });
//     return result.rows;

//   } catch ({ error, message }) {
//     return { error, message };
//   } finally {
//     if (client) client.release(pool.end);
//   }
// }

// const modificarEstado = async (values) =>{
//   let client;
//   try {
//     client = await pool.connect();
//     const result = await client.query({
//       text: 'UPDATE skaters set estado = $1 WHERE id = $2 RETURNING*;',
//       values
//     });
//     return result.rows[0];
//   } catch ({ error, message }) {
//     return { error, message };
//   } finally {
//     if (client) client.release(pool.end);
//   }

// }

// module.exports = { crearSkater, mostrarProductos, obtenerSkater, modificarInfoSkater, eliminarSkater, mostrarAdmin, modificarEstado };
module.exports = { mostrarProductos, creaVen };
