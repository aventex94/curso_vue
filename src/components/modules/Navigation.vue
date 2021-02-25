<template>
	<v-navigation-drawer
		dark
		src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
		permanent
		app
	>
		<v-list>
			<v-list-item v-for="([icon, text], i) in items" :key="i" link>
				<v-list-item-icon>
					<v-icon>{{ icon }}</v-icon>
				</v-list-item-icon>

				<v-list-item-content>
					<v-list-item-title>
						{{ text }}
					</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
		</v-list>
	</v-navigation-drawer>
</template>

<script>
	export default {
		data: () => ({
			items: [
				["mdi-email", "Inbox"],
				["mdi-account-supervisor-circle", "Supervisors"],
				["mdi-clock-start", "Clock-in"],
			],
		}),
	};
</script>
