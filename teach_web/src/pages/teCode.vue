<template>
	<!--教学实例-->
	<div data-teCode-box>
		<TeachBanner :modelChild = "modelFather"></TeachBanner>
		<TeachCode></TeachCode>
		<Footer></Footer>
        <Copyright></Copyright>
	</div>
</template>

<script type="es6">
	import Vue from 'vue';
	import TeachBanner from '~/component/common/TeachBanner';
	import TeachCode from '~/component/common/TeachCode';
	import Footer from '~/component/common/Footer';
    import Copyright from '~/component/common/Copyright';
    
	export default {
		components:{
			TeachBanner,
			TeachCode,
			Footer,
       		Copyright,
		},
		data(){
			return{
				data: {},
				modelFather: {
					srcUrl: require('../assets/img/banner_code.jpg'),
					title: '教学实例',
				}
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
	div[data-teCode-box]{
		
		
		
		
		@include media-xs(){
			
		}
	}
</style>