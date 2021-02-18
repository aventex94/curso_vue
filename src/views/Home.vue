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
		<br />
		<titulo msj="lalalala"></titulo>
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
			};
		},
		methods: {
			mostrarTitulo() {
				console.log(this.titulo1);
			},
		},
	};
</script>
