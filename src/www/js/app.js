/**
	@file Contiene el controlador principal de la aplicación
	@autor Domingo Miño Redondo
**/
import {Modelo} from './modelo.js'

import {Vista} from './vista.js'
import {VistaNav} from './vistanav.js'
import {VistaListar} from './vistalistar.js'
import {VistaAnadir} from './vistaanadir.js'
import {VistaModificar} from './vistamodificar.js'

/**
 * Controlador de la aplicación
**/
class Controlador{
	/**
		Constructor de la clase
		Llama al método iniciar al cargarse la página
	**/
	constructor(){
		this.modelo = new Modelo(this)
		window.onload = this.iniciar.bind(this)
	}
	/**
		Inicia la aplicación
		Crea el modelo y las vistas.
	**/
	iniciar(){
		this.modelo = new Modelo()

		this.header = document.getElementsByTagName('header')[0]
		this.divListar = document.getElementById('divListar')
		this.divAnadir= document.getElementById('divAnadir')
		this.divModificar = document.getElementById('divModificar')

		this.vistaNav = new VistaNav(this, this.header)
		this.vistaListar = new VistaListar(this.divListar, this)
		this.vistaAnadir = new VistaAnadir(this.divAnadir, this)
		this.vistaModificar = new VistaModificar(this.divModificar, this)

		this.vista = new Vista(this, document.getElementById('divAnadir'))
	}
	insertar(objeto){
		this.modelo.insertar(objeto, this.insertarOK.bind(this))
	}
	insertarOK(){
		console.log('La inserción ha ido bien')
	}
	/**
		Oculta todas las vistas.
	**/
	ocultarVistas(){
	    this.vistaListar.mostrar(false)
	    this.vistaAnadir.mostrar(false)
	    this.vistaModificar.mostrar(false)
	}
	/**
		Atención a la pulsación del lisar.
	**/
	pulsarNavListar(){
		this.ocultarVistas()
		this.vistaListar.mostrar(true)
	}
	/**
		Atención a la pulsación del añadir.
	**/
	pulsarNavAnadir(){
		this.ocultarVistas()
		this.vistaAnadir.mostrar(true)
	}
	/**
		Atención a la pulsación del enlace al modificar
	**/
	pulsarNavModificar(){
		this.ocultarVistas()
		this.vistaModificar.mostrar(true)
	}
	/**
	 * Devuelve el modelo de la aplicación
	 * @return {Modelo} El modelo de la aplicación
	 **/
	getModelo(){
		return this.modelo
	}
}

const app = new Controlador()