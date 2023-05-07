<template>
	<div data-courseoutline-box>
		<div class="logo">
			<div class="imgDiv">
				<img src="../../assets/img/outline_ico.png" />
			</div>
			<span class="title">课程大纲</span>
		</div>
		<div class="content">
			<!--<div class="imgDiv">
				<img src="../../assets/img/outline_banner1.jpg" />
			</div>-->
			<span class="title">{{data.courseName}}</span>
			<span class="title titleEn">{{data.courseNameEn}}</span>
			<div class="item">
				<span class="name">课程代码：</span><span class="cntent">{{data.courseCode}}</span>
			</div>
			<div class="item">
				<div class="leftDiv"><span class="name">学时数：</span><span class="cntent">{{data.period}}</span></div>
				<div class="rightDiv"><span class="name">学分数：</span><span class="cntent">{{data.credit}}</span></div>
			</div>
			<div class="item">
				<div class="leftDiv"><span class="name">执笔人：</span><span class="cntent">{{data.penner}}</span></div>
				<div class="rightDiv rightDivTwo"><span class="name">讨论参加人：</span><span class="cntent">{{data.discussants}}</span></div>
			</div>
			<div class="item">
				<span class="name">审核人：</span><span class="cntent">{{data.auditor}}</span>
			</div>
			<div class="item">
				<span class="more" @click="goMore()">查看详情>></span>
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import {$v, srcUrl, AJAX_ADMIN, TIPS_TIEM, DateFormat} from '~/assets/js/const.js';
	export default {
		data(){
			return{
				data: {},
			}
		},
		methods: {
			goMore(){
				this.$router.push({path: '/couOutline'})
			}
		},
		mounted(){
			let url = AJAX_ADMIN + '/outline/getData';
			$v.get(url, (d) => {
				this.data = d.data[0];
			});
		}
	}
</script>

<style lang="scss">
	@import '~/assets/css/response.scss';
	div[data-courseoutline-box]{
		width: 40%;
		background: rgba(63, 81, 181, 0.18);
	    padding-top: 20px;
	    border-radius: 30px;
		.logo{
		    display: flex;
    		align-items: center;
		    margin-left: 20px;
		    .imgDiv{
	    	    width: 32px;
    			height: 32px;
		    }
		    .title{
		    	margin-left: 10px;
	    	    font-size: 18px;
    	        border-bottom: 2px solid #4CAF50;
    	        width: 20%;
    	        line-height: 32px;
		    }
		}
		.content{
		    margin: 20px 0px;
		    /*.imgDiv{
		    	width: 90%;
		    	margin: auto;
		    	>img{
		    		width: 100%;
		    	}
		    }*/
			.title{
				display: block;
				width: 80%;
    			margin: auto;
				text-align: center;
				padding: 10px 0px;
				font-size: 16px;
				white-space: nowrap;
			    overflow: hidden;
			    text-overflow: ellipsis;
			}
			.titleEn{
				width: 85%;
	    	    padding-top: 0px;
		    }
			.item{
			    width: 90%;
			    margin: 15px auto;
			    display: flex;
			    align-items: center;
				>span{
					line-height: 20px;
    				font-size: 14px;
    				/*white-space: nowrap;
			    	overflow: hidden;
			    	text-overflow: ellipsis;*/
				}
				.name{
					color: #4CAF50;
				    width: 70px;
				}
				.more{
					width: 100%;
					text-align: right;
   					padding-right: 15px;
					&:hover{
						color: red;
					    cursor: pointer;
					}
				}
				.leftDiv{
					width: 60%;
				    display: flex;
    				align-items: center;
					.name{
					    width: 70px;
    					display: inline-block;
					}
					.cntent{
					    width: calc(100% - 60px);
    					display: inline-block;
						white-space: nowrap;
				    	overflow: hidden;
				    	text-overflow: ellipsis;
					}
				}
				.rightDiv{
					width: 40%;
					padding-left: 10px;
					display: flex;
    				align-items: center;
    				
				}
				.rightDivTwo{
					.name{
						width: 85px;
					}
					.cntent{
						width: calc(100% - 85px);
    					display: inline-block;
						white-space: nowrap;
				    	overflow: hidden;
				    	text-overflow: ellipsis;
    				}
				}
			}   
		}
		@include media-sm(){
			.logo .title{
    	        width: 30%;
    	    }
    	    
		}
		@include media-xs(){
		 	width: 95%;
    		margin: auto !important;
		 	.logo .title{
    	        width: 40%;
    	    }
		 	.content .item .more{
		 		padding-right: 20px;
		 		padding-bottom: 10px;
		 	}
		}
	}
</style>