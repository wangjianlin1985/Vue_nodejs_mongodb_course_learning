<template>
	<!--教学课件-->
	<div data-teachcourseware-box>
		<div class="common_width">
			<div class="prodnamediv">
				<el-row >
			        <el-col 
			        :xs="12" 
			        :sm="12" 
			        :md="6"
			        :lg="6"
			         v-for="(item,index) in list" :key="index" class="item_list">
			        <div class="item_content" id="product_man_pc">
			        	<img :src="item.imgUrl" class="imgurllgimg">
			        	<p class="titlep">{{ item.title }}</p>
			            	<el-button id="product_man_button" @click="download(item)">{{item.btnText }}</el-button>
			        </div>
			        <div class="item_content" @click="download(item)" id="product_man_app">
			        	<img :src="item.imgUrl" class="imgurllgimg">
			        	<p class="titlep">{{ item.title }}</p>
			        </div>
			        </el-col>
		    	</el-row>
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import {$v, pdfUrl,AJAX_ADMIN, TIPS_TIEM, DateFormat} from '~/assets/js/const.js';
//	import { AJAX_CMS, SRC_URL } from '~cms/js/common/const';
//	import { $v, } from '~cms/js/common/public';
	import {Button,Row,Col} from 'element-ui';
    Vue.use(Button);
    Vue.use(Row);
    Vue.use(Col);
	export default {
		data() {
			return {
				pdfUrl: pdfUrl,
		        list: [],
		        listImg:[
		        	{"imgUrl": require("../../assets/img/pdf_one.jpg")},
//		        	{"imgUrl": require("../../assets/img/pdf_two.jpg")},
//		        	{"imgUrl": require("../../assets/img/pdf_three.jpg")},
		        	{"imgUrl": require("../../assets/img/ppt_one.png")},
		        ],
		        btnText: '',
			}
		},
		mounted() {
			let url = AJAX_ADMIN + '/courseware/getData';
			$v.get(url, (d) => {
				this.list = d.data;
				//给接口的数据对象依次添加图片，(index%3)决定依次插入图片属性。
//				this.list.map((item,index)=>{
//					Object.assign(item,this.listImg[(index%3)])
//				})
				//按钮文字
				this.list.map((item)=>{
					if(item.contentUrl.indexOf("pdf") != -1){
						item.btnText = '查看pdf详情';
						item.imgUrl = this.listImg[0].imgUrl;
					} else {
						item.btnText = '下载ppt文件';
						item.imgUrl = this.listImg[1].imgUrl;
					}
				})
			});
		},
		methods: {
			download (item){
				let pdfUrl = this.pdfUrl + item.contentUrl;
				window.open(pdfUrl);
			}
		}
	}
</script>

<style lang="scss">
	@import '~/assets/css/response';
	div[data-teachcourseware-box]{
		.common_width{
			padding-top: 40px;
			text-align: center;
			.prodnamediv{
				.manualname{
					font-family:"PingFangSC-Regular";
					font-size: 18px;
					line-height: 25px;
					color: #444958;
					margin-bottom: 30px;
				}
			}
			.el-col{
				margin-bottom: 30px 20px;
				margin: 0 auto;
	            padding:20px 0;
	            &:nth-child(4n) {
	                margin-right: 0;
	            }
				.item_content{
					width: 100%;
					text-align: center;
					margin-bottom: 50px;
				}
				.item_content:hover{
					box-shadow:0 0 20px #eee;
				}
				.item_content:hover >img{
				    transform: scale(1.1);
    				transition: all 0.6s;
				}
				.el-button{
					width: 120px;
					height: 36px;
					padding:2px;
					margin-bottom: 25px;
				}
				.titlep{
				    cursor: default;
					font-family: "PingFangSC-Medium";
					font-size: 14px;
					line-height: 20px;
					color: #444958;
					margin-bottom: 21px;
				}


			}
		}

		@include media-lg(){
			#product_man_app {
				display: none;
			}
			#product_man_pc {
				display: block;
				.imgurllgimg{
					width: 150px;
					height: 200px;
					margin-bottom: 20.4px;
					margin-top: 25px;
				}
			}
		}
		@include media-md(){
			#product_man_app {
				display: none;
			}
			#product_man_pc {
				display: block;
				.imgurllgimg{
					width: 150px;
					height: 200px;
					margin-bottom: 20.4px;
					margin-top: 25px;
				}
			}
		}
		@include media-sm(){
        	#product_man_app {
				display: block;
				.imgurllgimg{
					width: 150px;
					height: 200px;
					margin-bottom: 20.4px;
					margin-top: 25px;
				}
			}
			#product_man_pc {
				display: none;
			}
		}
		@media  screen and (max-width: 320px){
			.item_content{
				height: 280px;
				margin-bottom: 0;
			}


		}
		@include media-xs{
        	#product_man_app {
				display: block;
				.imgurllgimg{
					width: 75%;
					margin-bottom: 20.4px;
					margin-top: 25px;
				}
			}
			#product_man_pc {
				display: none;
			}
        }
	}
</style>



