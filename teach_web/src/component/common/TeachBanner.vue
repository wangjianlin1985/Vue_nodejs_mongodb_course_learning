<template>
	<div data-teachbanner-box>
		<div class="bannerDiv" >
			<div class="imgDiv">
				<img :src = "modelChild.srcUrl" />
			</div>
			<span class="bannertitle">{{modelChild.title}}</span>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	export default {
		props: {
			modelChild: {}
		},
		data(){
			return{
				
			}
		},
		methods: {},
		mounted(){
//			let imgDiv = document.getElementById('imgDivId');
//			imgDiv.style.backgroundImage = "url(' ../../assets/img/address.png')";
		},
	}
</script>

<style lang="scss">
	@import '~/assets/css/response.scss';
	div[data-teachbanner-box]{
		.bannerDiv{
			position: relative;
		    /*height: 200px;*/
			.imgDiv{
		    	width: 100%;
		    	height: 100%;
		    	>img{
	    		    width: 100%;
				    max-height: 300px;
		    	}
			}
			.bannertitle{
				position: absolute;
			    cursor: default;
			    top: 50%;
			    left: 50%;
			    transform: translate(-50%,-50%);
			    font-size: 24px;
				line-height: 30px;
			}
		}
		@include media-xs(){
			.bannerDiv{
				
			}
		}
	}
</style>