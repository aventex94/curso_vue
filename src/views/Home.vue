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
		<h1>
			{{ titulosTotales }}
			<br />
			{{ hola }}
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
	import axios from "axios";

	import Titulo from "../components/Titulo";
	export default {
		components: {
			Titulo,
		},
		props: {},
		data() {
			return {
				titulo1: "Esto es un componente",
				leagues: [],
				titulo2: "Esto es un componente 2",

				titulos: {
					titulo1: "esto es un component",
					titulo2: "esto es un component 2",
				},

				partidos: ["Avellaneda", "Matanza", "Adolfo Alsina"],
			};
		},
		mounted() {
			/* console.log("Hola mundo");
			this.mostrarNombre();
			this.titulo1 = "este valor cambia aca"; */

			console.log(this.$store.getters.user);

			this.$store.dispatch("modifUser");

			const options = {
				method: "GET",
				url: "https://api-football-v1.p.rapidapi.com/v2/leagues/country/england/2018",
				headers: {
					"x-rapidapi-key": "65225dac38msh79b92e0eacad9cdp1643fcjsn86d83012722b",
					"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
				},
			};

			axios
				.request(options)
				.then(function (response) {
					this.leagues = response.data;
					localStorage.set("leagues", response.data);
					console.log(localStorage.get("leagues"));
				})
				.catch(function (error) {
					console.error(error);
				});
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
		computed: {
			titulosTotales() {
				return this.titulo1 + " aca se utiliza el computed";
			},
			hola() {
				return this.titulo2 + " Hola como estas";
			},
		},
		watch: {
			titulo1() {
				this.titulo1 = " aca se utiliza el watch";
			},
		},
	};
</script>
<style></style>
