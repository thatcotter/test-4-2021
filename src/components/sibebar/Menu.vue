<template>
	<div class="menu" v-bind:class="{active: isActive}">
		<div class="title3 greeting">Hello, Donovan Beck</div>
		
		<ul class="list" v-bind:class="{active: isActive}">
			<li class="menu-item" @click="toggleSubMenu" v-for="item in items" v-bind:key="item.id">
				<i @click="toggleSubMenu" class="far fa-file-image"></i>
				{{item.value.toUpperCase()}}
			</li>
			<Submenu></Submenu>
		</ul>
	</div>	
</template>

<script lang="ts">
import Vue from 'vue'
import Submenu from './Submenu.vue'
import { mapActions } from "vuex";

export default Vue.extend({
	name: 'Menu',
	components: {
		Submenu
	},
	computed: {
		isActive() {
			return this.$store.state.menuActive
		}
	},
	methods: {
		...mapActions([
			'toggleSubMenu'
		])
	},
	data: function() {
		return {
			// isActive: false,
			items: [
				{
					value: "My Schedule & Bidding",
					subvalues: []
				},
				{
					value: "Safety",
					subvalues: []
				},
				{
					value: "Training",
					subvalues: []
				},
				{
					value: "Administration",
					subvalues: []
				},
				{
					value: "Catering & Brand",
					subvalues: []
				},
				{
					value: "Hotels",
					subvalues: []
				},
				{
					value: "My Base",
					subvalues: []
				},
				{
					value: "Recognition",
					subvalues: []
				},
				{
					value: "My Leadership Team",
					subvalues: []
				}
			]
		}
	}
})
</script>

<style lang="scss" scoped>
*{
	background-color: rgb(70,127,179);
	overflow: hidden;
	z-index: 10;
}

.menu {
	height: 100%;
	z-index: 10;
	margin-top: -50px;
	margin-left: -100vw;
	margin-right: 100vw;
	transition: all 0.5s ease;

	div.greeting {
		padding: 5%;
		padding-bottom: 10%;
		color: white;
		z-index: 10;
	}

	ul .list {
		height: 100%;
		opacity: 0;
		transition: all 1s ease;
	}

	ul .list .active {
		opacity: 1;
	}

	i {
		padding-right: 12px;
		z-index: inherit;
	}

	.menu-item {
		padding: 10% 10%;
		border: 0;
		border-top: 1px solid #ffffff88;
		transition: all 0.5s ease;
		z-index: inherit;
		transition: all 0.5s ease;
	}

	.menu-item:active {
		background: white;
	}
}

@media screen and (min-width: 720px) {
  .menu {
    width: 45%;
  }
}

@media screen and (max-width: 720px) {
  .menu {
    width: 100%;
  }
}

div.active {
	margin-left: 0;
	margin-right:0;
	left: 100vw;
}



</style>