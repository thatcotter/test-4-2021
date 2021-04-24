<template>
	<div class="breadcrumb has-succeeds-separator">
		<ol v-bind:class="{invisible: isActive}">
			<li>Section</li>
			<li class="is-active">Page Title</li>
		</ol>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	name: 'Crumbs',
	computed: {
		isActive() {
			return this.$store.state.menuActive
		}
	},
})
</script>

<style lang="scss" scoped>



div{
	background-color: rgb(70, 127, 179);
	// background: salmon;
	z-index: -100;
}

ol {
	padding-left: 30px;
	z-index: -100;
	transition: all 0.25s ease;
}

li {
	z-index: 0;
}

.invisible {
	opacity: 0;
}

</style>