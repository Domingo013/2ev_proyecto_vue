export function Vista1(divMotos, controlador){
	return Vue.createApp({
		data() {
			return {
				controlador: controlador,
				clase: 'inactivo',
				div: divMotos,
				divListar: $('#divListar').eq(1)
			}
		},
		template:
		`
			<div id="divListar" :class="clase">
				<div id="barra-busqueda">
					<input type="text" name="buscar-nombre" tabindex="4"/>
					<button tabindex="5" role="button">Buscar</button>
				</div>
				<div id="motos">
					<div class="tarjeta" v-for="listas in lista">
						<div>
							<img :src=listas.imagen alt="Imagen moto">
						</div>
						<div class="botones">
							<span class="modbo"><i class="fa-solid fa-pen"></i></span>
							<button class="modbo" @click=borrar(listas.id)><i class="fa-solid fa-trash-can"></i></button>
						</div>
					</div>
					<div class="tarjeta" id="tarjetaAnadir">
						<span id="anadir2">+</span>
					</div>
				</div>
			</div>
		`,
		methods: {
			mostrar(activo){
				if (activo)
					this.clase = 'activo'
				else
					this.clase = 'inactivo'
			},
			listar(){
				//this.divMotos.empty()
				const solicitud = window.indexedDB.open('bd1')
				solicitud.onsuccess = ((evento) =>{
					this.bd=evento.target.result;	
					console.log('Base de datos cargada.')
					const objectStore = this.bd.transaction('tablaMotos', 'readonly').objectStore('tablaMotos')
					const solicitud = objectStore.getAll()
					solicitud.onsuccess= (function(){
						this.lista= solicitud.result
						console.log(this.lista)
					}).bind(this)
				}).bind(this)
			},
			borrar(id){
				const peticion = window.indexedDB.open("bd1")
				peticion.onsuccess= ((evento) =>{
					this.bd = evento.target.result;
					const peticion = this.bd.transaction('tablaMotos', 'readwrite').objectStore('tablaMotos').delete(id);
					const peticion2 = this.bd.transaction('tablaMotos', 'readonly').objectStore('tablaMotos').getAll();
				}).bind(this)
			},
		}
	})
}
