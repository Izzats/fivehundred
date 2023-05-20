const items = document.getElementById('items')
const footer = document.getElementById('footer')
const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content
const mDatDes = document.getElementById('mDatDes')
const fragment = document.createDocumentFragment()

const formDatDes = document.getElementById('datosDespacho');

// Obtener todos los elementos de entrada del formulario
const inputs = formDatDes.getElementsByTagName('input');

$(document).ready(function () {
  $('#pago-transaccion').change(function () {
    if ($(this).is(':checked')) {
      $('#pago-efectivo').prop('disabled', true);

    } else {
      $('#pago-efectivo').removeAttr('disabled');
      (document.getElementById("campos-banco")).classList.add("d-none");
    }
  });

  $('#pago-efectivo').change(function () {
    if ($(this).is(':checked')) {
      $('#pago-transaccion').prop('disabled', true);
    } else {
      $('#pago-transaccion').removeAttr('disabled');
      (document.getElementById("campos-efectivo")).classList.add("d-none");
      (document.getElementById("campos-cambio")).classList.add("d-none");
    }
  });
});
// Arreglo productos de carrrito
let carrito = {};
let hitems;
let id;
let nombre;
let precio;
let precio_costo;
let existencias;
// Funcion para agregar producto a carrito 
$('.product-card').on('click', function () {

  id = $(this).attr('id')
  nombre = $(this).find('h5').text();
  precio = parseFloat(($(this).find('p').text()).replace('$', ''));
  precio_costo = parseFloat(($(this).find('#precio_costo').val()).replace('$', ''));
  existencias = parseFloat(($(this).find('#existencias').val()).replace('$', ''));
  const producto = {
    id: id,
    nombre: nombre,
    precio: precio,
    cantidad: 1,
    precio_costo: precio_costo,
    existencias: existencias
  }

  $(this).css({ opacity: 0.5 });
  if (carrito.hasOwnProperty(producto.id)) {
    producto.cantidad = carrito[producto.id].cantidad + 1
  }
  carrito[producto.id] = { ...producto }
  toggleItemsCount()
  console.log(carrito)
  // addItemModal(producto)
  // localStorage.setItem('carrito', JSON.stringify(producto))
  pintarCarrito();

})
// Funcion para mostrar el contador del carrito
const toggleItemsCount = () => {
  hitems = Object.keys(carrito).length;
  if (hitems > 0) {
    $('#shoppingcaritems').text(hitems)
    $('#shoppingcaritems').show()
  } else {
    $('#shoppingcaritems').hide()
  }
}
let bloqueo = false;
mDatDes.addEventListener('click', e => {
  bloqueo = true;
  $(document).ready(function () {
    $('.sumaResta').css('background-color', 'rgb(240, 240, 240)');
  });
})
items.addEventListener('click', e => {
  btnAccion(e)
})

const pintarCarrito = () => {

  items.innerHTML = ''
  Object.values(carrito).forEach(producto => {
    console.log(producto.cantidad)
    console.log(producto.precio)
    templateCarrito.querySelector('th').textContent = producto.id
    templateCarrito.querySelectorAll('td')[0].textContent = producto.nombre
    templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
    templateCarrito.querySelector('.btn-success').dataset.id = producto.id
    templateCarrito.querySelector('.btn-outline-success').dataset.id = producto.id
    templateCarrito.querySelector('span').textContent = producto.cantidad * producto.precio

    const clone = templateCarrito.cloneNode(true)
    fragment.appendChild(clone)

  })
  items.appendChild(fragment)

  pintarFooter()
  localStorage.setItem('carrito', JSON.stringify(carrito))
}




// Función para mostrar los productos del carito activando Modal, de lo contrario lanzar mensaje de vacío
$('#shoppingcar').on('click', function () {
  if (Object.keys(carrito).length > 0) {
    $('.modal').modal('show')
  } else {
    alert('Su carrito aún está vacío')
  }
})

// Funcion para eliminar los vaciar carrito, dejar contador en 0, eliminar opacity y esconder modal. 
$('#clearitems').on('click', function () {
  carrito = {}
  localStorage.clear()
  toggleItemsCount()
  $('.product-card').css({ opacity: 1 });
  $('#items').empty()
  pintarFooter();
  bloqueo = false;
  // $('.modal').modal('hide')
  (document.getElementById("datosDespacho")).classList.add("d-none");

  if ($('#pago-transaccion').is(':checked')) {
    (document.getElementById("campos-banco")).classList.add("d-none");

  }
  if ($('#pago-efectivo').is(':checked')) {
    (document.getElementById("campos-efectivo")).classList.add("d-none");
    (document.getElementById("campos-cambio")).classList.add("d-none");
  }

  // Recorrer todos los elementos de entrada y limpiarlos
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].type !== 'checkbox') {
      inputs[i].value = '';
      inputs[1].value = 'Gran Av. José Miguel Carrera 4310, San Miguel';
    } else {
      inputs[i].checked = false;
    }
  }

})


const pintarFooter = () => {
  footer.innerHTML = ''
  if (Object.keys(carrito).length === 0) {
    footer.innerHTML = `
      <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>
      `
    return
  }
  const nCantidad = Object.values(carrito).reduce((acc, { cantidad }) => acc + cantidad, 0)
  const nPrecio = Object.values(carrito).reduce((acc, { cantidad, precio }) => acc + cantidad * precio, 0)

  templateFooter.querySelectorAll('td')[0].textContent = nCantidad
  templateFooter.querySelector('span').textContent = nPrecio

  const clone = templateFooter.cloneNode(true)
  fragment.appendChild(clone)
  footer.appendChild(fragment)

}

const btnAccion = e => {
  console.log('btnAccion e.target', e.target)
  if (e.target.classList.contains('btn-success') && bloqueo == false) {
    const producto = carrito[e.target.dataset.id]
    if (producto.existencias > producto.cantidad) {
      producto.cantidad = carrito[e.target.dataset.id].cantidad + 1
      carrito[e.target.dataset.id] = { ...producto }
      toggleItemsCount()
      pintarCarrito()
    } else {
      return alert('Cantidad inválida para este producto');
    }
  }

  if (e.target.classList.contains('btn-outline-success') && bloqueo == false) {
    const producto = carrito[e.target.dataset.id]

    producto.cantidad--
    if (producto.cantidad == 0) {
      $('.product-card').css({ opacity: 1 });
      delete carrito[e.target.dataset.id]
    }
    toggleItemsCount()
    pintarCarrito()
  }

  e.stopPropagation()
}
