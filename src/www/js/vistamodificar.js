/**
	@file Contiene la vista de modificar de la aplicación
	@autor Domingo Miño Redondo
**/

import {Vista} from './vista.js'

export class VistaModificar extends Vista{
	/**
		Constructor de la clase
		@param div {HTMLDivElement} Div principal de la vista.
		@param controlador {Controlador} Controlador de la vista.
	**/
	constructor(div, controlador){
		super(div)
		this.controlador = controlador
		this.btnModificar = document.getElementById('btnModificar')
		// this.btnModificar.onclick = this.pulsarModificar.bind(this)

		//this.btnAceptar = document.getElementById('btnAceptar')
		this.btnAceptar = $("#btnAceptarModificar")
		//this.btnAceptar.onclick = this.pulsarAceptar.bind(this)
		//this.btnAceptar.click(this.pulsarAceptar.bind(this))
		this.btnAceptar.button()

		//this.btnCancelar = document.getElementById('btnCancelar')
		this.btnCancelar = $("#btnCancelarModificar")
		//this.btnAceptar.onclick = this.pulsarAceptar.bind(this)
		//this.btnCancelar.click(this.pulsarCancelar.bind(this))
		this.btnCancelar.button()

		this.fecha = $("#anioModificar")
		this.fecha.datepicker()

		this.inputKilometros = $("#kilometros2")
		this.inputKilometros.tooltip()
		this.inputPrecio = $("#precio2")
		this.inputPrecio.tooltip()
		this.inputDescripcion = $("#descripcion2")
		this.inputDescripcion.tooltip()

		this.inputMarca = $("#marcaMoto2")
		this.inputMarca.selectmenu()

	}
	
}