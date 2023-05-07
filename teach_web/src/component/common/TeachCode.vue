<template>
  <div data-teachcode-box class="common_width">
      <el-row :class="{'center': list.length <= 2}">
				<el-col v-for="(item,index) in list" :key="index"
	        :xs="24" 
	        :sm="list.length % 3 ==  0 ? 8 : 12" 
	        :md="list.length % 3 ==  0 ? 8 : 6" 
	        :lg="list.length % 3 ==  0 ? 8 : 6" >
					<div class="datalist" @click="detail(item)">
						<div class="title">
							<div>
	            	<img :src="item.imgUrl"/>
	              <p class="datalist_p">{{item.title}}</p>
							</div>
						</div>
						<div class="content">
							<p class="content_title">{{item.title}}</p>
							<p class="datalist_content">{{item.content}}</p> 
						</div>
					</div>
				</el-col>
		</el-row>
  </div>
</template>

<script>
    import Vue from 'vue';
    import {$v,AJAX_ADMIN} from '~/assets/js/const.js';
    import {Row,Col} from 'element-ui';
    Vue.use(Row);
    Vue.use(Col);
    export default{
        data(){
            return{
//              SRC_URL:SRC_URL,
                list:[],
                listImg: [
				        	{"imgUrl": require("../../assets/img/code_one.png")},
				        	{"imgUrl": require("../../assets/img/code_two.png")},
				        	{"imgUrl": require("../../assets/img/code_three.png")},
				        	{"imgUrl": require("../../assets/img/code_two.png")},
				        	{"imgUrl": require("../../assets/img/code_three.png")},
				        	{"imgUrl": require("../../assets/img/code_one.png")},
				        	{"imgUrl": require("../../assets/img/code_three.png")},
				        	{"imgUrl": require("../../assets/img/code_two.png")},
				        	{"imgUrl": require("../../assets/img/code_one.png")},
				        ],
            }
        },
        methods:{
            detail:function(item){
//          	window.location.href = url;
							this.$router.push({path: '/teCodeItem',query:{obj:JSON.stringify(item)}});
            }
        },
        mounted(){
        	let url = AJAX_ADMIN + '/tecode/getData';
					$v.get(url, (d) => {
						this.list = d.data;
						//给接口的数据对象依次添加图片，(index%3)决定依次插入图片属性。
						this.list.map((item,index)=>{
							Object.assign(item,this.listImg[(index%9)])
						})
					});
        }
    }
</script>

<style lang="scss">
    @import '~/assets/css/response';
    div[data-teachcode-box]{
		padding-bottom: 70px;
		.el-row.center {
			text-align: center;
			.el-col {
				float: none;
				display: inline-block;
			}
		}
		.el-col {
			cursor: pointer;
			padding: 15px;
			.datalist {
				overflow: hidden;
				background-color: #FFFFFF;
				height: 240px;
				width: 100%;
				border: 1px solid #e9eef4;
				border-radius: 5px;
				text-align: center;
				box-sizing: border-box;
				&:nth-child(4n) {
					margin-right: 0;
				}
				.title {
					transition: all .4s linear;
					transform: translateY(0);
					padding: 20px;
					height: 100%;
					box-sizing: border-box;
					display: flex;
					justify-content: center;
					align-items: center;
					img {
						max-height: 100px;
						max-width: 100%;
						/* 按比例放置图片*/
						object-fit: contain;
					}
					.datalist_p {
						font-size: 16px;
						color: #444444;
						padding-top: 20px;
					}
					
				}
				.content {
					transition: all .4s linear;
					transform: translateY(0);
					height: 100%;
					.content_title {
						font-size: 16px;
						font-weight: bold;
                        padding: 30px;
					}
					.datalist_content {
						// padding: 0 20px;
						height: 110px;
						line-height: 2;
						color: #aaafaf;
						overflow: hidden;
						text-overflow: ellipsis;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 4;
						display: -webkit-box;
					}
				}
				&:hover {
					border: 1px solid #f2535c;
					.title {
						transform: translateY(-100%);
					}
					.content {
						transform: translateY(-100%);
					}
				}
			}
		}



		@include media-lg(){
			.datalist_content {
				padding: 0 20px;
			}
		}


		@include media-md(){
			.datalist_content {
				padding: 0 20px;
			}
		}


		@include media-sm(){
			.datalist_content {
				padding: 0 20px;
			}			
		}



		@include media-xs(){
			.datalist_content {
				padding: 30px 20px;
		    height: 90px !important;
			}			
		}
    }
</style>

