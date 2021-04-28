<template>
	<div class="breadcrumb has-succeeds-separator">
		<ol v-bind:class="{invisible: isActive}" v-if="$route.params.id != undefined">
			<li>{{$route.params.domain.split('_').join(' ')}}</li>
			<li class="is-active">{{$route.params.id.split('_').join(' ')}}</li>
		</ol>
		<ol v-bind:class="{invisible: isActive}" v-else>
			<li>{{$route.params.domain.split('_').join(' ')}}</li>
			<li>{{$route.params.domain.split('_').join(' ')}}</li>
			<!-- <li class="is-active">{{$route.params.id}}</li> -->
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

</style>