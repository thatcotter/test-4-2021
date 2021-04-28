<template>
  <div id="app">
    <div id="nav">
      <Navbar></Navbar>
      <Crumbs id="crumbs"></Crumbs>
      <Menu id="menu"></Menu>
    </div>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view id="content" class="container"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from './components/Navbar.vue'
import Crumbs from "./components/Crumbs.vue";
import Menu from "./components/sibebar/Menu.vue";

export default Vue.extend({
	components: {
		Navbar,
		Crumbs,
		Menu
	}
})
</script>

<style lang="scss">
#nav {
	// position: absolute;
	width: 100%;
	z-index: 10;

	#crumbs {
		position: relative;
		z-index: -1;
	}

	#menu {
		z-index: 100;
	}

}

#content {
	// position:fixed;
	z-index: -1;
	margin-top: -100%;
	position: relative;
	color: black;
}
</style>
