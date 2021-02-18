<template>
	<div>
		<h1 v-for="i in 10" :key="i">
			{{ i }}
		</h1>

		<titulo v-bind:msj="titulo1"> </titulo>

		<br />
		<br />

		<h1 v-for="x in titulos" :key="x">
			{{ x }}
		</h1>

		<h1></h1>
		<ul>
			<li v-for="partido in partidos" :key="partido">
				<h1 v-if="partido == 'Avellaneda'">
					{{ partido }}
				</h1>
			</li>
		</ul>

		<br />

		<titulo msj="pepe"></titulo>

		<button type="submit" @click="mostrarTitulo()"><h1>presionar</h1></button>
	</div>
</template>
<script>
	import Titulo from "../components/Titulo";
	export default {
		components: {
			Titulo,
		},
		props: {},
		data() {
			return {
				titulo1: "Esto es un componente",

				titulo2: "Esto es un componente 2",

				titulos: {
					titulo1: "esto es un component",
					titulo2: "esto es un component 2",
				},

				partidos: ["Avellaneda", "Matanza", "Adolfo Alsina"],
			};
		},
		mounted() {
			console.log("Hola mundo");
			this.mostrarNombre();
		},
		methods: {
			mostrarNombre() {
				console.log("hola");
			},
			mostrarTitulo() {
				console.log(this.titulo1);
				this.mostrarNombre();
			},
			cargarUsuario() {},
		},
		computed: {},
		watchs: {},
	};
</script>
<style></style>
