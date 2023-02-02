/**
	@file Contiene la vista del listar de la aplicación
	@autor Domingo Miño Redondo
**/

import {Vista} from './vista.js'

/**
	Vista del Listar
	Contiene la tabla de listado.
**/
export class VistaListar extends Vista{
	/**
		Constructor de la clase
		@param div {HTMLDivElement} Div principal de la vista.
		@param controlador {Controlador} Controlador de la vista.
	**/
	constructor(div, controlador){
		super(div)
		this.controlador = controlador

		//this.btnListar = document.getElementById('listar')
		this.btnListar = $("#listar")
		//this.btnListar.onclick = this.pulsarListar.bind(this)
		this.btnListar.click(this.pulsarListar.bind(this))
		//this.divMotos = document.getElementById('motos')
		this.divMotos = $("#motos")

	}

	pulsarListar(){
		const solicitud = window.indexedDB.open('bd1')
		solicitud.onsuccess = (evento) =>{
			//borrar el divMotos
			/*while (this.divMotos.firstChild)
				this.divMotos.firstChild.remove()*/
			this.divMotos.empty()
			this.bd = evento.target.result;
			console.log('Base de datos cargada')
			const objectStore = this.bd.transaction('tablaMotos', 'readonly').objectStore('tablaMotos')
			const solicitud = objectStore.getAll()
			solicitud.onsuccess = (function(){
				let motos = solicitud.result
				for (let moto of motos){
					this.crearTarjetas(moto)
				}
				//this.divTarjetaAnadir = document.createElement("div")
				//this.divTarjetaAnadir.classList.add('tarjeta')
				//this.divTarjetaAnadir.setAttribute("id","tarjetaAnadir")
				this.divTarjetaAnadir = $("<div class='tarjeta' id='targetaAnadir'>")
				//this.divMotos.appendChild(this.divTarjetaAnadir)
				this.divMotos.append(this.divTarjetaAnadir)

				//this.spanAnadir = document.createElement("span")
				//this.spanAnadir.setAttribute("id","anadir2")
				this.spanAnadir = $("<p id='anadir2'>")
				this.spanAnadir.text("+")
				//this.divTarjetaAnadir.appendChild(this.spanAnadir)
				this.divTarjetaAnadir.append(this.spanAnadir)
				//this.tarjetaAnadir.onclick = this.pulsarAnadir.bind(this)
				this.divTarjetaAnadir.click(this.pulsarAnadir.bind(this))
			}).bind(this)
		}
	}

	pulsarAnadir(){
		this.controlador.pulsarNavAnadir()
	}

	crearTarjetas(moto){
		//this.divTarjeta = document.createElement("div")
		//this.divTarjeta.classList.add('tarjeta')
		this.divTarjeta = $("<div class='tarjeta'>")
		//this.divMotos.appendChild(this.divTarjeta)
		this.divMotos.append(this.divTarjeta)
		
		//this.divImagen = document.createElement("div")
		this.divImagen = $("<div>")
		//this.divTarjeta.appendChild(this.divImagen)
		this.divTarjeta.append(this.divImagen)
		//this.imagen = document.createElement("img")
		//this.imagen.setAttribute('src', moto.imagen)
		this.imagen = $("<img>")
		this.imagen.attr("src",moto.imagen)			
		//this.divImagen.appendChild(this.imagen)
		this.divImagen.append(this.imagen)

		//this.divBotones = document.createElement("div")
		//this.divBotones.classList.add('botones')
		this.divBotones = $("<div class='botones'>")
		//this.divTarjeta.appendChild(this.divBotones)
		this.divTarjeta.append(this.divBotones)

		//this.spanEditar = document.createElement("span")
		//this.spanEditar.classList.add('modbo')
		this.spanEditar = $("<span class='modbo'>")
		//this.iconoEditar = document.createElement("i")
		//this.iconoEditar.classList.add("fa-solid")
		//this.iconoEditar.classList.add("fa-pen")
		this.iconoEditar = $("<i class='fa-solid fa-pen'>")
		//this.spanEditar.appendChild(this.iconoEditar)
		this.spanEditar.append(this.iconoEditar)
		//this.divBotones.appendChild(this.spanEditar)
		this.divBotones.append(this.spanEditar)
		
		//this.spanBorrar = document.createElement("span")
		//this.spanBorrar.classList.add('modbo')
		this.spanBorrar = $("<span class='modbo'>")
		//this.iconoBorrar = document.createElement("i")
		//this.iconoBorrar.classList.add("fa-solid")
		//this.iconoBorrar.classList.add("fa-trash-can")
		this.iconoBorrar  = ("<i class='fa-solid fa-trash-can'>")
		//this.spanBorrar.appendChild(this.iconoBorrar)
		this.spanBorrar.append(this.iconoBorrar)
		//this.divBotones.appendChild(this.spanBorrar)
		this.divBotones.append(this.spanBorrar)

	}
}