import { Menu } from './menu.js'
import { Vista1 } from './vista1.js'
import { Vista2 } from './vista2.js'
import { Modelo } from './modelo.js'

class Controlador {
	constructor(){
		$(window).on('load',this.iniciar.bind(this))
	}
	iniciar(){
		this.modelo = new Modelo(this)
		
		//this.vista1 = new Vista1(this).mount('#vista1')
		this.vista1 = new Vista1(this.divMotos, this).mount('#motos')
		this.divMotos = $('#motos')

		this.vista2 = new Vista2(this).mount('#vista2')

		this.menu = new Menu(this, this.vista1).mount('#nav')

		this.cambiarAVista1()
	}
	/*listar(){
		this.modelo.listar(this.listarOk.bind(this))
	}*/
	listarOk(moto){
		this.vista1.cargarLista(moto)
	}
	insertar(objeto){
		this.modelo.insertar(objeto, this.insertarOK.bind(this))
	}
	insertarOK(){
		console.log('La inserción ha ido bien')
	}
	cambiarAVista1(){
		console.log('cambiarAVista1')
		this.vista2.mostrar(false)
		this.vista1.mostrar(true)
	}
	cambiarAVista2(){
		console.log('cambiarAVista2')
		this.vista1.mostrar(false)
		this.vista2.mostrar(true)
	}
	getModelo(){
		return this.modelo
	}
}
const app = new Controlador()