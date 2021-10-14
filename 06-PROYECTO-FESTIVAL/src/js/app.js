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