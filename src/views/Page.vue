<template>
	<div>
		<p v-if="$route.params.id != undefined"> 
			This is the "{{ $route.params.domain }} > {{ $route.params.id }}" page. 
		</p>
		<p v-else> 
			This is the "{{ $route.params.domain }}" page. 
		</p>
	</div>
</template>