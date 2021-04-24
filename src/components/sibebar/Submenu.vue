<template>
	<ul class="sidebar" v-bind:class="{inactive: !isActive}">
		<li>SUBMENU</li>
		<li v-for="link in links" v-bind:key="link.id">{{link}}</li>
	</ul>
</template>

<style lang="scss" scoped>

$width: 250px;

ul {
	transition: all 0.125s ease;
}

ul.sidebar {
	width: $width;
	height: 100%;
	padding: 64px 0;

	position: absolute;
	top: 0;
	right: 0;
	left: auto;

	overflow: hidden;

	list-style-type: none;

	li{
		padding: 16px 24px;
	}
}

@media screen and (min-width: 720px) {
  ul.sidebar {
	right: 55%;
  }
}

ul.inactive {
	width: 0;
}

.domain {
	width: 100%;
	height: 10%;
	li {
		display: block;
	}

}

</style>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	name: 'Submenu',
	props: {
		providedLinks: Array
	},
	data: function() {
		return {
			links: ['these', 'are', 'placeholder', 'links']
		}
	},
	computed: {
		isActive() {
			return this.$store.state.submenuActive
		}
	},
})
</script>