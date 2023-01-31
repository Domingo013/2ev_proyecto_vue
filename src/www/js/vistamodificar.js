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
	}
	
}