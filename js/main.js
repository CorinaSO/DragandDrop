class PiezaFruta {
	constructor(nombreImagen='./images/piña.jpg',precio=1.45){
		this.objeto = document.createElement("div");
		this.objeto.className="div-fruta";
		this.objeto.draggable="true";
		this.imagen = document.createElement("img");
		this.imagen.className="fruta";
		this.imagen.src=nombreImagen;
		this.objeto.appendChild(this.imagen);
		this.span = document.createElement("span");
		this.span.textContent=precio;
		this.objeto.appendChild(this.span);
	}

	asignarImagen(n){
		var nuevaImagen = document.createElement('img');
		nuevaImagen.className="fruta";
		nuevaImagen.src=n;
		var img = this.objeto.childNodes;
		this.objeto.replaceChild(nuevaImagen,img[0]);
	}
	asignarPrecio(p){
		this.precio=p;
	}
}

function manejoEventos(){
	let list_frutas = document.querySelectorAll('.div-fruta');
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
			setTimeout(function () {
				draggedItem.style.display = 'inline-block';
				// draggedItem = null;
			}, 0);

			// totalcompra+=draggedItem.getElementById("span").textContent
			nelementos++;
			document.getElementById('elementos-cesta').innerHTML="Elementos en la cesta: "+String(nelementos);
			document.getElementById('precio').innerHTML="Precio de la compra: "+calcularImporte();
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
		// console.log(draggedItem);
		this.append(draggedItem);
	});
}

function cargarfruta(){
	for (let i=0; i<18; i++){
		var img = new PiezaFruta();
		var div = document.getElementById('mostrador');

		if (i>5 && i<=11){
			img.asignarImagen('./images/uvas.jpg')
			img.asignarPrecio(2.20);			
		} else if (i>11) {
			img.asignarImagen('./images/naranja.jpg')
			img.asignarPrecio(3.30);		
		}
		div.appendChild(img.objeto);
	}
	manejoEventos();
}

function calcularImporte(){
	var total=0;
	var carrito = document.getElementById("cesta-compra");
	var precios = carrito.getElementsByTagName("span");
	console.log(precios);
	for (let item of precios) {
		total+=parseFloat(item.innerHTML);
	}
	return String(total);
}

// Intento de no recargar la página en el botón reset
// function inicializarElementos(){
//  	var div = document.getElementById('mostrador');
//  	div.innerHTML="";
//  	cargarfruta();
//  	var cesta= document.getElementById('cesta-compra');
//  	cesta.innerHTML="";
// }

// function resetear(){
// 	inicializarElementos();
// }




