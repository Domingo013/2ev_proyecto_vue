import {Cosa} from './cosa.js'

export function Vista2(controlador){
	return Vue.createApp({
		data() {
			return {
				controlador: controlador,
				titulo: 'Vista 2',
				clase: 'inactivo',
				cosa: {
					marca: null,
					tipos: null,
					extras: null,
					anio: null,
					km: null,
					precio: null,
					descripcion: null,
					imagen: null,
					base64: null
				}
			}
		},
		template: 
		`
		<div id="divAnadir" :class="clase">
			<div id="divFormulario">
				<div id="formulario">
					<div>
						<label for="marca">Marca:</label><br>
						<select name="marca" id="marcaMoto" tabindex="4" v-model="cosa.marca">
							<option selected="true" value="0" hidden>Escoge una marca</option>
							<option value="aprilia" role="list">Aprilia</option>
							<option value="ktm" role="list">KTM</option>
							<option value="bmw" role="list">BMW</option>
							<option value="honda" role="list">Honda</option>
							<option value="yamaha">Yamaha</option>
							<option value="mvagusta" role="list">MVAgusta</option>
							<option value="ducati" role="list">Ducati</option>
							<option value="beta" role="list">Beta</option>
						</select>
					</div>
					<label for="tipo" tabindex="5">Tipo de moto:</label><br>
					<input type="radio" name="tipo" id="tipo1" role="radio" v-model="cosa.tipo"/>Sport
					<input type="radio" name="tipo" id="tipo2" role="radio" v-model="cosa.tipo">Naked
					<input type="radio" name="tipo" id="tipo3" role="radio" v-model="cosa.tipo">Trail
					<input type="radio" name="tipo" id="tipo4" role="radio" v-model="cosa.tipo">Enduro
					<input type="radio" name="tipo" id="tipo5" role="radio" v-model="cosa.tipo">Cross<br><br>
					<label for="extra" tabindex="11">Extras:</label><br>
					<input type="checkbox" name="escape" id="extra1" tabindex="12" role="checkbox" v-model="cosa.extra">Escape Akrapovic
					<input type="checkbox" name="asiento" id="extra2" tabindex="13" role="checkbox" v-model="cosa.extra1">Asiento ergonómico
					<input type="checkbox" name="punio" id="extra3" tabindex="14" role="checkbox" v-model="cosa.extra2">Puños calefactables
					<input type="checkbox" name="bluetooth" id="extra4" tabindex="15" role="checkbox" v-model="cosa.extra3">Bluetooth<br><br>
					<div>
						<label for="anio">Año:</label><br>
						<input type="date" name="anio" id="anio" tabindex="16" v-model="cosa.nombre"/>
					</div><br>
					<div>
						<label for="kilometros">Kilometros:</label><br>
						<input type="text" name="kilometros" id="kilometros" title="Introduce los kilómetros de la moto a vender" tabindex="17" v-model="cosa.km"/>
					</div><br>
					<div>
						<label for="precio">Precio:</label><br>
						<input type="text" name="precio" id="precio" title="Introduce el precio de la moto a vender" tabindex="18" v-model="cosa.precio"/>
					</div><br>
					<div>
						<label for="descripcion">Descripción:</label><br>
						<textarea name="descripcion" id="descripcion" title="Introduce el estado o características de la moto a vender" tabindex="19" v-model="cosa.descripcion"></textarea>
					</div><br>
					<input type="file" name="imagen" id="imagenA" tabindex="20" @change=imagen :src=cosa.imagen accept="image/*"/><br><br>
					<input type="checkbox" name="datosFormCheck">Acepto sin reserva la utilización de estos datos en la web.
					<div id="botones_formulario">
						<button id="btnCancelar" tabindex="21" role="button">Cancelar</button>
						<button id="btnAceptar" tabindex="22" role="button" @click=insertar >Aceptar</button>
					</div>
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
			insertar(){
				let objeto = new Cosa(this.cosa.marca, this.cosa.tipos, this.cosa.extras, this.cosa.anio, this.cosa.km, this.cosa.precio, this.cosa.descripcion, this.cosa.base64)
				this.controlador.insertar(objeto)
			},
			imagen(event){
				let imagen = document.getElementById("imagenA")
				const archivo = imagen.files[0]
				const lector = new FileReader()

				lector.addEventListener('load', () => {
					this.cosa.base64 = lector.result
				})
				lector.readAsDataURL(archivo)
			}
		}
	})
}
