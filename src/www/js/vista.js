/**
	@file Contiene la vista de la aplicación
	@autor Domingo Miño Redondo
**/

/**
	Implementa una vista.
	Debería ser abstracta.
**/
export class Vista{
	/**
		Constructor de la clase
	**/
	constructor(div, controlador){
		this.div = div
		this.controlador = controlador
	}
	/**
		Muestra u oculta el div principal de la vista.
		@param ver {Boolean} True muestra la vista y false la oculta.
	**/
	mostrar(ver){
		if (ver)
			this.div.style.display = 'block'
		else
			this.div.style.display = 'none'
	}
}
