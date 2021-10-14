document.addEventListener('DOMContentLoaded', () => {

	crearGaleria();
});


function crearGaleria(){
	const galeriaImagenes = document.querySelector('.galeria-imagenes');

	for( let i = 1; i <= 12;  i++){
		const imagen = document.createElement('img');
		imagen.src = `build/img/thumb/${i}.webp`;

		imagen.dataset.imagenid = i;

		// Añadir evento
		imagen.onclick = mostarImagen;

		const li = document.createElement('li');
		li.appendChild(imagen);


		galeriaImagenes.appendChild(li);
	}
}

function mostarImagen(e){

	const id = Number(e.target.dataset.imagenid);
	
	const imagen = document.createElement('img');
	imagen.src = `build/img/grande/${id}.webp`;
	imagen.classList.add('img-overlay');

	// Hace el zoom de la imagen
	const overlay = document.createElement('div');
	overlay.appendChild(imagen);
	overlay.classList.add('overlay');

	overlay.onclick = function () {
		overlay.remove();
	}

	// Boton para cerrar la imagen
	// const boton = document.createElement('p');
	// boton.textContent = 'x';
	// boton.classList.add('btn-cerrar');
	
	// boton.onclick = function () {
	// 	overlay.remove();
	// }

	// overlay.appendChild(boton);
	
	
	


	// Mostar imagen en grande 
	const body = document.querySelector('body');
	body.appendChild(overlay);

}