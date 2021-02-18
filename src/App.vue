<template>
	<!-- <base-component></base-component> -->
	<Home />
</template>

<script>
	//import BaseComponent from "./components/BaseComponent";
	import Home from "./views/Home";
	export default {
		name: "App",

		components: {
			//		BaseComponent,
			Home,
		},

		data: () => ({
			//
		}),
	};
</script>
