
const meses = ['enero', 'febrero', 'marzo', 'abril'];

const carrito = [
	{ name: 'tablet', price: 10000 },
	{ name: 'lentes', price: 250 },
	{ name: 'tenis', price: 1031 },
	{ name: 'pantalon', price: 120 },
];


// Saber si exite un valor en un array plano(unimensional)
console.log(meses.includes('enero'));

// Saber si exite en un array bidimensional
console.log(carrito.some(p => p.name === 'tablet'));


// reduce
const total = carrito.reduce((total, producto) => total + producto.price, 0);
console.log(total)
