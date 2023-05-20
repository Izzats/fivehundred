CREATE DATABASE quinientoscuatroclean;

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  precio INT NOT NULL,
  nombre VARCHAR(50) NOT NULL,
  urlImg VARCHAR(100) NOT NULL
);

INSERT INTO products (precio,nombre,urlImg) VALUES (630, 'Paño Amarillo x 3', 'https://i.ibb.co/N6TFNYm/Dise-o-sin-t-tulo-4.png');
INSERT INTO products (precio,nombre,urlImg) VALUES (1020, 'Paño Amarillo x 5', 'https://i.ibb.co/sj9MBsh/33.png');
INSERT INTO products (precio,nombre,urlImg) VALUES (690, 'Servilletas Cocktail', 'https://i.ibb.co/MP7DvX2/30.png');
INSERT INTO products (precio,nombre,urlImg) VALUES (4750, 'Detergente Matic Ultra 3 Lt', 'https://i.ibb.co/qJydm89/37.png');

ALTER TABLE products ADD precio_costo INT NOT NULL default 0;
ALTER TABLE products ADD existencias INT NOT NULL default 0;


UPDATE products SET precio_costo = 500, existencias = 20 WHERE precio = 630;
UPDATE products SET precio_costo=700, existencias=20 WHERE precio = 1020;
UPDATE products SET precio_costo=500, existencias=20 WHERE precio = 690;
UPDATE products SET precio_costo=3890, existencias=20 WHERE precio = 4750;

CREATE TABLE ventas (
  id SERIAL PRIMARY KEY,
  nombre_comprador VARCHAR(50) NOT NULL,
  direccion VARCHAR(60) NOT NULL,
  departamento VARCHAR(10) NOT NULL,
  telefono INT NOT NULL,
  mail VARCHAR(50) NOT NULL,
  compra JSON NOT NULL,
  total INT NOT NULL,
  efectivo BOOLEAN NOT NULL DEFAULT FALSE,
  transferencia BOOLEAN NOT NULL DEFAULT FALSE,
  cambio INT NOT NULL,
  diferencia INT NOT NULL
);
/*id	nombre_comprador	direccion	departamento	telefono	mail	compra	total	efectivo	transferencia	cambio	diferencia	idped	fechaped	pedpagado	pednopagado	nopagadomas48*/


ALTER TABLE ventas ADD idPed VARCHAR(20) NOT NULL DEFAULT '00000000000000';
ALTER TABLE ventas ADD fechaPed timestamp NOT NULL DEFAULT current_timestamp;
ALTER TABLE ventas ADD pedPagado BOOLEAN NOT NULL DEFAULT FALSE;
ALTER TABLE ventas ADD pedNoPagado BOOLEAN NOT NULL DEFAULT FALSE;
ALTER TABLE ventas ADD noPagadoMas48 BOOLEAN NOT NULL DEFAULT FALSE;


    {
        "precio": 4750, 
        "id": 37,
        "title": "Detergente Matic Ultra 3 Lt",
        "thumbnailUrl": "https://i.ibb.co/qJydm89/37.png"
    }

/*########################################################################################*/
CREATE DATABASE menu_escolar;
CREATE TABLE orders (
  id SERIAL,
  date DATE NOT NULL,
  is_rectified SMALLINT,
  observations TEXT NOT NULL CHECK (length(observations) < 1024),
  school_id INT NOT NULL DEFAULT 0,
  vegetarian INT NOT NULL CHECK (vegetarian >= 0 AND vegetarian <= 1000),
  vegetarian_real INT NOT NULL CHECK (vegetarian_real >= 0 AND vegetarian_real <= vegetarian),
  celiac INT NOT NULL CHECK (celiac >= 0 AND celiac <= 1000),
  celiac_real INT NOT NULL CHECK (celiac_real >= 0 AND celiac_real <= celiac),
  standard INT NOT NULL CHECK (standard >= 0 AND standard <= 1000),
  standard_real INT NOT NULL CHECK (standard_real >= 0 AND standard_real <= standard),
  caloric INT NOT NULL CHECK (caloric >= 0 AND caloric <= 1000),
  caloric_real INT NOT NULL CHECK (caloric_real >= 0 AND caloric_real <= caloric),
  ethnic INT NOT NULL CHECK (ethnic >= 0 AND ethnic <= 1000),
  ethnic_real INT NOT NULL CHECK (ethnic_real >= 0 AND ethnic_real <= ethnic)
);

CREATE TABLE schools (
  id SERIAL PRIMARY KEY,
  name VARCHAR(45) NOT NULL,
  email VARCHAR(45) NOT NULL UNIQUE,
  password VARCHAR(45) NOT NULL
);

ALTER TABLE schools ADD COLUMN admin BOOLEAN NOT NULL DEFAULT FALSE;
INSERT INTO schools (name, email, password, admin) VALUES ('Admin Junaeb', 'admin@junaeb.cl', '12345678', true);

INSERT INTO orders (
date,
observations,
school_id,
vegetarian,
vegetarian_real,
celiac,
celiac_real,
standard,
standard_real,
caloric,
caloric_real,
ethnic, 
ethnic_real
) VALUES ('24/11/2022', 'Todos completos', 2,'120', '0', '190','0', '30','0', '45', '0', '12', '0');


SELECT 
id,
date,
observations,
school_id,
vegetarian,
vegetarian_real,
celiac,
celiac_real,
standard,
standard_real,
caloric,
caloric_real,
ethnic, 
ethnic_real
FROM orders WHERE = $1


SELECT *
FROM pruebas
WHERE fecha BETWEEN '20121201' AND '20121202'