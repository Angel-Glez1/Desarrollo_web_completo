document.addEventListener('DOMContentLoaded', () => {
	scrollNav();

	navegacionFija();
})


function navegacionFija(){

	const barra = document.querySelector('.header');



	// Registar el Intersection Observer
	const observer = new IntersectionObserver(function(entries){

		// IsIntersecting ase referencia a cuando un elemento no se muestra en el html.
		if(entries[0].isIntersecting){
			barra.classList.remove('fijo');
		}else{
			barra.classList.add('fijo');
		}

	})

	// Elemto Observar
	observer.observe(document.querySelector('.sobre-festival'))
}


function scrollNav(){
	const itemsNav = document.querySelectorAll('.navegacion-principal a');

	itemsNav.forEach(item => {
		item.addEventListener('click', (e) => {
			e.preventDefault();


			const section = document.querySelector( e.target.attributes.href.value);

			section.scrollIntoView({
				behavior: 'smooth'
			})

		})
	});


	
}
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