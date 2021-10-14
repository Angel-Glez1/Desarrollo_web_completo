document.addEventListener('DOMContentLoaded', () => {
	
	eventListeners();
	darkMode();

});

function darkMode(){

	const prefiereDarkMode = window.matchMedia('(prefers-scheme: dark)');

	if (prefiereDarkMode.matches){

		document.body.classList.add('dark-mode');

	}else {

		document.body.classList.remove('dark-mode');

	}

	prefiereDarkMode.addEventListener('change', () => {
		if (prefiereDarkMode.matches) {

			document.body.classList.add('dark-mode');

		} else {

			document.body.classList.remove('dark-mode');

		}
	});

	const botonDarkMode = document.querySelector('.dark-mode-boton');
	botonDarkMode.addEventListener('click', activeDrakMode)
}

function activeDrakMode(){
	document.body.classList.toggle('dark-mode');
}

function eventListeners(){
	const movilMenu = document.querySelector('.movil-menu');

	movilMenu.addEventListener('click', navegacionResponsive)
}

function navegacionResponsive(){
	const navegacion = document.querySelector('.navegacion');

	navegacion.classList.toggle('mostar');
		
}