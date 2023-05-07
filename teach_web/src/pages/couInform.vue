<template>
	<!--课程通知-->
	<div data-couinform-box>
		<TeachBanner :modelChild = "modelFather"></TeachBanner>
		<div class="couinformDiv">
			<el-collapse v-model="activeName" class="collapseFather" accordion >
			  	<el-collapse-item v-for="(item , index) in list" :title="item.title" :name="index + 1"  :key="index" >
			  		<div class="contentAll">
			  			<div class="content">
			  				<span class="left">发布时间：</span>
			  				<span class="right">{{item.timel}}</span>
			  			</div>
			  			<div class="content">
			  				<span class="left contentLeft">内容：</span>
			  				<span class="right contentRight">{{item.content}}</span>
			  			</div>
			  			<div class="content">
			  				<span class="left">发布人：</span>
			  				<span class="right">{{item.publisher}}</span>
			  			</div>
			  		</div>
			  	</el-collapse-item>
			</el-collapse>
		</div>
		<Footer></Footer>
        <Copyright></Copyright>
	</div>
</template>

<script>
	import Vue from 'vue';
	import TeachBanner from '~/component/common/TeachBanner';
	import Footer from '~/component/common/Footer';
    import Copyright from '~/component/common/Copyright';
    
    import {Collapse,CollapseItem} from 'element-ui';
    Vue.use(Collapse);
	Vue.use(CollapseItem);
    
    import {$v, srcUrl, AJAX_ADMIN, TIPS_TIEM, DateFormat} from '~/assets/js/const.js';
    
	export default {
		components:{
			TeachBanner,
			Footer,
       		Copyright,
		},
		data(){
			return{
				list: [],
				activeName: '',//默认没有当前激活
				itemClass: 'ds',
				modelFather: {
					srcUrl: require('../assets/img/banner_inform.jpg'),
					title: '课程通知',
				}
			}
		},
		methods: {
			
		},
		mounted(){
			let url = AJAX_ADMIN + '/inform/getData';
			$v.get(url, (d) => {
				this.list = d.data;
			});
		},
	}
</script>

<style lang="scss">
	@import '~/assets/css/response.scss';
	div[data-couinform-box]{
		.couinformDiv{
			width: 90%;
		    margin: 40px auto;
			.collapseFather{
				position: relative;
			    border: 2px solid rgba(33, 150, 243, 0.43);
		        border-radius: 25px;
			    padding: 30px;
				.el-collapse-item{
				    border-bottom-color: #ebeef5;
					.el-collapse-item__header{
						border-bottom-color: #ebeef5;
						height: 48px;
	    				line-height: 48px;
	    				font-size: 16px;
					}
					.el-collapse-item__wrap{
						background-color: rgba(158, 158, 158, 0.06);
	    				.el-collapse-item__content{
    					    padding: 20px 15px 15px 20px;
    					    .contentAll{
    					    	.content{
					    		    padding: 5px 0px;
					    		    &:hover{
				    		    	    background-color: rgba(158, 158, 158, 0.04);
					    		    }
					    		    &:hover .left{
				    		    	    color: rgba(0, 8, 255, 0.98);
					    		    }
					    		    &:nth-child(2){
					    		    	padding: 10px 0px;
					    		    }
    					    		>span{
						    		        font-size: 16px;
										    line-height: 22px;
										    display: inline-block;
	    					    	}
	    					    	.right{
	    					    		padding-left: 5px;
	    					    	}
	    					    	.contentLeft{
	    					    		display: block;
	    					    	}
	    					    	.contentRight{
	    					    		display: block;
	    					    		padding-left: 1em;
    					    		    text-indent: 2em;
	    					    	}
    					    	}
    					    }
	    				}
					}
				}
				.is-active{
					.el-collapse-item__header{
					    color: rgba(0, 8, 255, 0.89);
					}
				}
			}
		}
		@include media-xs(){
			.couinformDiv{
			    width: 92%;
			    margin-bottom: 20px;
			    .collapseFather{
		    	    padding: 15px;
		    	    .el-collapse-item{
		    	    	.el-collapse-item__wrap{
		    	    		.el-collapse-item__content{
		    	    			padding: 15px 10px 10px 15px;
		    	    		}
		    	    	}
		    	    }
			    }
			}
		}
	}
</style>