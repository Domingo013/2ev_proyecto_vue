export class Idb{
	constructor(){
		const peticion = indexedDB.open('bd1', 2)
		peticion.onerror = evento => {throw 'Error al conectar indexedDB'}
		peticion.onupgradeneeded = evento => {
			this.conexion = evento.target.result
			this.crear()
        	}
		peticion.onsuccess = evento => {this.conexion = evento.target.result}
	}
	crear(){
		const tabla = this.conexion.createObjectStore('tablaMotos', {autoIncrement: true})
	}
	insertar(objeto, callback){
		const transaccion = this.conexion.transaction(['tablaMotos'], 'readwrite')
		transaccion.onerror = evento => {throw 'Error al insertar'}
		const tabla = transaccion.objectStore('tablaMotos')
		const peticion = tabla.add(objeto)
  		peticion.onsuccess = callback
	}
	Eliminar(objeto, callback){
		const transaccion = this.conexion.transaction(['tablaMotos'], 'readwrite')
		transaccion.onerror = evento => {throw 'Error al eliminar'}
		const tabla = transaccion.objectStore('tablaMotos')
		const peticion = tabla.delete(objeto)
  		peticion.onsuccess = callback
	}
}