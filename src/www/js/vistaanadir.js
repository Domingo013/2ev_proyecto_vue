/**
	@file Contiene el modelo de la vista de añadir de la aplicación
	@autor Domingo Miño Redondo
**/

import {Vista} from './vista.js'
import {Moto} from './moto.js'

/**
	Implementa una vista de inicio.
**/
export class VistaAnadir extends Vista{
	/**
		Constructor de la clase.
		@param div {HtmlDivElement} Div de HTML en el que se desplegará la vista.
	**/
	constructor(div, controlador){
		super(div)
		this.controlador = controlador
		this.btnAceptar = document.getElementById('btnAceptar')
		this.btnAceptar.onclick = this.pulsarAceptar.bind(this)
	}
	pulsarAceptar(){
		// Valores a obtener
		this.marca = document.getElementById('marcaMoto')
		let marca = this.marca.value
		let tipos = []
		this.tipo1 = document.getElementById('tipo1')
		tipos.push(this.tipo1.checked)
		this.tipo2 = document.getElementById('tipo2')
		tipos.push(this.tipo2.checked)
		this.tipo3 = document.getElementById('tipo3')
		tipos.push(this.tipo3.checked)
		this.tipo4 = document.getElementById('tipo4')
		tipos.push(this.tipo4.checked)
		this.tipo5 = document.getElementById('tipo5')
		tipos.push(this.tipo5.checked)
		let extras = []
		this.extra1 = document.getElementById('extra1')
		extras.push(this.extra1.checked)
		this.extra2 = document.getElementById('extra2')
		extras.push(this.extra2.checked)
		this.extra3 = document.getElementById('extra3')
		extras.push(this.extra3.checked)
		this.extra4 = document.getElementById('extra4')
		extras.push(this.extra4.checked)
		this.anio = document.getElementById('anio')
		let anio = this.anio.value
		this.km = document.getElementById('kilometros')
		let km = this.km.value
		this.precio = document.getElementById('precio')
		let precio = this.precio.value
		this.descripcion = document.getElementById('descripcion')
		let descripcion = this.descripcion.value
		this.imagen = document.getElementById('imagen')
		let imagen = this.imagen.files[0]
		//let imagen = this.imagen.value
		if(tipos[0] == true){
			tipos[0] = 'Sport'
		}
		if(tipos[1] == true){
			tipos[1] = 'Naked'
		}
		if(tipos[2] == true){
			tipos[2] = 'Trail'
		}
		if(tipos[3] == true){
			tipos[3] = 'Enduro'
		}
		if(tipos[4] == true){
			tipos[4] = 'Cross'
		}
		if(tipos[0] == true){
			tipos[0] = 'Escape Akrapovic'
		}
		if(extras[1] == true){
			extras[1] = 'Asiento ergonómico'
		}
		if(extras[2] == true){
			extras[2] = 'Puños calefactables'
		}
		if(extras[3] == true){
			extras[3] = 'Bluetooth'
		}

		//Leer y validar los datos del formulario
		// let nombre = 'Ktm'
		//Construyo el objetos
		let objeto = new Moto(marca, tipos, extras, anio, km, precio, descripcion, imagen)
		this.controlador.insertar(objeto)
		// console.log(objeto)

	}
}
