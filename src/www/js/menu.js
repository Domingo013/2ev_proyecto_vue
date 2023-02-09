export function Menu(controlador, vista1){
	return Vue.createApp({
		data() {
			return {
				controlador: controlador,		// Pasar el parámetro obtenido
				vista1: vista1,
			}
		},
		template: 
		`
		<ul>
            <li><img src="assets/logo1.jpg" alt="logo" id="logo"></li>
			<li><h2 id="listar" tabindex="1" @click=handler1>LISTAR</h2></li>
			<li><h2 id="anadir" tabindex="2" @click=handler2>AÑADIR</h2></li>
			<li><h2 id="modificar" tabindex="3">MODIFICAR</h2></li>
        </ul>
		`,
		methods: {
			handler1(evento){
				console.log('handler1')
				this.controlador.cambiarAVista1()
				this.vista1.listar()
			},
			handler2(evento){
				console.log('handler2')
				this.controlador.cambiarAVista2()
			}
		}
	})
}