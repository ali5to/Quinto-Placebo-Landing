'use strict';

/*
 *	GARCIA, ALI

 */
const d = document;
const boxTotal = d.getElementById('boxTotal');
const boxCantidad = d.getElementById('boxCantidad');
const boxTotal2 = d.getElementById('boxTotal2');
const boxCantidad2 = d.getElementById('boxCantidad2');
const miniCarrito = d.getElementById('minicarrito');
const carrito1 = d.getElementById('carrito1');
const productos = d.querySelector('#productos');
const contacto = d.querySelector('#contacto');
const nosotros = d.querySelector('#nosotros');
const slider = d.querySelector('#slider');
const navbarList = d.querySelector('#navbar-list');
const subscribe = d.querySelector('aside');
const iframe = d.querySelector('iframe');
const catTitle = d.querySelector('.catalogo-title');
const carritoFlotante = d.getElementById('flotante');
const cartTable = d.getElementById('cartTable');
const checkout = d.getElementById('checkout');


const cerrarModal = (e) => {

    document.querySelector('.modal').remove();

}

const cerrarModalProducto = (e) => {

    document.querySelector('.modal-producto').remove();

}

const cerrarModalGracias = (e) => {
	localStorage.clear();
	location.reload();
    document.querySelector('.modal').remove();

}


function graciasSuscripcion(){

	let modalGraciasTarjeta = d.createElement('div');
	modalGraciasTarjeta.id = 'modal-gracias-tarjeta';
	modalGraciasTarjeta.className = 'modal';
	d.querySelector('body').appendChild(modalGraciasTarjeta);
	
	let boxMsj = d.createElement('div');
	boxMsj.className = 'box-msj';
		modalGraciasTarjeta.appendChild(boxMsj);
		
	let logo = d.createElement('img');
	logo.src = 'img/marca.jpg';
	logo.alt = 'Logo de Qüinto Placebo';
	logo.className = 'mx-auto d-block';
	boxMsj.appendChild(logo);
	
	let gTarjeta = d.createElement('h2');
	gTarjeta.className = 'text-white text-center';
	gTarjeta.innerText = 'Gracias por susbcribirte :)';
	boxMsj.appendChild(gTarjeta);

	let gTarjetaP = d.createElement('p');
	boxMsj.appendChild(gTarjetaP);
	boxMsj.className = 'text-white text-center';
	gTarjetaP.innerText = 'Te enviaremos mails cada que hayan nuevas promociones.';

	let closeBtnGT = d.createElement('a');
	closeBtnGT.innerText = 'X';
	closeBtnGT.href = "#";
	closeBtnGT.addEventListener('click', cerrarModal);
	modalGraciasTarjeta.appendChild(closeBtnGT);

};

function infoAlumno(){

	let modalGraciasTarjeta = d.createElement('div');
	modalGraciasTarjeta.id = 'modal-alumno';
	modalGraciasTarjeta.className = 'modal';
	d.querySelector('body').appendChild(modalGraciasTarjeta);
	
	let boxMsj = d.createElement('div');
	boxMsj.className = 'box-msj';
	modalGraciasTarjeta.appendChild(boxMsj);
	boxMsj.innerHTML = `
	<section class="container mb-5">
				<div class="row justify-content-center">
					<h2 class="col-lg-4">Datos del Alumno</h2>
					<div class="col-12 bg-white">
						<div class="nosotros-cont mx-auto py-5 d-flex flex-column flex-md-row align-items-center">
                            <figure>
                                    <picture id="pic-alumno" class="col-12 text-center">
                                    <img src="img/fotodeperfil.png" class="figure-img img-fluid" alt="Ali Garcia">
                                  </picture>
                            </figure>
                            <div id="data-alumno">
                                <h3 class="text-left">Alí García</h3>
                                <ul class="list-unstyled">
                                    <li><span class="font-weight-bold">Carrera:</span> Diseño y Programación Web</li>
                                    <li><span class="font-weight-bold">Materia:</span> Interacción con Dispositivos Móviles</li>
                                    <li><span class="font-weight-bold">Comisión:</span> A</li>
                                    <li><span class="font-weight-bold">Turno:</span> Mañana</li>
                                    <li><span class="font-weight-bold">Cuatrimestre:</span> 2</li>
                                    <li><span class="font-weight-bold">Año:</span> 2020</li>
                                    <li><span class="font-weight-bold">Docente:</span> Omar Toyos</li>
                                    <li><span class="font-weight-bold">Carácter de entrega:</span> Final</li>
                                    
                                </ul>
                            </div>
						</div>
					</div>
				</div>
			</section>
	`;
		

	let closeBtnGT = d.createElement('a');
	closeBtnGT.innerText = 'X';
	closeBtnGT.href = "#";
	closeBtnGT.addEventListener('click', cerrarModal);
	modalGraciasTarjeta.appendChild(closeBtnGT);

};

function submitForm (){
	let formSubmit = d.getElementById('subscribe');
	formSubmit.onsubmit = graciasSuscripcion;
}

function infoAlumnoOpen (){
	let infoAlumnoBtn = d.getElementById('info-alumno');
	infoAlumnoBtn.onclick = infoAlumno;
}

submitForm();
infoAlumnoOpen();




