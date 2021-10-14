

/** Objetos **/ 

const nombreProducto = {
	name : 'Monitor',
	price: 10_000,
	displonible: true,
	tamaños : ['40"', '30"', '24"']
}




// Agregar propiedades.
nombreProducto.colores = ['azul', 'amarillo', 'blanco'];


// Eliminar una propiedad.
delete nombreProducto.colores;


// Bloquear objetos
Object.freeze(nombreProducto);


//Saber si un objeto esta bloqueado
Object.isFrozen(nombreProducto);


// Hacer varibles con desestructuracion.
const { name, price, displonible } = nombreProducto;


console.log(nombreProducto);

