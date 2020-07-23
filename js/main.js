function manejoEventos(){
	let list_frutas = document.querySelectorAll('.fruta');
	let cesta = document.querySelector('.cesta-compra');

	let draggedItem = null;
	let nelementos=0;

	for (let i = 0; i < list_frutas.length; i++) {
		const fruta = list_frutas[i];
		fruta.addEventListener('dragstart', function () {
			draggedItem = fruta;
			setTimeout(function () {
				fruta.style.display = 'none';
			}, 0)
		});
		
		fruta.addEventListener('dragend', function () {
			console.log(draggedItem);
			setTimeout(function () {
				draggedItem.style.display = 'inline-block';
				draggedItem = null;
			}, 0);
			nelementos++;
			document.getElementById('elementos-cesta').innerHTML="Elementos en la cesta: "+String(nelementos);
		});
	}
	cesta.addEventListener('dragover', function (e) {
		e.preventDefault();
	});
			
	cesta.addEventListener('dragenter', function (e) {
		e.preventDefault();
	});

	cesta.addEventListener('dragleave', function (e) {
		this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
	});

	cesta.addEventListener('drop', function (e) {
		this.append(draggedItem);
	});
}

function cargarfruta(){
	for (let i=0; i<18; i++){
		var img = new Image();
		var div = document.getElementById('mostrador');
		if (i<=5){
			img.src = './images/piña.jpg';
		}else if(i>5 && i<=11){
			img.src = './images/uvas.jpg';	
		}else if (i>11) {
			img.src = './images/naranja.jpg';
		}
 		div.innerHTML += '<img src="'+img.src+'" class="fruta" draggable="true" />'; 
	}
	manejoEventos();
}

function inicializarElementos(){
	var div = document.getElementById('mostrador');
	div.innerHTML="";
	cargarfruta();
	var cesta= document.getElementById('cesta-compra');
	cesta.innerHTML="";
}

function resetear(){
	inicializarElementos();
}




