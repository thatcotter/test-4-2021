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
	}
})
</script>

<template>
	<nav class="navbar">
		<ul>
			<li class="alaska title has-text-white">ALASKA</li>
			<li class="toggle" @click="toggleMenu">
				<input class="" type="checkbox" id="check" v-model="checked"/>
				<label class="" for="check">
				<i @click="toggleMenu" class="fas fa-bars" id="btn"></i>
				<i @click="toggleMenu" class="fas fa-times" id="cancel"></i>
				</label>
			</li>
		</ul>		
	</nav>
</template>

<style lang="scss" scoped>
nav {
	background-color: rgb(30, 70, 113);
	// width: 100vw;
}

ul{
	width: 100%;
	list-style-type: none;
	position: fixed;
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
	padding: 10px 40px;
	float: right;
}

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
		font-size: 30px;
		color: white;
		transition: all 0.5s;
	}
	#cancel {
		position: absolute;
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