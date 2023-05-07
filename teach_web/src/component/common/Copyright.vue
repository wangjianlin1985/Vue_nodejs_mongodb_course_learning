<template>
	<div data-copyright-box>
		<div class="content">Copyright © 2020 All Rights Reserved.   shujie.jiang</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	export default {
		components:{
			
		},
		data(){
			return{
				
			}
		},
		methods: {
			
		},
		mounted(){
			
		},
	}
</script>

<style lang="scss">
	@import '~/assets/css/response.scss';
	div[data-copyright-box]{
		background-color: hsla(0,0%,62%,.1);
		.content{
			width: 90%;
			margin: auto;
			text-align: center;
		    padding: 20px 0px;
    		line-height: 24px;
		}
		@include media-xs(){
			
		}
	}
</style>