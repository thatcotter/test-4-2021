<script lang="ts">
import Vue from 'vue'
import { mapActions } from "vuex";
export default Vue.extend({
	name: 'Navbar',
	data: function() {
		return {
			checked: false
		}
	},
	methods: {
		...mapActions([
			'toggleMenu',
			'toggleSubMenu'
		])
	},
	computed: {
		storeChecked: {
			get() {
				return this.$store.state.menuActive
			},
			set(value) {
				this.$store.commit('setMenu', value)
			}
		}
	}
})
</script>

<template>
	<nav class="navbar">
		<div class="navbar-brand">
			<router-link to="/" class="navbar-item alaska title has-text-white">ALASKA</router-link>
		</div>
		<div class="navbar-menu is-active">
			<!-- <div class="navbar-start is-active">
				<a class="navbar-item alaska title has-text-white">ALASKA</a>
			</div> -->
			<div class="navbar-end is-active">
				<div class="navbar-item is-active toggle" @click="toggleMenu">
					<input class="" type="checkbox" id="check" v-model="storeChecked"/>
					<label class="" for="check">
					<i @click="toggleMenu" class="fas fa-bars" id="btn"></i>
					<i @click="toggleMenu" class="fas fa-times" id="cancel"></i>
					</label>
				</div>
			</div>
		</div>
	</nav>
</template>

<style lang="scss" scoped>

.navbar-menu{
	background-color: rgb(30, 70, 113);
}

nav {
	background-color: rgb(30, 70, 113);
	// width: 100vw;
}

ul{
	width: 100%;
	list-style-type: none;
	// position: fixed;
	margin: 0;
	padding: 0;
}

li {
	float: left;
	display: block;
	text-decoration: none;
}

.alaska {
	padding: 10px 50px;
}

.toggle {
	padding: 10px 50px;
	// background: salmon;
	// float: right;
}

// @media screen and (max-width: 720px) {
//   .toggle {
//     // padding: auto;
//   }
// }

// @media screen and (max-width: 720px) {
//   .toggle {
//     width: 50px;
//   }
// }

label {
	float: right;
	border-radius: 3px;
	cursor: pointer;
	transition: all 0.5s ease;

	#btn {
		position: absolute;
		// margin-top: -10px;
		font-size: 30px;
		color: white;
		transition: all 0.5s;
	}
	#cancel {
		position: absolute;
		// margin-top: -10px;
		z-index: 1111;
		font-size: 30px;
		opacity: 0;
		color: white;
		transition: all 0.5s ease;
	}
}

#check {
	display: none;
}

#check:checked ~ label #btn {
	font-size: 30;
	opacity: 0;
	animation: rotation 0.25s;
	pointer-events: none;
}

#check:checked ~ label #cancel{
	font-size: 30;
	opacity: 1;
	animation: rotation 0.25s;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
}
</style>