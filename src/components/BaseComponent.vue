<template>
	<v-app>
		<navigation>
			<!-- -->
		</navigation>

		<bar>
			<!-- -->
		</bar>

		<!-- Sizes your content based upon application components -->
		<v-main>
			<!-- Provides the application the proper gutter -->
			<v-container fluid>
				<router-view></router-view>
				<!-- If using vue-router -->
			</v-container>
		</v-main>

		<Footer></Footer>
	</v-app>
</template>
<script>
	import Bar from "./modules/Bar";
	import Navigation from "./modules/Navigation";
	import Footer from "./modules/Footer";

	export default {
		components: {
			Bar,
			Navigation,
			Footer,
		},
	};
</script>
