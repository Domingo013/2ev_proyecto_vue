export class Idb{
	constructor(controlador) {
        this.controlador=controlador
		const peticion = indexedDB.open('bd1', 2)
        peticion.onerror = evento => {throw 'Error al conectar indexedDB'}
        peticion.onupgradeneeded = evento => {
			this.conexion = evento.target.result
			this.crear()
		}
        peticion.onsuccess = evento => {this.conexion = evento.target.result}
    }
	crear(){
		const tabla = this.conexion.createObjectStore('tablaMotos', { keyPath: 'id', autoIncrement: true })
	}
	listar(callback){                  
		const solicitud = window.indexedDB.open('bd1')
		solicitud.onsuccess = (evento) =>{             
			this.bd = evento.target.result;             
			console.log('Base de datos cargada')            
			const objectStore = this.bd.transaction('tablaMotos', 'readonly').objectStore('tablaMotos')             
			const solicitud = objectStore.getAll()              
			solicitud.onsuccess = () => {callback(solicitud.result)}     
		}
	}
	insertar(objeto, callback){
		const transaccion = this.conexion.transaction(['tablaMotos'], 'readwrite')
		transaccion.onerror = evento => {throw 'Error al insertar'}
		const tabla = transaccion.objectStore('tablaMotos')
		const peticion = tabla.add(objeto)
		peticion.onsuccess = callback
	}
}