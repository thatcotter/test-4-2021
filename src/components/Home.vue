<template>
	<div>
		<Navbar></Navbar>
		<Crumbs></Crumbs>
		<Menu></Menu>
	</div>
</template>


<script lang="ts">
import Vue from 'vue'
import Navbar from './Navbar.vue'
import Crumbs from "./Crumbs.vue";
import Menu from "./sibebar/Menu.vue";

export default Vue.extend({
	name: "Home",
	components: {
		Navbar,
		Crumbs,
		Menu
	}
})
</script>

<style lang="scss">
	Menu {
		margin-top: -100px;
	}
</style>