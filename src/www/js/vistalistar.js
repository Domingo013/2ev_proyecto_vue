/**
	@file Contiene la vista del listar de la aplicación
	@autor Domingo Miño Redondo
**/

import {Vista} from './vista.js'
import {Moto} from './moto.js'

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

		this.btnListar = document.getElementById('listar')
		this.btnListar.onclick = this.pulsarListar.bind(this)
		this.divMotos = document.getElementById('motos')
		/*
		for(let i=0;i<=2;i++){

			this.divTarjeta = document.createElement("div")
			this.divTarjeta.classList.add('tarjeta')
			this.divMotos.appendChild(this.divTarjeta)

			this.divImagen = document.createElement("div")
			this.divTarjeta.appendChild(this.divImagen)
			this.imagen = document.createElement("img")
			this.imagen.classList.add("img")
			this.imagen.src = this.listado.imagen
			this.divImagen.appendChild(this.imagen)

			this.divBotones = document.createElement("div")
			this.divBotones.classList.add('botones')
			this.divTarjeta.appendChild(this.divBotones)

			this.spanEditar = document.createElement("span")
			this.spanEditar.classList.add('modbo')
			this.iconoEditar = document.createElement("i")
			this.iconoEditar.classList.add("fa-solid")
			this.iconoEditar.classList.add("fa-pen")
			this.spanEditar.appendChild(this.iconoEditar)
			this.divBotones.appendChild(this.spanEditar)
			
			this.spanBorrar = document.createElement("span")
			this.spanBorrar.classList.add('modbo')
			this.iconoBorrar = document.createElement("i")
			this.iconoBorrar.classList.add("fa-solid")
			this.iconoBorrar.classList.add("fa-trash-can")
			this.spanBorrar.appendChild(this.iconoBorrar)
			this.divBotones.appendChild(this.spanBorrar)

		}*/
	}
	pulsarListar(){
		const solicitud = window.indexedDB.open('bd1')
		solicitud.onsuccess = (evento) =>{
			//borrar el divMotos
			while (this.divMotos.firstChild)
				this.divMotos.firstChild.remove()
			this.bd = evento.target.result;
			console.log('Base de datos cargada')
			const objectStore = this.bd.transaction('tablaMotos', 'readonly').objectStore('tablaMotos')
			const solicitud = objectStore.getAll()
			solicitud.onsuccess = (function(){
				let motos = solicitud.result
				for (let moto of motos){
					this.crearTarjetas(moto)
					let p = document.createElement('p')
					p.textContent = moto.imagen
					this.divMotos.appendChild(p)
				}
			}).bind(this)
		}
	}

	crearTarjetas(moto){
		this.divTarjeta = document.createElement("div")
		this.divTarjeta.classList.add('tarjeta')
		this.divMotos.appendChild(this.divTarjeta)

		this.divImagen = document.createElement("div")
		this.divTarjeta.appendChild(this.divImagen)
		this.imagen = document.createElement("img")
		this.imagen.classList.add("img")
		this.imagen.setAttribute('src', moto.imagen)
		this.divImagen.appendChild(this.imagen)

		this.divBotones = document.createElement("div")
		this.divBotones.classList.add('botones')
		this.divTarjeta.appendChild(this.divBotones)

		this.spanEditar = document.createElement("span")
		this.spanEditar.classList.add('modbo')
		this.iconoEditar = document.createElement("i")
		this.iconoEditar.classList.add("fa-solid")
		this.iconoEditar.classList.add("fa-pen")
		this.spanEditar.appendChild(this.iconoEditar)
		this.divBotones.appendChild(this.spanEditar)
		
		this.spanBorrar = document.createElement("span")
		this.spanBorrar.classList.add('modbo')
		this.iconoBorrar = document.createElement("i")
		this.iconoBorrar.classList.add("fa-solid")
		this.iconoBorrar.classList.add("fa-trash-can")
		this.spanBorrar.appendChild(this.iconoBorrar)
		this.divBotones.appendChild(this.spanBorrar)
	}
}