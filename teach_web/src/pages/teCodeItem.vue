<template>
	<!--教学实例Item-->
	<div data-teCode-box>
		<TeachBanner :modelChild = "modelFather"></TeachBanner>
		<!--<pre>{{data}}</pre>-->
		<div class="codeContent">
			<span class="title">功能描述</span>
			<div class="content">
				<div class="leftDiv">{{data.content}}</div>
				<div class="rightDiv">
					<img :src="data.imgUrl"/>
				</div>
			</div>
			<span class="title titleCode">详细代码</span>
			<div class="codeDiv">
				<Richtext :address="data.textUrl"></Richtext>
			</div>
		</div>
		<Footer></Footer>
        <Copyright></Copyright>
	</div>
</template>

<script>
	import Vue from 'vue';
	import {$v, txtUrl, AJAX_ADMIN, TIPS_TIEM, DateFormat} from '~/assets/js/const.js';
	import TeachBanner from '~/component/common/TeachBanner';
	import Richtext from '~/component/common/RichText';
	import Footer from '~/component/common/Footer';
    import Copyright from '~/component/common/Copyright';

	export default {
		components:{
			TeachBanner,
			Richtext,
			Footer,
       		Copyright,
		},
		data(){
			return{
				txtUrl:txtUrl,
				data: {},
				modelFather: {
					srcUrl: require('../assets/img/banner_codeitem.jpg'),
					title: '',
				}
			}
		},
		methods: {
			
		},
		beforeMount(){
//			console.log(this.$route.query.obj)
		},
		mounted(){
			//json 通过路由传递 转成字符串传递
			this.data = JSON.parse(this.$route.query.obj)
			this.modelFather.title = this.data.title;
		},
	}
</script>

<style lang="scss">
	@import '~/assets/css/response.scss';
	div[data-teCode-box]{
		.codeContent{
			width: 80%;
			margin: 20px auto;
			.title{
				font-size: 18px;
			    line-height: 24px;
			    padding-right: 20px;
		        padding-bottom: 5px;
		        display: inline-block;
	            border-bottom: 2px solid rgba(4, 0, 255, 0.91);
			}
			.titleCode{
				border-bottom: 2px solid rgb(79, 188, 41);
			}
			.content{
			    display: flex;
				align-items: center;
				/*justify-content: space-between;*/
				justify-content: flex-start;
			    padding-left: 30px;
				.leftDiv{
				    width: 70%;
				    text-indent: 2em;
			        line-height: 24px;
    				font-size: 16px;
				    padding: 30px 0px;
				}
				.rightDiv{
				    width: 64px;
    				height: 64px;
				}
			}
			.codeDiv{
		    	padding: 20px 0px;
	    	    width: 100%;
			}
		}
		@include media-sm(){
			.codeContent{
				width: 90%;
				.content{
					.rightDiv{
						padding-left: 10px;
					}
				}
			}
		}
		@include media-xs(){
			.codeContent{
				width: 90%;
				.content{
					padding-left: 15px;
					.leftDiv{
						width: 100%;
					}
					.rightDiv{
						display: none;
					}
				}
			}
		}
	}
</style>